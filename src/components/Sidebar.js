
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ToolRoutes } from '../routes/ToolRoutes';

export const Sidebar = () => {
  const categories = [...new Set(ToolRoutes.map(t => t.category))];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r">
      <div className="p-4 font-bold text-xl">Smart Tools</div>
      {categories.map(cat => (
        <div key={cat}>
          <div className="px-4 py-2 text-sm font-semibold">{cat}</div>
          <ul>
            {ToolRoutes.filter(t => t.category === cat).map(route => (
              <li key={route.path}>
                <NavLink to={route.path} className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {route.path.split('/').pop().replace(/-/g, ' ')}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};
