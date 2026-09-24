import { motion } from "framer-motion";
import { personalInfo } from "../data.js";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto rounded-xl2 bg-lavender/30 dark:bg-lavender-dark/25 px-6 sm:px-12 py-14 text-center"
      >
        <h2 className="font-display font-bold text-3xl text-ink dark:text-[#EDE9F5]">
          Let's talk
        </h2>
        <p className="mt-3 text-ink/70 dark:text-[#EDE9F5]/75 max-w-md mx-auto">
          Open to internships, collaborations, or just a conversation about verified RAG and bias auditing.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-6 py-3 rounded-full bg-plum text-white text-sm font-medium hover:bg-plum-light transition-colors"
          >
            Email me
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-ink/15 dark:border-white/20 text-sm font-medium text-ink dark:text-[#EDE9F5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-ink/15 dark:border-white/20 text-sm font-medium text-ink dark:text-[#EDE9F5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
