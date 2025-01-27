import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Definindo o tipo para as configurações
interface Settings {
  theme: "light" | "dark"; 
  notifications: boolean;
  spotify: boolean;
  playlist: string;
  studyTime: number;
  relaxTime: number;
}

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  settings: Settings;
  onSettingsChange: (settings: Settings) => void;
  onResetAll: () => void;
  onThemeChange: (theme: string) => void;
  onTimeChange: (timeType: "studyTime" | "relaxTime", value: number) => void;
  onPlaylistChange: (playlist: string) => void; 
}

export function SettingsDialog({
  open,
  onOpenChange,
  settings,
  onSettingsChange,
  onResetAll,
  onThemeChange,
  onTimeChange,
  onPlaylistChange, 
}: SettingsDialogProps) {

  // Função para escolher as classes de fundo com base no tema
  const themeClasses = settings.theme === "light" ? "bg-light-theme" : "bg-dark-theme";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-[425px] text-white backdrop-blur-md ${themeClasses}`}>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="theme">Select theme:</Label>
            <Select
              value={settings.theme}
              onValueChange={(value: "light" | "dark") => {
                onThemeChange(value);
                onSettingsChange({ ...settings, theme: value });
              }}
            >
              <SelectTrigger className="bg-black/50">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light (Day)</SelectItem>
                <SelectItem value="dark">Dark (Night)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Outras configurações do painel... */}

          <div className="grid gap-2">
            <Label htmlFor="playlist">Select Playlist:</Label>
            <Select
              value={settings.playlist}
              onValueChange={(value) => {
                onPlaylistChange(value); 
                onSettingsChange({ ...settings, playlist: value });
              }}
            >
              <SelectTrigger className="bg-black/50">
                <SelectValue placeholder="Select a playlist" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Nu jazz">Nu jazz</SelectItem>
                <SelectItem value="Jazz/lofi hi hop radio chill beats to relax/study">Jazz/lofi hi hop radio chill beats to relax/study</SelectItem>
                <SelectItem value="Lofi Brasileiro">Lofi Brasileiro</SelectItem>
                <SelectItem value="Anime">Anime</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="studyTime">study Time (minutes)</Label>
            <input
              type="number"
              id="studyTime"
              value={settings.studyTime}
              onChange={(e) => onTimeChange("studyTime", parseInt(e.target.value))}
              className="p-2 rounded-md bg-black/50 text-white"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="relaxTime">relax Time (minutes)</Label>
            <input
              type="number"
              id="relaxTime"
              value={settings.relaxTime}
              onChange={(e) => onTimeChange("relaxTime", parseInt(e.target.value))}
              className="p-2 rounded-md bg-black/50 text-white"
            />
          </div>
        </div>
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button variant="destructive" onClick={onResetAll}>
            Reset All
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Close
            </Button>
            <Button onClick={() => onOpenChange(false)}>Save changes</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
