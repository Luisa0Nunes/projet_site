import React from 'react';
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "LIANNA C NOGUEIRA",
      role: "CEO",
      image: "lianna.jpeg",
      bio: " Empresária com mais de 15 anos de experiência no Brasil e nos Eua. Mestrado em Arquitetura e Urbanismo, Pós graduação em engenharia e entusiasta na area de imovéis."
    },
    {
      name: "RENATO RITA",
      role: "CFO",
      image: "renato.jpeg",
      bio: "Empresário no Brasil e nos Eua. Mestrado em Arquitetura e Urbanismo com especialização em sistemas de automação e tecnologias."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "PRECISÃO",
      description: "Todo projeto é executado com precisão e atenção total a detalhes."
    },
    {
      icon: Zap,
      title: "INOVAÇÃO",
      description: "Soluções de ponta que mudam o conceito de renovação de propriedades."
    },
    {
      icon: Users,
      title: "COLABORAÇÃO",
      description: "Parcerias estatégicas com clientes, contractors e a comunidade para atingir resultados extraordinários."
    },
    {
      icon: Award,
      title: "EXCELÊNCIA",
      description: "Critérios firmes em design, execução e serviços ao cliente sobre todo o projeto."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gray-900 px-6 py-2 mb-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest"> Nossa história </h2>
          </div>
          <h3 className="text-5xl font-black text-white mb-6 uppercase">
            SOBRE A
            <span className="block text-gray-400">PROJET</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veio de uma visão de que toda casa esquecida tem um potencial que espera ser descoberto 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h3 className="text-4xl font-black text-white mb-8 uppercase tracking-wide"> NOSSA HISTÓRIA</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                 A PROjet surgiu de uma crença: Toda propriedade nos leilões de Tax Sales
                representam uma grande oportunidade imobiliária. Nosso time de projeto, pesquisa e investidores 
                conseguem ver atráves do desgaste e imaginar transformações extraordinárias 
              </p>
              <p>
               Nós aperfeiçoamos a arte e a ciência da renovação de propriedades. Nós
                transformamos propriedades, criando valores para investidores enquanto revitalizamos
             vizinhanças através de excelência arquitetônica.
              </p>
            </div>
           </div>
          <div className="relative">
  <div className="relative">
    <img
      src="leilao.jpeg"
      alt="Our team at work"
      className="w-full h-96 object-cover border border-gray-700"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="absolute bottom-8 left-8 text-white">
      <div className="text-2xl font-bold uppercase">Excelência</div>
      <div className="text-sm opacity-80">Em Todo Detalhe</div>
    </div>
  </div>
  <div className="absolute -bottom-8 -right-8 bg-[#aa8b50] text-black p-8 border border-gray-700 shadow-lg shadow-[#aa8b50]/30 transition-transform hover:scale-105 duration-300">
    <div className="text-4xl font-black tracking-wider">PROjet</div>
  </div>
</div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-white uppercase tracking-wide mb-4"> Nossos valores</h3>
            <p className="text-gray-400 text-lg">Os princípios que conduzem nossa visão arquitetônica e de negócios</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-900 border border-gray-700 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:text-black transition-all duration-300" style={{'--hover-bg': '#aa8b50', '--hover-border': '#aa8b50'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#aa8b50'; e.target.style.borderColor = '#aa8b50'}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#111827'; e.target.style.borderColor = '#374151'}}>
                  <value.icon className="w-10 h-10 text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

       <div>
  <div className="text-center mb-16">
    <h3 className="text-4xl font-black text-white uppercase tracking-wide mb-4">Nossos líderes </h3>
    <p className="text-gray-400 text-lg">Os visionários por trás de toda tranformação</p>
  </div>
  <div className="flex flex-wrap justify-center gap-8">
    {team.map((member, index) => (
      <div key={index} className="text-center group">
        <div className="relative mb-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-40 h-40 object-cover mx-auto border border-gray-700 group-hover:border-white transition-all duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>
        <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{member.name}</h4>
        <p className="text-gray-400 font-medium mb-4 uppercase tracking-wider text-sm">{member.role}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default About;