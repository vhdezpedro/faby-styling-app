import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../contexts/BookingContext.jsx";
import { treatments } from "../data/treatments";
import StepIndicator from "../components/StepIndicator";
import TreatmentCard from "../components/TreatmentCard";

function Treatments() {
  const { setSelectedTreatment } = useContext(BookingContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = treatments.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSelect(treatment) {
    setSelected(treatment);
  }

  function handleContinue() {
    if (!selected) return;
    setSelectedTreatment(selected);
    navigate("/schedule");
  }

  return (
    <main className="min-h-screen dark:bg-gray-950 px-4 py-6 max-w-md mx-auto">
      <StepIndicator currentStep={2} />

      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">
        Elige tu Tratamiento
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Selecciona el servicio que deseas reservar.
      </p>

      <div className="relative mt-5">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar tratamiento..."
          className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 pl-10 pr-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
        />
      </div>

      <div className="mt-5 space-y-3">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            No se encontraron tratamientos.
          </p>
        ) : (
          filtered.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              isSelected={selected?.id === treatment.id}
              onSelect={handleSelect}
            />
          ))
        )}
      </div>

      <div className="mt-6 pb-6">
        <button
          onClick={handleContinue}
          disabled={!selected}
          className="w-full rounded-lg bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-750 ease-in-out active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover:scale-105"
        >
          Continuar
        </button>
      </div>
    </main>
  );
}

export default Treatments;
