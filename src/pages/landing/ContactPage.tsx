import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import contactImage from "../../assets/service-1.webp"; 

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* === Texto e Información === */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Contáctanos
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Si tienes alguna consulta o quieres trabajar con nosotros, puedes
            comunicarte a través de cualquiera de los siguientes medios.
            Estaremos encantados de ayudarte.
          </p>

          {/* Tarjetas de contacto */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <FaEnvelope className="text-[#3f9dc8] text-2xl mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Correo</h4>
                <a
                  href="mailto:ventas@mc-consultoria.com"
                  className="text-[#01395c] hover:underline"
                >
                  ventas@mc-consultoria.com
                </a>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <FaPhoneAlt className="text-[#3f9dc8] text-2xl mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">Teléfono</h4>
                <p className="text-gray-700">+51 932432031</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
              <FaWhatsapp className="text-green-500 text-2xl mr-4" />
              <div>
                <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                <a
                  href="https://wa.me/51932432031?text=Hola%20quiero%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Botón de acción principal */}
          <a
            href="https://wa.me/51932432031?text=Hola%20quiero%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>

        {/* === Imagen decorativa === */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={contactImage}
            alt="Contáctanos"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
