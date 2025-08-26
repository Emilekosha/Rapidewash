import React from "react";

const team = [
  { name: "John Bravo", role: "CEO & Fondateur", photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop" },
  { name: "Mary Jane", role: "Opératrice", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" },
  { name: "George Hans", role: "Manager", photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop" },
];

function Card({ m }) {
  return (
    <article className="card overflow-hidden">
      <img src={m.photo} alt={m.name} className="h-56 w-full object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="font-semibold">{m.name}</h3>
        <p className="text-sm text-gray-600">{m.role}</p>
      </div>
    </article>
  );
}

export default function TeamSection() {
  return (
    <section className="container py-10 md:py-12">
      <div className="text-center mb-6">
        <p className="text-xs tracking-wider uppercase text-gray-500">Notre équipe</p>
        <h2 className="text-2xl md:text-3xl font-semibold">Our Skilled Team</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => <Card key={m.name} m={m} />)}
      </div>
    </section>
  );
}
