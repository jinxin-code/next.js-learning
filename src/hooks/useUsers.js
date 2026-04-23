'use client';

/**
 * useUsers Hook
 * 管理用户列表数据和相关操作
 * 
 * 优化说明：
 * 1. 封装用户数据管理逻辑，提高代码复用性
 * 2. 使用useCallback缓存函数，避免不必要的重渲染
 * 3. 统一错误处理和加载状态管理
 */

import { useState, useEffect, useCallback } from 'react';
import { fetchUsers, updateUser, createUser, deleteUser } from '../services/api';

export const useUsers = () => {
  // 用户列表状态
  const [users, setUsers] = useState([]);
  // 加载状态
  const [loading, setLoading] = useState(true);
  // 错误状态
  const [error, setError] = useState(null);

  // 初始化加载用户数据
  useEffect(() => {
    loadUsers();
  }, []);

  // 加载用户列表
  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err);
      console.error('Error loading users:', err);
    } finally {
      setLoading(false);
    }
  };

  // 更新用户信息
  const handleUpdateUser = useCallback(async (userId, updatedData) => {
    try {
      const updatedUser = await updateUser(userId, updatedData);
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.id === userId ? updatedUser : user
        )
      );
      return updatedUser;
    } catch (err) {
      setError(err);
      console.error('Error updating user:', err);
      throw err;
    }
  }, []);

  // 添加新用户
  const handleAddUser = useCallback(async (newUserData) => {
    try {
      const newUser = await createUser(newUserData);
      setUsers(prevUsers => [...prevUsers, newUser]);
      return newUser;
    } catch (err) {
      setError(err);
      console.error('Error adding user:', err);
      throw err;
    }
  }, []);

  // 删除用户
  const handleDeleteUser = useCallback(async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
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
    handleUpdateUser,
    handleAddUser,
    handleDeleteUser,
    loadUsers
  };
};