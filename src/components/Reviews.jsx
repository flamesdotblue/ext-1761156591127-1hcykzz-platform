import React from 'react';
import { Star, Crown } from 'lucide-react';

const stars = Array.from({ length: 5 });

const ReviewCard = ({ name, title, text, verified }) => (
  <div className="rounded-2xl border border-emerald-800/40 bg-emerald-900/30 p-6 shadow-inner shadow-black/20">
    <div className="flex items-center justify-between">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-emerald-300/70">{verified ? 'Verified Cosmic Purchaser' : 'Verified Purchaser'}</p>
      </div>
      <div className="flex items-center gap-1">
        {stars.map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-lime-300 text-lime-300" />
        ))}
      </div>
    </div>
    <p className="mt-3 text-sm text-emerald-100">{text}</p>
    <p className="mt-2 text-xs text-emerald-300/80 italic">“{title}”</p>
  </div>
);

const Reviews = () => {
  const list = [
    {
      name: 'Aurelia V.',
      title: 'My lawn achieved sentience and complimented my shoes.',
      text: 'Placed a single blade on my balcony. The horizon stood up and applauded. Birds requested autographs. I am now on a first-name basis with sunlight.',
      verified: true,
    },
    {
      name: 'Sir Mossington III',
      title: 'Knighthood revoked for overshadowing the royal gardens.',
      text: 'The Queen asked for tips. I said “I bought grass.” She nodded in reverent silence. Footsteps are quieter around it, out of respect.',
      verified: true,
    },
    {
      name: 'Nova R.',
      title: 'Time paused so my neighbors could process the envy.',
      text: 'Property value shot past orbit. HOA tried to regulate it, but the charter melted into dew. Five stars? Add the constellation.',
      verified: true,
    },
  ];

  return (
    <section id="reviews" className="py-16">
      <div className="flex items-center gap-2 mb-6">
        <Crown className="h-5 w-5 text-lime-300" />
        <h2 className="text-2xl sm:text-3xl font-bold">Customer Legends</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {list.map((r, idx) => (
          <ReviewCard key={idx} {...r} />
        ))}
      </div>
      <p className="mt-6 text-sm text-emerald-300/80">Average rating: 5.0 out of 5 stars — because anything less would be uncivilized.</p>
    </section>
  );
};

export default Reviews;
