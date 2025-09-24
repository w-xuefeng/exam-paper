# 考卷项目

[English](README.md) | 简体中文

这是一个用于构建、渲染和管理考卷的 monorepo 项目。它提供了一个从数据结构定义、富文本编辑器创建到最终渲染展示的完整解决方案。

## ✨ 特性

- **Monorepo 架构**: 使用 `pnpm` workspaces 来管理包之间的依赖和关系。
- **结构化数据**: 一个专门的包 (`@exam-paper/structure`) 用于定义考卷、问题和答案的核心数据模型。
- **富文本内容编辑器**: 一个基于 Vue.js 3 和 Vite 构建的强大的考卷编辑器。
- **可定制的渲染器**: 一个灵活的渲染器 (`@exam-paper/renderer`)，用于根据结构化数据展示考卷。
- **现代技术栈**: 使用 TypeScript、Vue.js 和 Vite 构建，提供快速可靠的开发体验。

## 📦 包（Packages）

这个 monorepo 包含以下几个包：

| 包 | 描述 |
| :--- | :--- |
| [`packages/editor`](./packages/editor/) | 一个基于 Vue.js 的富文本编辑器，用于创建和编辑考卷。 |
| [`packages/renderer`](./packages/renderer/) | 一个负责将考卷结构渲染成 HTML 和 CSS 的库。 |
| [`packages/structure`](./packages/structure/) | 定义了整个应用程序的 TypeScript 类型和数据模型。 |

## 🛠️ 技术栈

- **构建工具**: [Vite](https://vitejs.dev/) / [Rolldown](https://rolldown.rs/)
- **框架**: [Vue.js 3](https://vuejs.org/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **包管理器**: [pnpm](https://pnpm.io/)
- **样式**: [Less](https://lesscss.org/)

## 🚀 快速开始

### 环境准备

- [Node.js](https://nodejs.org/en/) (建议 v18 或更高版本)
- [pnpm](https://pnpm.io/installation)

### 1. 克隆仓库

```bash
git clone <your-repository-url>
cd exam-paper
```

### 2. 安装依赖

在项目根目录安装所有依赖。

```bash
pnpm install
```

### 3. 运行编辑器

启动 `editor` 包的开发服务器：

```bash
pnpm --filter editor dev
```

这会启动考卷编辑器，通常可以在 `http://localhost:5173` 访问。

### 4. 构建项目

你可以从根目录或在每个包内运行构建命令来为生产环境构建包。例如，构建 `@exam-paper/renderer`：

```bash
pnpm --filter @exam-paper/renderer build
```
