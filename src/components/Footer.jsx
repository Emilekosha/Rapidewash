import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-50">
      <div className="container py-10 grid md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold text-lg">WashFinder</h4>
          <p className="mt-2 text-sm opacity-90">
            Laveries proches, itinéraires rapides, disponibilité simulée.
          </p>
        </div>

        <div>
          <h5 className="font-semibold">Infos</h5>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>📞 +228 900 000 00</li>
            <li>✉️ contact@washfinder.example</li>
            <li>📍 Avenue Exemple, Lomé</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Horaires</h5>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>Lun – Sam : 8h – 19h</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Suivez-nous</h5>
          <ul className="mt-3 flex gap-3 text-sm opacity-90">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="container py-4 text-xs opacity-80">
          © {new Date().getFullYear()} WashFinder — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
