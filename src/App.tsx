import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function App() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-gray-900 flex items-center justify-center overflow-hidden relative">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-lime-400 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 10px rgba(190, 242, 100, 0.8)',
          }}
        />
      ))}

      <div className="text-center z-10 px-4">
        <div className="mb-8 flex justify-center">
          <Sparkles className="w-24 h-24 text-lime-400 animate-pulse-glow" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-lime-400 to-purple-400 animate-gradient-x">
          Congratulations
        </h1>

        <div className="text-5xl md:text-7xl font-extrabold mb-8 relative">
          <span className="text-lime-400 animate-glow-pulse">
            AAA PUZZLE DONE
          </span>
          <div className="absolute inset-0 blur-xl bg-lime-400 opacity-50 animate-glow-pulse" />
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <div className="w-3 h-3 rounded-full bg-lime-400 animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-3 h-3 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-3 h-3 rounded-full bg-lime-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent pointer-events-none" />
    </div>
  );
}

export default App;
