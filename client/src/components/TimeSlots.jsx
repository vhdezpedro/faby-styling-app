function TimeSlots({ selectedDate, onSelectTime, selectedTime }) {
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  const dateStr = selectedDate
    ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`
    : null;

  const bookedTimes = appointments
    .filter((a) => a.date === dateStr)
    .map((a) => a.time);

  const slots = [];
  for (let h = 8; h <= 22; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`);
    if (h < 22) {
      slots.push(`${String(h).padStart(2, "0")}:30`);
    }
  }

  function formatSlot(time) {
    const [h, m] = time.split(":");
    const hour = parseInt(h);
    const suffix = hour >= 12 ? "PM" : "AM";
    const h12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${h12}:${m} ${suffix}`;
  }

  function isBooked(time) {
    return bookedTimes.includes(time);
  }

  function isSelected(time) {
    return selectedTime === time;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {slots.map((slot) => {
        const booked = isBooked(slot);
        const selected = isSelected(slot);
        return (
          <button
            key={slot}
            onClick={() => !booked && onSelectTime(slot)}
            disabled={booked}
            className={`py-2 rounded-lg text-xs font-medium transition ${
              selected
                ? "bg-linear-to-r from-fuchsia-600 to-rose-600 text-white shadow-md"
                : booked
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed line-through"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 cursor-pointer"
            }`}
          >
            {formatSlot(slot)}
          </button>
        );
      })}
    </div>
  );
}

export default TimeSlots;
