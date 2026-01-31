"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { workouts } from "../lib/data";
import { useFitnessStore } from "../lib/store";

const focusOptions = [
  { value: "all", label: "All focus areas" },
  { value: "strength", label: "Strength" },
  { value: "endurance", label: "Endurance" },
  { value: "hiit", label: "HIIT" },
  { value: "mobility", label: "Mobility" },
  { value: "balance", label: "Balance & Core" }
] as const;

const levelOptions = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" }
] as const;

const equipmentOptions = [
  { value: "any", label: "Any setup" },
  { value: "bodyweight", label: "Bodyweight only" },
  { value: "minimal", label: "Minimal gear" },
  { value: "full-gym", label: "Full gym" }
] as const;

export function WorkoutPlanner() {
  const { filters, setFilter, resetFilters } = useFitnessStore();

  const filteredWorkouts = useMemo(() => {
    return workouts
      .filter((workout) => workout.level === filters.level)
      .filter((workout) => (filters.focus === "all" ? true : workout.focus === filters.focus))
      .filter((workout) =>
        filters.equipment === "any" ? true : workout.equipment === filters.equipment
      )
      .filter((workout) => workout.duration <= filters.duration)
      .sort((a, b) => a.duration - b.duration);
  }, [filters]);

  return (
    <section
      id="planner"
      className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-4xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 px-6 py-20 lg:px-12"
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 bg-primary-500/20 blur-3xl" />
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr,1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">
            Adaptive Engine
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Your coach-curated workout blueprint
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            PulseTrack calibrates every session to your current readiness. Use the planner to tune
            intensity by the day—then sync with your calendar or wearable with one tap.
          </p>

          <form className="mt-10 space-y-6">
            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Training level
              </label>
              <div className="grid grid-cols-3 gap-3">
                {levelOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFilter("level", option.value)}
                    className={classNames(
                      "rounded-2xl border px-3 py-3 text-sm font-semibold transition",
                      filters.level === option.value
                        ? "border-primary-400 bg-primary-500/20 text-primary-100"
                        : "border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Focus zone
              </label>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {focusOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFilter("focus", option.value)}
                    className={classNames(
                      "rounded-2xl border px-3 py-3 text-sm font-semibold transition",
                      filters.focus === option.value
                        ? "border-primary-400 bg-primary-500/20 text-primary-100"
                        : "border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Max session duration — {filters.duration} min
              </label>
              <input
                type="range"
                min={20}
                max={75}
                step={5}
                value={filters.duration}
                onChange={(event) => setFilter("duration", Number(event.target.value))}
                className="accent-primary-400"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Available equipment
              </label>
              <div className="grid grid-cols-2 gap-3">
                {equipmentOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setFilter("equipment", option.value)}
                    className={classNames(
                      "rounded-2xl border px-3 py-3 text-sm font-semibold transition",
                      filters.equipment === option.value
                        ? "border-primary-400 bg-primary-500/20 text-primary-100"
                        : "border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={resetFilters}
              className="text-sm font-semibold text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
            >
              Reset preferences
            </button>
          </form>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">
              {filteredWorkouts.length} tailored session
              {filteredWorkouts.length === 1 ? "" : "s"} ready to launch
            </h3>
            <span className="rounded-full border border-primary-500/50 bg-primary-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-200">
              Syncs to calendar
            </span>
          </div>
          <div className="grid gap-4">
            {filteredWorkouts.map((workout, index) => (
              <motion.article
                key={workout.id}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 ring-1 ring-transparent transition hover:border-primary-400/60 hover:ring-primary-500/20"
              >
                <header className="flex flex-wrap items-center gap-3">
                  <p className="rounded-full bg-primary-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-100">
                    {workout.level}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    {workout.focus} • {workout.duration} min
                  </p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    {workout.equipment.replace("-", " ")}
                  </p>
                </header>
                <h4 className="mt-4 text-lg font-semibold text-white">{workout.title}</h4>
                <p className="mt-2 text-sm text-slate-400">{workout.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                  {workout.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-slate-800/70 px-3 py-1 font-medium text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
            {filteredWorkouts.length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-800 p-10 text-center">
                <p className="text-lg font-semibold text-white">No perfect match yet</p>
                <p className="mt-2 text-sm text-slate-400">
                  Loosen a filter or extend session duration to unlock more curated sessions.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
