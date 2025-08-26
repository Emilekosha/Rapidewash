import React, { useState } from "react";

function AvailabilityBadge({ availability }) {
  const [free, total] = availability.split("/").map((n) => parseInt(n, 10));
  const ratio = total > 0 ? free / total : 0;
  const color =
    ratio >= 0.6 ? "bg-green-100 text-green-700" :
    ratio >= 0.3 ? "bg-orange-100 text-orange-700" :
                   "bg-red-100 text-red-700";
  const label =
    ratio >= 0.6 ? "👍 Très dispo" :
    ratio >= 0.3 ? "⏳ Moyenne" :
                   "⚠️ Faible";
  return (
    <span className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium ${color}`}>
      <span className="hidden sm:inline">{label}</span>
      {availability} libres
    </span>
  );
}

export default function MachineCard({ m }) {
  const [showMap, setShowMap] = useState(false);
  const mapsQuery = encodeURIComponent(`${m.address}, ${m.city}`);

  return (
    <article className="card overflow-hidden flex flex-col">
      {/* image */}
      <div className="relative">
        <img src={m.imageUrl} alt={`Photo de ${m.name}`} className="h-44 w-full object-cover" loading="lazy" />
        <div className="absolute top-2 left-2 flex gap-2">
          <span className="rounded-md bg-blue-600 text-white text-xs px-2 py-1 shadow">Proche</span>
          <span className="rounded-md bg-white/90 text-gray-800 text-xs px-2 py-1 shadow border">{m.distance} km</span>
        </div>
      </div>

      {/* content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-tight">{m.name}</h3>
          <AvailabilityBadge availability={m.availability} />
        </div>

        <dl className="mt-2 space-y-1 text-sm text-gray-600">
          <div className="flex gap-2"><dt className="font-medium text-gray-700">Ville :</dt><dd>{m.city}</dd></div>
          <div className="flex gap-2"><dt className="font-medium text-gray-700">Adresse :</dt><dd>{m.address}</dd></div>
        </dl>

        <div className="mt-3 flex flex-wrap gap-2">
          <a
            className="inline-flex items-center rounded-xl bg-orange-500 text-white px-4 py-2 text-sm font-medium hover:bg-orange-600"
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank" rel="noreferrer"
          >
            Ouvrir dans Google Maps
          </a>
          <button
            onClick={() => setShowMap((v) => !v)}
            className="inline-flex items-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium hover:border-gray-400"
          >
            {showMap ? "Masquer la carte" : "Aperçu carte"}
          </button>
        </div>

        {showMap && (
          <div className="mt-3 rounded-lg overflow-hidden border">
            <iframe
              title={`Carte ${m.name}`}
              src={`https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%" height="200" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </article>
  );
}
