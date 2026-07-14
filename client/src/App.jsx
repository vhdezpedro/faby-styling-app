import { Route, Routes } from "react-router-dom";

//* Pages and Components imported
import Home from "./pages/Home";
import Booking from "./pages/Booking";

//* Styles imported
import "./styles/globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { useState } from "react";

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
