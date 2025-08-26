import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(term);
    const section = document.getElementById("results");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <form onSubmit={submit} className="mx-auto max-w-3xl mb-6" role="search" aria-label="Recherche">
      <div className="flex items-stretch gap-2">
        <label htmlFor="city" className="sr-only">Localisation</label>
        <input
          id="city"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Entrez une ville (ex. "Lomé, Togo")'
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none ring-0 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
        <button type="submit" className="rounded-xl px-5 py-3 bg-blue-600 text-white font-medium shadow-md hover:shadow-lg active:scale-95 transition">
          Rechercher
        </button>
      </div>
    </form>
  );
}
