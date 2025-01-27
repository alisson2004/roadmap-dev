import { useState } from 'react';
import { FaSpotify } from 'react-icons/fa';

const SpotifyPlayer = () => {
  const [showMusicPlayer, setShowMusicPlayer] = useState(true);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setShowMusicPlayer(!showMusicPlayer)}
        className="bg-green-600 p-4 rounded-full text-white shadow-lg"
      >
        <FaSpotify size={32} />
      </button>
      {showMusicPlayer && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-2 p-4 w-64">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/4BRXb3PvWe9DVzJMZOEh3M?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default SpotifyPlayer;
