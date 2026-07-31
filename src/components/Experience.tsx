"use client";

import { motion } from "framer-motion";

// Icons
const GitCommitIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="4" />
    <line x1="1.05" x2="8" y1="12" y2="12" />
    <line x1="16" x2="22.95" y1="12" y2="12" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
  isCurrent?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "eClerx",
    period: "2025 — 2026",
    location: "Onsite",
    highlights: [
      "Built and maintained responsive web applications using Low Code Platforms",
      "Responsible for migration of existing live websites",
      "Built reusable custom UI components, reducing UI inconsistency by ~40% and cutting future development time for similar features..",
    ],
    skills: [
      "HTML5/CSS3",
      "Low-code Development",
      "Javascript",
      "Website Migrations",
    ],
    isCurrent: true,
  },
  {
    role: "React Developer",
    company: "Atlansian",
    period: "2024 — 2025",
    location: "Remote",
    highlights: [
      "Enhanced UI components to deliver a seamless and responsive user experience.",
      "Delivered feature updates and integrated RESTful APIs, driving core product enhancements.",
      "Integrated VAPT (Vulnerability Assessment and Penetration Testing) processes across the application to improve security.",
      "Played a key role in identifying and fixing bugs to ensure application stability and performance.",
    ],
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MUI",
      "API Integration",
      "Git",
    ],
    isCurrent: false,
  },
  {
    role: "React Developer",
    company: "SPRK Technologies",
    period: "2024 — 2024",
    location: "Onsite",
    highlights: [
      "Assisted in the development of web portal to improve the firm's overall operations.",
      "Responsible for developing web pages and API integration for the web portal",
      "Developed online examination module (multi-choice questions)",
      "Improved the functionality and supported the team in bug debugging and fixes.",
    ],
    skills: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "MUI",
      "API Integration",
      "Git",
    ],
    isCurrent: false,
  },
];

// Motion Variants
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-5 sm:py-12 border-t border-slate-200 dark:border-[#232730] scroll-mt-16"
    >
      {/* Header */}
      <div className="mb-14 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100">
          Experience
        </h2>
      </div>

      {/* CARDLESS GIT TREE STREAM */}
      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="relative pl-8 sm:pl-12 space-y-16"
      >
        {/* Continuous Branch Line */}
        <div className="absolute left-[15px] sm:left-[23px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-slate-700/40 pointer-events-none" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative group"
          >
            {/* Git Commit Node Marker */}
            <div className="absolute -left-[33px] sm:-left-[41px] top-1 z-10">
              {exp.isCurrent ? (
                <div className="relative flex items-center justify-center">
                  <span className="absolute h-6 w-6 rounded-full bg-cyan-400/30 animate-ping" />
                  <span className="relative h-4 w-4 rounded-full bg-cyan-400 border-2 border-slate-950 shadow-[0_0_12px_#22d3ee]" />
                </div>
              ) : (
                <div className="h-3.5 w-3.5 rounded-full bg-slate-400 dark:bg-zinc-600 border-2 border-slate-950 group-hover:bg-indigo-400 group-hover:scale-125 transition-all duration-200" />
              )}
            </div>

            {/* Content Body (Pure Flowing Typography) */}
            <div className="space-y-3">
              {/* Title & Organization */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-zinc-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-md font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                  @ {exp.company}
                </p>
              </div>

              {/* Commit Meta Line */}
              <div className="flex flex-wrap items-center gap-1 text-xs">
                <span className="text-slate-500 dark:text-zinc-400">
                  {exp.period}
                </span>

                <span className="text-slate-400 dark:text-zinc-600">•</span>

                <span className="text-slate-500 dark:text-zinc-500">
                  {exp.location}
                </span>
              </div>

              {/* Diff Style Highlight Bullets */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-sans leading-relaxed pt-1">
                {exp.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5">
                    <span className="text-cyan-500 dark:text-cyan-400 font-mono select-none pt-0.5">
                      +
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags Stream */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 dark:text-zinc-600 text-[14px]">
                  stack:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-slate-700 dark:text-zinc-300 hover:text-cyan-400 transition-colors"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
