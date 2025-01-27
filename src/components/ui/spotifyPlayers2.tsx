import { useState } from 'react';
import { FaSpotify } from 'react-icons/fa';

interface SpotifyPlayerProps {
  playlist: string;
}

const SpotifyPlayer = ({ playlist }: SpotifyPlayerProps) => {
  const [showMusicPlayer, setShowMusicPlayer] = useState(true);

  const playlists: Record<string, string> = {
    "Nu jazz": "https://open.spotify.com/embed/playlist/4BRXb3PvWe9DVzJMZOEh3M?utm_source=generator",
    "Jazz/lofi hi hop radio chill beats to relax/study": "https://open.spotify.com/embed/playlist/5clqcIWc4LAua1EqOojVPc?utm_source=generator",
    "Lofi Brasileiro": "https://open.spotify.com/embed/playlist/7K3scENpOi7ZPZUHfnfic3?utm_source=generator",
    "Anime": "https://open.spotify.com/embed/playlist/1j6c4bUHg0jLRRGrUmEPzf?utm_source=generator",
  };

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
            src={playlists[playlist]}
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
};

export default SpotifyPlayer;
