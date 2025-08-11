import { Crown, Music, Tractor, Beer, Mountain, Heart, Medal, Headphones, Download, Play, Volume2 } from "lucide-react";
import { SiSoundcloud, SiSpotify, SiApplemusic, SiYoutube, SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import MusicPlayer from "@/components/ui/music-player";
import AchievementCard from "@/components/ui/achievement-card";
import { useEffect, useState } from "react";

const achievements = [
  {
    icon: Tractor,
    title: "Fährt Traktor",
    description: "Meisterhaft auf den Feldern des Burgenlandes unterwegs",
    level: "Legendär",
    gradient: "from-royal-gold to-royal-green-400"
  },
  {
    icon: Beer,
    title: "Trinkt Bier in unter 3 Sekunden",
    description: "Unschlagbarer Rekordhalter im schnellen Biertrinken",
    level: "Weltrekord",
    gradient: "from-royal-gold to-royal-purple-500"
  },
  {
    icon: Music,
    title: "Volksmusik Virtuose",
    description: "Spielt jedes österreichische Volkslied perfekt",
    level: "Meister",
    gradient: "from-royal-green-400 to-royal-gold"
  },
  {
    icon: Mountain,
    title: "Alpen Eroberer",
    description: "Hat schon jeden Hügel im Burgenland bezwungen",
    level: "Held",
    gradient: "from-royal-purple-500 to-royal-gold"
  },
  {
    icon: Volume2,
    title: "Party König",
    description: "Bringt jede Dorffest-Party zum Kochen",
    level: "Legende",
    gradient: "from-royal-gold to-royal-green-400"
  },
  {
    icon: Heart,
    title: "Herz aus Gold",
    description: "Hilft jedem Nachbarn in der Not",
    level: "Saint",
    gradient: "from-royal-green-400 to-royal-purple-500"
  }
];

const streamingPlatforms = [
  {
    name: "SoundCloud",
    icon: SiSoundcloud,
    color: "from-orange-500 to-orange-600",
    hoverColor: "hover:from-orange-600 hover:to-orange-700",
    url: "#"
  },
  {
    name: "Spotify",
    icon: SiSpotify,
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700",
    url: "#"
  },
  {
    name: "Apple Music",
    icon: SiApplemusic,
    color: "from-gray-800 to-gray-900",
    hoverColor: "hover:from-gray-700 hover:to-gray-800",
    url: "#"
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    color: "from-red-600 to-red-700",
    hoverColor: "hover:from-red-700 hover:to-red-800",
    url: "#"
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="relative z-50 bg-gradient-to-r from-royal-purple-900 to-royal-green-700 shadow-2xl">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-royal-gold rounded-full flex items-center justify-center">
              <Crown className="text-royal-purple-900 w-5 h-5" />
            </div>
            <span className="font-royal text-xl font-bold text-royal-gold">Andrelele</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('music')}
              className="hover:text-royal-gold transition-colors"
            >
              Musik
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="hover:text-royal-gold transition-colors"
            >
              Erfolge
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="hover:text-royal-gold transition-colors"
            >
              Download
            </button>
          </div>
          <Button variant="ghost" className="md:hidden text-royal-gold">
            <span className="sr-only">Menu</span>
            ☰
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="music" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
            alt="Austrian countryside landscape" 
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-royal-purple-900/80 via-royal-purple-700/60 to-royal-green-700/80"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Single Artwork */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <Card className="w-80 h-80 bg-gradient-to-br from-royal-gold via-royal-green-400 to-royal-purple-500 rounded-2xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 border-0">
                  <div className="text-center">
                    <Crown className="w-16 h-16 text-white mb-4 mx-auto" />
                    <div className="font-royal text-2xl font-bold text-white">KÖNIG</div>
                    <div className="font-royal text-lg text-white/90">VOM BURGENLAND</div>
                  </div>
                </Card>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 text-royal-purple-900 ml-0.5" />
                </div>
              </div>
            </div>

            {/* Title and Artist */}
            <h1 className="font-royal text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-royal-gold via-royal-green-400 to-royal-purple-500 bg-clip-text text-transparent">
              König vom Burgenland
            </h1>
            <h2 className="font-royal text-2xl md:text-3xl font-semibold text-royal-gold mb-8">
              Artist Andrelele
            </h2>

            {/* Music Player */}
            <MusicPlayer />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-royal-green-400 to-royal-green-600 hover:from-royal-green-500 hover:to-royal-green-700 px-8 py-4 rounded-full font-semibold text-white shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                size="lg"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <SiSoundcloud className="w-5 h-5" />
                  <span>Auf SoundCloud hören</span>
                </a>
              </Button>
              <Button 
                asChild
                className="bg-gradient-to-r from-royal-purple-500 to-royal-purple-700 hover:from-royal-purple-600 hover:to-royal-purple-800 px-8 py-4 rounded-full font-semibold text-white shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                size="lg"
              >
                <a href="/audio/test.mp3" download="König vom Burgenland - Artist Andrelele.mp3">
                  <Download className="w-5 h-5" />
                  <span>Direkt downloaden</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-b from-royal-purple-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-royal text-4xl md:text-5xl font-bold mb-4 text-royal-gold flex items-center justify-center gap-4">
              <Medal className="w-8 h-8" />
              Königliche Erfolge
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Die legendären Fähigkeiten, die Artist Andrelele zum wahren König vom Burgenland machen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                icon={achievement.icon}
                title={achievement.title}
                description={achievement.description}
                level={achievement.level}
                gradient={achievement.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Section */}
      <section id="download" className="py-20 bg-gradient-to-b from-gray-900 to-royal-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-royal text-4xl md:text-5xl font-bold mb-8 text-royal-gold flex items-center justify-center gap-4">
              <Headphones className="w-8 h-8" />
              Jetzt anhören
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Erlebe "König vom Burgenland" auf deiner Lieblings-Plattform oder lade es direkt herunter
            </p>

            {/* Streaming Platforms */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {streamingPlatforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <Button
                    key={index}
                    asChild
                    className={`bg-gradient-to-br ${platform.color} ${platform.hoverColor} p-6 h-auto rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg flex flex-col items-center gap-3`}
                  >
                    <a href={platform.url}>
                      <IconComponent className="w-8 h-8 text-white" />
                      <div className="font-semibold text-white">{platform.name}</div>
                    </a>
                  </Button>
                );
              })}
            </div>

            {/* Direct Download */}
            <Card className="bg-gradient-to-br from-royal-green-400/20 to-royal-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-royal-gold/20">
              <h3 className="font-royal text-2xl font-bold text-royal-gold mb-4 flex items-center justify-center gap-3">
                <Download className="w-6 h-6" />
                Direkter Download
              </h3>
              <p className="text-gray-300 mb-6">Lade "König vom Burgenland" in höchster Qualität herunter</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-gradient-to-r from-royal-green-400 to-royal-green-600 hover:from-royal-green-500 hover:to-royal-green-700 px-8 py-4 rounded-full font-semibold text-white shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <a href="/audio/test.mp3" download="König vom Burgenland - Artist Andrelele.mp3">
                    <Music className="w-5 h-5" />
                    <span>MP3 (320kbps)</span>
                  </a>
                </Button>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-royal-purple-500 to-royal-purple-700 hover:from-royal-purple-600 hover:to-royal-purple-800 px-8 py-4 rounded-full font-semibold text-white shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <a href="/audio/test.mp3" download="König vom Burgenland - Artist Andrelele - FLAC.mp3">
                    <Crown className="w-5 h-5" />
                    <span>FLAC (Lossless)</span>
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-royal-purple-900 to-royal-green-700 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Artist Branding */}
            <div className="flex justify-center items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
                <Crown className="text-royal-purple-900 w-6 h-6" />
              </div>
              <span className="font-royal text-2xl font-bold text-royal-gold">Artist Andrelele</span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-royal-gold hover:text-white text-2xl transition-colors">
                <SiInstagram />
              </a>
              <a href="#" className="text-royal-gold hover:text-white text-2xl transition-colors">
                <SiFacebook />
              </a>
              <a href="#" className="text-royal-gold hover:text-white text-2xl transition-colors">
                <SiTiktok />
              </a>
              <a href="#" className="text-royal-gold hover:text-white text-2xl transition-colors">
                <SiSoundcloud />
              </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-royal-gold/30 pt-6">
              <p className="text-gray-300">
                © 2024 Artist Andrelele. Alle Rechte vorbehalten. 
                <span className="text-royal-gold"> König vom Burgenland</span> - Ein königliches Meisterwerk.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
