import { personalInfo } from "../data.js";

export default function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-8 text-center text-sm text-ink/50 dark:text-[#EDE9F5]/50">
      © {new Date().getFullYear()} {personalInfo.name}. Built with React, Tailwind, and Framer Motion.
    </footer>
  );
}
