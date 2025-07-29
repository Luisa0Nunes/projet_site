import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-black px-6 py-2 mb-6">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Contato</h2>
          </div>
          <h3 className="text-5xl font-black text-white mb-6 uppercase">
           COMECE SUA
            <span className="block text-gray-400">TRANSFORMAÇÃO</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
           Pronto para desbloquear o potencial do seu próximo investimento imobiliário? 
            Conecte-se com nosso time de especialista em transformação.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 uppercase tracking-wide">CONTATO</h3>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="bg-black border border-gray-700 p-4 mr-6 group-hover:text-black transition-all duration-300" style={{'--hover-bg': '#aa8b50', '--hover-border': '#aa8b50'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#aa8b50'; e.target.style.borderColor = '#aa8b50'}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#000000'; e.target.style.borderColor = '#374151'}}>
                  <Phone className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">TELEFONE</h4>
                  <p className="text-gray-400 text-lg">(754) 299-6465</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-black border border-gray-700 p-4 mr-6 group-hover:text-black transition-all duration-300" style={{'--hover-bg': '#aa8b50', '--hover-border': '#aa8b50'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#aa8b50'; e.target.style.borderColor = '#aa8b50'}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#000000'; e.target.style.borderColor = '#374151'}}>
                  <Mail className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">Email</h4>
                  <p className="text-gray-400 text-lg">projet.deedusa@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-black border border-gray-700 p-4 mr-6 group-hover:text-black transition-all duration-300" style={{'--hover-bg': '#aa8b50', '--hover-border': '#aa8b50'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#aa8b50'; e.target.style.borderColor = '#aa8b50'}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#000000'; e.target.style.borderColor = '#374151'}}>
                  <MapPin className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">ENDEREÇO</h4>
                  <p className="text-gray-400 text-lg">
                    2107 SW 57TH Terrace<br />
                    West Park, FL 33023<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-black border border-gray-700 p-4 mr-6 group-hover:text-black transition-all duration-300" style={{'--hover-bg': '#aa8b50', '--hover-border': '#aa8b50'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#aa8b50'; e.target.style.borderColor = '#aa8b50'}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#000000'; e.target.style.borderColor = '#374151'}}>
                  <Clock className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">HORÁRIO DE FUNCIONAMENTO</h4>
                  <p className="text-gray-400 text-lg">
                    Segunda - Sexta: 9:00 AM - 5:00 PM<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-black border border-gray-700 p-10">
            <div className="flex items-center mb-8">
              <MessageSquare className="w-8 h-8 text-white mr-4" />
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide"> FALE CONOSCO</h3>
            </div>
            
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                    Nome *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 focus:border-yellow-400 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    placeholder="ANNA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                    Sobrenome *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 focus:border-yellow-400 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    placeholder="SANTOS"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 focus:border-yellow-400 text-white placeholder-gray-500 focus:outline-none transition-colors"
                  placeholder="ANNA.SANTOS@EXAMPLO.COM"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 focus:border-yellow-400 text-white placeholder-gray-500 focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                  Serviço de interesse
                </label>
                <select className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white focus:outline-none transition-colors" onFocus={(e) => e.target.style.borderColor = '#aa8b50'} onBlur={(e) => e.target.style.borderColor = '#4b5563'}>
                  <option value="" className="bg-black">SELECIONE UM SERVIÇO</option>
                  <option value="property-acquisition" className="bg-black">COMPRA DE PROPRIEDADE</option>
                  <option value="remodeling" className="bg-black">RENOVAÇÃO</option>
                  <option value="consultation" className="bg-black">CONSULTA DE INVESTIMENTO</option>
                  <option value="other" className="bg-black">OUTRO</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-3 uppercase tracking-wider">
                  Mensagem *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                  onFocus={(e) => e.target.style.borderColor = '#aa8b50'}
                  onBlur={(e) => e.target.style.borderColor = '#4b5563'}
                  placeholder="NOS CONTE SOBRE SEU PROJETO..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-black py-4 px-8 font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                style={{backgroundColor: '#aa8b50'}}
              >
                <Send className="w-6 h-6 mr-3" />
                Enviar mensagem 
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;