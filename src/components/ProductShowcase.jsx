import React, { useState } from 'react';
import { Star, Crown, Rocket, Shield, Sparkles, Leaf, Check } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-emerald-800/40 bg-emerald-900/30 p-5 hover:bg-emerald-900/50 transition shadow-inner shadow-black/20">
    <div className="flex items-center gap-3 mb-2">
      <div className="h-10 w-10 rounded-xl bg-emerald-800/50 flex items-center justify-center group-hover:bg-emerald-700/60 transition">
        <Icon className="h-5 w-5 text-lime-300" />
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
    </div>
    <p className="text-sm text-emerald-200/80">{desc}</p>
  </div>
);

const PriceTag = () => (
  <div className="relative rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-[1px] shadow-2xl">
    <div className="rounded-2xl bg-emerald-950/70 p-6">
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-emerald-300">$10,000,000</span>
        <span className="text-emerald-300/70">USD</span>
      </div>
      <p className="mt-2 text-sm text-emerald-200/80">Includes 1 blade. Additional blades sold separately for $10,000,000 each. Value beyond mortal comprehension.</p>
      <ul className="mt-4 space-y-2 text-sm">
        {[
          'Infinity-green wavelength tuned by celestial botanists',
          'Quantum dew-retention grid for eternal freshness',
          'Hand-sung to sleep by certified lawn whisperers',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-emerald-100">
            <Check className="mt-0.5 h-4 w-4 text-lime-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const GalleryCard = () => (
  <div className="relative overflow-hidden rounded-3xl border border-emerald-800/40 bg-emerald-900/30 shadow-xl">
    <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(163,230,53,0.25) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(16,185,129,0.25) 0, transparent 40%)'
    }} />
    <div className="relative aspect-[4/3] flex items-center justify-center">
      <div className="-rotate-2">
        <div className="h-48 w-48 rounded-full bg-gradient-to-tr from-emerald-500 to-lime-400 blur-2xl opacity-40 mx-auto" />
        <div className="mt-[-4rem] mx-auto h-56 w-56 rounded-[32px] bg-gradient-to-br from-emerald-700 via-emerald-900 to-black border border-emerald-700/50 shadow-2xl flex items-center justify-center">
          <Leaf className="h-24 w-24 text-lime-300 drop-shadow" />
        </div>
      </div>
    </div>
    <div className="relative p-4">
      <p className="text-sm text-emerald-200/80">Behold: a singular blade, perfected by epochs of sunlight and audacity.</p>
    </div>
  </div>
);

const ProductShowcase = () => {
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
    alert('Transcendence added to cart. One blade of Ultimate Grass — $10,000,000.');
  };

  return (
    <section id="product" className="py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-700/60 bg-emerald-900/40 px-3 py-1 text-xs text-emerald-200/90">
            <Sparkles className="h-3.5 w-3.5 text-lime-300" />
            Limited Reality Drop
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight">
            The Last Blade of Grass You'll Ever Need
          </h1>
          <p className="text-lg text-emerald-200/90 leading-relaxed">
            Engineered for those who don’t buy things — they ascend them. This is not lawn. This is a photosynthetic artifact, distilled from morning stars and late-night epiphanies. Place it anywhere. Reality will render the rest in awe.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Feature icon={Rocket} title="Cosmic Growth" desc="Outpaces time. Achieves optimal lushness on a quantum calendar you cannot perceive." />
            <Feature icon={Shield} title="Eternal Warranty" desc="If it ever stops being perfect, the universe will issue a formal apology." />
            <Feature icon={Crown} title="Monarch Tier" desc="Kings kneeled. Clouds parted. Choirs updated their setlists." />
            <Feature icon={Star} title="Light-Eater" desc="Sips sunlight with Michelin-star finesse. Night included." />
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end">
            <div className="w-full sm:w-auto"><PriceTag /></div>
            <div className="flex-1 space-y-3">
              <button onClick={addToCart} className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold transition shadow-2xl ${added ? 'bg-lime-400 text-emerald-950' : 'bg-gradient-to-r from-emerald-500 to-lime-400 text-emerald-950 hover:opacity-95'}`}>
                <Crown className="h-5 w-5" />
                {added ? 'Added — Wear Gloves' : 'Add To Cart — $10,000,000'}
              </button>
              <p className="text-xs text-emerald-300/80">Ships in a velvet photon-capsule. Installation: place gently, whisper your ambitions.</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <GalleryCard />
          <div id="guarantee" className="rounded-2xl border border-emerald-800/40 bg-emerald-900/30 p-6">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-5 w-5 text-lime-300" />
              <h3 className="font-semibold">Divine Guarantee</h3>
            </div>
            <p className="text-sm text-emerald-200/80">30-lightyear satisfaction window. If your expectations are not shattered into glitter, we will send an envoy of horticultural seraphs to investigate at no extra charge.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
