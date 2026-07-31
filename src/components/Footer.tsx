export default function Footer() {
  return (
    <footer className="border-t border-slate-300 dark:border-[#232730] py-8 text-center text-xs text-slate-600 dark:text-zinc-500 font-mono">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <p>Built with Next.js, Framer Motion & Tailwind CSS</p>
      </div>
    </footer>
  );
}
