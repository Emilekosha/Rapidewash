import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icônes burger / close

const linkBase =
  "block px-3 py-2 rounded-lg text-sm font-medium transition";
const linkActive = ({ isActive }) =>
  isActive
    ? `${linkBase} bg-blue-50 text-blue-700`
    : `${linkBase} hover:bg-gray-100`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-10 inset-x-0 z-40 bg-slate-100 backdrop-blur border-b border-gray-200">
      <div className="container h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-semibold text-lg tracking-tight flex items-center gap-2"
        >
          <span className="rounded-lg bg-blue-600 text-white px-2 py-0.5">
           Rapide
          </span>
          <span> Wash</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-1">
            <li>
              <NavLink to="/" className={linkActive}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/laveries" className={linkActive}>
                Laveries
              </NavLink>
            </li>
            <li>
              <NavLink to="/a-propos" className={linkActive}>
                À propos
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Bouton burger Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile (dropdown) */}
      {open && (
        <nav className="sm:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col p-2">
            <li>
              <NavLink
                to="/"
                className={linkActive}
                onClick={() => setOpen(false)}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/laveries"
                className={linkActive}
                onClick={() => setOpen(false)}
              >
                Laveries
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/a-propos"
                className={linkActive}
                onClick={() => setOpen(false)}
              >
                À propos
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
