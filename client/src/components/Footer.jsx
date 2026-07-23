import React from "react";

function Footer() {
  return (
    <footer className="mx-2 border-t border-gray-400 mt-5 py-3 px-5 dark:text-white text-gray-950">
      <p className="text-xs flex flex-col items-center gap-1">
        <span>Horarios:</span>
        <span>Lunes - Viernes: 8:00 AM - 8:00 PM</span>
        <span>Sábados y Domingos: 10:00 AM - 4:00 PM</span>
      </p>
    </footer>
  );
}

export default Footer;
