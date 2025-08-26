import React, { useMemo, useState } from "react";
import MachineList from "../components/MachineList.jsx";
import { machines as allMachines } from "../data/machines.js";

/* Utils */
const parseAvail = (str) => {
  const [f, t] = str.split("/").map((n) => parseInt(n, 10));
  return { free: f || 0, total: t || 0, ratio: (t || 0) ? f / t : 0 };
};

export default function Laundries() {
  /* STATE MENU / FILTRES */
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("all"); // all | near | available
  const [maxKm, setMaxKm] = useState(20);
  const [minRatio, setMinRatio] = useState(0); // 0, 0.3, 0.6
  const [sort, setSort] = useState("distance"); // distance | availability | name

  /* FILTRE + TRI */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let arr = allMachines.filter((m) => {
      const { ratio } = parseAvail(m.availability);
      const matchQ = !q || (`${m.name} ${m.city} ${m.address}`).toLowerCase().includes(q);
      const matchTab =
        tab === "all" ||
        (tab === "near" && m.distance <= 3) ||
        (tab === "available" && ratio >= 0.5);

      const matchKm = m.distance <= maxKm;
      const matchRatio = ratio >= minRatio;

      return matchQ && matchTab && matchKm && matchRatio;
    });

    if (sort === "distance") arr.sort((a, b) => a.distance - b.distance);
    if (sort === "availability")
      arr.sort((a, b) => parseAvail(b.availability).ratio - parseAvail(a.availability).ratio);
    if (sort === "name") arr.sort((a, b) => a.name.localeCompare(b.name));

    return arr;
  }, [query, tab, maxKm, minRatio, sort]);

  return (
    <div>
      {/* BANNER */}
      <section className="relative mb-20">
        <div className="h-40 w-full bg-gradient-to-r from-blue-900 to-blue-700"></div>
        <div className="container absolute inset-0 flex items-center ">
          <div className="text-white">
           
            <h1 className="text-2xl md:text-6xl font-semibold text-center">Laveries près de chez vous</h1>
            <p className="text-blue-100 text-sm md:text-lg mt-2 text-center">
              Filtrez par ville, distance et disponibilité. Ouvrez l’itinéraire dans Google Maps.
            </p>
          </div>
        </div>
      </section>

      {/* MENU / FILTERS */}
      <section className="container -mt-6 md:-mt-8">
        <div className="card p-3 md:p-4">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setTab("all")}
              className={`px-3 py-2 rounded-lg text-sm font-medium border ${
                tab === "all"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setTab("near")}
              className={`px-3 py-2 rounded-lg text-sm font-medium border ${
                tab === "near"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-green-700 border-green-200 hover:bg-green-50"
              }`}
            >
              Proches (&le; 3 km)
            </button>
            <button
              onClick={() => setTab("available")}
              className={`px-3 py-2 rounded-lg text-sm font-medium border ${
                tab === "available"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-orange-600 border-orange-200 hover:bg-orange-50"
              }`}
            >
              Bien disponibles (&ge; 50%)
            </button>

            {/* Search */}
            <div className="ms-auto w-full sm:w-64">
              <label htmlFor="q" className="sr-only">Rechercher une ville</label>
              <input
                id="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Entrez une ville (ex. "Lomé")'
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* sliders & select */}
          <div className="mt-3 grid sm:grid-cols-3 gap-3">
            <div className="card p-3">
              <label className="text-xs font-medium text-gray-700">Distance max (km)</label>
              <div className="flex items-center gap-3 mt-1">
                <input
                  type="range" min={1} max={30} value={maxKm}
                  onChange={(e) => setMaxKm(parseInt(e.target.value, 10))}
                  className="w-full"
                />
                <span className="text-sm font-medium">{maxKm}</span>
              </div>
            </div>

            <div className="card p-3">
              <label className="text-xs font-medium text-gray-700">Disponibilité min</label>
              <div className="flex items-center gap-2 mt-1">
                {[
                  { v: 0, label: "0%" , cls: "border-blue-200 text-blue-700 hover:bg-blue-50" },
                  { v: 0.3, label: "30%" , cls: "border-orange-200 text-orange-600 hover:bg-orange-50" },
                  { v: 0.6, label: "60%" , cls: "border-green-200 text-green-700 hover:bg-green-50" },
                ].map((opt) => (
                  <button
                    key={opt.v}
                    onClick={() => setMinRatio(opt.v)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border ${
                      minRatio === opt.v
                        ? (opt.v === 0.6
                            ? "bg-green-600 text-white border-green-600"
                            : opt.v === 0.3
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-blue-600 text-white border-blue-600")
                        : opt.cls
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="card p-3">
              <label htmlFor="sort" className="text-xs font-medium text-gray-700">Trier par</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
              >
                <option value="distance">Distance</option>
                <option value="availability">Disponibilité</option>
                <option value="name">Nom (A→Z)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* LISTE */}
      <section className="container py-6">
        <div className="mb-3 text-sm text-gray-600">
          {filtered.length} résultat{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
        </div>
        <MachineList machines={filtered} />
      </section>
    </div>
  );
}
