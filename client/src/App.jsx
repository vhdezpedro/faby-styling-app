import { Route, Routes } from "react-router-dom";

//* Pages and Components imported
import Home from "./pages/Home";
import Booking from "./pages/Booking";

//* Styles imported
import "./styles/globals.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute top-[-30%] left-[-10%] w-[70%] h-[70%] rounded-full bg-linear-to-br from-fuchsia-500/20 to-rose-500/0 blur-3xl" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[70%] h-[70%] rounded-full bg-linear-to-tl from-violet-500/20 to-indigo-500/0 blur-3xl" />
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
