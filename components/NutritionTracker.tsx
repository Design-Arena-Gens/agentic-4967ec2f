"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { nutritionPlans } from "../lib/data";
import { useFitnessStore } from "../lib/store";
import { IconCircle } from "./IconCircle";

const goalLabels: Record<(typeof nutritionPlans)[number]["goal"], string> = {
  "fat-loss": "Lean Reset",
  maintenance: "Sustain Mode",
  "muscle-gain": "Build Phase"
};

export function NutritionTracker() {
  const [selectedGoal, setSelectedGoal] = useState<(typeof nutritionPlans)[number]["goal"]>(
    "maintenance"
  );
  const { hydration, logHydration, habits, toggleHabit } = useFitnessStore();

  const plan = nutritionPlans.find((item) => item.goal === selectedGoal) ?? nutritionPlans[1];
  const hydrationProgress = Math.round((hydration.consumed / hydration.target) * 100);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
        <div className="rounded-4xl border border-slate-800 bg-slate-900/60 p-10">
          <header className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">
                Precision Nutrition
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Dial in your macros with intelligent meal cadence
              </h2>
            </div>
            <span className="rounded-full border border-slate-700 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Syncs with wearables
            </span>
          </header>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {nutritionPlans.map((option) => (
              <button
                key={option.goal}
                onClick={() => setSelectedGoal(option.goal)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  option.goal === selectedGoal
                    ? "border-primary-400 bg-primary-500/20 text-primary-100"
                    : "border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-600 hover:text-slate-200"
                }`}
              >
                {goalLabels[option.goal]}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-primary-500/30 bg-primary-500/10 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-primary-100">
                Daily Targets
              </h3>
              <p className="mt-4 text-4xl font-semibold text-white">{plan.calories} kcal</p>
              <ul className="mt-6 space-y-3 text-sm text-primary-50">
                <li>
                  <span className="font-semibold text-primary-200">Protein:</span> {plan.protein}g
                </li>
                <li>
                  <span className="font-semibold text-primary-200">Carbohydrates:</span>{" "}
                  {plan.carbs}g
                </li>
                <li>
                  <span className="font-semibold text-primary-200">Fats:</span> {plan.fats}g
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Coach Playbook
              </h3>
              <ul className="mt-4 space-y-4 text-sm text-slate-300">
                {plan.tips.map((tip) => (
                  <li key={tip} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-400" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <div className="rounded-4xl border border-slate-800 bg-slate-900/60 p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">Hydration Vault</p>
                <p className="mt-2 text-3xl font-semibold text-primary-200">
                  {hydration.consumed}oz
                </p>
              </div>
              <IconCircle name="ClockIcon" />
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Goal: {hydration.target}oz • Progress: {hydrationProgress}%
            </p>
            <div className="mt-4 h-2 rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent"
                style={{ width: `${hydrationProgress}%` }}
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[8, 12, 16].map((amount) => (
                <button
                  key={amount}
                  onClick={() => logHydration(amount)}
                  className="rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-100 transition hover:bg-primary-500/20"
                >
                  +{amount}oz
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Momentum Habits
            </h3>
            <ul className="mt-4 space-y-3">
              {habits.map((habit) => (
                <li
                  key={habit.id}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition ${
                    habit.completed
                      ? "border-primary-400 bg-primary-500/20 text-primary-100"
                      : "border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <span>{habit.title}</span>
                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-400 transition hover:border-primary-500/60 hover:text-primary-200"
                  >
                    {habit.completed ? "Completed" : "Mark done"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
