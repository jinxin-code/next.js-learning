import '../index.css'

/**
 * Next.js 13+ App Router 布局组件
 * 
 * 学习要点：
 * 1. RootLayout 是整个应用的根布局组件，位于 app 目录的根级别
 * 2. 它接收一个 children prop，包含所有页面内容
 * 3. 可以通过 export const metadata 定义页面元数据，用于 SEO
 * 4. 布局组件会应用到所有子页面，是共享 UI 的理想位置
 * 5. 根布局必须包含 <html> 和 <body> 标签
 * 
 * Next.js 特性：
 * - 自动代码分割：每个页面只加载必要的代码
 * - 服务端渲染：默认情况下，布局组件在服务端渲染
 * - 流式渲染：支持逐步显示内容，提高用户体验
 */

export const metadata = {
  title: 'User Management System',
  description: 'A user management system built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}