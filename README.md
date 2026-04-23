# Next.js 用户管理系统 / Next.js User Management System

一个基于 Next.js 13+ App Router 的用户管理应用，演示了 React 和 Next.js 开发的核心概念和最佳实践。
A Next.js 13+ App Router based user management application that demonstrates core React and Next.js concepts and best practices.

---

## 功能特性 / Features

### 1. 用户列表展示 / User List Display

- 以卡片形式展示所有用户 / Display all users as cards
- 每个卡片显示用户的姓名、用户名和邮箱 / Each card shows user's name, username, and email
- 点击"查看详情"跳转到用户详情页面 / Click "View Details" to navigate to user detail page

### 2. 用户详情查看 / User Detail View

- 展示用户的完整信息（姓名、用户名、邮箱、电话、网站）/ Display complete user information
- 显示用户的地址信息 / Show user's address information
- 显示用户的公司信息 / Show user's company information
- 提供"返回列表"按钮 / Provide "Back to List" button

### 3. 用户搜索 / User Search

- 支持按姓名或用户名实时搜索 / Search by name or username in real-time
- 搜索结果即时更新 / Search results update instantly

### 4. 用户筛选 / User Filter

- 按用户名排序 / Sort by username
- 按邮箱排序 / Sort by email
- 一键切换筛选模式 / One-click filter mode switching

### 5. 用户编辑 / User Edit

- 点击"编辑"按钮进入编辑模式 / Click "Edit" to enter edit mode
- 支持修改用户信息 / Modify user information
- 提供"保存"和"取消"按钮 / Provide "Save" and "Cancel" buttons

### 6. 用户新增 / User Add

- 点击"添加新用户"显示新增表单 / Click "Add New User" to show add form
- 填写信息后提交 / Fill in information and submit
- 新用户自动添加到列表 / New user is added to the list

### 7. 用户删除 / User Delete

- 点击"删除"按钮弹出确认框 / Click "Delete" to show confirmation dialog
- 确认后从列表中移除 / User is removed after confirmation

---

## 技术栈 / Tech Stack

- **React 19** - UI 框架 / UI Framework
- **Next.js 16.2.4** - React 框架，提供服务端渲染、路由等功能 / React framework with SSR, routing, etc.
- **Fetch API** - HTTP 请求 / HTTP Requests

---

## React 核心概念 / React Core Concepts

### Hooks

- `useState` - 状态管理 / State management
- `useEffect` - 副作用处理 / Side effect handling
- `useCallback` - 函数缓存，优化性能 / Function caching for performance optimization

### 状态管理 / State Management

- 受控组件 / Controlled Components
- 状态不可变性原则 / Immutability principle
- 条件渲染 / Conditional Rendering
- 列表渲染与 Key 属性 / List Rendering and Key Props

### 异步操作 / Async Operations

- async/await 语法 / async/await syntax
- Fetch API（GET/POST/PUT/DELETE）
- 错误处理 / Error handling

---

## Next.js 核心概念 / Next.js Core Concepts

### App Router

- **文件系统路由** - 基于目录结构自动生成路由 / File system-based routing
- **页面组件** - 位于 `app` 目录中的组件 / Page components in `app` directory
- **布局组件** - 共享 UI 结构，应用于多个页面 / Layout components for shared UI
- **动态路由** - 使用方括号 `[]` 定义动态路由参数 / Dynamic routes with `[]`

### 服务器组件与客户端组件

- **服务器组件** - 默认情况下，页面组件是服务器组件，在服务端渲染 / Server Components (default for pages)
- **客户端组件** - 添加 `'use client'` 指令，在客户端渲染，可使用浏览器 API / Client Components with `'use client'` directive

### 路由导航

- **Link 组件** - 客户端导航，支持预加载 / Client-side navigation with preloading
- **动态路由** - 通过 `params` prop 访问路由参数 / Access route parameters via `params` prop

### 性能优化

- **自动代码分割** - 每个页面只加载必要的代码 / Automatic code splitting
- **静态生成** - 预渲染页面，提高加载速度 / Static generation for faster loading
- **服务端渲染** - 改善 SEO 和首屏加载 / Server-side rendering for better SEO and initial load

---

## 项目结构 / Project Structure

