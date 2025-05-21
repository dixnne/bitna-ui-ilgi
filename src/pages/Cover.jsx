// src/pages/Cover.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Importa tu imagen desde la carpeta assets
import characterImage from '../assets/stgo-heart.jpg';

// Importa los iconos de react-icons
import { FaHeart } from 'react-icons/fa';
import { BsStars, BsChatQuoteFill } from 'react-icons/bs';
import { RiSparkling2Fill } from "react-icons/ri";

// Importa los componentes adicionales
import CreativeEnergyBar from '../components/CreativeEnergyBar'; // Asegúrate que la ruta sea correcta
import ColorPaletteDisplay from '../components/ColorPaletteDisplay'; // Asegúrate que la ruta sea correcta

function Cover() {
  return (
    // Contenedor principal del componente Cover
    // pt-10: Padding superior reducido
    // lg:items-center: Centra verticalmente la tarjeta y la columna de componentes adicionales en pantallas grandes
    <div className="w-full bg-bitna-lime-green bg-opacity-30 flex flex-col lg:flex-row items-center lg:items-center justify-center p-4 pt-10 pb-10 lg:space-x-8 overflow-hidden"> {/* Añadido min-h-screen para asegurar que el fondo verde cubra la pantalla si el contenido es corto */}
      
      {/* Contenedor de la Tarjeta Principal del Cover */}
      {/* max-w-3xl: Ancho horizontal de la tarjeta reducido */}
      <div 
        className="relative bg-white w-full max-w-3xl h-auto md:h-[600px] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border-2 border-bitna-strong-pink mb-8 lg:mb-0" 
      >
        
        {/* Elementos decorativos de fondo DENTRO de la tarjeta blanca */}
        <div className="absolute top-4 left-4 z-0 opacity-80 transform -rotate-12">
          <BsStars className="text-bitna-muted-pink animate-pulse" size={40} />
        </div>
        <div className="absolute bottom-6 right-6 z-0 opacity-50 transform rotate-12 scale-125">
          <RiSparkling2Fill className="text-bitna-lime-green animate-ping duration-1000" size={50} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <span className="font-single-day text-9xl md:text-[120px] text-bitna-light-pink opacity-50">일기</span>
        </div>

        {/* Columna Izquierda de la tarjeta: Imagen del Personaje */}
        <div className="w-full md:w-2/5 h-64 md:h-full bg-bitna-muted-pink flex items-center justify-center p-3 md:p-4 relative overflow-hidden shadow-inner">
          <div className="relative w-full h-full rounded-lg overflow-hidden transform rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group">
            <img 
              src={characterImage} 
              alt="Personaje Bitna" 
              className="object-cover w-full h-full "
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x800/E195AB/FFEDFA?text=Error+cargando+imagen"; }}
            />
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-bitna-lime-green transition-all duration-300 rounded-lg"></div>
            <div className="absolute top-3 left-3 bg-bitna-lime-green text-bitna-strong-pink p-2 rounded-full shadow-md transform -rotate-[15deg]">
              <FaHeart size={20} />
            </div>
             <div className="absolute bottom-3 right-3 bg-white p-1 rounded-md shadow-md transform rotate-[10deg]">
              <span className="font-single-day text-bitna-strong-pink text-sm">빛나!</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha de la tarjeta: Información */}
        <div className="w-full md:w-3/5 h-full p-6 md:p-8 flex flex-col justify-between relative z-10 bg-white bg-opacity-95">
          <div>
            <div className="relative mb-6 inline-block">
              <h1 className="font-single-day text-5xl sm:text-6xl text-bitna-strong-pink py-2 px-4 relative z-10">
                빛나의 일기
              </h1>
              <div className="absolute inset-0 bg-bitna-lime-green transform -skew-y-3 scale-105 z-0 rounded-md shadow-md"></div>
            </div>

            <p className="text-xl sm:text-2xl text-bitna-muted-pink mb-2 font-semibold transform -rotate-1">
              Bitna's Diary
            </p>
            <p className="text-md sm:text-lg text-gray-600 mb-8 transform rotate-1">
              한국어 1 - UAA 대학교
            </p>

            <div className="bg-bitna-light-pink p-4 rounded-lg shadow-lg mb-8 space-y-2 border-2 border-dashed border-bitna-muted-pink transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-bitna-strong-pink">학생:</span>
                <span className="text-sm text-gray-700">디아나 나르바애스</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-bitna-strong-pink">선생님:</span>
                <span className="text-sm text-gray-700">김 마리아</span>
              </div>
            </div>
            
            <div className="relative p-4 border-l-4 border-bitna-strong-pink bg-gray-50 rounded-r-lg mb-8 shadow-md transform rotate-[1.5deg] hover:rotate-0 transition-transform duration-300">
              <BsChatQuoteFill className="absolute -top-3 -left-3 text-bitna-lime-green" size={28}/>
              <p className="text-gray-700 italic text-sm">
                "달빛의 힘으로, 내일도 반짝! 빛나 파워, 메이크업!"
              </p>
            </div>
          </div>

          <div className="text-center mt-auto">
            <Link
              to="/indice"
              className="inline-block bg-bitna-strong-pink text-white font-single-day text-3xl py-3 px-8 rounded-full shadow-xl hover:bg-bitna-muted-pink hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-bitna-lime-green focus:ring-opacity-50 active:scale-95"
            >
              시작!
            </Link>
          </div>
        </div>
      </div>

      {/* Nueva Columna a la Derecha para Componentes Adicionales */}
      {/* lg:justify-center para centrar verticalmente el contenido de esta columna si es más corta que la tarjeta principal */}
      <div className="w-full lg:w-1/4 xl:w-1/5 flex flex-col lg:justify-center flex-shrink-0 space-y-6 lg:mt-0">
        <CreativeEnergyBar />
        <ColorPaletteDisplay />
      </div>

    </div>
  );
}

export default Cover;
