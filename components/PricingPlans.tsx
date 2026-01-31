"use client";

import { pricingPlans } from "../lib/data";

export function PricingPlans() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">
          Memberships
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold text-white sm:text-4xl">
          Choose your performance pathway
        </h2>
        <p className="mt-3 text-sm text-slate-400">
          Every plan includes guided workouts, habit architecture, and precision nutrition. Upgrade
          anytime as your goals evolve.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col rounded-4xl border p-8 transition ${
              plan.mostPopular
                ? "border-primary-500/50 bg-primary-500/15 shadow-lg shadow-primary-900/40"
                : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
            }`}
          >
            {plan.mostPopular && (
              <span className="self-start rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-100">
                Most loved
              </span>
            )}
            <h3 className="mt-4 text-xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-2 text-sm text-slate-300">{plan.highlight}</p>
            <p className="mt-6 text-4xl font-semibold text-white">
              {plan.price}
              <span className="ml-2 text-sm font-medium text-slate-400">{plan.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary-400" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#planner"
              className={`mt-auto w-full rounded-full px-4 py-3 text-center text-sm font-semibold transition ${
                plan.mostPopular
                  ? "bg-white text-slate-900 hover:bg-slate-100"
                  : "border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white"
              }`}
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
