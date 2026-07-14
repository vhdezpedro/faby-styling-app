import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      {/* Hero  */}
      <section>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            {/* Badge con efecto Glassmorphism (backdrop-blur) */}
            <div className="flex border border-fuchsia-500/20 bg-white/5 backdrop-blur-md px-3 py-1 text-sm leading-6 text-fuchsia-600 rounded-full w-fit mb-6">
              Nuevas tendencias de verano 2026
            </div>

            <h1 className="text-4xl font-semibold tracking-tighter text-gray-950 dark:text-white sm:text-6xl text-balance">
              Realza tu belleza natural con{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-600 to-rose-600">
                Faby Styling
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 text-balance">
              Expertos en colorimetría, peinados de vanguardia y tratamientos
              capilares de lujo. Reserva tu cita online y vive la experiencia
              que mereces.
            </p>
            <div className="mt-6 flex justify-end pr-20">
              <Link
                to="/#catalog"
                href="#servicios"
                className="text-sm font-semibold leading-6 text-gray-950 dark:text-white hover:text-fuchsia-600 transition-colors"
              >
                Ver Catálogo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Espacio para imagen con 3D transforms opcionales */}
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition duration-750 ease-out hover:rotate-2">
              <img
                src="/hero-salon.jpg"
                alt="Salón de belleza Faby Styling"
                className="w-full aspect-4/3 object-cover lg:aspect-auto lg:h-150"
              />
              {/* Overlay sutil para profundidad */}
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
