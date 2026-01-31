"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { IconCircle } from "./IconCircle";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-80" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/70 to-slate-950" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 lg:flex-row lg:items-center lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="flex-1"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-2 text-sm font-semibold tracking-wide text-primary-200">
            <IconCircle name="ArrowTrendingUpIcon" variant="neutral" className="p-2" />
            Personalized coaching • Real-time adjustments
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Train with precision. Recover with purpose. Feel unstoppable.
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            PulseTrack is the intelligent fitness OS that syncs your workouts, recovery, and
            nutrition into one adaptive system. Built for driven humans who want peak performance
            without burnout.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-primary-400"
            >
              Start your momentum
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="#planner"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Explore the platform
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "40K+", label: "Athletes guided" },
              { value: "96%", label: "Weekly adherence" },
              { value: "12 min", label: "Average onboarding" },
              { value: "4.9★", label: "Coach rating" }
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm uppercase tracking-wide text-slate-400">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1"
        >
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-primary-900/50 backdrop-blur-lg">
            <header className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase text-slate-400">Today&apos;s readiness</p>
                <p className="mt-2 text-4xl font-semibold text-primary-300">82%</p>
              </div>
              <div className="flex items-center gap-2">
                <IconCircle name="HeartIcon" />
                <div>
                  <p className="text-xs uppercase text-slate-400">Recovery</p>
                  <p className="text-sm font-semibold text-slate-200">Ready to push</p>
                </div>
              </div>
            </header>
            <div className="mt-8 space-y-4">
              {[
                {
                  label: "Sleep Quality",
                  value: 76,
                  detail: "7h 45m • HRV high"
                },
                {
                  label: "Energy Availability",
                  value: 88,
                  detail: "Refueled"
                },
                {
                  label: "Training Load",
                  value: 67,
                  detail: "Positive strain"
                }
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>{metric.label}</span>
                    <span>{metric.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3 rounded-2xl bg-slate-950/80 p-6 ring-1 ring-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Momentum streak
                </span>
                <IconCircle name="TrophyIcon" variant="neutral" />
              </div>
              <p className="text-2xl font-semibold text-white">
                27 consecutive days of aligned movement
              </p>
              <p className="text-sm text-slate-400">
                Stay on track with adaptive next best actions every time you open the app.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
