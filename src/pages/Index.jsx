// src/pages/Index.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IoSparklesSharp } from 'react-icons/io5'; 
import { BsSuitHeartFill } from "react-icons/bs";

// Unit data with FaStar for all units. 
// 'pos' object updated for Leo constellation layout.
// Sickle stars (1-5) adjusted to "project more to the right".
// y: top to bottom (0% to 100%), x: left to right (0% to 100%)
const diaryUnits = [
  // Sickle/Head part of Leo - Adjusted X coordinates for stars 1-5
  { id: 1, koreanTitle: "자기소개", englishTitle: "Self Introduction", path: "/unit1", Icon: FaStar, starSize: "text-4xl md:text-5xl", color: "text-bitna-light-pink", tooltipBg: "bg-gray-800", pos: { y: 50, x: 73} }, // Eta Leonis (η) equivalent (was x: 78)
  { id: 2, koreanTitle: "일상생활", englishTitle: "Daily Life", path: "/unit2", Icon: FaStar, starSize: "text-4xl md:text-5xl", color: "text-bitna-lime-green", tooltipBg: "bg-gray-800", pos: { y: 27, x: 62 } }, // Gamma Leonis (γ - Algieba) equivalent (was x: 70)
  { id: 3, koreanTitle: "위치", englishTitle: "Location", path: "/unit3", Icon: FaStar, starSize: "text-5xl md:text-6xl", color: "text-white", tooltipBg: "bg-gray-800", pos: { y: 10, x: 64} }, // Zeta Leonis (ζ - Adhafera) equivalent (Top of sickle) (was x: 65)
  { id: 4, koreanTitle: "물건 사기 1", englishTitle: "Buying Things 1", path: "/unit4", Icon: FaStar, starSize: "text-4xl md:text-5xl", color: "text-bitna-light-pink", tooltipBg: "bg-gray-800", pos: { y: 0, x: 78 } }, // Mu Leonis (μ - Rasalas) equivalent (was x: 55)
  { id: 5, koreanTitle: "물건 사기 2", englishTitle: "Buying Things 2", path: "/unit5", Icon: FaStar, starSize: "text-5xl md:text-6xl", color: "text-bitna-lime-green", tooltipBg: "bg-gray-800", pos: { y: 20, x: 88 } }, // Epsilon Leonis (ε - Algenubi) equivalent ("Nose") (was x: 50)
  
  // Body and Tail part of Leo (positions unchanged)
  { id: 6, koreanTitle: "어제 일과", englishTitle: "Yesterday's Routine", path: "/unit6", Icon: FaStar, starSize: "text-4xl md:text-5xl", color: "text-white", tooltipBg: "bg-gray-800", pos: { y: 55, x: 10 } }, // Beta Leonis (β - Denebola) - Tail, far left
  { id: 7, koreanTitle: "날씨", englishTitle: "Weather", path: "/unit7", Icon: FaStar, starSize: "text-5xl md:text-6xl", color: "text-bitna-light-pink", tooltipBg: "bg-gray-800", pos: { y: 20, x: 33 } }, // Delta Leonis (δ - Zosma) equivalent - Top-left of body triangle
  { id: 8, koreanTitle: "시간", englishTitle: "Time", path: "", Icon: FaStar, starSize: "text-4xl md:text-5xl", color: "text-bitna-lime-green", tooltipBg: "bg-gray-800", pos: { y: 52, x: 32 } }, // Theta Leonis (θ - Chertan) equivalent - Mid-body

  // Main star of Leo - Anchor of the sickle (position unchanged)
  { id: 9, koreanTitle: "결론", englishTitle: "Conclusion", path: "/conclusion", Icon: FaStar, starSize: "text-6xl md:text-7xl", color: "text-bitna-light-pink", tooltipBg: "bg-gray-800", pos: { y: 68, x: 79 } }, // Alpha Leonis (α - Regulus) - Bottom-right of sickle
];

