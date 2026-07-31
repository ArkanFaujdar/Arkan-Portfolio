"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7M17 7H7M17 7V17" />
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

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Desktop sticky scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Desktop card transforms
  const desktopCardOpacity = useTransform(smoothProgress, [0.08, 0.38], [0, 1]);
  const desktopCardScale = useTransform(
    smoothProgress,
    [0.08, 0.38],
    [0.88, 1],
  );
  const desktopCardY = useTransform(smoothProgress, [0.08, 0.38], [30, 0]);

  // Initial Entrance Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  // Matte Social Icon Buttons
  const socials = [
    {
      icon: GithubIcon,
      href: "https://github.com/ArkanFaujdar",
      label: "GitHub",
      hoverStyle:
        "hover:bg-slate-900 hover:text-emerald-300 hover:border-slate-900 dark:hover:bg-zinc-800 dark:hover:text-emerald-300 dark:hover:border-zinc-600",
    },
    {
      icon: LinkedinIcon,
      href: "https://linkedin.com/in/arkan-faujdar",
      label: "LinkedIn",
      hoverStyle:
        "hover:bg-slate-800 hover:text-sky-300 hover:border-slate-700 dark:hover:bg-zinc-800 dark:hover:text-sky-300 dark:hover:border-zinc-600",
    },
    {
      icon: MailIcon,
      href: "mailto:arkanfaujdar74@gmail.com",
      label: "Email",
      hoverStyle:
        "hover:bg-slate-800 hover:text-red-300 hover:border-slate-700 dark:hover:bg-zinc-800 dark:hover:text-red-300 dark:hover:border-zinc-600",
    },
  ];

  return (
    <div
      ref={containerRef}
      /* Sticky height applies ONLY on desktop (lg:) to avoid blank space on mobile */
      className="relative lg:h-[230vh] bg-slate-50/50 dark:bg-zinc-950 transition-colors"
    >
      {/* Background Tech Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="pointer-events-none fixed top-10 left-1/2 -translate-x-1/2 w-[500px] sm:w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-cyan-400/15 to-emerald-400/10 rounded-full blur-[130px] dark:from-indigo-600/25 dark:via-cyan-500/15" />

      {/* VIEWPORT CONTAINER */}
      <div className="relative lg:sticky lg:top-0 min-h-screen w-full flex items-center justify-center py-20 lg:py-14 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LHS: First View Hero Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left relative z-10"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wide text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 border-2 border-emerald-500/30 dark:border-emerald-500/40 rounded-full shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                THINK. BUILD. LAUNCH.{" "}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50 leading-[1.1]"
            >
              Building intelligent <br />
              <span className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent italic font-serif">
                digital experiences.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-zinc-400 max-w-xl leading-relaxed font-normal"
            >
              Full-stack engineer crafting high-throughput web systems, silky
              micro-interactions, and colorful matte software interfaces.
            </motion.p>

            {/* CTAs & Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-slate-900 dark:bg-zinc-100 text-white dark:text-slate-950 font-semibold text-sm sm:text-base shadow-xl shadow-slate-900/15 dark:shadow-zinc-100/10 overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Projects{" "}
                  <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              </motion.a>

              {/* Standout Social Buttons */}
              <div className="flex items-center gap-2">
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      className={`p-3 sm:p-3.5 rounded-xl bg-white dark:bg-zinc-900 border-2 border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 shadow-sm transition-all duration-200 ${s.hoverStyle}`}
                    >
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* RHS: DESKTOP Sticky Reveal Terminal Card */}
          <motion.div
            style={{
              opacity: desktopCardOpacity,
              scale: desktopCardScale,
              y: desktopCardY,
            }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <TerminalCard />
          </motion.div>

          {/* MOBILE / TABLET: Standard Natural Scroll Reveal Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="block lg:hidden w-full relative mt-4"
          >
            <TerminalCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Reusable Terminal Component
function TerminalCard() {
  return (
    <div className="relative rounded-2xl bg-slate-900 dark:bg-zinc-900/95 border-2 border-slate-800 dark:border-zinc-700/80 shadow-2xl shadow-indigo-500/10 overflow-hidden text-left font-mono">
      {/* Floating Accent Badge */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2.5 right-3 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/90 dark:bg-zinc-800/90 border border-slate-700 shadow-md text-[10px] font-mono font-semibold text-slate-200"
      >
        <SparklesIcon className="w-3 h-3 text-cyan-400" />
        <span>Fullstack Architect</span>
      </motion.div>

      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      {/* Code Snippet Body */}
      <div className="p-4 sm:p-5 text-xs sm:text-sm leading-relaxed text-slate-300 space-y-2.5">
        <p>
          <span className="text-purple-400">const</span>{" "}
          <span className="text-cyan-300">developer </span> = &#123;
        </p>
        <p className="pl-4">
          <span className="text-indigo-400">name</span>:{" "}
          <span className="text-emerald-300">&quot;Arkan Faujdar&quot;</span>,
        </p>
        <p className="pl-4">
          <span className="text-indigo-400">stack</span>: [
          <span className="text-emerald-300">&quot;Javascript&quot;</span>,{" "}
          <span className="text-emerald-300">&quot;React JS&quot;</span>,{" "}
          <span className="text-emerald-300">&quot;C#&quot;</span> ,
          <span className="text-emerald-300">&quot;.NET&quot;</span>,{" "}
          <span className="text-emerald-300">&quot;Tailwind&quot;</span>],
        </p>
        <p className="pl-4">
          <span className="text-indigo-400">focus</span>:{" "}
          <span className="text-emerald-300">
            &quot;High Performance Systems&quot;
          </span>
          ,
        </p>
        <p className="pl-4">
          <span className="text-indigo-400">status</span>:{" "}
          <span className="text-emerald-300">
            &quot;Shipping smooth software applications.&quot;
          </span>
        </p>
        <p>&#125;;</p>

        <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-slate-500 text-[11px] sm:text-xs">
          <span className="text-emerald-400">&gt;</span>
          <span>System ready for prompt input...</span>
          <span className="w-2 h-3.5 bg-cyan-400 inline-block animate-pulse" />
        </div>
      </div>
    </div>
  );
}
