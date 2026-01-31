"use client";

import { motion } from "framer-motion";
import { IconCircle } from "./IconCircle";

const highlights = [
  {
    title: "Readiness Signal",
    description: "Wake up to a recovery-informed training score powered by your sleep and HRV.",
    metric: "82%",
    icon: "ArrowTrendingUpIcon"
  },
  {
    title: "Focus Timer",
    description: "Immersive training timer with breath cues to lock in deep work during lifts.",
    metric: "36m avg",
    icon: "ClockIcon"
  },
  {
    title: "Streak Integrity",
    description: "Momentum engine that celebrates streaks while reminding you to deload.",
    metric: "27 days",
    icon: "TrophyIcon"
  }
] as const;

export function PerformanceHighlights() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-0">
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-4xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <IconCircle name={item.icon as any} />
            <p className="mt-6 text-sm uppercase tracking-wide text-slate-400">{item.title}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{item.metric}</p>
            <p className="mt-4 text-sm text-slate-400">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
