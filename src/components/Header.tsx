import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-2xl sticky top-0 z-50 border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo e Título */}
          <div className="flex items-center group">
            <div className="transition-all duration-300 p-1 rounded-md group-hover:shadow-[0_0_10px_#aa8b50]">
              <img 
                src="/logo_projet.jpeg" 
                alt="Projet Logo" 
                className="h-20 w-auto mr-6 transition-all duration-300 transform group-hover:scale-105 group-hover:border-[#aa8b50] group-hover:border-4 rounded-md"
              />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white tracking-wider transform group-hover:scale-105 transition-transform duration-300 relative">
                PROjet
                <span className="block w-10 h-[2px] bg-[#aa8b50] mt-1 mx-auto group-hover:w-16 transition-all duration-300"></span>
              </h1>
              <p className="text-sm text-gray-300 uppercase tracking-[0.3em] font-light">
                Property Visionaries
              </p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-12">
            <a href="#home" className="text-gray-300 hover:text-white font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-widest text-sm">
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#aa8b50] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-300 hover:text-white font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-widest text-sm">
              Serviços
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#aa8b50] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-white font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-widest text-sm">
              Portfolio
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#aa8b50] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-white font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-widest text-sm">
              Sobre nós
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#aa8b50] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white font-bold transition-all duration-300 hover:scale-110 relative group uppercase tracking-widest text-sm">
              Contato
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#aa8b50] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav> 

          {/* Informações de Contato */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center text-sm text-gray-300 hover:text-white transition-colors group">
              <div className="bg-gray-800 p-2 rounded-full mr-3 group-hover:bg-[#aa8b50] group-hover:text-black transition-all duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-medium">(754) 299-6465</span>
            </div>
            <div className="flex items-center text-sm text-gray-300 hover:text-white transition-colors group">
              <div className="bg-gray-800 p-2 rounded-full mr-3 group-hover:bg-[#aa8b50] group-hover:text-black transition-all duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">projet.deedusa@gmail.com</span>
            </div>
          </div>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-white bg-gray-800 p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t-2 border-gray-800">
            <nav className="flex flex-col space-y-6">
              <a href="#home" className="text-gray-300 hover:text-white font-bold transition-colors uppercase tracking-widest">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white font-bold transition-colors uppercase tracking-widest">Serviços</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white font-bold transition-colors uppercase tracking-widest">Portfolio</a>
              <a href="#about" className="text-gray-300 hover:text-white font-bold transition-colors uppercase tracking-widest">Sobre nós</a>
              <a href="#contact" className="text-gray-300 hover:text-white font-bold transition-colors uppercase tracking-widest">Contato</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

