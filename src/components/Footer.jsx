// src/components/Footer.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

function Footer() {

  return (
    <footer className="border-t-2 border-bitna-muted-pink relative mt-auto"> {/* mt-auto para empujar al final si el contenido es corto */}
      <div 
        className="gradient-background pt-16 md:pt-24 pb-8 text-center text-white relative z-10"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-6">
            <IoSparkles className="text-bitna-light-pink text-4xl mb-2 animate-pulse" />
            <p className="font-single-day text-2xl md:text-3xl text-white">
              빛나의 일기
            </p>
            <p className="text-sm text-bitna-light-pink mt-1">
              A little corner for dreams and learning.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-xs text-bitna-light-pink">
              Made with <FaHeart className="inline text-bitna-strong-pink mx-1" /> by Diana Narváez
            </p>
            <p className="text-xs text-bitna-light-pink mt-1">
              &copy; {new Date().getFullYear()} Bitna's Diary. All rights reserved (more or less 😉).
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            {/* <a href="#" className="text-bitna-light-pink hover:text-white transition-colors">
              <FaGithub size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
