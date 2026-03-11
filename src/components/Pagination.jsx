import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, loading }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-3 py-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || loading}
        className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 disabled:from-gray-900 disabled:to-gray-900 disabled:cursor-not-allowed disabled:text-gray-600 text-white rounded-lg transition-all border border-gray-700 disabled:border-gray-800 hover:shadow-lg"
      >
        Previous
      </button>
      <span className="px-6 py-2 text-gray-300 font-medium bg-gray-800/50 rounded-lg border border-gray-700/50">
        Page <span className="text-blue-400 font-bold">{currentPage}</span> of{" "}
        <span className="text-blue-400 font-bold">{totalPages}</span>
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
        className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 disabled:from-gray-900 disabled:to-gray-900 disabled:cursor-not-allowed disabled:text-gray-600 text-white rounded-lg transition-all border border-gray-700 disabled:border-gray-800 hover:shadow-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
