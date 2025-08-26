import React from "react";
import { Link } from "react-router-dom";

export default function CTAQuote() {
  return (
    <section className="band">
      <div className="container py-8 md:py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">Get a Price Quote Today!</h3>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Obtenez une estimation rapide pour votre prochaine lessive.
          </p>
        </div>
        <div className="flex md:justify-end">
          <Link to="/laveries" className="inline-flex items-center rounded-xl bg-orange-500 text-white px-5 py-3 font-medium hover:bg-orange-600">
            Get A Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
