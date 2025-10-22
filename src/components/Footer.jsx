import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-emerald-800/40 bg-emerald-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-emerald-300/90">
          <Leaf className="h-5 w-5" />
          <span className="text-sm">GRASS — Supreme Photosynthetic Edition</span>
        </div>
        <p className="text-xs text-emerald-300/70">© {new Date().getFullYear()} Verdant Hyperlux LLC. All improbable rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
