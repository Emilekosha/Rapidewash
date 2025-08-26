import React from "react";
import MachineCard from "./MachineCard.jsx";

export default function MachineList({ machines }) {
  return (
    <section id="results" className="mb-10">
      {machines.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-gray-700 font-medium">Aucun résultat</p>
          <p className="text-gray-500 text-sm mt-1">Essayez une autre ville.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((m) => <MachineCard key={m.id} m={m} />)}
        </div>
      )}
    </section>
  );
}
