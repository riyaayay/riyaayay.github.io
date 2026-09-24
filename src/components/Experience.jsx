import { motion } from "framer-motion";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 sm:px-8 bg-white/50 dark:bg-nightcard/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl text-ink dark:text-[#EDE9F5] mb-14"
        >
          Experience
        </motion.h2>

        <ol className="relative border-l-2 border-lavender dark:border-lavender-dark pl-8 sm:pl-10 space-y-14">
          {experience.map((job, i) => (
            <motion.li
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] sm:-left-[2.85rem] top-1 w-3.5 h-3.5 rounded-full bg-plum ring-4 ring-cream dark:ring-nightbg" />

              <p className="text-sm text-plum dark:text-lavender font-medium">{job.period}</p>
              <h3 className="mt-1 font-display font-semibold text-xl text-ink dark:text-[#EDE9F5]">
                {job.role}
              </h3>
              <p className="text-ink/70 dark:text-[#EDE9F5]/70">
                {job.org} — {job.location}
              </p>

              <ul className="mt-4 space-y-2 max-w-2xl">
                {job.bullets.map((b, idx) => (
                  <li key={idx} className="text-ink/75 dark:text-[#EDE9F5]/75 leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-[0.65em] w-1.5 h-1.5 rounded-full bg-sage" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-skyblue/40 dark:bg-skyblue-dark/40 text-ink/70 dark:text-[#EDE9F5]/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
