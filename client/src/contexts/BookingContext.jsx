import { useState } from "react";
import BookingContext from "./bookingCtx.js";

export { BookingContext };

export default function BookingProvider({ children }) {
  const [clientData, setClientData] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <BookingContext.Provider
      value={{
        clientData,
        setClientData,
        selectedTreatment,
        setSelectedTreatment,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
