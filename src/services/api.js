/**
 * API服务层
 * 集中管理所有网络请求，提供统一的接口
 * 
 * 优化说明：
 * 1. 分离网络请求逻辑，使组件代码更简洁
 * 2. 提供统一的错误处理
 * 3. 便于维护和测试
 */

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * 通用请求函数
 * @param {string} endpoint - API端点
 * @param {Object} options - 请求选项
 * @returns {Promise} - 返回请求结果
 */
async function fetchApi(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * 获取用户列表
 * @returns {Promise<Array>} - 用户列表
 */
export const fetchUsers = async () => {
  return fetchApi('/users');
};

/**
 * 获取单个用户详情
 * @param {number} id - 用户ID
 * @returns {Promise<Object>} - 用户详情
 */
export const fetchUserDetail = async (id) => {
  return fetchApi(`/users/${id}`);
};

/**
 * 更新用户信息
 * @param {number} id - 用户ID
 * @param {Object} data - 更新的数据
 * @returns {Promise<Object>} - 更新后的用户信息
 */
export const updateUser = async (id, data) => {
  return fetchApi(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

/**
 * 创建新用户
 * @param {Object} data - 用户数据
 * @returns {Promise<Object>} - 创建的用户信息
 */
export const createUser = async (data) => {
  return fetchApi('/users', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * 删除用户
 * @param {number} id - 用户ID
 * @returns {Promise<Object>} - 删除结果
 */
export const deleteUser = async (id) => {
  return fetchApi(`/users/${id}`, {
    method: 'DELETE',
  });
};