import React from 'react';
import { BENEFITS_ITEMS } from '../constants';

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-dark mb-4">Почему выбирают нас</h2>
          <p className="text-gray-500 font-light">Мы не идем на компромиссы в качестве, безопасности и эстетике.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {BENEFITS_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-12 flex flex-col items-center text-center hover:bg-cream transition-colors duration-500 group"
            >
              <div className="mb-6 p-4 rounded-full bg-cream group-hover:bg-white transition-colors duration-500 text-dark group-hover:text-gold">
                {React.cloneElement(item.icon as React.ReactElement, { size: 28, className: "stroke-1" })}
              </div>
              <h3 className="text-lg font-medium mb-3 text-dark tracking-wide">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};