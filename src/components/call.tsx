// components/CallButton.tsx
import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:+51932432031"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        gap-1.5
        rounded-full
        bg-[#01395c]
        text-sm
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#02507f]
        sm:h-auto
        sm:w-auto
        sm:px-3
        sm:py-2
      "
    >
      <FaPhoneAlt className="text-base sm:text-sm" />
      <span className="hidden sm:inline">Llamar</span>
    </a>
  );
}