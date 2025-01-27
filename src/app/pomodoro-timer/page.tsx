"use client"

import { useState, useEffect } from "react"
import { Settings, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { SettingsDialog } from "@/components/settings-dialog"
import SpotifyPlayer from "@/components/ui/spotifyPlayers2" // Adicionando o import

export default function PomodoroTimer() {
  const [mode, setMode] = useState<"study" | "relax">("study")
  const [timeLeft, setTimeLeft] = useState(50 * 60) // Default to 50 minutes for study mode
  const [isActive, setIsActive] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [settings, setSettings] = useState<{
    theme: "light" | "dark" // Corrigido para aceitar apenas esses dois valores
    notifications: boolean
    spotify: boolean
    playlist: string
    studyTime: number
    relaxTime: number
  }>({
    theme: "light", // Inicializando com um valor válido
    notifications: false,
    spotify: false,
    playlist: "Nu jazz", // Define a playlist padrão
    studyTime: 50, // default study time in minutes
    relaxTime: 15, // default relax time in minutes
  })

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
    } else if (timeLeft === 0) {
      setIsActive(false)
      if (settings.notifications) {
        new Notification("Timer Complete!", {
          body: `Your ${mode} session is complete!`,
        })
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
  }

  const handleResetAll = () => {
    setSettings({
      theme: "light", // Resetando para o valor "light"
      notifications: false,
      spotify: false,
      playlist: "Nu jazz", // Resetar a playlist para a padrão
      studyTime: 50,
      relaxTime: 15,
    })
    handleReset()
  }

  const handleModeChange = (newMode: "study" | "relax") => {
    setMode(newMode)
    setTimeLeft(newMode === "study" ? settings.studyTime * 60 : settings.relaxTime * 60)
    setIsActive(false) // Pause when mode changes
  }

  const handleThemeChange = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      theme: prevSettings.theme === "light" ? "dark" : "light", // Alternando entre "light" e "dark"
    }))
  }

  const handleTimeChange = (timeType: "studyTime" | "relaxTime", value: number) => {
    setSettings((prevSettings) => {
      const newSettings = { ...prevSettings, [timeType]: value }
      // Atualiza o tempo restante com base nas novas configurações
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
              src={playlists[settings.playlist as keyof typeof playlists]} // Garantindo o tipo correto
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
        onPlaylistChange={handlePlaylistChange} // Passa a função de mudança de playlist
      />
      <SpotifyPlayer playlist={settings.playlist} />

    </div>
  )
}
