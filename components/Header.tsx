import React from 'react';
import { Button } from './Button';
import { Star } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col lg:flex-row bg-cream">
      {/* Left Content Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 order-2 lg:order-1">
        <div className="max-w-xl animate-fade-in-up">
          <div className="flex items-center gap-2 mb-6 text-gold font-medium tracking-widest text-xs uppercase">
            <Star size={12} fill="currentColor" />
            <span>Premium Nail Artistry</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif text-dark leading-[1.1] mb-8">
            Искусство <br />
            <span className="italic text-gold">идеального</span> <br />
            маникюра.
          </h1>
          
          <div className="w-24 h-px bg-dark/20 mb-8"></div>

          <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed max-w-md">
            Мастер <span className="font-medium text-dark">Анна Смирнова</span>. 
            Безупречная стойкость до 5 недель, авторский дизайн и абсолютная стерильность.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button variant="primary" href="#dikidi-booking">
              Записаться Онлайн
            </Button>
            <Button variant="text" href="#portfolio">
              Смотреть портфолио &rarr;
            </Button>
          </div>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative order-1 lg:order-2 overflow-hidden">
        <div className="absolute inset-0 bg-dark/10 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Manicure" 
          className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
        />
        <div className="absolute bottom-10 left-10 z-20 text-white hidden lg:block">
           <p className="font-serif italic text-2xl">"Красота в деталях"</p>
        </div>
      </div>
    </header>
  );
};