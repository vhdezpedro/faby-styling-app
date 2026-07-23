import { createContext, useState } from "react";

export const BookingContext = createContext(null);

export default function BookingProvider({ children }) {
  return <BookingContext.Provider>{children}</BookingContext.Provider>;
}
