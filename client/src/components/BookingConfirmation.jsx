import { Link } from "react-router-dom";

function BookingConfirmation({ appointment }) {
  const dateStr = new Date(appointment.date + "T00:00:00").toLocaleDateString(
    "es-MX",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const [h, m] = appointment.time.split(":");
  const hour = parseInt(h);
  const suffix = hour >= 12 ? "PM" : "AM";
  const h12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  const timeStr = `${h12}:${m} ${suffix}`;

  return (
    <main className="min-h-screen dark:bg-gray-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10">
        <div className="bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-8 flex flex-col items-center">
          <svg
            className="w-16 h-16 text-white mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-2xl font-semibold text-white">Reserva Confirmada</h1>
          <p className="text-fuchsia-100 text-sm mt-1">Tu cita ha sido agendada</p>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
            <span className="text-sm text-gray-500 dark:text-gray-400">Cliente</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {appointment.name}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
            <span className="text-sm text-gray-500 dark:text-gray-400">Servicio</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {appointment.service}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
            <span className="text-sm text-gray-500 dark:text-gray-400">Fecha</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white capitalize">
              {dateStr}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
            <span className="text-sm text-gray-500 dark:text-gray-400">Hora</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {timeStr}
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
            <span className="text-sm text-gray-500 dark:text-gray-400">Duración</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {appointment.duration} min
            </span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Precio</span>
            <span className="text-lg font-semibold text-fuchsia-600 dark:text-fuchsia-400">
              ${appointment.price.toLocaleString("es-MX")}
            </span>
          </div>
        </div>

        <div className="px-6 pb-6">
          <Link
            to="/"
            className="block w-full rounded-lg bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-md text-center transition duration-750 ease-in-out active:scale-95 hover:scale-105"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

export default BookingConfirmation;
