import React from 'react';
import { ArrowRight, Award, Users, Building, Zap, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Unique Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        {/* Subtle geometric elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-700 rotate-45 opacity-30"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-gray-600 opacity-20"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-1" style={{ backgroundColor: '#aa8b50', opacity: 0.3 }}></div>
        <div className="absolute top-32 right-1/3 w-1 h-32" style={{ backgroundColor: '#aa8b50', opacity: 0.3 }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            {/* Unique Badge */}
            <div className="inline-flex items-center text-black px-6 py-3 mb-12 transform hover:scale-105 transition-transform duration-300" style={{ backgroundColor: '#aa8b50' }}>
              <Target className="w-5 h-5 mr-3" />
              <span className="font-black uppercase tracking-wider text-sm">Especialistas em Tax Sales</span>
            </div>

            {/* Unique Typography Treatment */}
            <div className="mb-12">
              <h1 className="text-7xl lg:text-8xl font-black leading-none mb-4">
                <span className="block text-white">NÓS</span>
                <span className="block text-gray-500 text-6xl lg:text-7xl">CAÇAMOS.</span>
                <span className="block text-white">NÓS</span>
                <span className="block text-gray-500 text-6xl lg:text-7xl">CONSTRUÍMOS.</span>
                <span className="block text-white">NÓS</span>
                <span className="block text-gray-500 text-6xl lg:text-7xl">LUCRAMOS.</span>
              </h1>
            </div>

            <div className="relative mb-16">
              <div className="absolute -left-4 top-0 w-1 h-full bg-white"></div>
              <p className="text-2xl text-gray-300 leading-relaxed pl-8 font-light">
                Nós não apenas achamos propriedades—nós <em className="text-white font-bold">caçamos</em>. 
                Nós não apenas renovamos—nós <em className="text-white font-bold">transformamos</em>. 
                Nós não apenas vendemos—nós <em className="text-white font-bold">criamos valor</em>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 mb-20">
              <button
                className="group text-black px-10 py-5 font-black transition-all duration-300 flex items-center justify-center hover:brightness-110 transform hover:scale-105"
                style={{ backgroundColor: '#aa8b50' }}
              >
                <span className="uppercase tracking-wider">EXPLORE PROPRIEDADES</span>
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                className="group text-white px-10 py-5 font-black transition-all duration-300 transform hover:scale-105 border-4"
                style={{ borderColor: '#aa8b50' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#aa8b50';
                  e.currentTarget.style.color = 'black';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                <span className="uppercase tracking-wider">CONSULTE-NOS</span>
              </button>
            </div>

            {/* Unique Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 border" style={{ borderColor: '#aa8b50', opacity: 0.3 }}></div>

              <div className="relative bg-gray-900 p-10 border-2 shadow-2xl" style={{ borderColor: '#aa8b50' }}>
                <div className="absolute top-0 left-0 w-6 h-6" style={{ backgroundColor: '#aa8b50', transform: 'translate(-12px, -12px)' }}></div>
                <div className="absolute bottom-0 right-0 w-6 h-6" style={{ backgroundColor: '#aa8b50', transform: 'translate(12px, 12px)' }}></div>

                <div className="text-center mb-10">
                  <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-[0.2em]">CONSULTE INFORMAÇÃO</h3>
                  <h3 className="text-3xl font-black text-gray-400 uppercase tracking-[0.2em]">IMOBILIÁRIA</h3>
                  <div className="w-20 h-1 mx-auto mt-4" style={{ backgroundColor: '#aa8b50' }}></div>
                </div>

                <form className="space-y-8">
                  {['NOME', 'EMAIL', 'NÚMERO'].map((placeholder, index) => (
                    <div key={index} className="relative group">
                      <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full px-0 py-6 bg-transparent border-0 border-b-4 border-gray-600 focus:outline-none transition-all duration-300 font-bold uppercase tracking-wider text-white placeholder-gray-400 focus:border-current"
                        style={{ borderColor: '#aa8b50' }}
                      />
                    </div>
                  ))}
                  <div className="relative group">
                    <textarea
                      placeholder="
CONTE NOS SOBRE SEU PROJETO"
                      rows={4}
                      className="w-full px-0 py-6 bg-transparent border-0 border-b-4 border-gray-600 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none font-bold uppercase tracking-wider"
                      style={{ borderColor: '#aa8b50' }}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-black py-6 font-black uppercase tracking-[0.2em] transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                    style={{ backgroundColor: '#aa8b50' }}
                  >
                    <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                    CONSULTA
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
