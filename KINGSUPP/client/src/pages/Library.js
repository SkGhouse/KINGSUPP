import React from 'react';

function Library() {
  const playlists = [
    { id: 1, title: 'Hell\'s Greatest Hits', songCount: 25, image: 'https://via.placeholder.com/100' },
    { id: 2, title: 'Satan\'s Symphony', songCount: 15, image: 'https://via.placeholder.com/100' },
    { id: 3, title: 'Inferno Mix', songCount: 30, image: 'https://via.placeholder.com/100' },
    { id: 4, title: 'Demon\'s Playlist', songCount: 20, image: 'https://via.placeholder.com/100' },
  ];

  const savedSongs = [
    { id: 1, title: 'Hellfire', artist: 'Devil\'s Band', duration: '3:45', image: 'https://via.placeholder.com/50' },
    { id: 2, title: 'Soul Burner', artist: 'Infernal Artists', duration: '4:20', image: 'https://via.placeholder.com/50' },
    { id: 3, title: 'Demon\'s Dance', artist: 'Hell\'s Orchestra', duration: '3:15', image: 'https://via.placeholder.com/50' },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-devil-red">Your Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <div key={playlist.id} className="bg-devil-gray p-4 rounded-lg hover-devildark transition-all duration-300 glow-effect">
              <img
                src={playlist.image}
                alt={playlist.title}
                className="w-full aspect-square object-cover rounded-md mb-3"
              />
              <h3 className="font-medium text-devil-red">{playlist.title}</h3>
              <p className="text-sm text-gray-400">{playlist.songCount} songs</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-devil-red">Saved Songs</h2>
        <div className="space-y-2">
          {savedSongs.map((song) => (
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
      </section>
    </div>
  );
}

export default Library; 