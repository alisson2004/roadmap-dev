interface SpotifyPlayerProps {
  playlist: string;
}

const SpotifyPlayer = ({ playlist }: SpotifyPlayerProps) => {
  const playlists: Record<"Nu jazz" | "Jazz/lofi hi hop radio chill beats to relax/study" | "Lofi Brasileiro" | "Anime", string> = {
    "Nu jazz": "https://open.spotify.com/embed/playlist/4BRXb3PvWe9DVzJMZOEh3M?utm_source=generator",
    "Jazz/lofi hi hop radio chill beats to relax/study": "https://open.spotify.com/embed/playlist/5clqcIWc4LAua1EqOojVPc?utm_source=generator",
    "Lofi Brasileiro": "https://open.spotify.com/embed/playlist/7K3scENpOi7ZPZUHfnfic3?utm_source=generator",
    "Anime": "https://open.spotify.com/embed/playlist/1j6c4bUHg0jLRRGrUmEPzf?utm_source=generator",
  }

  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={playlists[playlist as keyof typeof playlists]}
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )
}

export default SpotifyPlayer