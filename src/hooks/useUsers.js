/**
 * useUsers Hook
 * 管理用户列表的状态和操作
 * 
 * 优化说明：
 * 1. 复用用户相关的业务逻辑
 * 2. 提供统一的状态管理
 * 3. 简化组件代码
 */

import { useState, useEffect, useCallback } from 'react';
import { fetchUsers, updateUser, createUser, deleteUser } from '../services/api';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 加载用户列表
  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err);
      console.error('Error loading users:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 初始化加载用户列表
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  // 更新用户
  const handleUpdateUser = useCallback(async (id, userData) => {
    try {
      const updatedUser = await updateUser(id, userData);
      setUsers(prevUsers => 
        prevUsers.map(user => user.id === id ? updatedUser : user)
      );
      return updatedUser;
    } catch (err) {
      setError(err);
      console.error('Error updating user:', err);
      throw err;
    }
  }, []);

  // 添加用户
  const handleAddUser = useCallback(async (userData) => {
    try {
      const newUser = await createUser(userData);
      setUsers(prevUsers => [...prevUsers, newUser]);
      return newUser;
    } catch (err) {
      setError(err);
      console.error('Error adding user:', err);
      throw err;
    }
  }, []);

  // 删除用户
  const handleDeleteUser = useCallback(async (id) => {
    try {
      await deleteUser(id);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
      return true;
    } catch (err) {
      setError(err);
      console.error('Error deleting user:', err);
      throw err;
    }
  }, []);

  return {
    users,
    loading,
    error,
    loadUsers,
    handleUpdateUser,
    handleAddUser,
    handleDeleteUser
  };
};