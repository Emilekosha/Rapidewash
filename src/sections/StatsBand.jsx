import React from "react";

export default function StatsBand() {
  const stats = [
    { label: "Années d'expérience", value: "2+" },
    { label: "Clients satisfaits", value: "2.5k+" },
    { label: "Laveries référencées", value: "5k+" },
    { label: "Abonnés", value: "10k+" },
  ];
  return (
    <section className="band-muted">
      <div className="container py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-semibold">{s.value}</p>
              <p className="text-xs md:text-sm opacity-90">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
