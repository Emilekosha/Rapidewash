import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Laundries from "./pages/Laundries.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Header />
      <main className="flex-1 pt-28"> {/* Topbar 12 + Header 44px environ */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/laveries" element={<Laundries />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
