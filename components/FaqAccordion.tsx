"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { faqs } from "../lib/data";

export function FaqAccordion() {
  return (
    <section id="faqs" className="mx-auto max-w-4xl px-6 pb-24 pt-10 lg:px-0">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">
          FAQs
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Ask your coach</h2>
        <p className="mt-3 text-sm text-slate-400">
          Everything you need to know before committing to your next season of growth.
        </p>
      </div>
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <Disclosure key={faq.question}>
            {({ open }) => (
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">
                <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-semibold text-white">
                  <span>{faq.question}</span>
                  {open ? (
                    <MinusSmallIcon className="h-6 w-6 text-primary-200" />
                  ) : (
                    <PlusSmallIcon className="h-6 w-6 text-slate-400" />
                  )}
                </Disclosure.Button>
                <Transition
                  enter="transition duration-200 ease-out"
                  enterFrom="transform scale-y-95 opacity-0"
                  enterTo="transform scale-y-100 opacity-100"
                  leave="transition duration-150 ease-in"
                  leaveFrom="transform scale-y-100 opacity-100"
                  leaveTo="transform scale-y-95 opacity-0"
                >
                  <Disclosure.Panel className="px-6 pb-6 text-sm text-slate-300">
                    {faq.answer}
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
