# Exam Paper Project

English | [简体中文](README_zh-CN.md)

This is a monorepo for building, rendering, and managing exam papers. It provides a complete solution from data structure definition to a rich text editor for creation and a renderer for display.

## ✨ Features

- **Monorepo Architecture**: Uses `pnpm` workspaces to manage dependencies and relationships between packages.
- **Structured Data**: A dedicated package (`@exam-paper/structure`) for defining the core data models of exam papers, questions, and answers.
- **Rich Content Editor**: A powerful exam paper editor built with Vue.js 3 and Vite.
- **Customizable Renderer**: A flexible renderer (`@exam-paper/renderer`) to display exam papers from the structured data.
- **Modern Tech Stack**: Built with TypeScript, Vue.js, and Vite for a fast and reliable development experience.

## 📦 Packages

This monorepo contains the following packages:

| Package | Description |
| :--- | :--- |
| [`packages/editor`（WIP）](./packages/editor/) | A Vue.js-based rich text editor for creating and editing exam papers. |
| [`packages/renderer`](./packages/renderer/) | A library responsible for rendering the exam paper structure into HTML and CSS. |
| [`packages/structure`](./packages/structure/) | Defines the TypeScript types and data models for the entire application. |

## 🛠️ Tech Stack

- **Build Tool**: [Vite](https://vitejs.dev/) / [Rolldown](https://rolldown.rs/)
- **Framework**: [Vue.js 3](https://vuejs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Styling**: [Less](https://lesscss.org/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/installation)

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd exam-paper
```

### 2. Install dependencies

Install all dependencies from the root of the project.

```bash
pnpm install
```

### 3. Run the Editor

To start the development server for the `editor` package:

```bash
pnpm --filter editor dev
```

This will launch the exam paper editor, typically available at `http://localhost:5173`.
