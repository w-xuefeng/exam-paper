import { createServer, type IncomingMessage, type ServerResponse } from "http";

export function intlTimeFormat(date?: Date | number, lang = "zh-CN") {
  return new Intl.DateTimeFormat(lang, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(date);
}

export function useLogger(
  prefix: string,
  type: "info" | "log" | "warn" | "error" = "info"
) {
  return (...content: any[]) =>
    console[type](`[${prefix}::${intlTimeFormat(new Date())}]`, ...content);
}

export const Log = useLogger("exam-paper-renderer");

export function createResponse(
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) {
  return {
    json: (data: object, statusCode = 200) => {
      res.statusCode = statusCode;
      res.setHeader("content-type", "application/json;charset=utf-8");
      res.end(JSON.stringify(data));
    },
    html: (html: string, statusCode = 200) => {
      res.statusCode = statusCode;
      res.setHeader("content-type", "text/html;charset=utf-8");
      res.end(html);
    },
    text: (text: string, statusCode = 200) => {
      res.statusCode = statusCode;
      res.setHeader("content-type", "text/plain;charset=utf-8");
      res.end(text);
    },
  };
}

export interface IServerHandle {
  (
    req: IncomingMessage,
    res: ServerResponse<IncomingMessage> & {
      req: IncomingMessage;
    },
    r: ReturnType<typeof createResponse>
  ): Promise<void> | void;
}

export interface IServerMethodHandle {
  GET?: IServerHandle;
  POST?: IServerHandle;
  PUT?: IServerHandle;
  PATCH?: IServerHandle;
  DELETE?: IServerHandle;
  OPTIONS?: IServerHandle;
  HEAD?: IServerHandle;
  TRACE?: IServerHandle;
}

export function readBody<T>(req: IncomingMessage) {
  return new Promise<T>((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      try {
        let parsedData;
        const contentType = req.headers["content-type"];
        if (contentType?.includes("application/json")) {
          parsedData = JSON.parse(body);
        } else if (contentType?.includes("application/x-www-form-urlencoded")) {
          parsedData = Object.fromEntries(new URLSearchParams(body).entries());
        } else {
          parsedData = body;
        }
        resolve(parsedData);
      } catch (error) {
        reject(error);
      }
    });
  });
}

export function serve(
  port: number,
  routes: Record<string, IServerHandle | IServerMethodHandle> = {}
) {
  try {
    createServer(async (req, res) => {
      Log(`[request] ${req.method} ${req.url}`);
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "content-type");
      const routeNames = Object.keys(routes);
      const r = createResponse(res);
      const method = req.method?.toUpperCase();
      const route = routeNames.find((route) => req.url?.startsWith(route));

      if (!route) {
        r.text("404", 404);
        Log(`[response] ${method} ${req.url} ${res.statusCode}`);
        return;
      }
      const serveHandle = routes[route];
      if (typeof serveHandle === "function") {
        await serveHandle(req, res, r);
      } else if (
        typeof serveHandle === "object" &&
        method &&
        method in serveHandle &&
        typeof serveHandle[method as keyof IServerMethodHandle] === "function"
      ) {
        await serveHandle[method as keyof IServerMethodHandle]?.(req, res, r);
      } else {
        r.text("404", 404);
      }
      Log(`[response] ${method} ${req.url} ${res.statusCode}`);
    }).listen(port);
    Log(`The test server start successfully at http://localhost:${port}`);
  } catch (error) {
    Log("serve error", error);
  }
}
