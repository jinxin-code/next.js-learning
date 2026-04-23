/**
 * ErrorBoundary组件
 * 捕获子组件的错误，防止整个应用崩溃
 * 
 * 优化说明：
 * 1. 提供全局错误处理机制
 * 2. 向用户展示友好的错误信息
 * 3. 提高应用的稳定性和用户体验
 */

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // 更新状态，下次渲染时显示错误UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // 记录错误信息
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // 自定义错误UI
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We're sorry, but something unexpected happened. Please try again later.</p>
          <div className="error-details">
            <h3>Error Details:</h3>
            <p>{this.state.error?.toString()}</p>
            {this.state.errorInfo && (
              <details>
                <summary>Component Stack</summary>
                <pre>{this.state.errorInfo.componentStack}</pre>
              </details>
            )}
          </div>
          <button 
            onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
            className="retry-button"
          >
            Try Again
          </button>
        </div>
      );
    }

    // 正常渲染子组件
    return this.props.children;
  }
}

export default ErrorBoundary;