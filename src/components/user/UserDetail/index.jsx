/**
 * UserDetail组件 - 用户详情页面
 * 
 * 优化说明：
 * 1. 使用自定义Hook管理状态和业务逻辑
 * 2. 提高代码可维护性和可读性
 */

import { useParams, Link } from 'react-router-dom';
import { useUserDetail } from '../../../hooks/useUserDetail';

const UserDetail = () => {
  // 从URL参数中获取用户ID
  const { id } = useParams();

  // 使用自定义Hook管理用户详情数据
  const { user, loading, error } = useUserDetail(id);

  // 加载中的显示状态
  if (loading) {
    return <div className="loading">Loading user details...</div>;
  }

  // 错误状态
  if (error) {
    return <div className="error">Error loading user details: {error.message}</div>;
  }

  // 用户不存在的显示状态
  if (!user) {
    return <div className="error">User not found</div>;
  }

  return (
    <div className="user-detail">
      <Link to="/" className="back-btn">Back to List</Link>
      <h1>User Details</h1>
      <div className="detail-card">
        {/* 基本信息 */}
        <h2>{user.name}</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        
        {/* 地址信息 - 嵌套对象访问 */}
        <div className="address">
          <h3>Address</h3>
          <p><strong>Street:</strong> {user.address.street}</p>
          <p><strong>Suite:</strong> {user.address.suite}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
          <p><strong>Geo:</strong> Lat {user.address.geo.lat}, Lng {user.address.geo.lng}</p>
        </div>
        
        {/* 公司信息 */}
        <div className="company">
          <h3>Company</h3>
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>BS:</strong> {user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;