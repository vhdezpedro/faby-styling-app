import { createContext, useState } from "react";

export const BookingContext = createContext(null);

export default function BookingProvider({ children }) {
  const [clientData, setClientData] = useState(null);

  return (
    <BookingContext.Provider value={{ clientData, setClientData }}>
      {children}
    </BookingContext.Provider>
  );
}
