import React from 'react';
import { Search, Hammer, Home, TrendingUp, Shield, Clock, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Especialiade em tax sale",
      description: "Análise de mercado avançada e identificação estratégica de propriedades em leilões.",
      process: ["Pesquisa de mercado", "Análise de propriedades", "Estratégia de lances", "Diligência prévia legal"]
    },
    {
      icon: Hammer,
      title: "Visão arquitetônica",
      description: "Completa transformação, do conceito até a realidade deslumbrante.",
      process: ["Conceito em design", "Visualização 3D", "Processamento de licença", "Gerenciamento da construção"]
    },
    {
      icon: Home,
      title: "Renovação completa",
      description: "Transformação total com materiais de qualidade e mão de obra especializada.",
      process: ["Avaliação estrutural", "Design de interiores", "Construção de qualidade", "Ajustes finais"]
    },
    {
      icon: TrendingUp,
      title: "Estratégia de investimentos",
      description: "Guia de investimentos focada em dados para um maior ROI (retorno de investimento).",
      process: ["Análise de mercado", "Projeção de retornos", "Avaliação de risco"]
    },
    {
      icon: Shield,
      title: "Projeto seguro",
      description: "Proteção contra risco durante todo o processo.",
      process: ["Avaliação de risco", "Planejamento seguro", "Gerenciamento de reivindicações"]
    },
    {
      icon: Clock,
      title: "Timeline Real",
      description: "Entrega de projeto acelerada com garantias de etapas concluídas.",
      process: ["Planejamento de projeto", "Alocação de recursos", "Monitoramento de progresso", "Controle de qualidade"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-1 bg-yellow-400 opacity-20 transform -rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-64 h-1 bg-yellow-400 opacity-20 transform rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-1 h-32 bg-yellow-400 opacity-20"></div>
        <div className="absolute top-1/2 right-10 w-1 h-32 bg-yellow-400 opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-block bg-black border-2 px-8 py-4 mb-8" style={{borderColor: '#aa8b50'}}>
            <h2 className="text-sm font-black uppercase tracking-[0.3em]" style={{color: '#aa8b50'}}>Nosso processo</h2>
          </div>
          <h3 className="text-6xl font-black text-white mb-8 uppercase leading-tight">
            DA DESCOBERTA
            <span className="block" style={{color: '#aa8b50'}}>ATÉ A ENTREGA</span>
          </h3>
          <div className="w-32 h-1 mx-auto mb-8" style={{backgroundColor: '#aa8b50'}}></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Nossa abordagem sistemática transforma propriedades desgastadas em verdadeiras obras arquitetônicas por meio de
           aquisições estratégicas, design visionário e execução perfeita.
          </p>
        </div>

        {/* Services Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full opacity-30 hidden lg:block" style={{backgroundColor: '#aa8b50'}}></div>
          
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-16`}>
                {/* Service Content */}
<div className="lg:w-1/2 mb-12 lg:mb-0">
  <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'} text-center lg:text-left`}>
    <div className="inline-flex items-center mb-6">
      <div className="bg-black border-2 p-4 mr-4" style={{borderColor: '#aa8b50'}}>
        <service.icon className="w-8 h-8" style={{color: '#aa8b50'}} />
      </div>
      <div className="text-left">
        <div className="text-sm text-gray-400 uppercase tracking-[0.2em] font-bold">Step {index + 1}</div>
        <h4 className="text-2xl font-black text-white uppercase tracking-wide">{service.title}</h4>
      </div>
    </div>
    
    <p className="text-gray-300 text-lg leading-relaxed mb-8">{service.description}</p>
    
    <div className="space-y-3 mb-8">
      {service.process.map((step, stepIndex) => (
        <div key={stepIndex} className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
          <div className="w-2 h-2 bg-yellow-400 mr-4 transform rotate-45"></div>
          <span className="text-gray-400 font-medium uppercase tracking-wider text-sm">{step}</span>
        </div>
      ))}
    </div>
    
    {/* O BOTÃO "SAIBA MAIS" FOI REMOVIDO DESTA ÁREA */}
    
  </div>
</div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative">
                  <div className="w-16 h-16 bg-black border-4 rounded-full flex items-center justify-center" style={{borderColor: '#aa8b50'}}>
                    <div className="w-6 h-6 rounded-full" style={{backgroundColor: '#aa8b50'}}></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 opacity-30 rounded-full animate-pulse" style={{borderColor: '#aa8b50'}}></div>
                </div>

                {/* Visual Element */}
                <div className="lg:w-1/2">
                  <div className={`${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    <div className="relative bg-black border-2 border-gray-700 p-12 group transition-all duration-300" style={{'--hover-border': '#aa8b50'}} onMouseEnter={(e) => e.target.style.borderColor = '#aa8b50'} onMouseLeave={(e) => e.target.style.borderColor = '#374151'}>
                      <div className="absolute top-0 left-0 w-8 h-8 transform -translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#aa8b50'}}></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 transform translate-x-4 translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#aa8b50'}}></div>
                      
                      <div className="text-center">
                        <div className="text-6xl font-black text-gray-800 mb-4">0{index + 1}</div>
                        <div className="w-16 h-1 mx-auto mb-6" style={{backgroundColor: '#aa8b50'}}></div>
                        <div className="text-gray-400 uppercase tracking-[0.2em] text-sm font-bold">
                          {index === 0 && "FASE DE COMPRA"}
                          {index === 1 && "FASE DE DESIGN"}
                          {index === 2 && "FASE DE CONSTRUÇÃO"}
                          {index === 3 && "FASE DE ANÁLISE"}
                          {index === 4 && "FASE DE PROTEÇÃO"}
                          {index === 5 && "FASE DE ENTREGA"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <div className="bg-black border-2 p-12 relative" style={{borderColor: '#aa8b50'}}>
            <div className="absolute top-0 left-0 w-6 h-6 transform -translate-x-3 -translate-y-3" style={{backgroundColor: '#aa8b50'}}></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 transform translate-x-3 translate-y-3" style={{backgroundColor: '#aa8b50'}}></div>
            
            <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-wide">
             PREPARADO PARA COMEÇAR SUA
              <span className="block" style={{color: '#aa8b50'}}>TRANSFORMAÇÃO?</span>
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
             Deixe nosso time de especialistas guiá-lo por cada passo do processo de transformação.
            </p>
           <a href="#contact" className="text-black px-12 py-6 font-black uppercase tracking-wider transition-all duration-300 transform hover:scale-105" style={{backgroundColor: '#aa8b50'}}>
 COMECE SEU PROJETO
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;