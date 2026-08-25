import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BookingContext } from "../contexts/BookingContext.jsx";
import TermsModal from "../components/TermsModal";

function Register() {
  const { setClientData } = useContext(BookingContext);
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setClientData(data);
    navigate("/treatments");
  }

  return (
    <main className="min-h-screen dark:bg-gray-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10">
        <div className="bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-5">
          <h1 className="text-2xl font-semibold text-white tracking-tight">
            Regístrate
          </h1>
          <p className="text-fuchsia-100 text-sm mt-1">
            Crea tu cuenta para agendar tu cita.
          </p>
        </div>

        <form className="p-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              {...register("name", { required: "El nombre es requerido" })}
              placeholder="Ej. Valeria García"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              {...register("phone", {
                required: "El teléfono es requerido",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Ingresa un número de 10 dígitos",
                },
              })}
              placeholder="5512345678"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              {...register("email", {
                required: "El correo es requerido",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingresa un correo válido",
                },
              })}
              placeholder="ejemplo@correo.com"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 px-4 py-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none transition"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-fuchsia-500"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Acepto los{" "}
              <button
                type="button"
                onClick={() => setIsTermsOpen(true)}
                className="text-fuchsia-600 hover:text-fuchsia-500 font-medium underline"
              >
                Términos y Condiciones
              </button>
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={!acceptedTerms}
              className="w-full rounded-lg bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-750 ease-in-out active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover:scale-105"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </main>
  );
}

export default Register;
