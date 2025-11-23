import React, { useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';
import { X, Instagram, Send, ArrowRight } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <div className="max-w-xl">
            <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Портфолио</span>
            <h2 className="text-4xl md:text-5xl text-dark mb-4">Избранные Работы</h2>
          </div>
          <div className="hidden md:block">
            <p className="text-gray-400 italic font-serif">Вдохновение в каждом штрихе</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 mb-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur text-dark px-6 py-3 text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     Смотреть
                   </div>
                </div>
              </div>
              <h3 className="text-lg font-serif text-dark group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-sm text-gray-400 font-light truncate">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Elegant Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md p-4 sm:p-8"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="fixed top-8 right-8 z-50 p-2 text-dark hover:text-gold transition-colors transform hover:rotate-90 duration-300"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div 
            className="bg-white w-full max-w-6xl h-full max-h-[85vh] flex flex-col lg:flex-row shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Side */}
            <div className="w-full lg:w-2/3 h-1/2 lg:h-full bg-gray-50 relative">
              <img 
                src={selectedItem.imageUrl} 
                alt={selectedItem.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-white border-l border-gray-50">
              <div className="mb-auto">
                <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Детали работы</span>
                <h3 className="text-3xl md:text-4xl font-serif text-dark mb-6">{selectedItem.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                  {selectedItem.description}
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Поделиться:</p>
                <div className="flex gap-4 mb-8">
                    <button 
                      onClick={() => console.log('Instagram')}
                      className="flex items-center gap-2 text-sm font-medium hover:text-gold transition-colors"
                    >
                      <Instagram size={20} /> Instagram
                    </button>
                    <button 
                      onClick={() => console.log('Telegram')}
                      className="flex items-center gap-2 text-sm font-medium hover:text-gold transition-colors"
                    >
                      <Send size={20} /> Telegram
                    </button>
                </div>

                <a 
                  href="#dikidi-booking" 
                  className="group w-full flex items-center justify-between px-6 py-4 bg-dark text-white hover:bg-gold transition-colors duration-300"
                >
                  <span className="text-sm font-bold uppercase tracking-widest">Хочу такой же</span>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};