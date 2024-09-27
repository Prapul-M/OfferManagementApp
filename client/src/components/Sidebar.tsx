import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
          </li>
          <li>
            <Link to="/offers" className="block py-2 px-4 rounded hover:bg-gray-700">Offers</Link>
          </li>
          <li>
            <Link to="/analytics" className="block py-2 px-4 rounded hover:bg-gray-700">Analytics</Link>
          </li>
          <li>
            <Link to="/settings" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;