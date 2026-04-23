import UserDetail from '../../../components/user/UserDetail'

/**
 * Next.js 13+ App Router 动态路由页面组件
 * 
 * 学习要点：
 * 1. 动态路由：使用方括号 [] 表示动态路由参数
 *    - app/user/[id]/page.jsx 对应路径 /user/1, /user/2 等
 * 2. 页面组件接收 params prop，包含动态路由参数
 *    - params.id 可以获取 URL 中的 id 值
 * 3. 动态路由页面默认是服务端渲染的
 *    - 可以使用 getServerSideProps 或 getStaticProps 进行数据预取
 * 
 * Next.js 特性：
 * - 动态路由：支持通过文件系统定义动态路由
 * - 自动路由生成：根据目录结构自动生成路由
 * - 路由参数：通过 params prop 访问动态路由参数
 */

export default function UserDetailPage({ params }) {
  return (
    <div className="app">
      <UserDetail id={params.id} />
    </div>
  )
}