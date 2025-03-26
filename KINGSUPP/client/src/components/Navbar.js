import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, SearchIcon, LibraryIcon } from '@heroicons/react/outline';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-devil-red' : 'text-gray-400 hover:text-devil-light';
  };

  return (
    <nav className="bg-devil-dark border-b border-devil-red p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-devil-red hover:text-devil-light transition-colors">
          Devil's Music
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className={`flex items-center space-x-2 ${isActive('/')} hover-devildark p-2 rounded-lg`}>
            <HomeIcon className="h-6 w-6" />
            <span>Home</span>
          </Link>
          <Link to="/search" className={`flex items-center space-x-2 ${isActive('/search')} hover-devildark p-2 rounded-lg`}>
            <SearchIcon className="h-6 w-6" />
            <span>Search</span>
          </Link>
          <Link to="/library" className={`flex items-center space-x-2 ${isActive('/library')} hover-devildark p-2 rounded-lg`}>
            <LibraryIcon className="h-6 w-6" />
            <span>Library</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 