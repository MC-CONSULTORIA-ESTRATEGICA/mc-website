import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Contenido dinámico de cada página */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer fijo abajo */}
      <Footer />
    </div>
  );
}
