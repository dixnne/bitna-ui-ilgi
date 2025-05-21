// src/components/CreativeEnergyBar.jsx
import React from 'react';
import { RiSparklingFill } from 'react-icons/ri'; // Icono de brillo

function CreativeEnergyBar() {
  // Simula un porcentaje de llenado para la barra
  const energyLevel = 75; // Puedes hacerlo dinámico o aleatorio si quieres

  return (
    <div className="my-8 p-3 bg-bitna-light-pink rounded-lg shadow-md transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
      <h3 className="font-single-day text-xl text-bitna-strong-pink mb-2 text-center flex items-center justify-center">
        <RiSparklingFill className="mr-2 text-bitna-muted-pink" />
        창의력 충전 중!
        <RiSparklingFill className="ml-2 text-bitna-muted-pink" />
      </h3>
      <div className="w-full bg-gray-200 rounded-full h-5 border border-bitna-muted-pink overflow-hidden shadow-inner">
        <div
          className="bg-gradient-to-r from-bitna-lime-green to-bitna-strong-pink h-full rounded-full transition-all duration-500 ease-out flex items-center justify-center"
          style={{ width: `${energyLevel}%` }}
        >
          <span className="text-xs font-bold text-white drop-shadow-sm">
            {energyLevel}%
          </span>
        </div>
      </div>
      <p className="text-xs text-center text-bitna-muted-pink mt-1">
        Ideas flowing!
      </p>
    </div>
  );
}

export default CreativeEnergyBar;
