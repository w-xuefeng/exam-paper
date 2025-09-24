import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: {
      title: "Editor",
    },
    component: () => import("@/pages/editor/index.vue"),
  },
];
