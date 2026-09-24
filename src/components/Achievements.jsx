import { motion } from "framer-motion";
import { achievements } from "../data.js";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-5 sm:px-8 bg-white/50 dark:bg-nightcard/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl text-ink dark:text-[#EDE9F5] mb-12"
        >
          Achievements
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl2 border border-ink/10 dark:border-white/10 bg-cream dark:bg-nightbg p-6"
            >
              <h3 className="font-display font-semibold text-ink dark:text-[#EDE9F5]">
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-ink/70 dark:text-[#EDE9F5]/70 leading-relaxed">
                {a.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
