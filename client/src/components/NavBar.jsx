import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="px-5 py-4 border-b border-gray-400 flex justify-between mx-2 bg-transparent dark:text-white text-gray-950">
        <h2 className="md:text-2xl text-xl">Faby's Styling</h2>
        <div className="flex gap-2 text-xs md:text-base items-center">
          <Link to="/">Inicio</Link>
          <Link to="/#gallery">Galería</Link>
          <Link
            to="/register"
            className="rounded-3xl bg-linear-to-r from-fuchsia-600 to-rose-600 px-2.5 py-1.5 font-semibold text-white shadow-lg transition duration-750 ease-in-out hover:scale-105 cursor-pointer"
          >
            Reserva tu cita
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
