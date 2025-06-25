
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { ToolRoutes } from './routes/ToolRoutes';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';
import AdBanner from './components/AdBanner';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4 bg-gray-50 dark:bg-gray-900 dark:text-white">
            <AdBanner />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {ToolRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
