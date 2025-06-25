
import React from 'react';
import { ToolRoutes } from '../routes/ToolRoutes';
import ToolCard from '../components/ToolCard';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {ToolRoutes.map((tool) => (
        <ToolCard key={tool.path} tool={tool} />
      ))}
    </div>
  );
};

export default Dashboard;
