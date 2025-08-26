import React from "react";

export default function Topbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-blue-900 text-white">
      <div className="container h-10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <span>📞 +228 900 000 00</span>
          <span>✉️ contact@washfinder.example</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Twitter
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a
            href="/laveries"
            className="ml-2 inline-flex items-center rounded-lg bg-orange-500 text-white px-3 py-1.5 text-xs font-medium hover:bg-orange-600"
          >
            Book Now
          </a>
        </div>
        <div className="flex sm:hidden items-center gap-2">
          <a href="#" aria-label="Facebook">
            📘
          </a>
          <a href="#" aria-label="Twitter">
            🐦
          </a>
          <a href="#" aria-label="Instagram">
            📸
          </a>
        </div>
      </div>
    </div>
  );
}
