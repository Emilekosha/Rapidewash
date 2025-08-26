import React from "react";
import { Link } from "react-router-dom";
import StatsBand from "../sections/StatsBand.jsx";
import CTAQuote from "../sections/CTAQuote.jsx";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1503594923172-c9c2e02d1b1b?q=80&w=2000&auto=format&fit=crop"
          alt="" className="h-72 md:h-96 w-full object-cover" loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/30"></div>
        <div className="container absolute inset-0 flex items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold text-white max-w-2xl leading-tight">
              Trouvez des <span className="text-orange-400">laveries</span> proches, rapidement.
            </h1>
            <p className="mt-3 text-blue-100 max-w-xl">
              Filtrez par ville, voyez la disponibilité, ouvrez l’itinéraire dans Google Maps.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/laveries" className="btn-primary">Voir les laveries</Link>
              <Link to="/a-propos" className="btn-outline text-white border-white/70 hover:border-white">En savoir plus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES/USP compacts */}
      <section className="container py-8 md:py-10">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-5">
            <h3 className="font-semibold">🔎 Recherche simple</h3>
            <p className="mt-2 text-sm text-gray-600">Filtez par ville et comparez adresse, distance, disponibilité.</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">🗺️ Google Maps</h3>
            <p className="mt-2 text-sm text-gray-600">Ouverture d’itinéraire en un clic + aperçu intégré.</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold">📱 Responsive</h3>
            <p className="mt-2 text-sm text-gray-600">Design moderne, rapide et lisible sur mobile et desktop.</p>
          </div>
        </div>
      </section>

      <StatsBand />
      <CTAQuote />
    </div>
  );
}
