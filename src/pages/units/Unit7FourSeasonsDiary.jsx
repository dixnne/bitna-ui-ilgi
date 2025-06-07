// src/pages/units/Unit7FourSeasonsDiary.jsx
import React, { useState, useEffect } from 'react';
import { FaSun, FaLeaf, FaSnowflake, FaBookReader } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { GiFlowerEmblem, GiFallingLeaf, GiSunRadiations } from 'react-icons/gi'; 

const seasonsData = [
  {
    id: 'spring',
    koreanName: '봄',
    spanishName: 'Primavera',
    icon: GiFlowerEmblem,
    animatedIcon: GiFlowerEmblem, // Icono para simular animación de fondo
    colors: {
      bg: 'bg-pink-100',
      text: 'text-pink-700',
      accent: 'text-green-500',
      border: 'border-pink-300',
      hoverRing: 'hover:ring-pink-400',
      activeRing: 'ring-pink-500',
      bgGradient: 'from-pink-300 via-pink-200 to-green-200',
    },
    diaryEntry: [
      "봄에는 날씨가 따뜻해요. 그리고 예쁜 꽃들이 많이 펴요. 저는 색깔을 좋아해요."
    ],
    exampleSentence: "봄에는 날씨가 따뜻해요. 그리고 꽃이 많이 펴요. 춥지 않아요."
  },
  {
    id: 'summer',
    koreanName: '여름',
    spanishName: 'Verano',
    icon: FaSun,
    animatedIcon: GiSunRadiations,
    colors: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      accent: 'text-orange-500',
      border: 'border-yellow-300',
      hoverRing: 'hover:ring-yellow-400',
      activeRing: 'ring-yellow-500',
      bgGradient: 'from-yellow-300 via-yellow-200 to-orange-200',
    },
    diaryEntry: [
      "여름에는 해가 아주 강해요. 날씨가 더워요. 싫어요.",
    ],
    exampleSentence: "여름에는 날씨가 더워요. 그리고 해가 아주 강해요. 비는 자주 안 와요."
  },
  {
    id: 'autumn',
    koreanName: '가을',
    spanishName: 'Otoño',
    icon: FaLeaf, 
    animatedIcon: GiFallingLeaf,
    colors: {
      bg: 'bg-orange-100',
      text: 'text-orange-800',
      accent: 'text-red-700',
      border: 'border-orange-300',
      hoverRing: 'hover:ring-orange-400',
      activeRing: 'ring-orange-500',
      bgGradient: 'from-orange-300 via-orange-200 to-yellow-200',
    },
    diaryEntry: [
      "가을이 가장 좋은 계절이에요. 날씨가 추워요. 단풍이 정말 아름다워요. 저는 따뜻한 스웨터를 입어요. 커피를 마셔요."
    ],
    exampleSentence: "가을에는 날씨가 시원해요. 그리고 하늘이 높고 파래요. 춥지 않아요."
  },
  {
    id: 'winter',
    koreanName: '겨울',
    spanishName: 'Invierno',
    icon: FaSnowflake,
    animatedIcon: FaSnowflake,
    colors: {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      accent: 'text-purple-600',
      border: 'border-blue-300',
      hoverRing: 'hover:ring-blue-400',
      activeRing: 'ring-blue-500',
      bgGradient: 'from-blue-300 via-blue-200 to-purple-200',
    },
    diaryEntry: [
      "겨울에는 눈이 안 와요. 슬퍼요. 날씨가 아주 추워요. 저는 크리스마스가 좋아요. "
    ],
    exampleSentence: "겨울에는 눈이 와요. 그리고 아주 추워요. 따뜻하지 않아요."
  },
];

