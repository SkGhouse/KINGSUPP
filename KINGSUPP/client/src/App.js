import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Playlist from './pages/Playlist';
import Player from './components/Player';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playlist/:id" element={<Playlist />} />
          </Routes>
        </main>
        <Player />
      </div>
    </Router>
  );
}

export default App; 