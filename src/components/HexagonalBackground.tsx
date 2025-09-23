import { Lock } from 'lucide-react';

export default function HexagonalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Network connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
        {/* Connection lines */}
        <g stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.6">
          <line x1="100" y1="200" x2="300" y2="150" />
          <line x1="300" y1="150" x2="500" y2="250" />
          <line x1="500" y1="250" x2="700" y2="200" />
          <line x1="700" y1="200" x2="900" y2="300" />
          <line x1="200" y1="400" x2="400" y2="350" />
          <line x1="400" y1="350" x2="600" y2="450" />
          <line x1="600" y1="450" x2="800" y2="400" />
          <line x1="150" y1="600" x2="350" y2="550" />
          <line x1="350" y1="550" x2="550" y2="650" />
          <line x1="550" y1="650" x2="750" y2="600" />
          
          {/* Vertical connections */}
          <line x1="300" y1="150" x2="200" y2="400" />
          <line x1="500" y1="250" x2="400" y2="350" />
          <line x1="700" y1="200" x2="600" y2="450" />
          <line x1="400" y1="350" x2="350" y2="550" />
          <line x1="600" y1="450" x2="550" y2="650" />
        </g>
        
        {/* Connection nodes */}
        <g fill="#0ea5e9" opacity="0.8">
          <circle cx="100" cy="200" r="4" />
          <circle cx="300" cy="150" r="4" />
          <circle cx="500" cy="250" r="4" />
          <circle cx="700" cy="200" r="4" />
          <circle cx="900" cy="300" r="4" />
          <circle cx="200" cy="400" r="4" />
          <circle cx="400" cy="350" r="4" />
          <circle cx="600" cy="450" r="4" />
          <circle cx="800" cy="400" r="4" />
          <circle cx="150" cy="600" r="4" />
          <circle cx="350" cy="550" r="4" />
          <circle cx="550" cy="650" r="4" />
          <circle cx="750" cy="600" r="4" />
        </g>
      </svg>

      {/* Hexagonal shapes with locks */}
      <div className="absolute top-20 right-20 opacity-60">
        <div className="relative">
          <svg width="120" height="140" viewBox="0 0 120 140">
            <polygon 
              points="60,10 100,35 100,85 60,110 20,85 20,35" 
              fill="none" 
              stroke="#0ea5e9" 
              strokeWidth="2"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Lock className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </div>

      <div className="absolute top-60 right-60 opacity-40">
        <div className="relative">
          <svg width="80" height="92" viewBox="0 0 80 92">
            <polygon 
              points="40,6 68,23 68,57 40,74 12,57 12,23" 
              fill="none" 
              stroke="#0ea5e9" 
              strokeWidth="2"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Lock className="w-5 h-5 text-cyan-400" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-40 right-40 opacity-50">
        <div className="relative">
          <svg width="100" height="116" viewBox="0 0 100 116">
            <polygon 
              points="50,8 83,28 83,68 50,88 17,68 17,28" 
              fill="none" 
              stroke="#0ea5e9" 
              strokeWidth="2"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Lock className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Additional hexagons on the left side */}
      <div className="absolute top-40 left-20 opacity-30">
        <div className="relative">
          <svg width="90" height="104" viewBox="0 0 90 104">
            <polygon 
              points="45,7 74,26 74,64 45,83 16,64 16,26" 
              fill="none" 
              stroke="#0ea5e9" 
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-60 left-40 opacity-35">
        <div className="relative">
          <svg width="70" height="81" viewBox="0 0 70 81">
            <polygon 
              points="35,6 59,21 59,51 35,66 11,51 11,21" 
              fill="none" 
              stroke="#0ea5e9" 
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <polygon 
            points="100,20 170,60 170,140 100,180 30,140 30,60" 
            fill="none" 
            stroke="#0ea5e9" 
            strokeWidth="1"
          />
          <polygon 
            points="100,40 150,70 150,130 100,160 50,130 50,70" 
            fill="none" 
            stroke="#0ea5e9" 
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}