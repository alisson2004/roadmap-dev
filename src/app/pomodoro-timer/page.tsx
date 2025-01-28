"use client"

import { useState, useEffect, useRef } from "react"
import { Settings, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { SettingsDialog } from "@/components/settings-dialog"
import SpotifyPlayer from "@/components/ui/spotifyPlayers2"

export default function PomodoroTimer() {
  const [mode, setMode] = useState<"study" | "relax">("study")
  const [timeLeft, setTimeLeft] = useState(50 * 60) 
  const [isActive, setIsActive] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [settings, setSettings] = useState<{
    theme: "light" | "dark"
    notifications: boolean
    spotify: boolean
    playlist: string
    studyTime: number
    relaxTime: number
  }>({
    theme: "light",
    notifications: false,
    spotify: false,
    playlist: "Nu jazz",
    studyTime: 50,
    relaxTime: 15,
  })

  const audioRef = useRef<HTMLAudioElement>(null)

  const playlists: Record<"Nu jazz" | "Jazz/lofi hi hop radio chill beats to relax/study" | "Lofi Brasileiro" | "Anime", string> = {
    "Nu jazz": "https://open.spotify.com/embed/playlist/4BRXb3PvWe9DVzJMZOEh3M?utm_source=generator",
    "Jazz/lofi hi hop radio chill beats to relax/study": "https://open.spotify.com/embed/playlist/5clqcIWc4LAua1EqOojVPc?utm_source=generator",
    "Lofi Brasileiro": "https://open.spotify.com/embed/playlist/7K3scENpOi7ZPZUHfnfic3?utm_source=generator",
    "Anime": "https://open.spotify.com/embed/playlist/1j6c4bUHg0jLRRGrUmEPzf?utm_source=generator",
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0 && isActive) { 
      setIsActive(false)
      if (settings.notifications) {
        new Notification("Timer Complete!", {
          body: `Your ${mode} session is complete!`,
        })
      }

      if (audioRef.current) {
        audioRef.current.play()
      }
    }

    return () => clearInterval(interval)
  }, [isActive, timeLeft, mode, settings.notifications])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleReset = () => {
    setTimeLeft(mode === "study" ? settings.studyTime * 60 : settings.relaxTime * 60)
    setIsActive(false)

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const handleResetAll = () => {
    setSettings({
      theme: "light",
      notifications: false,
      spotify: false,
      playlist: "Nu jazz",
      studyTime: 50,
      relaxTime: 15,
    })
    handleReset()
  }

  const handleModeChange = (newMode: "study" | "relax") => {
    setMode(newMode)
    setTimeLeft(newMode === "study" ? settings.studyTime * 60 : settings.relaxTime * 60)
    setIsActive(false)
  }

  const handleThemeChange = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      theme: prevSettings.theme === "light" ? "dark" : "light",
    }))
  }

  const handleTimeChange = (timeType: "studyTime" | "relaxTime", value: number) => {
    setSettings((prevSettings) => {
      const newSettings = { ...prevSettings, [timeType]: value }
      setTimeLeft(
        mode === "study" ? newSettings.studyTime * 60 : newSettings.relaxTime * 60
      )
      return newSettings
    })
  }

  const handlePlaylistChange = (newPlaylist: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      playlist: newPlaylist,
    }))
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${settings.theme === "dark" ? "bg-[url('https://i.redd.it/b97he1z4jhy61.png')] bg-cover bg-center" : "bg-[url('https://i.redd.it/582l4t026pu41.jpg')] bg-cover bg-center"}`}
    >
      <Card className="w-full max-w-md mx-4 p-6 bg-black/40 backdrop-blur-md text-white">
        <div className="flex justify-center space-x-4 mb-8">
          <Toggle
            pressed={mode === "study"}
            onPressedChange={(pressed) => pressed && handleModeChange("study")}
            className="data-[state=on]:bg-primary"
          >
            🖥️ study
          </Toggle>
          <Toggle
            pressed={mode === "relax"}
            onPressedChange={(pressed) => pressed && handleModeChange("relax")}
            className="data-[state=on]:bg-primary"
          >
            📺 relax
          </Toggle>
        </div>

        <div className="text-center mb-8">
          <div className="text-8xl font-mono font-bold mb-8">{formatTime(timeLeft)}</div>

          <div className="flex justify-center items-center space-x-4">
            <Button size="lg" onClick={() => setIsActive(!isActive)} className="w-24">
              {isActive ? "Pause" : "Start"}
            </Button>

            <Button size="icon" variant="outline" onClick={handleReset} className="border-white/20">
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button size="icon" variant="outline" onClick={() => setSettingsOpen(true)} className="border-white/20">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {settings.spotify && (
          <div className="mt-4 p-4 bg-black/30 rounded-lg">
            <p className="text-sm text-center text-gray-300">Spotify playlist widget:</p>
            <iframe
              style={{ borderRadius: "12px" }}
              src={playlists[settings.playlist as keyof typeof playlists]}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        )}
      </Card>

      <SettingsDialog
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        settings={settings}
        onSettingsChange={setSettings}
        onResetAll={handleResetAll}
        onThemeChange={handleThemeChange}
        onTimeChange={handleTimeChange}
        onPlaylistChange={handlePlaylistChange}
      />
      <SpotifyPlayer playlist={settings.playlist} />

      <audio ref={audioRef} src="/audio/Seigi_No_kari.mp3" preload="auto" />
    </div>
  )
}