import { useState, useEffect } from "react"
import { Settings, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Toggle } from "@/components/ui/toggle"
import { SettingsDialog } from "@/components/settings-dialog"
import SpotifyPlayer from "@/components/ui/spotifyPlayer" // Adicionando o import

export default function PomodoroTimer() {
  const [mode, setMode] = useState<"work" | "watch">("work")
  const [timeLeft, setTimeLeft] = useState(50 * 60) // Default to 50 minutes for work mode
  const [isActive, setIsActive] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [settings, setSettings] = useState({
    theme: "default", // "dark" or "default"
    notifications: false,
    spotify: false,
    workTime: 50, // default work time in minutes
    watchTime: 15, // default watch time in minutes
  })

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
    setTimeLeft(mode === "work" ? settings.workTime * 60 : settings.watchTime * 60)
    setIsActive(false)
  }

  const handleResetAll = () => {
    setSettings({
      theme: "default",
      notifications: false,
      spotify: false,
      workTime: 50,
      watchTime: 15,
    })
    handleReset()
  }

  const handleModeChange = (newMode: "work" | "watch") => {
    setMode(newMode)
    setTimeLeft(newMode === "work" ? settings.workTime * 60 : settings.watchTime * 60)
    setIsActive(false) // Pause when mode changes
  }

  const handleThemeChange = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      theme: prevSettings.theme === "default" ? "dark" : "default",
    }))
  }

  const handleTimeChange = (timeType: "workTime" | "watchTime", value: number) => {
    setSettings((prevSettings) => {
      const newSettings = { ...prevSettings, [timeType]: value }
      // Atualiza o tempo restante com base nas novas configurações
      setTimeLeft(
        mode === "work" ? newSettings.workTime * 60 : newSettings.watchTime * 60
      )
      return newSettings
    })
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        settings.theme === "dark"
          ? "bg-[url('https://i.redd.it/b97he1z4jhy61.png')] bg-cover bg-center"
          : "bg-[url('https://i.redd.it/582l4t026pu41.jpg')] bg-cover bg-center"
      }`}
    >
      <Card className="w-full max-w-md mx-4 p-6 bg-black/40 backdrop-blur-md text-white">
        <div className="flex justify-center space-x-4 mb-8">
          <Toggle
            pressed={mode === "work"}
            onPressedChange={(pressed) => pressed && handleModeChange("work")}
            className="data-[state=on]:bg-primary"
          >
            🖥️ Work
          </Toggle>
          <Toggle
            pressed={mode === "watch"}
            onPressedChange={(pressed) => pressed && handleModeChange("watch")}
            className="data-[state=on]:bg-primary"
          >
            📺 Watch
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
            <p className="text-sm text-center text-gray-300">Spotify playlist widget would appear here</p>
            {/* Adicionando o componente SpotifyPlayer */}
            <SpotifyPlayer />
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
      />
    </div>
  )
}
