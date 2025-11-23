import React from 'react';
import { SERVICE_ITEMS } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <span className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Прайс-лист</span>
          <h2 className="text-4xl md:text-5xl text-dark">Меню Услуг</h2>
        </div>

        <div className="bg-white p-8 md:p-16 shadow-xl shadow-gray-200/50">
          <div className="space-y-12">
            {SERVICE_ITEMS.map((item) => (
              <div key={item.id} className="group cursor-default">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl md:text-2xl font-serif text-dark group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Dots Leader */}
                  <div className="flex-grow mx-4 border-b border-dotted border-gray-300 relative -top-1"></div>
                  
                  <div className="text-xl md:text-2xl font-serif text-dark">
                    {item.price} ₽
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-sm font-light italic">
                    Длительность: {item.duration}
                  </p>
                  <a 
                    href="#dikidi-booking" 
                    className="text-xs font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transform"
                  >
                    Записаться
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Button variant="outline" href="#dikidi-booking">
               Полный Прайс в Dikidi
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};