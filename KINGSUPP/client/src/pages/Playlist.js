import React from 'react';
import { useParams } from 'react-router-dom';

function Playlist() {
  const { id } = useParams();

  const playlist = {
    id: 1,
    title: 'Hell\'s Greatest Hits',
    description: 'The most devilish songs ever created',
    image: 'https://via.placeholder.com/300',
    songCount: 20,
    songs: [
      { id: 1, title: 'Hellfire', artist: 'Devil\'s Band', duration: '3:45', image: 'https://via.placeholder.com/50' },
      { id: 2, title: 'Soul Burner', artist: 'Infernal Artists', duration: '4:20', image: 'https://via.placeholder.com/50' },
      { id: 3, title: 'Demon\'s Dance', artist: 'Hell\'s Orchestra', duration: '3:15', image: 'https://via.placeholder.com/50' },
      { id: 4, title: 'Satan\'s Song', artist: 'The Dark Ones', duration: '4:05', image: 'https://via.placeholder.com/50' },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-end space-x-6">
        <img
          src={playlist.image}
          alt={playlist.title}
          className="w-48 h-48 rounded-lg shadow-lg glow-effect"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2 text-devil-red">{playlist.title}</h1>
          <p className="text-gray-400 mb-4">{playlist.description}</p>
          <p className="text-sm text-gray-400">{playlist.songCount} songs</p>
        </div>
      </div>

      <div className="space-y-2">
        {playlist.songs.map((song) => (
          <div
            key={song.id}
            className="flex items-center justify-between bg-devil-gray p-3 rounded-lg hover-devildark transition-all duration-300 glow-effect"
          >
            <div className="flex items-center space-x-4">
              <img
                src={song.image}
                alt={song.title}
                className="w-12 h-12 rounded"
              />
              <div>
                <h3 className="font-medium text-devil-red">{song.title}</h3>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </div>
            <span className="text-gray-400">{song.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlist; 