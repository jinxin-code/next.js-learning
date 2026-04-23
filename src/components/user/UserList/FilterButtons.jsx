/**
 * FilterButtons组件
 * 用户筛选功能
 * 
 * 优化说明：
 * 1. 组件化设计，提高代码复用性
 * 2. 独立管理筛选相关的UI逻辑
 */

const FilterButtons = ({ filterBy, setFilterBy }) => {
  return (
    <div className="filter-buttons">
      <button 
        className={filterBy === 'all' ? 'active' : ''}
        onClick={() => setFilterBy('all')}
      >
        All
      </button>
      <button 
        className={filterBy === 'username' ? 'active' : ''}
        onClick={() => setFilterBy('username')}
      >
        By Username
      </button>
      <button 
        className={filterBy === 'email' ? 'active' : ''}
        onClick={() => setFilterBy('email')}
      >
        By Email
      </button>
    </div>
  );
};

export default FilterButtons;