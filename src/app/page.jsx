import UserList from '../components/user/UserList'

/**
 * Next.js 13+ App Router 首页组件
 * 
 * 学习要点：
 * 1. 页面组件位于 app 目录中，文件名对应路由路径
 *    - app/page.jsx 对应根路径 /
 *    - app/user/[id]/page.jsx 对应动态路径 /user/[id]
 * 2. 页面组件默认是 React Server Components (RSC)
 *    - 服务端渲染，提高性能和 SEO
 *    - 不能使用客户端特定的 API，如 window, document
 *    - 如需使用客户端 API，需要添加 'use client' 指令
 * 3. 页面组件接收 params 和 searchParams props
 *    - params: 包含动态路由参数
 *    - searchParams: 包含 URL 查询参数
 * 
 * Next.js 特性：
 * - 静态生成：默认情况下，页面会被静态生成，提高加载速度
 * - 增量静态再生：支持在构建后更新静态页面
 * - 自动优化：Next.js 会自动优化页面加载性能
 */

export default function Home() {
  return (
    <div className="app">
      <UserList />
    </div>
  )
}