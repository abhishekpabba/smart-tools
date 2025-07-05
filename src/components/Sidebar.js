import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToolRoutes } from '../routes/ToolRoutes';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const categories = [...new Set(ToolRoutes.map(t => t.category))];

  const ArrowLeftIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );

  const ArrowRightIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );

  return (
    <aside className={`h-screen bg-white dark:bg-gray-800 border-r transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex items-center justify-between p-4">
        {!collapsed && <span className="font-bold text-xl">Smart Tools</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
        >
          {collapsed ? ArrowRightIcon : ArrowLeftIcon}
        </button>
      </div>

      <div className="overflow-y-auto">
        {categories.map(cat => (
          <div key={cat}>
            {!collapsed && (
              <div className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
                {cat}
              </div>
            )}
            <ul>
              {ToolRoutes.filter(t => t.category === cat).map(route => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm truncate ${
                        isActive
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`
                    }
                    title={route.path.split('/').pop().replace(/-/g, ' ')}
                  >
                    {collapsed ? '•' : route.path.split('/').pop().replace(/-/g, ' ')}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};
