import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        {/* Replace with your actual logo */}
        <img src="/logo.png" alt="Company Logo" className="h-8 w-auto" />
      </div>
      <div className="relative">
        <button 
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span>John Doe</span>
        </button>
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
            <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
            <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;