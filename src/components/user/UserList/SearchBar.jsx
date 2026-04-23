/**
 * SearchBar组件
 * 用户搜索功能
 * 
 * 优化说明：
 * 1. 组件化设计，提高代码复用性
 * 2. 独立管理搜索相关的UI逻辑
 */

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or username"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;