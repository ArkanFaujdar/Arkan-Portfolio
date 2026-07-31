"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SunIcon = ({ className }: { className?: string }) => (
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
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed min-w-full top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0d0e11]/80 border-b border-slate-200 dark:border-zinc-800/80 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-bold text-lg tracking-tight flex items-center gap-2"
        >
          {/* Light Mode Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            priority
            className="w-auto hidden dark:block"
          />
          {/* Dark Mode Logo */}
          <Image
            src="/logo2.png"
            alt="Logo Dark"
            width={50}
            height={50}
            priority
            // className="w-auto "
            className="w-auto grayscale brightness-55 contrast-125 dark:hidden"
          />
        </a>

        {/* Navigation Links */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-md font-medium text-slate-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 text-slate-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
          >
            {darkMode ? (
              <SunIcon className="w-4 h-4 text-amber-400" />
            ) : (
              <MoonIcon className="w-4 h-4 text-indigo-600" />
            )}
          </motion.button>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/25 transition-all"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
