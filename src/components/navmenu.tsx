"use client";

import { Press_Start_2P } from "next/font/google";

const press2p = Press_Start_2P({
  weight: '400',
  preload: false,
})

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-200 relative ">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-zinc-900 font-bold text-xl" style={press2p.style}>
          SM
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex flex-grow justify-center space-x-4">
          <a href="#home" className="text-zinc-900 hover:text-zinc-600 transition-colors">Home</a>
          <a href="#services" className="text-zinc-900 hover:text-zinc-600 transition-colors">Serviços</a>
          <a href="#contact" className="text-zinc-900 hover:text-zinc-600 transition-colors">Contato</a>
        </div>
        <button className="hidden md:block border-2 border-black bg-white p-1 rounded-md text-xs">
          <span className=" text-xs font-semibold text-zinc-900" style={press2p.style}>Agende um Serviço</span>
        </button>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={faBars} className="text-zinc-900 text-2xl" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-4 space-y-2">
            <a href="#home" className="text-zinc-900 hover:text-zinc-600 transition-colors text-center" onClick={toggleMenu}>Home</a>
            <a href="#servicos" className="text-zinc-900 hover:text-zinc-600 transition-colors text-center" onClick={toggleMenu}>Serviços</a>
            <a href="#contato" className="text-zinc-900 hover:text-zinc-600 transition-colors text-center" onClick={toggleMenu}>Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
