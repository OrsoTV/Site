import React from 'react';
import { MapPin, Clock, Instagram, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand */}
          <div className="md:col-span-5">
            <h2 className="text-4xl font-serif mb-6">Elite Nail Studio</h2>
            <p className="text-gray-400 font-light leading-relaxed max-w-sm mb-8">
              Создаем не просто маникюр, а настроение. Премиальные материалы, стерильность и высокий сервис в центре города.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-gold transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="text-white hover:text-gold transition-colors"><Phone size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gold mb-8">Навигация</h4>
            <ul className="space-y-4 font-light text-gray-300">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#" className="hover:text-white transition-colors">О мастере</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
             <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gold mb-8">Контакты</h4>
             <div className="space-y-6 font-light text-gray-300">
               <div className="flex gap-4">
                 <MapPin size={20} className="text-gold shrink-0" />
                 <div>
                   <p className="text-white">г. Москва, ул. Примерная, 10</p>
                   <p className="text-sm text-gray-500 mt-1">Вход со двора, 2 этаж</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Clock size={20} className="text-gold shrink-0" />
                 <div>
                   <p className="text-white">Пн-Сб: 10:00 – 21:00</p>
                   <p className="text-sm text-gray-500 mt-1">Воскресенье - выходной</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Elite Nail Studio.</p>
          <p className="mt-2 md:mt-0">Designed with Style</p>
        </div>
      </div>
    </footer>
  );
};