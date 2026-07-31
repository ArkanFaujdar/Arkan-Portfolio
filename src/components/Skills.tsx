"use client";

import { motion } from "framer-motion";

// Icons
const LayoutIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const TerminalIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" x2="20" y1="19" y2="19" />
  </svg>
);

type ThemeKeys = "cyan" | "emerald" | "indigo";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  themeKey: ThemeKeys;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & UI",
    icon: LayoutIcon,
    themeKey: "cyan",
    skills: ["HTML5/CSS3", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Databases",
    icon: DatabaseIcon,
    themeKey: "emerald",
    skills: [".NET", "C#", "SQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools",
    icon: TerminalIcon,
    themeKey: "indigo",
    skills: ["Git/Github", "Docker", "Firebase", "Microsoft Power Platform"],
  },
];

// Tailwind color maps for theme consistency
const themeStyles = {
  cyan: {
    gradientBar: "from-cyan-500 via-teal-400 to-cyan-300",
    iconBg:
      "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/20",
    badgeHover:
      "hover:bg-cyan-500/10 hover:text-cyan-700 dark:hover:text-cyan-300 hover:border-cyan-500/40",
    dot: "bg-cyan-400",
    glow: "group-hover:shadow-cyan-500/10",
    cardBorderHover: "hover:border-cyan-500/30",
  },
  emerald: {
    gradientBar: "from-emerald-500 via-teal-400 to-green-300",
    iconBg:
      "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/20",
    badgeHover:
      "hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-500/40",
    dot: "bg-emerald-400",
    glow: "group-hover:shadow-emerald-500/10",
    cardBorderHover: "hover:border-emerald-500/30",
  },
  indigo: {
    gradientBar: "from-indigo-500 via-purple-400 to-indigo-300",
    iconBg:
      "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border-indigo-500/20",
    badgeHover:
      "hover:bg-indigo-500/10 hover:text-indigo-700 dark:hover:text-indigo-300 hover:border-indigo-500/40",
    dot: "bg-indigo-400",
    glow: "group-hover:shadow-indigo-500/10",
    cardBorderHover: "hover:border-indigo-500/30",
  },
};

// Framer Motion variants
const cardContainerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.12,
      ease: [0.25, 0.4, 0.25, 1],
      staggerChildren: 0.05,
      delayChildren: i * 0.12 + 0.1,
    },
  }),
};

const skillBadgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2 },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-5 sm:py-12 border-t border-slate-200 dark:border-[#232730] scroll-mt-16"
    >
      {/* Header */}
      <div className="mb-10 space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-100">
          Technical Expertise
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          const theme = themeStyles[cat.themeKey];

          return (
            <motion.div
              key={cat.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-50px" }}
              variants={cardContainerVariants || 0}
              className={`group relative rounded-2xl bg-white dark:bg-[#14161c] border border-slate-200 dark:border-[#232730] ${theme.cardBorderHover} shadow-sm hover:shadow-xl ${theme.glow} transition-all duration-300 overflow-hidden flex flex-col justify-between`}
            >
              {/* Top Color Accent Line */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${theme.gradientBar}`}
              />

              <div className="p-6">
                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl border ${theme.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 leading-tight">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                      {cat.skills.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={skillBadgeVariants}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-slate-100/80 dark:bg-[#1d2028] text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-800 ${theme.badgeHover} transition-all duration-150 cursor-default flex items-center gap-1.5`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${theme.dot} opacity-60 group-hover:opacity-100`}
                      />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Animated Bottom Laser Effect */}
              <div className="relative h-12 w-full overflow-hidden pointer-events-none mt-auto">
                {/* 1. Ambient Laser Glow Mist */}
                <div
                  className={`absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t ${
                    cat.themeKey === "cyan"
                      ? "from-cyan-500/20"
                      : cat.themeKey === "emerald"
                        ? "from-emerald-500/20"
                        : "from-indigo-500/20"
                  } to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
                />

                {/* 2. Static Base Laser Line */}
                <div
                  className={`absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent ${
                    cat.themeKey === "cyan"
                      ? "via-cyan-500/50"
                      : cat.themeKey === "emerald"
                        ? "via-emerald-500/50"
                        : "via-indigo-500/50"
                  } to-transparent`}
                />

                {/* 3. Moving High-Intensity Laser Pulse */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                  className={`absolute bottom-0 h-[2px] w-1/3 bg-gradient-to-r from-transparent ${
                    cat.themeKey === "cyan"
                      ? "via-cyan-300 to-transparent shadow-[0_0_12px_#22d3ee]"
                      : cat.themeKey === "emerald"
                        ? "via-emerald-300 to-transparent shadow-[0_0_12px_#34d399]"
                        : "via-indigo-300 to-transparent shadow-[0_0_12px_#818cf8]"
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
