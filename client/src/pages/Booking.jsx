import { useState } from "react";
import { getDaysInMonth, getDay } from "date-fns";
import MonthlyView from "../components/MonthlyView";
import BookingModal from "../components/BookingModal";

function Booking() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const currentDate = new Date(currentYear, currentMonth, 1);
  const daysInMonth = getDaysInMonth(currentDate);
  const dayOfWeek = getDay(currentDate);

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  const [isOpen, setIsOpen] = useState(false);

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

  function openModal() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <MonthlyView
        currentMonth={currentMonth}
        currentYear={currentYear}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        daysInMonth={daysInMonth}
        dayOfWeek={dayOfWeek}
        openModal={openModal}
        appointments={appointments}
      />
      <BookingModal
        isOpen={isOpen}
        onClose={onClose}
        appointments={appointments}
      />
    </>
  );
}

export default Booking;
