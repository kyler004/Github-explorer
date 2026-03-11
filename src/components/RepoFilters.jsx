import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const RepoFilters = ({
  sort,
  order,
  onSortChange,
  onOrderChange,
  disabled,
}) => {
  const selectClass =
    "px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6 justify-center bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
      <div className="flex items-center gap-2">
        <FaSort className="text-gray-400" />
        <label className="text-gray-400 text-sm">Sort by:</label>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          disabled={disabled}
          className={selectClass}
        >
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="updated">Updated</option>
          <option value="help-wanted-issues">Help Wanted</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        {order === "asc" ? (
          <FaSortUp className="text-blue-400" />
        ) : (
          <FaSortDown className="text-blue-400" />
        )}
        <label className="text-gray-400 text-sm">Order:</label>
        <select
          value={order}
          onChange={(e) => onOrderChange(e.target.value)}
          disabled={disabled}
          className={selectClass}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    </div>
  );
};

export default RepoFilters;
