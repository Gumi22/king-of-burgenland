import { LucideIcon } from "lucide-react";
import { Card } from "./card";

interface AchievementCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  level: string;
  gradient: string;
}

export default function AchievementCard({ 
  icon: Icon, 
  title, 
  description, 
  level, 
  gradient 
}: AchievementCardProps) {
  return (
    <Card className="bg-gradient-to-br from-royal-green-400/20 to-royal-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-royal-gold/20 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      <div className="text-center">
        <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
          <Icon className="w-8 h-8 text-royal-purple-900" />
        </div>
        <h3 className="font-royal text-2xl font-bold text-royal-gold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-center">
          <div className="bg-royal-gold/20 px-4 py-2 rounded-full">
            <span className="text-royal-gold font-semibold">{level}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
