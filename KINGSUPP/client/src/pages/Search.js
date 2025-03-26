import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement actual search functionality
    // For now, we'll just show some dummy results
    setSearchResults([
      { id: 1, title: 'Song One', artist: 'Artist One', image: 'https://via.placeholder.com/100' },
      { id: 2, title: 'Song Two', artist: 'Artist Two', image: 'https://via.placeholder.com/100' },
      { id: 3, title: 'Song Three', artist: 'Artist Three', image: 'https://via.placeholder.com/100' },
    ]);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search for songs, artists, or albums..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-800 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <SearchIcon className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
      </form>

      {searchResults.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {searchResults.map((result) => (
              <div key={result.id} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full aspect-square object-cover rounded-md mb-3"
                />
                <h3 className="font-medium">{result.title}</h3>
                <p className="text-sm text-gray-400">{result.artist}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search; 