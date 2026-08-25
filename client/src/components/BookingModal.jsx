import React, { useContext } from "react";
import { areIntervalsOverlapping, format, isToday } from "date-fns";
import { es } from "date-fns/locale";
import { useForm } from "react-hook-form";

function BookingModal({ isOpen, onClose, appointments }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const newAppointment = data;
    appointments.push(newAppointment);

    localStorage.setItem("appointments", JSON.stringify(appointments));
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-2/3 max-w-lg overflow-hidden rounded-2xl bg-white dark:bg-gray-950 shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10">
        <div className="bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white tracking-tight">
            Agenda tu Experiencia
          </h2>
          <p className="text-fuchsia-100 text-sm">
            Estás a un paso de resaltar tu belleza.
          </p>
        </div>

        <form className="p-6 space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              {...register("name", { required: "Es requerido" })}
              placeholder="Ej. Valeria García"
              className="w-full rounded-lg border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-1 text-gray-900 dark:text-white focus:ring focus:ring-fuchsia-500 outline-none transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Es requerido",
                  minLength: {
                    value: 10,
                    message: "Ingresa un número de 10 dígitos",
                  },
                  maxLength: {
                    value: 10,
                    message: "Ingresa un número de 10 dígitos",
                  },
                })}
                placeholder="5512345678"
                className="w-full rounded-lg border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-1 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
              />
            </div>

            {/* Servicio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Servicio
              </label>
              <select
                {...register("service")}
                className="w-full rounded-lg border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-1 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
              >
                <option>Corte y Estilo</option>
                <option>Colorimetría</option>
                <option>Tratamiento Capilar</option>
                <option>Peinado Especial</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Fecha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Fecha
              </label>
              <input
                type="date"
                {...register("date", {
                  required: "Es requerido",
                })}
                className="w-full rounded-lg border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-1 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
              />
            </div>

            {/* Hora */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Hora
              </label>
              <input
                type="time"
                {...register("time", { required: "Es requerido" })}
                className="w-full rounded-lg border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-4 py-1 text-gray-900 dark:text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
              />
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-2 text-sm font-semibold text-white shadow-md hover:scale-105 transition duration-750 ease-in-out active:scale-95"
            >
              Confirmar Cita
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
