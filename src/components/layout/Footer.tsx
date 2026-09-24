import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "../../assets/logo_white.webp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#01395c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="MC Consultores" style={{ height: 100 }} />            </div>
            <p className="text-gray-300 mb-4">
              Consultora especializada en el sector minero, brindando soluciones
              integrales para el desarrollo sostenible de proyectos mineros.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-[#3f9dc8]" />
                <span className="text-gray-300">Lima, Perú</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#3f9dc8]" />
                <span className="text-gray-300">+51 932432031</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#3f9dc8]" />
                <span className="text-gray-300">ventas@mc-consultoria.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Consultoría Minera</li>
              <li>Reconciliación Minera</li>
              <li>Base de Datos QAQC</li>
              <li>Estimación de Recursos y reservas</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Horarios</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-[#3f9dc8]" />
                <div>
                  <p>Lun - Vie: 8:00 - 18:00</p>
                  <p>Sáb: 8:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {year} MC Consultores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
