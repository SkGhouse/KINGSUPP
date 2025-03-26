import React from 'react';

function Home() {
  const featuredPlaylists = [
    { id: 1, title: 'Hell\'s Greatest Hits', image: 'https://via.placeholder.com/200' },
    { id: 2, title: 'Satan\'s Symphony', image: 'https://via.placeholder.com/200' },
    { id: 3, title: 'Inferno Mix', image: 'https://via.placeholder.com/200' },
    { id: 4, title: 'Demon\'s Playlist', image: 'https://via.placeholder.com/200' },
  ];

  const recentlyPlayed = [
    { id: 1, title: 'Hellfire', artist: 'Devil\'s Band', image: 'https://via.placeholder.com/100' },
    { id: 2, title: 'Soul Burner', artist: 'Infernal Artists', image: 'https://via.placeholder.com/100' },
    { id: 3, title: 'Demon\'s Dance', artist: 'Hell\'s Orchestra', image: 'https://via.placeholder.com/100' },
    { id: 4, title: 'Satan\'s Song', artist: 'The Dark Ones', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-devil-red">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredPlaylists.map((playlist) => (
            <div key={playlist.id} className="bg-devil-gray p-4 rounded-lg hover-devildark transition-all duration-300 glow-effect">
              <img
                src={playlist.image}
                alt={playlist.title}
                className="w-full aspect-square object-cover rounded-md mb-3"
              />
              <h3 className="font-medium text-devil-red">{playlist.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-devil-red">Recently Played</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recentlyPlayed.map((song) => (
            <div key={song.id} className="bg-devil-gray p-4 rounded-lg hover-devildark transition-all duration-300 glow-effect">
              <img
                src={song.image}
                alt={song.title}
                className="w-full aspect-square object-cover rounded-md mb-3"
              />
              <h3 className="font-medium text-devil-red">{song.title}</h3>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home; 