import { motion } from "framer-motion";
import { personalInfo } from "../data.js";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* soft pastel background blobs */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-32 w-[26rem] h-[26rem] rounded-full bg-blush/50 dark:bg-blush-dark/40 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[24rem] h-[24rem] rounded-full bg-skyblue/50 dark:bg-skyblue-dark/40 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-[20rem] h-[20rem] rounded-full bg-sage/40 dark:bg-sage-dark/30 blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-5 sm:px-8 w-full"
      >
        <motion.p variants={item} className="text-sm text-plum dark:text-lavender font-medium mb-4">
          {personalInfo.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display font-extrabold text-4xl sm:text-6xl leading-[1.05] max-w-3xl text-ink dark:text-[#EDE9F5]"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg sm:text-xl max-w-xl text-ink/75 dark:text-[#EDE9F5]/75 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-8">
          <VerificationBadge />
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-plum text-white text-sm font-medium hover:bg-plum-light transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full border border-ink/15 dark:border-white/20 text-sm font-medium text-ink dark:text-[#EDE9F5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="px-5 py-2.5 rounded-full border border-ink/15 dark:border-white/20 text-sm font-medium text-ink dark:text-[#EDE9F5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// A small nod to what Riya actually builds: systems that check their own
// output before anyone trusts it. Runs once on load, then settles.
function VerificationBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white/60 dark:bg-nightcard/70 border border-ink/10 dark:border-white/10 text-sm text-ink/70 dark:text-[#EDE9F5]/70">
      <span className="relative w-5 h-5 flex items-center justify-center">
        <motion.span
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="absolute w-2 h-2 rounded-full bg-plum"
        />
        <motion.svg
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          className="absolute"
        >
          <path
            d="M2 7.5L5.2 10.5L12 3"
            stroke="#B9CCB2"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </span>
      <span>verified before it ships</span>
    </div>
  );
}
