import { Route, Routes } from "react-router-dom";

//* Styles imported
import "./styles/globals.css";

//* Context
import BookingProvider from "./contexts/BookingContext";

//* Pages and Components imported
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import Treatments from "./pages/Treatments";
import Schedule from "./pages/Schedule";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BookingProvider>
      <div className="relative overflow-hidden bg-white dark:bg-gray-950">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </div>
    </BookingProvider>
  );
}

export default App;