// Define connections for Leo constellation (connections remain the same)
const leoConnections = [
  // Sickle / Head (forma de signo de interrogación invertido)
  [9, 1], // Regulus (9) to Eta Leonis eq. (1)
  [1, 2], // Eta Leonis eq. (1) to Gamma Leonis eq. (2)
  [2, 3], // Gamma Leonis eq. (2) to Zeta Leonis eq. (3)
  [3, 4], // Zeta Leonis eq. (3) to Mu Leonis eq. (4)
  [4, 5], // Mu Leonis eq. (4) to Epsilon Leonis eq. (5)

  // Body (cuerpo del león)
  [2, 7], // Gamma Leonis eq. (2) to Zosma eq. (7) - Conecta la hoz con el cuerpo
  [7, 6], // Zosma eq. (7) to Denebola (6) - Lado superior del cuerpo hacia la cola
  [6, 8], // Denebola (6) to Chertan eq. (8) - Desde la cola hacia el cuerpo
  [8, 9]  // Chertan eq. (8) to Regulus (9) - Completa la base del cuerpo
];

function Index() {
  // Helper function to find a unit's position by its ID
  const getUnitPosById = (id) => {
    const unit = diaryUnits.find(u => u.id === id);
    return unit ? unit.pos : null;
  };

  return (
    <div className="min-h-screen w-full bg-bitna-strong-pink flex flex-col items-center justify-center p-4 pt-10 pb-10 overflow-hidden relative">
      {/* Page Title */}
      <div className="text-center mb-8 md:mb-10 z-10">
        <h1 className="text-5xl md:text-7xl text-bitna-light-pink mb-2 flex items-center justify-center font-single-day">
          <BsSuitHeartFill className="mr-3 text-bitna-lime-green" />
          빛나의 별자리 지도
          <BsSuitHeartFill className="ml-3 text-bitna-lime-green" />
        </h1>
      </div>

      {/* Stars Container */}
      <div className="w-full max-w-3xl xl:max-w-4xl h-[350px] md:h-[400px] relative z-10 mb-8">
        {/* SVG for Constellation Lines */}
        <svg 
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{ pointerEvents: 'none' }}
        >
          {leoConnections.map(([id1, id2], index) => {
            const pos1 = getUnitPosById(id1);
            const pos2 = getUnitPosById(id2);

            if (!pos1 || !pos2) return null; // Skip if a star position is not found

            return (
              <line
                key={`line-${id1}-${id2}-${index}`}
                x1={`${pos1.x}%`}
                y1={`${pos1.y}%`}
                x2={`${pos2.x}%`}
                y2={`${pos2.y}%`}
                stroke="rgba(255, 237, 250, 0.5)" // bitna-light-pink with slightly more opacity for lines
                strokeWidth="2.5" // slightly thicker lines for better visibility
                style={{ animation: `fadeInSimple 0.7s ease-out ${index * 0.1 + 0.2}s forwards`, opacity: 0 }}
              />
            );
          })}
        </svg>

        {/* Star Icons (Links) */}
        {diaryUnits.map((unit, index) => {
          const IconComponent = unit.Icon; 
          return (
            <Link
              to={unit.path}
              key={unit.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ease-in-out hover:scale-125 ${unit.color} hover:z-20`}
              style={{ 
                top: `${unit.pos.y}%`, 
                left: `${unit.pos.x}%`,
                animation: `fadeInSimple 0.5s ease-out ${index * 0.08}s forwards`, 
                opacity: 0,
                zIndex: 10 
              }}
            >
              <IconComponent className={`${unit.starSize} group-hover:animate-pulse`} />
              <div 
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 
                            text-xs text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 whitespace-nowrap ${unit.tooltipBg} bg-opacity-90 z-30`}
              >
                {unit.koreanTitle}
                <span className="block text-[10px] text-gray-300">{unit.englishTitle}</span>
              </div>
            </Link>
          );
        })}
      </div>
      
      {/* Small decorative background stars */}
      {[...Array(35)].map((_, i) => ( 
        <IoSparklesSharp
          key={`bg-star-${i}`}
          className="absolute text-bitna-light-pink opacity-30 animate-twinkle" 
          size={Math.random() * 28 + 3} 
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 7}s`, 
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes fadeInSimple {
          to {
            opacity: 1;
          }
        }
        svg line {
           opacity: 0; 
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.7); } 
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-twinkle {
          animation: twinkle 4s infinite ease-in-out; 
        }
      `}</style>
    </div>
  );
}

export default Index;
