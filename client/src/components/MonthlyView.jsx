import React, { useContext } from "react";
import { daysOfWeek, monthsOfYear } from "../utils/dateArrays";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../contexts/BookingContext";
import DaySquare from "../components/DaySquare";

function MonthlyView({
  currentMonth,
  currentYear,
  prevMonth,
  nextMonth,
  dayOfWeek,
  daysInMonth,
  openModal,
  appointments,
}) {
  return (
    <main className="dark:text-white text-gray-950 relative">
      <button
        onClick={openModal}
        className="absolute dark:text-white bg-linear-to-r from-fuchsia-600 to-rose-600 w-10 aspect-square rounded-lg flex bottom-5 right-5 justify-center items-center text-4xl font-light"
      >
        +
      </button>

      <div className="flex justify-between px-10 items-center h-10 mt-2 z-100">
        <div onClick={prevMonth}>{"<"}</div>
        <div>
          {monthsOfYear[currentMonth]}, {currentYear}
        </div>
        <div onClick={nextMonth}>{">"}</div>
      </div>
      <div className="grid grid-cols-7 gap-1 mx-2">
        {daysOfWeek.map((day, index) => {
          return (
            <div key={`daysWeek-${index}`} className="text-xs p-2 text-center">
              {day}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-7 gap-1 mx-2">
        {Array.from({ length: dayOfWeek }, (_, i) => {
          return (
            <div
              key={`empty-square-${i}`}
              className="aspect-2/3 rounded-sm m-0.5"
            ></div>
          );
        })}
        {Array.from({ length: daysInMonth }, (_, day) => {
          return (
            <DaySquare
              key={`day-square-${day}`}
              day={day}
              appointnments={appointments}
            />
          );
        })}
      </div>
    </main>
  );
}

export default MonthlyView;
