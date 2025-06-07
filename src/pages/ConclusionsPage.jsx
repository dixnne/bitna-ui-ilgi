// src/pages/ConclusionsPage.jsx
import React, { useState } from 'react';
import { FaHeart, FaPenNib, FaUserFriends, FaTimes, FaEnvelope } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

// Componente para las notas/cartas interactivas
const NoteCard = ({ title, icon, bgColor, textColor, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`p-6 rounded-2xl shadow-lg transition-all duration-500 ease-in-out cursor-pointer transform hover:shadow-2xl hover:-translate-y-1 ${bgColor}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {React.createElement(icon, { className: `text-2xl mr-3 ${textColor}` })}
          <h3 className={`font-single-day text-3xl ${textColor}`}>{title}</h3>
        </div>
        {isOpen ? <FaTimes className={`text-xl ${textColor} opacity-70`} /> : <FaEnvelope className={`text-xl ${textColor} opacity-70`} />}
      </div>
      
      {/* Contenido desplegable */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <div className="pt-4 border-t border-dashed border-opacity-30">
          <div className="bg-white bg-opacity-60 p-4 rounded-lg text-gray-700 text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};


function ConclusionsPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-bitna-light-pink via-pink-200 to-purple-200 py-8 px-4 pt-10">
      <div className="container mx-auto max-w-7xl"> {/* Ancho aumentado */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="font-single-day text-4xl md:text-6xl text-bitna-strong-pink mb-2 flex items-center justify-center">
            <IoSparkles className="mr-3 text-yellow-400 text-3xl md:text-5xl" />
            나의 결론
            <FaHeart className="ml-3 text-bitna-muted-pink text-3xl md:text-5xl" />
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Un pequeño resumen de mi viaje aprendiendo coreano.
          </p>
        </header>

        {/* Layout de dos columnas para pantallas grandes */}
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          
          {/* Columna Izquierda: Conclusión Principal */}
          <div className="lg:w-2/3 mb-10 lg:mb-0">
            <div className="bg-white bg-opacity-70 p-6 rounded-2xl shadow-xl border-2 border-white h-full">
              <h2 className="font-single-day text-3xl text-bitna-strong-pink mb-4">Mi Experiencia en el Curso</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Crear "빛나의 일기" ha sido una aventura increíble y el final perfecto para mi primer curso de coreano. Al principio, aprender un nuevo alfabeto y una nueva estructura gramatical parecía un gran desafío, pero con cada unidad, mi confianza crecía. Este proyecto me dio la oportunidad de usar todo lo aprendido de una forma creativa y muy personal.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                No solo aprendí a presentarme, hablar de mi día a día o comprar cosas, sino que también descubrí una nueva forma de expresarme. Cada página de este diario es un pequeño logro y un recuerdo de lo divertido que ha sido este viaje. Estoy muy emocionada por seguir aprendiendo y ver hasta dónde puedo llegar.
              </p>
              {/* Mención a los amigos coreanos */}
              <p className="text-gray-700 leading-relaxed border-t-2 border-dashed border-bitna-light-pink">
                Ha sido genial conocer a mis amigos, <span className="font-bold text-bitna-muted-pink">윤솔</span> y <span className="font-bold text-bitna-muted-pink">성태</span>, quienes me han ayudado mucho a practicar. Hablar con ellos ha sido una de las mejores partes de este aprendizaje.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Notas */}
          <div className="lg:w-2/5 flex flex-col space-y-8">
            {/* Nota para la Maestra */}
            <NoteCard 
              title="마리아 선생님" 
              icon={FaPenNib}
              bgColor="bg-bitna-lime-green bg-opacity-80"
              textColor="text-green-800"
            >
              <p>
                Querida 선생님,
              </p>
              <p className="mt-2">
                Muchas gracias por toda su paciencia, energía y por hacer que cada clase fuera tan divertida e interesante. Gracias a usted, mi primer contacto con el idioma coreano ha sido una experiencia maravillosa.
              </p>
              <p className="mt-2">
                정말 감사합니다! 💖
              </p>
            </NoteCard>
            
            {/* Nota para las Compañeras */}
            <NoteCard 
              title="우리 반 친구들에게" 
              icon={FaUserFriends}
              bgColor="bg-bitna-muted-pink bg-opacity-80"
              textColor="text-white"
            >
              <p>
                Queridas compañeras,
              </p>
              <p className="mt-2">
                ¡Gracias por todas las risas, por practicar juntas y por ayudarnos mutuamente! Aprender en un ambiente tan amigable y de apoyo ha hecho que todo sea mucho más fácil y divertido.
              </p>
              <p className="mt-2">
                우리 모두 화이팅! ✨
              </p>
            </NoteCard>
          </div>
        </div>

        <footer className="text-center mt-12 text-bitna-muted-pink">
          <p className="font-single-day text-2xl">~ 끝 ~</p>
        </footer>

      </div>
    </div>
  );
}

export default ConclusionsPage;
