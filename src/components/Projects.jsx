import { motion } from "framer-motion";
import { projects } from "../data.js";

const spanClasses = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-1 md:row-span-1",
  sm: "md:col-span-1 md:row-span-1",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl text-ink dark:text-[#EDE9F5] mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:auto-rows-[1fr]">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} className={spanClasses[project.size]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, className }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between rounded-xl2 border border-ink/10 dark:border-white/10 bg-white/70 dark:bg-nightcard/70 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div>
        <h3 className="font-display font-semibold text-xl text-ink dark:text-[#EDE9F5]">
          {project.name}
        </h3>
        <p className="mt-1.5 text-ink/70 dark:text-[#EDE9F5]/70">{project.tagline}</p>

        <p className="mt-4 text-sm leading-relaxed text-ink/65 dark:text-[#EDE9F5]/65 max-w-md opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 group-focus-within:opacity-100 group-focus-within:max-h-40 transition-all duration-300 overflow-hidden">
          {project.description}
        </p>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-full bg-blush/40 dark:bg-blush-dark/40 text-ink/70 dark:text-[#EDE9F5]/80"
            >
              {s}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.name} on GitHub`}
          className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-lavender/50 dark:bg-lavender-dark/50 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 hover:!bg-plum transition-all"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            className="text-ink/70 dark:text-[#EDE9F5]/80 group-hover:[&_path]:fill-white transition-colors"
          >
            <path
              d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}