// Season Card Component - Con animaciones de fondo restauradas
const SeasonCard = ({ season, onSeasonSelect, isActive }) => (
  <div
    className={`relative p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center cursor-pointer 
                transform hover:-translate-y-2 transition-all duration-300 ease-in-out 
                aspect-square group overflow-hidden bg-gradient-to-br ${season.colors.bgGradient}
                border-4 ${isActive ? season.colors.activeRing : 'border-transparent'} ${season.colors.hoverRing}`}
    onClick={() => onSeasonSelect(season)}
  >
    {/* Animated background elements */}
    {season.id === 'spring' && (
      <>
        {[...Array(5)].map((_, i) => (
          <GiFlowerEmblem key={i} className={`absolute text-pink-400 opacity-20 text-5xl animate-float`} style={{ animationDelay: `${i * 0.3}s`, top: `${20 + Math.random()*60}%`, left: `${20 + Math.random()*60}%` }}/>
        ))}
      </>
    )}
    {season.id === 'summer' && (
      <GiSunRadiations className={`absolute text-yellow-400 opacity-30 text-9xl animate-spin-slow group-hover:opacity-50`} style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(1.5)'}} />
    )}
    {season.id === 'autumn' && (
       <>
        {[...Array(7)].map((_, i) => (
          <GiFallingLeaf key={i} className={`absolute text-orange-400 opacity-20 group-hover:opacity-30 text-4xl animate-fall`} style={{ animationDelay: `${i * 0.2}s`, left: `${5 + Math.random()*90}%` }}/>
        ))}
      </>
    )}
    {season.id === 'winter' && (
      <>
        {[...Array(10)].map((_, i) => (
          <FaSnowflake key={i} className={`absolute text-white opacity-40 group-hover:opacity-60 text-3xl animate-fall-slow`} style={{ animationDelay: `${i * 0.25}s`, left: `${Math.random()*90}%`, animationDuration: `${3 + Math.random()*3}s` }}/>
        ))}
      </>
    )}

    {/* Clickable Icon and Text */}
    <div className={`relative z-10 flex flex-col items-center justify-center p-4 bg-white bg-opacity-30 group-hover:bg-opacity-50 rounded-full backdrop-blur-sm transition-all duration-300 transform ${isActive ? 'scale-105' : 'group-hover:scale-105'}`}>
      {React.createElement(season.icon, { className: `text-5xl md:text-6xl mb-3 ${season.colors.accent} transition-transform duration-300 ${isActive ? 'scale-110' : ''}` })}
      <h3 className={`font-single-day text-3xl md:text-4xl ${season.colors.text}`}>{season.koreanName}</h3>
      <p className={`text-sm ${season.colors.text} opacity-80`}>{season.spanishName}</p>
    </div>
  </div>
);

// Diary Entry Display Component
const DiaryEntryDisplay = ({ season }) => {
    if (!season) return null;

    return (
        <div className="w-full mt-10 p-6 md:p-8 bg-white rounded-2xl shadow-2xl border-2 border-bitna-light-pink relative animate-fade-in-up">
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 p-3 rounded-full shadow-lg ${season.colors.bg} border-2 ${season.colors.border}`}>
                {React.createElement(season.icon, { className: `text-4xl ${season.colors.accent}`})}
            </div>
            <h3 className={`font-single-day text-4xl pt-8 text-center mb-4 ${season.colors.text}`}>{season.koreanName}에 나의 생각</h3>
            <div className={`mt-6 text-center border-t-2 pt-4 ${season.colors.border} border-dashed`}>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed text-center">
                {season.diaryEntry.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
        </div>
    );
}


function Unit7FourSeasonsDiary() {
  const [activeSeason, setActiveSeason] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  const handleSeasonSelect = (season) => {
    setActiveSeason(prev => (prev && prev.id === season.id ? null : season));
  };
  
  useEffect(() => {
    if (activeSeason) {
      setAnimationKey(prevKey => prevKey + 1);
    }
  }, [activeSeason]);


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-100 via-bitna-lime-green-100 to-bitna-light-pink-200 py-8 px-4 pt-10">
      <div className="container mx-auto">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="font-single-day text-4xl md:text-6xl text-bitna-strong-pink mb-2 flex items-center justify-center">
            <FaBookReader className="mr-3 text-bitna-muted-pink text-3xl md:text-5xl" />
            빛나의 사계절 날씨 일기
            <IoSparkles className="ml-3 text-yellow-400 text-3xl md:text-5xl animate-pulse" />
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            내가 가장 좋아하는 계절을 알아보세요! ☀️🌧️🍂❄️
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {seasonsData.map((season) => (
            <SeasonCard 
              key={season.id} 
              season={season} 
              onSeasonSelect={handleSeasonSelect} 
              isActive={activeSeason?.id === season.id}
            />
          ))}
        </div>

        <div key={animationKey}>
            <DiaryEntryDisplay season={activeSeason} />
        </div>
        
      </div>
      <style jsx global>{`
        @keyframes fadeIn-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeIn-up 0.5s ease-out forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-float { animation: float 4s infinite ease-in-out; }

        @keyframes fall {
          0% { transform: translateY(-100%) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall { animation: fall 6s infinite linear; }
        
        @keyframes fall-slow {
          0% { transform: translateY(-100%) rotate(0deg); opacity: 0; }
          20% { opacity: 0.5; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-fall-slow { animation: fall-slow 8s infinite linear; } 

        .animate-spin-slow { animation: spin 12s linear infinite; }
      `}</style>
    </div>
  );
}

export default Unit7FourSeasonsDiary;
