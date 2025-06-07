// src/components/ColorPaletteDisplay.jsx
import React from 'react';
import { FaPalette } from 'react-icons/fa';

function ColorPaletteDisplay() {
  const colors = [
    { name: '연분홍색', hex: '#FFEDFA', tailwindClass: 'bg-bitna-light-pink' }, // Rosa Pastel
    { name: '분홍색', hex: '#E195AB', tailwindClass: 'bg-bitna-muted-pink' },    // Rosa Medio
    { name: '진분홍색', hex: '#DE3163', tailwindClass: 'bg-bitna-strong-pink' }, // Rosa Fuerte
    { name: '연두색', hex: '#CCDF92', tailwindClass: 'bg-bitna-lime-green' },  // Verde Lima
  ];

  const paletteLink = "https://colorhunt.co/palette/ffedfae195abde3163ccdf92";

  return (
    <a 
      href={paletteLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block my-8 p-4 bg-white rounded-lg shadow-lg border border-gray-200 transform rotate-[1deg] hover:rotate-0 hover:shadow-xl transition-all duration-300 group"
      title="Ver paleta en Color Hunt"
    >
      <h3 className="font-single-day text-xl text-bitna-strong-pink mb-4 text-center flex items-center justify-center group-hover:text-bitna-muted-pink transition-colors">
        <FaPalette className="mr-2" />
        나의 색깔 팔레트
      </h3>
      <div className="grid grid-cols-2 gap-3 justify-items-center"> {/* Layout 2x2 y centrado de items */}
        {colors.map((color) => (
          <div key={color.hex} className="text-center flex flex-col items-center">
            <div 
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md border-2 border-white group-hover:scale-110 transition-transform duration-200 ${color.tailwindClass}`}
            ></div>
            <p className="text-md text-gray-700 mt-2 font-single-day group-hover:text-bitna-strong-pink transition-colors">{color.name}</p>
          </div>
        ))}
      </div>
    </a>
  );
}

export default ColorPaletteDisplay;
