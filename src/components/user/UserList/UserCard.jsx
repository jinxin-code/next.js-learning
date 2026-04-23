/**
 * UserCard组件
 * 显示单个用户的信息和操作按钮
 * 
 * 优化说明：
 * 1. 组件化设计，提高代码复用性
 * 2. 独立管理单个用户卡片的UI逻辑
 */

import Link from 'next/link';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <div className="card-buttons">
        <Link href={`/user/${user.id}`} className="view-btn">View Details</Link>
        <button onClick={() => onEdit(user)} className="edit-btn">Edit</button>
        <button onClick={() => onDelete(user.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default UserCard;