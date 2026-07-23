import { useState } from "react";
import { Route, Routes } from "react-router-dom";

//* Styles imported
import "./styles/globals.css";

//* Pages and Components imported
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MonthlyView from "./components/MonthlyView";

function App() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
