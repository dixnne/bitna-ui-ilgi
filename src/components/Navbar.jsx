// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// PASO 1: Importar los iconos deseados de react-icons
import { FaInstagram, FaTwitter, FaGlobeAmericas } from 'react-icons/fa'; // Para redes sociales
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; // Para el menú hamburguesa
import { IoSparkles } from 'react-icons/io5'; // Nuevo icono para el logo "Bitna"

// El componente BitnaLogo SVG ya no es necesario, lo reemplazaremos con IoSparkles.

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out";
  const activeNavLinkClass = "bg-bitna-strong-pink text-white";
  const inactiveNavLinkClass = "text-bitna-strong-pink hover:bg-bitna-muted-pink hover:text-white";

  return (
    <nav className="sticky top-0 z-50 shadow-lg">
      {/* --- Barra Superior --- */}
      <div className="gradient-background text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Izquierda: Logo y Nombre del Diario */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center group">
                {/* Usamos el nuevo icono IoSparkles para el logo */}
                <IoSparkles className="text-bitna-light-pink group-hover:text-white transition-colors duration-150" size={36} /> {/* Ajusta el color y tamaño según prefieras */}
                <span className="ml-2 font-single-day text-3xl text-white group-hover:text-bitna-light-pink transition-colors">
                  빛나의 일기
                </span>
              </Link>
            </div>

            {/* Derecha (Barra Superior): Iconos de Redes Sociales (Visible en pantallas grandes) */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-bitna-light-pink hover:text-white transition-colors">
                <FaInstagram size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-bitna-light-pink hover:text-white transition-colors">
                <FaTwitter size={22} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-bitna-light-pink hover:text-white transition-colors"> {/* Cambia # por tu URL */}
                <FaGlobeAmericas size={22} />
              </a>
            </div>

            {/* Botón de Menú Móvil (Hamburguesa) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-bitna-light-pink hover:text-white hover:bg-bitna-strong-pink focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMobileMenuOpen ? (
                  <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <AiOutlineMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Barra Inferior (Navegación Principal) --- */}
      <div className="bg-bitna-light-pink border-b-2 border-bitna-muted-pink">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-center space-x-2 h-12">
            <NavLink to="/" className={({ isActive }) => `${navLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`} end>
              메인 페이지
            </NavLink>
            <NavLink to="/index" className={({ isActive }) => `${navLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}>
              빛나의 별자리 지도
            </NavLink>
            <NavLink to="/conclusiones" className={({ isActive }) => `${navLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`}>
              Conclusiones
            </NavLink>
          </div>
        </div>
      </div>

      {/* --- Menú Desplegable Móvil --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bitna-light-pink border-b-2 border-bitna-muted-pink pb-3" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({ isActive }) => `block ${navLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`} onClick={() => setIsMobileMenuOpen(false)} end>
              메인 페이지
            </NavLink>
            <NavLink to="/index" className={({ isActive }) => `block ${navLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`} onClick={() => setIsMobileMenuOpen(false)}>
              빛나의 별자리 지도
            </NavLink>
            <NavLink to="/conclusion" className={({ isActive }) => `block ${navLinkClass} ${isActive ? activeNavLinkClass : inactiveNavLinkClass}`} onClick={() => setIsMobileMenuOpen(false)}>
              결론
            </NavLink>
          </div>
          {/* Iconos de Redes Sociales en Menú Móvil */}
          <div className="pt-4 pb-3 border-t border-bitna-muted-pink">
            <div className="flex items-center justify-center space-x-6 px-5">
              <a href="https://www.instagram.com/dianapa.narvaez/" target="_blank" rel="noopener noreferrer" className="text-bitna-strong-pink hover:text-bitna-muted-pink transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://x.com/dixnnesita" target="_blank" rel="noopener noreferrer" className="text-bitna-strong-pink hover:text-bitna-muted-pink transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-bitna-strong-pink hover:text-bitna-muted-pink transition-colors"> {/* Cambia # por tu URL */}
                <FaGlobeAmericas size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
