import React from 'react';
import { Header } from './components/Header';
import { Benefits } from './components/Benefits';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Benefits />
      <Portfolio />
      <Services />
      <Footer />
    </div>
  );
};