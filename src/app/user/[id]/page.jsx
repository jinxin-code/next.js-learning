import UserDetail from '../../../components/user/UserDetail'

export default function UserDetailPage({ params }) {
  return (
    <div className="app">
      <UserDetail id={params.id} />
    </div>
  )
}