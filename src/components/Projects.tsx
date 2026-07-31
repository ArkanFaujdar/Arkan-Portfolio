"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExternalIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
  </svg>
);

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: { name: string; color: string }[];
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Kalolytic Audit and Compliance Software",
    category: "Company",
    description:
      "A banking software solution focused on processing audits and compliance tasks, widely used by banking institutions.",
    tags: [
      {
        name: "React.js",
        color:
          "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800",
      },
      {
        name: "MUI",
        color:
          "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800",
      },
      {
        name: "Tailwind",
        color:
          "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800",
      },
      {
        name: "VAPT",
        color:
          "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800",
      },
    ],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "SPRK Technologies Portal",
    category: "Company",
    description:
      "Web portal developed to streamline operations for the institute. With this portal information related to firm's activities, employees and students is maintained.",
    tags: [
      {
        name: "React.js",
        color:
          "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800",
      },
      {
        name: "MUI",
        color:
          "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800",
      },
      {
        name: "Git/Github",
        color:
          "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800",
      },
      {
        name: "API Integration",
        color:
          "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-800",
      },
    ],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Inventotrack",
    category: "Self",
    description:
      "Enables seamless tracking, updating, and organization of inventory data, improving overall operational efficiency with the help of cloud storage",
    tags: [
      {
        name: "React.js",
        color:
          "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800",
      },
      {
        name: "Firebase",
        color:
          "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800",
      },
      {
        name: "Tailwind",
        color:
          "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800",
      },
      {
        name: "MUI",
        color:
          "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 border-violet-200 dark:border-violet-800",
      },
    ],
    link: "https://arkanfaujdar-inventotrack.netlify.app/",
    github: "#",
  },
];

const categories = ["All", "Company", "Self"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );

  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-5 sm:py-12 scroll-mt-16"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-zinc-100">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 mt-2">
            Interactive web applications and experimental builds.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-[#16181d] border border-slate-200 dark:border-[#232730] rounded-xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-4 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                filter === cat
                  ? "text-slate-900 dark:text-zinc-100"
                  : "text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-white dark:bg-[#232730] rounded-lg shadow-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-[#16181d] border border-slate-200 dark:border-[#232730] hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all shadow-md dark:shadow-none"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex gap-3 ">
                    {project.github != "#" && (
                      <a
                        href={project.github}
                        aria-label="GitHub"
                        className="group-hover:text-slate-900 dark:group-hover:text-zinc-100 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.link != "#" && (
                      <a
                        href={project.link}
                        aria-label="Live Demo"
                        className="group-hover:text-slate-900 dark:group-hover:text-zinc-100 transition-colors"
                      >
                        <ExternalIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-zinc-400 text-sm mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md border ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
