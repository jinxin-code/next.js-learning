'use client';

/**
 * useUserDetail Hook
 * 管理用户详情数据
 * 
 * 优化说明：
 * 1. 封装用户详情数据管理逻辑
 * 2. 使用useCallback缓存函数，避免不必要的重渲染
 * 3. 统一错误处理和加载状态管理
 */

import { useState, useEffect, useCallback } from 'react';
import { fetchUserDetail } from '../services/api';

export const useUserDetail = (userId) => {
  // 用户详情状态
  const [user, setUser] = useState(null);
  // 加载状态
  const [loading, setLoading] = useState(true);
  // 错误状态
  const [error, setError] = useState(null);

  // 当userId变化时，重新加载用户详情
  useEffect(() => {
    if (userId) {
      loadUserDetail();
    }
  }, [userId]);

  // 加载用户详情
  const loadUserDetail = useCallback(async () => {
    if (!userId) return;

    try {
      setLoading(true);
      setError(null);
      const data = await fetchUserDetail(userId);
      setUser(data);
    } catch (err) {
      setError(err);
      console.error('Error loading user detail:', err);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  return {
    user,
    loading,
    error,
    loadUserDetail
  };
};