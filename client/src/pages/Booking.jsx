import { useEffect, useState } from "react";
import { getDaysInMonth, getDay } from "date-fns";
import MonthlyView from "../components/MonthlyView";
import BookingModal from "../components/BookingModal";

function Booking() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(getDaysInMonth(today));
  const [dayOfWeek, setDayOfWeek] = useState(getDay(today));

  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  const [isOpen, setIsOpen] = useState(false);

  function prevMonth() {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
    setCurrentYear((prev) => (currentMonth === 0 ? prev - 1 : prev));
  }
  function nextMonth() {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
    setCurrentYear((prev) => (currentMonth === 11 ? prev + 1 : prev));
  }

  function openModal() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    const currentDate = new Date(currentYear, currentMonth, 1);
    setDaysInMonth(getDaysInMonth(currentDate));
    setDayOfWeek(getDay(currentDate));
  }, [currentMonth]);

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
      {/* <Route path="/dayly" element={<DailyView />} /> */}
      <BookingModal
        isOpen={isOpen}
        onClose={onClose}
        appointments={appointments}
      />
    </>
  );
}

export default Booking;
