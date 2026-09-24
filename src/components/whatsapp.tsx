import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51932432031"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        gap-1.5
        rounded-full
        bg-green-500
        text-sm
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-green-600
        sm:h-auto
        sm:w-auto
        sm:px-3
        sm:py-2
      "
    >
      <FaWhatsapp className="text-lg sm:text-base" />
      <span className="hidden sm:inline">Contáctanos</span>
    </a>
  );
}