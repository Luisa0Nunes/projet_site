import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// COMPONENTE DE SLIDER
const ImageComparator = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const imageContainerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };
  
  return (
    <div 
      ref={imageContainerRef}
      className="relative w-full h-full select-none overflow-hidden cursor-ew-resize bg-black" 
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Imagem DEPOIS (camada de baixo, base) */}
      <img
        src={afterImage}
        alt="After transformation"
        // 👇 FIX: object-contain para a foto não cortar
        className="w-full h-full object-contain pointer-events-none"
      />
      <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 font-bold uppercase tracking-wider">
        DEPOIS
      </div>

      {/* Imagem ANTES (camada de cima, que é cortada) */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="w-full h-full bg-black">
            <img
            src={beforeImage}
            alt="Before transformation"
            className="w-full h-full object-contain pointer-events-none"
            />
            <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 font-bold uppercase tracking-wider">
                ANTES
            </div>
        </div>
      </div>
      
      {/* Slider e Barra de Divisão */}
      <div 
        className="absolute top-0 bottom-0 w-1"
        style={{ 
          left: `calc(${sliderPosition}% - 2px)`,
          backgroundColor: '#aa8b50'
        }}
      >
        <div 
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-black border-4 flex items-center justify-center pointer-events-none"
          style={{ borderColor: '#aa8b50' }}
        >
          <div className="w-2 h-6 bg-transparent flex flex-col justify-between items-center">
             <div className="w-1 h-2 bg-white"></div>
             <div className="w-1 h-2 bg-white"></div>
             <div className="w-1 h-2 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "RESTAURAÇÃO RESIDENCIAL",
      location: "Casa em Oil City, PA",
      beforeImage: "antes1.jpeg",
      afterImage: "depois1.jpeg",
      description: "Restauração de casa em Pensilvânia, mantendo traços originais mas com toques mais modernos.",
      timeline: "4 MESES",
      investment: "$39,900 (LEILÃO + REFORMA)",
      finalValue: "$135,000",
      roi: "238,60%",
      profit: "$95,100"
    },
    {
      id: 2,
      title: "RESTAURAÇÃO COMERCIAL",
      location: "Loja em Fayette, PA",
      beforeImage: "antes2.jpg",
      afterImage: "depois2.png",
      description: "Transformação de loja de conveniência na Pensilvânia. Em área comercial promissora.",
      timeline: "4 MESES",
      investment: "$83,000 (LEILÃO + REFORMA)",
      finalValue: "$500,000",
      roi: "502,41%",
      profit: "$417,000"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeProject];

  return (
    <section id="portfolio" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-black px-6 py-2 mb-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">NOSSOS EXEMPLOS</h2>
          </div>
          <h3 className="text-5xl font-black text-white mb-6 uppercase">
            PORTFOLIO DE
            <span className="block text-gray-400">TRANSFORMAÇÃO</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
           Arraste a barra sobre a imagem para ver a mágica acontecer.
          </p>
        </div>

        <div className="bg-black border border-gray-700">
          <div className="grid lg:grid-cols-2">
            
            <div className="relative w-full h-96 lg:h-full">
              <ImageComparator 
                beforeImage={currentProject.beforeImage}
                afterImage={currentProject.afterImage}
              />
              <div className="absolute inset-y-0 left-4 flex items-center z-10">
                <button
                  onClick={prevProject}
                  className="bg-black bg-opacity-80 hover:bg-opacity-100 p-3 border border-gray-600 hover:border-white transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-4 flex items-center z-10">
                <button
                  onClick={nextProject}
                  className="bg-black bg-opacity-80 hover:bg-opacity-100 p-3 border border-gray-600 hover:border-white transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="p-12">
              <div className="mb-8">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">{currentProject.title}</h3>
                <p className="text-gray-400 font-medium uppercase tracking-wider">{currentProject.location}</p>
              </div>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">{currentProject.description}</p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-800 p-6 border border-gray-700">
                  <div className="text-3xl font-black text-white mb-1">{currentProject.timeline}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Timeline</div>
                </div>
                <div className="bg-gray-800 p-6 border border-gray-700">
                  <div className="text-3xl font-black text-white mb-1">{currentProject.roi}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">ROI</div>
                </div>
                <div className="bg-gray-800 p-6 border border-gray-700">
                  <div className="text-3xl font-black text-white mb-1">{currentProject.investment}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Investimento</div>
                </div>
                <div className="bg-gray-800 p-6 border border-gray-700">
                  <div className="text-3xl font-black text-white mb-1">{currentProject.profit}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Lucro</div>
                </div>
              </div>
              <div className="flex space-x-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                     className={`w-12 h-1 transition-all duration-300 ${
                       index === activeProject ? '' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    style={index === activeProject ? {backgroundColor: '#aa8b50'} : {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;