import React from 'react';
import Header from './components/Header';
import ProductShowcase from './components/ProductShowcase';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-black text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProductShowcase />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
