/**
 * useUserDetail Hook
 * 管理单个用户详情的状态和操作
 * 
 * 优化说明：
 * 1. 复用用户详情相关的业务逻辑
 * 2. 提供统一的状态管理
 * 3. 简化组件代码
 */

import { useState, useEffect, useCallback } from 'react';
import { fetchUserDetail } from '../services/api';

export const useUserDetail = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 加载用户详情
  const loadUserDetail = useCallback(async (id) => {
    if (!id) return;

    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserDetail(id);
      setUser(data);
    } catch (err) {
      setError(err);
      console.error('Error loading user detail:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // 当userId变化时，重新加载用户详情
  useEffect(() => {
    loadUserDetail(userId);
  }, [userId, loadUserDetail]);

  return {
    user,
    loading,
    error,
    loadUserDetail
  };
};