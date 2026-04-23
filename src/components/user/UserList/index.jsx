'use client';

/**
 * UserList组件 - 用户列表页面
 * 
 * 优化说明：
 * 1. 组件化设计，拆分为多个子组件
 * 2. 使用自定义Hook管理状态和业务逻辑
 * 3. 提高代码可维护性和可读性
 */

import { useState, useEffect } from 'react';
import { useUsers } from '../../../hooks/useUsers';
import { validateUserForm } from '../../../utils/validation';
import SearchBar from './SearchBar';
import FilterButtons from './FilterButtons';
import UserCard from './UserCard';
import EditForm from './EditForm';
import NewUserForm from './NewUserForm';

const UserList = () => {
  // 使用自定义Hook管理用户数据
  const { 
    users, 
    loading, 
    error, 
    handleUpdateUser, 
    handleAddUser, 
    handleDeleteUser 
  } = useUsers();

  // 过滤后的用户列表，用于展示
  const [filteredUsers, setFilteredUsers] = useState([]);
  // 搜索关键词
  const [searchTerm, setSearchTerm] = useState('');
  // 筛选条件：all-全部, username-按用户名排序, email-按邮箱排序
  const [filterBy, setFilterBy] = useState('all');
  // 当前正在编辑的用户ID，null表示没有用户处于编辑状态
  const [editingUser, setEditingUser] = useState(null);
  // 编辑表单的数据
  const [editForm, setEditForm] = useState({ name: '', username: '', email: '' });
  // 编辑表单的错误信息
  const [editFormErrors, setEditFormErrors] = useState({});
  // 新增用户表单的数据
  const [newUserForm, setNewUserForm] = useState({ name: '', username: '', email: '' });
  // 新增用户表单的错误信息
  const [newUserFormErrors, setNewUserFormErrors] = useState({});
  // 控制新增用户表单的显示状态
  const [showNewUserForm, setShowNewUserForm] = useState(false);

  // 当用户数据、搜索词或筛选条件变化时，重新过滤用户列表
  useEffect(() => {
    filterUsers();
  }, [users, searchTerm, filterBy]);

  // 根据搜索词和筛选条件过滤用户列表
  const filterUsers = () => {
    let result = users;

    // 根据搜索词进行过滤
    if (searchTerm) {
      result = result.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 根据筛选条件进行排序
    if (filterBy === 'username') {
      result = result.sort((a, b) => a.username.localeCompare(b.username));
    } else if (filterBy === 'email') {
      result = result.sort((a, b) => a.email.localeCompare(b.email));
    }

    setFilteredUsers(result);
  };

  // 开始编辑用户
  const handleEdit = (user) => {
    setEditingUser(user.id);
    // 设置编辑表单的初始值
    setEditForm({ name: user.name, username: user.username, email: user.email });
  };

  // 保存编辑后的用户信息
  const handleSaveEdit = async () => {
    // 验证表单数据
    const errors = validateUserForm(editForm);
    if (Object.keys(errors).length > 0) {
      setEditFormErrors(errors);
      return;
    }

    try {
      await handleUpdateUser(editingUser, editForm);
      setEditingUser(null);
      setEditFormErrors({});
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // 取消编辑
  const handleCancelEdit = () => {
    setEditingUser(null);
    setEditFormErrors({});
  };

  // 添加新用户
  const handleAdd = async () => {
    // 验证表单数据
    const errors = validateUserForm(newUserForm);
    if (Object.keys(errors).length > 0) {
      setNewUserFormErrors(errors);
      return;
    }

    try {
      await handleAddUser(newUserForm);
      // 重置表单
      setNewUserForm({ name: '', username: '', email: '' });
      setNewUserFormErrors({});
      setShowNewUserForm(false);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // 删除用户
  const handleDelete = async (userId) => {
    // 弹出确认框 - 原生浏览器API
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await handleDeleteUser(userId);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  // 加载状态
  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  // 错误状态
  if (error) {
    return <div className="error">Error loading users: {error.message}</div>;
  }

  return (
    <div className="user-list">
      <h1>User Management</h1>
      
      {/* 搜索和筛选区域 */}
      <div className="search-filter">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterButtons filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>

      {/* 条件渲染：根据showNewUserForm状态显示不同内容 */}
      {showNewUserForm ? (
        <NewUserForm 
          newUserForm={newUserForm}
          setNewUserForm={setNewUserForm}
          errors={newUserFormErrors}
          onAdd={handleAdd}
          onCancel={() => setShowNewUserForm(false)}
        />
      ) : (
        <button className="add-user-btn" onClick={() => setShowNewUserForm(true)}>
          Add New User
        </button>
      )}

      {/* 用户卡片列表 */}
      <div className="user-cards">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            {/* 判断是否处于编辑模式 */}
            {editingUser === user.id ? (
              <EditForm 
                user={user}
                editForm={editForm}
                setEditForm={setEditForm}
                errors={editFormErrors}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
              />
            ) : (
              <UserCard 
                user={user}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;