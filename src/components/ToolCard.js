
import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ tool }) => {
  const name = tool.path.split('/').pop().replace(/-/g, ' ');
  return (
    <Link to={tool.path} className="p-4 bg-white dark:bg-gray-800 rounded shadow hover:shadow-md transition">
      <div className="text-lg font-semibold capitalize">{name}</div>
    </Link>
  );
};

export default ToolCard;
