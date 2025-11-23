import React from 'react';
import { ShieldCheck, Diamond, Sparkles, Clock } from 'lucide-react';
import { PortfolioItem, ServiceItem, BenefitItem } from './types';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1632922267756-9b71242b1592?q=80&w=800&auto=format&fit=crop',
    title: 'Нежный Нюд',
    description: 'Идеальное покрытие под кутикулу с легким шиммером.',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1599695676086-5d6141a02795?q=80&w=800&auto=format&fit=crop',
    title: 'Классический Красный',
    description: 'Вечная классика, которая подходит к любому образу.',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
    title: 'Геометрия',
    description: 'Стильный минимализм с геометрическими линиями.',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1522337360705-2b1cc3d549be?q=80&w=800&auto=format&fit=crop',
    title: 'Французский Маникюр',
    description: 'Современное исполнение классического френча.',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1610992015762-494054ae70fd?q=80&w=800&auto=format&fit=crop',
    title: 'Матовый Топ',
    description: 'Бархатистое покрытие глубокого синего цвета.',
  },
  {
    id: 6,
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    title: 'Абстракция',
    description: 'Авторский дизайн с использованием фольги.',
  },
  {
    id: 7,
    imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
    title: 'Свадебный Дизайн',
    description: 'Нежность и утонченность для самого важного дня.',
  },
  {
    id: 8,
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    title: 'Градиент',
    description: 'Плавный переход цвета (Омбре).',
  },
  {
    id: 9,
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=800&auto=format&fit=crop',
    title: 'Смарт Педикюр',
    description: 'Идеально гладкие стопы и покрытие.',
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 1,
    title: 'Комплекс "Идеал"',
    duration: '1 час 45 мин.',
    price: 2500,
  },
  {
    id: 2,
    title: 'Комплекс "Экспресс"',
    duration: '1 час 30 мин.',
    price: 2000,
  },
  {
    id: 3,
    title: 'Педикюр (Комплекс)',
    duration: '2 часа',
    price: 3000,
  },
];

export const BENEFITS_ITEMS: BenefitItem[] = [
  {
    id: 1,
    icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    title: 'Гарантия',
    description: 'Гарантия Стойкости 7 дней.',
  },
  {
    id: 2,
    icon: <Diamond className="w-8 h-8 text-gold" />,
    title: 'Материалы',
    description: 'Только Премиум-класс.',
  },
  {
    id: 3,
    icon: <Sparkles className="w-8 h-8 text-gold" />,
    title: 'Стерильность',
    description: '100% обработка по СанПин.',
  },
  {
    id: 4,
    icon: <Clock className="w-8 h-8 text-gold" />,
    title: 'Эффективность',
    description: 'Маникюр + Покрытие за 1 час 45 минут.',
  },
];