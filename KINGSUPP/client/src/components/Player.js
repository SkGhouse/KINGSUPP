import React, { useState } from 'react';
import {
  PlayIcon,
  PauseIcon,
  RewindIcon,
  FastForwardIcon,
  VolumeUpIcon,
} from '@heroicons/react/solid';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  return (
    <div className="bg-devil-dark border-t border-devil-red p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Album cover"
            className="w-12 h-12 rounded glow-effect"
          />
          <div>
            <h3 className="text-sm font-medium text-devil-red">Song Title</h3>
            <p className="text-xs text-gray-400">Artist Name</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-devil-light transition-colors">
            <RewindIcon className="h-6 w-6" />
          </button>
          <button
            className="bg-devil-red rounded-full p-2 hover:bg-devil-light transition-colors glow-effect"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? (
              <PauseIcon className="h-6 w-6 text-devil-dark" />
            ) : (
              <PlayIcon className="h-6 w-6 text-devil-dark" />
            )}
          </button>
          <button className="text-gray-400 hover:text-devil-light transition-colors">
            <FastForwardIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <VolumeUpIcon className="h-5 w-5 text-devil-red" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="w-24 accent-devil-red"
          />
        </div>
      </div>
    </div>
  );
}

export default Player; 