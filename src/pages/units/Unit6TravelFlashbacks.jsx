// src/pages/units/Unit6TravelFlashbacks.jsx
import React, { useState } from 'react';
import { 
    FaPlaneDeparture, FaTimes, FaThumbtack, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

// --- PASO 1: Importar los datos desde el archivo separado ---
import travelFlashbacksData from './data/Unit6Data.js'; // Ajusta la ruta si es necesario

// Theme Card Component
const FlashbackThemeCard = ({ theme, onThemeSelect }) => (
  <div 
    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-bitna-strong-pink group"
    onClick={() => onThemeSelect(theme)}
  >
    <div className="relative h-60 w-full">
      <img 
        src={theme.themeImage} 
        alt={theme.themeTitleEspanol} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/CCCCCC/FFFFFF?text=Error"; }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-300"></div>
      {theme.themeIcon && React.createElement(theme.themeIcon, { className: "absolute top-3 right-3 text-3xl text-white opacity-70 group-hover:opacity-100"})}
    </div>
    <div className="p-4">
      <h3 className="font-single-day text-2xl text-bitna-strong-pink truncate">{theme.themeTitleCoreano}</h3>
    </div>
  </div>
);

// Recuerdo Card Component
const RecuerdoCard = ({ recuerdo, onRecuerdoSelect }) => {
  const rotationClass = recuerdo.albumStyle?.rotation || 'transform rotate-0';
  const decorationType = recuerdo.albumStyle?.decoration;

  return (
    <div 
      className={`relative p-2 bg-white rounded-md shadow-lg transform hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group ${rotationClass}`}
      onClick={() => onRecuerdoSelect(recuerdo)}
    >
      {decorationType === 'tape' && (
        <><div className="absolute -top-1 -left-1 w-8 h-4 bg-yellow-300 opacity-70 transform -rotate-45 rounded-sm group-hover:bg-yellow-400"></div><div className="absolute -bottom-1 -right-1 w-8 h-4 bg-yellow-300 opacity-70 transform -rotate-45 rounded-sm group-hover:bg-yellow-400"></div></>
      )}
      {decorationType === 'pin' && (
        <FaThumbtack className="absolute -top-2 -right-2 text-red-500 text-xl transform rotate-12 opacity-80 group-hover:opacity-100"/>
      )}
       {decorationType === 'corner' && (
        <><div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-bitna-lime-green border-r-[20px] border-r-transparent opacity-60 group-hover:opacity-80"></div><div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-bitna-lime-green border-l-[20px] border-l-transparent opacity-60 group-hover:opacity-80"></div></>
      )}
      <img 
        src={recuerdo.image} 
        alt={recuerdo.recuerdoTitleEspanol} 
        className="w-full h-48 object-cover rounded-sm border border-gray-200" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x200/CCCCCC/FFFFFF?text=Error"; }}
      />
      <div className="pt-2 px-1 text-center">
        <h4 className="font-single-day text-md text-bitna-strong-pink truncate">{recuerdo.recuerdoTitleCoreano}</h4>
      </div>
    </div>
  );
};

// Recuerdo Detail Modal
const RecuerdoDetailModal = ({ recuerdo, onClose, onNext, onPrev, currentIndex, totalInTheme }) => {
  if (!recuerdo) return null;

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < totalInTheme - 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-gradient-to-br from-white via-bitna-light-pink to-pink-200 p-4 rounded-2xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col md:flex-row space-x-0 md:space-x-6 relative transform transition-all duration-300 ease-in-out">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white text-bitna-strong-pink rounded-full p-2 shadow-lg hover:bg-gray-200 transition-colors z-20"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>
        
        {/* Left Column for Text */}
        <div className="w-full md:w-1/3 p-4 flex flex-col h-full overflow-y-auto scrollbar-thin scrollbar-thumb-bitna-muted-pink scrollbar-track-bitna-light-pink rounded-lg">
            <h2 className="font-single-day text-3xl md:text-4xl text-bitna-strong-pink mb-2 text-center pt-4">{recuerdo.recuerdoTitleCoreano}</h2>
            <p className="text-center text-xs text-gray-500 mb-6">{currentIndex + 1} of {totalInTheme}</p>
            <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
              <h5 className="font-semibold text-bitna-muted-pink">나의 일기:</h5>
              {recuerdo.narraciones.map((narracion, index) => (
                <p key={index} className="bg-white bg-opacity-50 p-3 rounded-md shadow-sm">
                  <IoSparkles className="inline mr-2 text-yellow-400" /> {narracion}
                </p>
              ))}
            </div>
        </div>

        {/* Right Column for Image */}
        <div className="w-full md:w-2/3 h-full relative flex items-center justify-center p-2">
            {hasPrev && (
                <button 
                    onClick={onPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 bg-white bg-opacity-70 hover:bg-opacity-100 text-bitna-strong-pink p-2 rounded-full shadow-md z-10 transition-all hover:scale-110"
                    aria-label="Recuerdo anterior"
                >
                    <FaChevronLeft size={24}/>
                </button>
            )}
            <img 
              src={recuerdo.image} 
              alt={recuerdo.recuerdoTitleEspanol} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg border-4 border-white"
            />
            {hasNext && (
                 <button 
                    onClick={onNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 bg-white bg-opacity-70 hover:bg-opacity-100 text-bitna-strong-pink p-2 rounded-full shadow-md z-10 transition-all hover:scale-110"
                    aria-label="Siguiente recuerdo"
                >
                    <FaChevronRight size={24}/>
                </button>
            )}
        </div>
      </div>
    </div>
  );
};


function Unit6TravelFlashbacks() {
  const [selectedTheme, setSelectedTheme] = useState(null); 
  const [selectedRecuerdo, setSelectedRecuerdo] = useState(null); 
  const [currentRecuerdoIndex, setCurrentRecuerdoIndex] = useState(0);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setSelectedRecuerdo(null); 
    setCurrentRecuerdoIndex(0); 
  };

  const handleRecuerdoSelect = (recuerdo) => {
    setSelectedRecuerdo(recuerdo);
    if (selectedTheme) {
      const index = selectedTheme.recuerdos.findIndex(r => r.id === recuerdo.id);
      setCurrentRecuerdoIndex(index);
    }
  };

  const handleCloseModal = () => {
    setSelectedRecuerdo(null);
  };

  const handleBackToThemes = () => {
    setSelectedTheme(null);
    setSelectedRecuerdo(null);
  }

  const handleNextRecuerdo = () => {
    if (selectedTheme && currentRecuerdoIndex < selectedTheme.recuerdos.length - 1) {
      const nextIndex = currentRecuerdoIndex + 1;
      setSelectedRecuerdo(selectedTheme.recuerdos[nextIndex]);
      setCurrentRecuerdoIndex(nextIndex);
    }
  };

  const handlePrevRecuerdo = () => {
    if (selectedTheme && currentRecuerdoIndex > 0) {
      const prevIndex = currentRecuerdoIndex - 1;
      setSelectedRecuerdo(selectedTheme.recuerdos[prevIndex]);
      setCurrentRecuerdoIndex(prevIndex);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 py-8 px-4 pt-10">
      <div className="container mx-auto">
        <header className="text-center mb-10 md:mb-12">
          <h1 className="font-single-day text-4xl md:text-6xl text-bitna-strong-pink mb-2 flex items-center justify-center">
            <FaPlaneDeparture className="mr-3 text-bitna-muted-pink text-3xl md:text-5xl transform -rotate-12" />
            빛나의 남아메리카 여행!
            <IoSparkles className="ml-3 text-yellow-400 text-3xl md:text-5xl animate-pulse" />
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            나의 칠레 교환학생 이야기 ✈️🇨🇱🇧🇴🇦🇷
          </p>
        </header>

        {!selectedTheme ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {travelFlashbacksData.map((theme) => (
              <FlashbackThemeCard key={theme.id} theme={theme} onThemeSelect={handleThemeSelect} />
            ))}
          </div>
        ) : (
          <div>
            <button 
              onClick={handleBackToThemes}
              className="mb-8 bg-bitna-muted-pink text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-bitna-strong-pink transition-colors duration-200 flex items-center group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              모든 테마
            </button>
            <h2 className="font-single-day text-3xl md:text-4xl text-bitna-strong-pink mb-8 text-center">
              {selectedTheme.themeTitleCoreano}
            </h2>
            <div className="bg-bitna-light-pink p-4 md:p-6 rounded-2xl shadow-inner border-2 border-bitna-muted-pink">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {selectedTheme.recuerdos.map((recuerdo, index) => (
                  <RecuerdoCard key={recuerdo.id + '-' + index} recuerdo={recuerdo} onRecuerdoSelect={handleRecuerdoSelect} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <RecuerdoDetailModal 
        recuerdo={selectedRecuerdo} 
        onClose={handleCloseModal}
        onNext={handleNextRecuerdo}
        onPrev={handlePrevRecuerdo}
        currentIndex={currentRecuerdoIndex}
        totalInTheme={selectedTheme ? selectedTheme.recuerdos.length : 0}
      />
    </div>
  );
}

export default Unit6TravelFlashbacks;
