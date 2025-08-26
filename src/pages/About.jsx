import React from "react";
import StatsBand from "../sections/StatsBand.jsx";
import TeamSection from "../sections/TeamSection.jsx";
import TestimonialsSection from "../sections/TestimonialsSection.jsx";
import CTAQuote from "../sections/CTAQuote.jsx";
import pub1 from "../assets/about.png";
import pub2 from "../assets/about1.png";
import pub3 from "../assets/im.jpg";
import pub4 from "../assets/im1.webp";

export default function About() {
  return (
    <div>
      {/* HERO About */}
      <section className="relative">
        {/* Image de fond avec ratio responsable */}
        <img
          src={pub1}
          alt="Client heureux en laverie"
          className="w-full h-[46vh] min-h-[220px] max-h-[420px] object-cover"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/60" />

        {/* Contenu */}
        {/* <div className="container absolute inset-0 z-10 flex items-center">
          <div className="text-center md:text-left">
            <p className="text-xs sm:text-sm text-blue-100">/ About Us</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              About Us
            </h1>
          </div>
        </div> */}
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-8 md:py-12">
        {/* Sur mobile: image en 1er, texte en 2nd ; dès lg: 2 colonnes */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
          {/* Colonne image */}
          <div className="order-1 lg:order-2 card p-0 overflow-hidden">
            <div className="w-full aspect-[16/10] md:aspect-[5/4]">
              <img
                src={pub2}
                alt="Machines à laver modernes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Colonne texte */}
          <div className="order-2 lg:order-1 card p-5 sm:p-6 md:p-8">
            <p className="text-[11px] sm:text-xs uppercase tracking-wider text-blue-700 font-semibold">
              Plus de 10 ans d’expérience
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1">
              Pourquoi choisir <span className="text-orange-600">WashFinder</span> ?
            </h2>

            <blockquote className="mt-3 sm:mt-4 border-l-4 border-blue-600 pl-3 sm:pl-4 text-gray-700 italic text-sm sm:text-base">
              “Nous simplifions la recherche d’une laverie fiable, proche et disponible —
              pour vous faire gagner du temps.”
            </blockquote>

            <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-green-600" />
                Adresses claires et distances
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-600" />
                Itinéraire direct Google Maps
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-orange-500" />
                Interface rapide & moderne
              </li>
            </ul>

            {/* Duo d'images : pile en mobile, côte à côte dès sm */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <div className="w-full sm:w-1/2">
                <div className="w-full aspect-[4/3]">
                  <img
                    src={pub3}
                    alt="Opérateur en laverie"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2">
                <div className="w-full aspect-[4/3]">
                  <img
                    src={pub4}
                    alt="Tambour de machine à laver"
                    className="w-full h-full object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections suivantes */}
      <StatsBand />
      <TeamSection />
      <TestimonialsSection />
      <CTAQuote />
    </div>
  );
}
