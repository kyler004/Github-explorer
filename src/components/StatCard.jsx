import React from "react";

const StatCard = ({ label, value }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-all hover:shadow-lg\">
      <div className="text-gray-400 text-sm mb-2 font-medium\">{label}</div>
      <div className="text-3xl font-bold text-white\">{value}</div>
    </div>
  );
};

export default StatCard;
