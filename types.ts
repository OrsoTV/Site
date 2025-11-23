import React from 'react';

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  duration: string;
  price: number;
}

export interface BenefitItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}