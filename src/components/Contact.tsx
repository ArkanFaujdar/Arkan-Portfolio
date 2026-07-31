"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-300 dark:border-[#232730] scroll-mt-16"
    >
      <div className="max-w-xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-zinc-100">
          Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mt-2">
          Have a project in mind or want to connect? Send a message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-5">
        <div>
          <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-zinc-400 mb-2 uppercase">
            Name
          </label>
          <input
            type="text"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#16181d] border-2 border-slate-300 dark:border-[#232730] text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-600 dark:focus:border-cyan-400 transition-colors shadow-sm dark:shadow-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-zinc-400 mb-2 uppercase">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#16181d] border-2 border-slate-300 dark:border-[#232730] text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-600 dark:focus:border-cyan-400 transition-colors shadow-sm dark:shadow-none"
          />
        </div>

        <div>
          <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-zinc-400 mb-2 uppercase">
            Message
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell me about your project..."
            className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#16181d] border-2 border-slate-300 dark:border-[#232730] text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none focus:border-indigo-600 dark:focus:border-cyan-400 transition-colors shadow-sm dark:shadow-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="w-full py-3.5 rounded-xl bg-indigo-600 dark:bg-zinc-100 text-white dark:text-zinc-950 font-semibold hover:bg-indigo-500 dark:hover:bg-white shadow-md transition-colors"
        >
          {submitted ? "Message Sent!" : "Send Message"}
        </motion.button>
      </form>
    </section>
  );
}
