"use client";

import { motion } from "framer-motion";
import { testimonials } from "../lib/data";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">
            Community voices
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl">
            Results from humans who demanded more from their fitness
          </h2>
        </div>
        <p className="max-w-xl text-sm text-slate-400">
          Coaches, creatives, first responders, and founders rely on PulseTrack to stay consistent
          without burning out. Hear what they say after unlocking our adaptive engine.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-4xl border border-slate-800 bg-slate-900/60 p-8"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/40 via-primary-500/10 to-slate-800 text-lg font-semibold text-primary-100">
                {testimonial.name
                  .split(" ")
                  .map((segment) => segment[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-300">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-primary-200">
              {testimonial.progress}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
