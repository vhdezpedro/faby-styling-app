import { useState } from "react";
import { getDaysInMonth, getDay, isBefore, startOfDay } from "date-fns";
import { daysOfWeek, monthsOfYear } from "../utils/dateArrays";

function MiniCalendar({ onSelectDate, selectedDate }) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const currentDate = new Date(currentYear, currentMonth, 1);
  const daysInMonth = getDaysInMonth(currentDate);
  const dayOfWeek = getDay(currentDate);
  const todayStart = startOfDay(today);

  function prevMonth() {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  }

  function nextMonth() {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  }

  function handleSelectDay(day) {
    const date = new Date(currentYear, currentMonth, day + 1);
    if (isBefore(date, todayStart)) return;
    onSelectDate(date);
  }

  function isPastDay(day) {
    const date = new Date(currentYear, currentMonth, day + 1);
    return isBefore(date, todayStart);
  }

  function isSelectedDay(day) {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day + 1 &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={prevMonth}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {"<"}
        </button>
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          {monthsOfYear[currentMonth]} {currentYear}
        </span>
        <button
          onClick={nextMonth}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {">"}
        </button>
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {daysOfWeek.map((day, i) => (
          <div key={`head-${i}`} className="text-[10px] text-center py-1 text-gray-500 dark:text-gray-400 font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5">
        {Array.from({ length: dayOfWeek }, (_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i;
          const past = isPastDay(day);
          const selected = isSelectedDay(day);
          return (
            <button
              key={`day-${day}`}
              onClick={() => handleSelectDay(day)}
              disabled={past}
              className={`aspect-square rounded-lg flex items-center justify-center text-sm transition ${
                selected
                  ? "bg-fuchsia-600 text-white font-semibold"
                  : past
                    ? "text-gray-300 dark:text-gray-700 cursor-not-allowed"
                    : "text-gray-700 dark:text-gray-300 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 cursor-pointer"
              }`}
            >
              {day + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MiniCalendar;
