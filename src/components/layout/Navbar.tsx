import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo_mc.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm h-16">
      <div className="w-full flex items-center h-full">
        <div
          className="flex items-center justify-center flex-shrink-0 h-full"
          style={{
            width: "clamp(200px, 40%, 420px)", 
            background: "#01395c",
            clipPath: "polygon(0 0, 100% 0, 89% 100%, 0 100%)",
            WebkitClipPath: "polygon(0 0, 100% 0, 89% 100%, 0 100%)",
          }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="MC Consultores"
              className="h-9 sm:h-10 md:h-12 lg:h-14 object-contain" 
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-6 ml-auto mr-6">
          <Link to="/inicio" className="text-gray-800 hover:text-[#3f9dc8] transition-colors">Inicio</Link>
          <Link to="/nosotros" className="text-gray-800 hover:text-[#3f9dc8] transition-colors">Nosotros</Link>
          <Link to="/servicios" className="text-gray-800 hover:text-[#3f9dc8] transition-colors">Servicios</Link>
          <Link to="/blog" className="text-gray-800 hover:text-[#3f9dc8] transition-colors">Blog</Link>
          <Link to="/contacto" className="text-gray-800 hover:text-[#3f9dc8] transition-colors">Contáctanos</Link>
        </div>


        <div className="lg:hidden ml-auto mr-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 space-y-2 shadow-md">
          <Link to="/inicio" className="block text-gray-800 hover:text-[#3f9dc8] transition-colors" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/nosotros" className="block text-gray-800 hover:text-[#3f9dc8] transition-colors" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <Link to="/servicios" className="block text-gray-800 hover:text-[#3f9dc8] transition-colors" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link to="/blog" className="block text-gray-800 hover:text-[#3f9dc8] transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contacto" className="block text-gray-800 hover:text-[#3f9dc8] transition-colors" onClick={() => setIsOpen(false)}>Contáctanos</Link>
        </div>
      )}
    </nav>
  );
}
