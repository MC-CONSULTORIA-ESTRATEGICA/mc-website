// components/LinkedInButton.tsx
import { FaLinkedin } from "react-icons/fa";

export default function LinkedInButton() {
  return (
    <a
      href="https://www.linkedin.com/company/mc-consultoria-estrategica/"
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
        bg-[#0A66C2]
        text-sm
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#004182]
        sm:h-auto
        sm:w-auto
        sm:px-3
        sm:py-2
      "
    >
      <FaLinkedin className="text-lg sm:text-base" />
      <span className="hidden sm:inline">LinkedIn</span>
    </a>
  );
}