"use client";

import { motion } from "framer-motion";
import { features } from "../lib/data";
import { IconCircle } from "./IconCircle";

export function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">
          Platform DNA
        </p>
        <h2 className="mt-4 text-balance text-4xl font-semibold text-white">
          Every detail engineered to fuel your momentum
        </h2>
        <p className="mt-4 max-w-2xl text-base text-slate-400">
          PulseTrack arms you with coach-level insights, cinematic experiences, and nutrition
          intelligence built to scale with your goals.
        </p>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-900/40"
          >
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            <IconCircle name={feature.icon as any} />
            <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{feature.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
