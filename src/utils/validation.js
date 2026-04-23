/**
 * 表单验证工具函数
 * 
 * 优化说明：
 * 1. 提供统一的表单验证逻辑
 * 2. 确保数据的有效性和完整性
 * 3. 提高用户体验，防止提交无效数据
 */

/**
 * 验证用户表单数据
 * @param {Object} formData - 表单数据
 * @returns {Object} - 验证错误信息
 */
export const validateUserForm = (formData) => {
  const errors = {};

  // 验证姓名
  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Name is required';
  }

  // 验证用户名
  if (!formData.username || formData.username.trim() === '') {
    errors.username = 'Username is required';
  }

  // 验证邮箱
  if (!formData.email || formData.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }

  return errors;
};