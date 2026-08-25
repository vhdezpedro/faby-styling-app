import { useContext, useState } from "react";
import { BookingContext } from "../contexts/BookingContext.jsx";
import StepIndicator from "../components/StepIndicator";
import MiniCalendar from "../components/MiniCalendar";
import TimeSlots from "../components/TimeSlots";
import BookingConfirmation from "../components/BookingConfirmation";

function Schedule() {
  const {
    clientData,
    selectedTreatment,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  } = useContext(BookingContext);

  const [confirmed, setConfirmed] = useState(false);
  const [appointment, setAppointment] = useState(null);

  function handleSelectDate(date) {
    setSelectedDate(date);
    setSelectedTime(null);
  }

  function handleConfirm() {
    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;

    const newAppointment = {
      name: clientData.name,
      phone: clientData.phone,
      email: clientData.email,
      service: selectedTreatment.name,
      date: dateStr,
      time: selectedTime,
      duration: selectedTreatment.duration,
      price: selectedTreatment.price,
    };

    const existing = JSON.parse(localStorage.getItem("appointments")) || [];
    localStorage.setItem("appointments", JSON.stringify([...existing, newAppointment]));

    setAppointment(newAppointment);
    setConfirmed(true);
  }

  if (confirmed) {
    return <BookingConfirmation appointment={appointment} />;
  }

  return (
    <main className="min-h-screen dark:bg-gray-950 px-4 py-6 max-w-md mx-auto">
      <StepIndicator currentStep={3} />

      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">
        Elige Fecha y Hora
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Selecciona el día y la hora para tu cita.
      </p>

      {selectedTreatment && (
        <div className="mt-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            Tratamiento seleccionado
          </p>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-900 dark:text-white">
              {selectedTreatment.name}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {selectedTreatment.duration} min
            </span>
          </div>
        </div>
      )}

      <div className="mt-5">
        <MiniCalendar onSelectDate={handleSelectDate} selectedDate={selectedDate} />
      </div>

      {selectedDate && (
        <div className="mt-5">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Horarios disponibles
          </p>
          <TimeSlots
            selectedDate={selectedDate}
            onSelectTime={setSelectedTime}
            selectedTime={selectedTime}
          />
        </div>
      )}

      <div className="mt-6 pb-6">
        <button
          onClick={handleConfirm}
          disabled={!selectedDate || !selectedTime}
          className="w-full rounded-lg bg-linear-to-r from-fuchsia-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-750 ease-in-out active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 hover:scale-105"
        >
          Confirmar Reserva
        </button>
      </div>
    </main>
  );
}

export default Schedule;
