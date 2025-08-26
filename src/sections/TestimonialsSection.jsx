import React from "react";

const testimonials = [
  {
    name: "Jessica Febrina",
    text: "Interface claire, cartes utiles, et lien Maps immédiat. Très pratique quand on voyage.",
    avatar: "https://images.unsplash.com/photo-1544005316-04ae1f9b9293?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Morgan Behsaman",
    text: "J’aime la rapidité de la recherche par ville. Le design est pro et lisible.",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    name: "Yopee Jenish",
    text: "Les infos essentielles sont là. Les aperçus Google Maps sont un vrai plus.",
    avatar: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=200&auto=format&fit=crop",
    stars: 4,
  },
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "text-orange-500" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
}

function Card({ t }) {
  return (
    <article className="card p-5">
      <div className="flex items-center gap-3">
        <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <p className="font-medium">{t.name}</p>
          <Stars n={t.stars} />
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-700 leading-relaxed">{t.text}</p>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="container py-10 md:py-12">
      <div className="text-center mb-6">
        <p className="text-xs tracking-wider uppercase text-gray-500">Clients’ Testimonials</p>
        <h2 className="text-2xl md:text-3xl font-semibold">We Are Very Happy For Client’s Reviews</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">{testimonials.map((t) => <Card key={t.name} t={t} />)}</div>
    </section>
  );
}
