import { motion } from "framer-motion";
import { about } from "../data.js";

export default function About() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl text-ink dark:text-[#EDE9F5]"
        >
          About
        </motion.h2>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-lg leading-relaxed text-ink/80 dark:text-[#EDE9F5]/80 max-w-xl"
          >
            {about.paragraph}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {about.focusAreas.map((area) => (
              <li
                key={area}
                className="text-sm px-3.5 py-1.5 rounded-full bg-sage/40 dark:bg-sage-dark/40 text-ink/80 dark:text-[#EDE9F5]/85"
              >
                {area}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