```
react-project/
├── public/              # 静态资源 / Static assets
│   ├── favicon.svg
│   └── icons.svg
├── src/                 # 源代码 / Source code
│   ├── app/             # Next.js App Router 目录 / Next.js App Router directory
│   │   ├── layout.jsx   # 根布局组件 / Root layout component
│   │   ├── page.jsx     # 首页 / Home page
│   │   └── user/        # 用户相关路由 / User-related routes
│   │       └── [id]/    # 动态路由 / Dynamic route
│   │           └── page.jsx  # 用户详情页 / User detail page
│   ├── assets/          # 资源文件 / Asset files
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/      # 组件 / Components
│   │   ├── common/      # 通用组件 / Common components
│   │   │   └── ErrorBoundary.jsx  # 错误边界组件 / Error boundary component
│   │   └── user/        # 用户相关组件 / User-related components
│   │       ├── UserDetail/  # 用户详情组件 / User detail component
│   │       │   └── index.jsx
│   │       └── UserList/    # 用户列表组件 / User list component
│   │           ├── EditForm.jsx      # 编辑表单 / Edit form
│   │           ├── FilterButtons.jsx # 筛选按钮 / Filter buttons
│   │           ├── NewUserForm.jsx   # 新增用户表单 / New user form
│   │           ├── SearchBar.jsx     # 搜索栏 / Search bar
│   │           ├── UserCard.jsx      # 用户卡片 / User card
│   │           └── index.jsx         # 用户列表主组件 / User list main component
│   ├── hooks/           # 自定义 Hooks / Custom hooks
│   │   ├── useUserDetail.js  # 用户详情 Hook / User detail hook
│   │   └── useUsers.js       # 用户列表 Hook / User list hook
│   ├── services/        # API 服务 / API services
│   │   └── api.js       # API 调用封装 / API call utilities
│   ├── utils/           # 工具函数 / Utility functions
│   │   └── validation.js # 表单验证 / Form validation
│   ├── App.css          # 应用样式 / App styles
│   └── index.css        # 全局样式 / Global styles
├── .gitignore           # Git 忽略文件 / Git ignore file
├── eslint.config.js     # ESLint 配置 / ESLint configuration
├── next.config.js       # Next.js 配置 / Next.js configuration
├── package.json         # 项目配置和依赖 / Project config and dependencies
├── package-lock.json    # 依赖版本锁定 / Dependency version lock
└── README.md            # 项目说明 / Project documentation
```

---

## 安装与运行 / Installation & Usage

### 安装依赖 / Install Dependencies

```bash
cd react-project
npm install
```

### 启动开发服务器 / Start Dev Server

```bash
npm run dev
```

访问 http://localhost:3000 查看应用 / Visit http://localhost:3000 to view the application.

### 构建生产版本 / Build for Production

```bash
npm run build
```

构建产物将输出到 `.next` 目录 / Build output will be in the `.next` directory.

### 启动生产服务器 / Start Production Server

```bash
npm start
```

---

## API 数据源 / API Data Source

本项目使用 [JSONPlaceholder](https://jsonplaceholder.typicode.com) 提供的免费 REST API：
This project uses the free REST API from [JSONPlaceholder](https://jsonplaceholder.typicode.com):

- 获取用户列表 / Get users: `GET /users`
- 获取单个用户 / Get single user: `GET /users/:id`
- 创建用户 / Create user: `POST /users`
- 更新用户 / Update user: `PUT /users/:id`
- 删除用户 / Delete user: `DELETE /users/:id`

---

## 学习建议 / Learning Path

1. **从 App Router 结构开始** / **Start with App Router structure** - 了解 Next.js 的文件系统路由 / Learn Next.js file system routing
2. **阅读 layout.jsx** - 学习布局组件的使用 / Learn layout component usage
3. **阅读 page.jsx 文件** - 学习页面组件和动态路由 / Learn page components and dynamic routes
4. **阅读 UserList 组件** - 学习 Hooks 使用、状态管理、事件处理 / Learn Hooks usage, state management, event handling
5. **阅读 UserDetail 组件** - 学习动态路由参数传递 / Learn dynamic route parameter passing
6. **尝试修改代码** / **Try modifying code** - 添加新功能或修改现有功能 / Add new features or modify existing ones
7. **阅读代码注释** / **Read code comments** - 每个关键概念都有详细的中文注释说明 / Each key concept has detailed comments

---

## 项目优化 / Project Optimization

为了提高项目的可维护性、性能和用户体验，对项目进行了以下优化：

### 1. 目录结构优化 / Directory Structure Optimization

- 重新组织目录结构，按功能模块划分
- 创建 `services` 目录，集中管理 API 调用
- 创建 `hooks` 目录，存放自定义 Hooks
- 创建 `utils` 目录，存放工具函数
- 优化组件目录结构，按功能分类

### 2. API 服务层 / API Service Layer

- 实现统一的 API 服务层，分离网络请求逻辑
- 提供统一的错误处理机制
- 简化组件代码，提高可维护性

### 3. 自定义 Hooks / Custom Hooks

- 创建 `useUsers` Hook，管理用户列表的状态和操作
- 创建 `useUserDetail` Hook，管理用户详情的状态和操作
- 复用业务逻辑，提高代码可维护性

### 4. 组件拆分 / Component Splitting

- 将 `UserList` 组件拆分为多个子组件：
  - `SearchBar` - 搜索功能
  - `FilterButtons` - 筛选功能
  - `UserCard` - 用户卡片
  - `EditForm` - 编辑表单
  - `NewUserForm` - 新增用户表单
- 提高组件的复用性和可维护性

### 5. 错误处理 / Error Handling

- 实现 `ErrorBoundary` 组件，捕获子组件的错误
- 提供友好的错误提示界面
- 提高应用的稳定性

### 6. 表单验证 / Form Validation

- 实现表单验证逻辑，确保数据的有效性
- 显示友好的错误提示信息
- 防止提交无效数据

### 7. 用户体验优化 / User Experience Optimization

- 添加加载状态显示
- 添加动画效果，提升视觉体验
- 实现响应式设计，适配不同屏幕尺寸
- 优化按钮和交互元素的样式

### 8. 代码质量 / Code Quality

- 添加详细的代码注释
- 遵循 React 和 Next.js 最佳实践
- 提高代码的可读性和可维护性

---

## 贡献 / Contributing

欢迎提出问题和改进建议！/ Issues and suggestions are welcome!

## 许可证 / License

MIT License