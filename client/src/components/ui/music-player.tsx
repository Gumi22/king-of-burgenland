import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement actual audio playback
  };

  return (
    <Card className="bg-black/50 backdrop-blur-lg rounded-2xl p-6 mb-8 max-w-md mx-auto border border-royal-gold/20">
      <div className="flex items-center space-x-4">
        <Button
          onClick={togglePlay}
          className="w-16 h-16 bg-gradient-to-r from-royal-green-400 to-royal-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-0 p-0"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-0.5" />
          )}
        </Button>
        <div className="flex-1">
          <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-royal-green-400 to-royal-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
