import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-10 group">
              <div className="relative">
                <img 
                  src="/logo_projet.png" 
                  alt="Projet Logo" 
                  className="h-20 w-20 mr-6 border-4 transition-all duration-300 transform group-hover:scale-110"
                  style={{borderColor: '#aa8b50'}}
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 animate-pulse" style={{backgroundColor: '#aa8b50'}}></div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-wider">PROjet</h3>
                <p className="text-gray-400 text-sm uppercase tracking-[0.3em] font-light">Property Visionaries</p>
              </div>
            </div>
            <div className="relative mb-10">
              <div className="absolute -left-4 top-0 w-1 h-full bg-yellow-400 opacity-50"></div>
              <p className="text-gray-400 leading-relaxed pl-8">
                Nós caçamos propriedades em leilões e arquitetamos transformações extraordinárias. 
               Onde outros veem problema, nós vemos potencial!
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black text-white mb-10 uppercase tracking-[0.2em]">Serviços</h4>
            <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
           <ul className="space-y-6">
  <li><span className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold transform transition-transform duration-300 inline-block">Compras em Tax Sale</span></li>
  <li><span className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold transform transition-transform duration-300 inline-block">Renovação completa</span></li>
  <li><span className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold transform transition-transform duration-300 inline-block">Designs feitos por arquitetos</span></li>
  <li><span className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold transform transition-transform duration-300 inline-block">Gerenciamento de projeto</span></li>
  <li><span className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold transform transition-transform duration-300 inline-block">Consulta de investimentos</span></li>
</ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black text-white mb-10 uppercase tracking-[0.2em]">Navegação</h4>
            <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
            <ul className="space-y-6">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold hover:translate-x-2 transform transition-transform duration-300 inline-block">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold hover:translate-x-2 transform transition-transform duration-300 inline-block">Serviços</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold hover:translate-x-2 transform transition-transform duration-300 inline-block">Portfolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold hover:translate-x-2 transform transition-transform duration-300 inline-block">Sobre nós</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm font-bold hover:translate-x-2 transform transition-transform duration-300 inline-block">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black text-white mb-10 uppercase tracking-[0.2em]">Contato</h4>
            <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-gray-800 p-3 mr-6 group-hover:text-black transition-all duration-300" style={{'--hover-bg': '#aa8b50'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#aa8b50'} onMouseLeave={(e) => e.target.style.backgroundColor = '#1f2937'}>
                  <MapPin className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <div className="text-gray-400">
                  <p className="uppercase tracking-wider text-sm font-bold">2107 SW 57TH Terrace</p>
                  <p className="uppercase tracking-wider text-sm font-bold">West Park FL, 33023 </p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="bg-gray-800 p-3 mr-6 group-hover:text-black transition-all duration-300" style={{'--hover-bg': '#aa8b50'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#aa8b50'} onMouseLeave={(e) => e.target.style.backgroundColor = '#1f2937'}>
                  <Phone className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <span className="text-gray-400 uppercase tracking-wider text-sm font-bold">(754) 299-6465</span>
              </div>
              <div className="flex items-center group">
                <div className="bg-gray-800 p-3 mr-6 group-hover:text-black transition-all duration-300" style={{'--hover-bg': '#aa8b50'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#aa8b50'} onMouseLeave={(e) => e.target.style.backgroundColor = '#1f2937'}>
                  <Mail className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <span className="text-gray-400 uppercase tracking-wider text-sm font-bold">projet.deedusa@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-12">
              <h5 className="font-black text-white mb-6 uppercase tracking-[0.2em] text-sm">Horário de funcionamento</h5>
              <div className="text-gray-400 text-sm space-y-2 font-bold">
                <p className="uppercase tracking-wider">Seg - Sex: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-800 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm uppercase tracking-[0.2em] font-bold">
              © 2025 PROJET. All Rights Reserved.
            </p>
            <div className="flex space-x-10 mt-6 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-[0.2em] font-bold hover:translate-y-1 transform transition-transform duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-[0.2em] font-bold hover:translate-y-1 transform transition-transform duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors uppercase tracking-[0.2em] font-bold hover:translate-y-1 transform transition-transform duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;