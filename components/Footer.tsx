"use client";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-12">
        <p className="font-semibold text-slate-300">PulseTrack Fitness</p>
        <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-wide">
          <a href="#features" className="hover:text-primary-200">
            Features
          </a>
          <a href="#planner" className="hover:text-primary-200">
            Planner
          </a>
          <a href="#pricing" className="hover:text-primary-200">
            Pricing
          </a>
          <a href="#faqs" className="hover:text-primary-200">
            FAQs
          </a>
        </nav>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} PulseTrack Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
