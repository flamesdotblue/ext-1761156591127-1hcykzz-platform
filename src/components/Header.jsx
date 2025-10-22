import React from 'react';
import { Leaf, Crown, Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-emerald-950/60 bg-emerald-950/80 border-b border-emerald-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-lime-400 flex items-center justify-center shadow-lg shadow-emerald-600/30">
            <Leaf className="h-6 w-6 text-emerald-950" />
          </div>
          <div>
            <p className="font-extrabold tracking-tight text-2xl">GRASS</p>
            <p className="text-xs text-emerald-300/80 -mt-1">Supreme Photosynthetic Edition</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-emerald-200/90">
          <a href="#product" className="hover:text-white transition">Product</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
          <a href="#guarantee" className="hover:text-white transition flex items-center gap-1">
            <Shield className="h-4 w-4" />
            Guarantee
          </a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400 px-5 py-2 text-emerald-950 font-semibold shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 transition">
          <Crown className="h-4 w-4" />
          Buy Now
        </button>
      </div>
    </header>
  );
};

export default Header;
