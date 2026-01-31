"use client";

import { Hero } from "../components/Hero";
import { FeatureGrid } from "../components/FeatureGrid";
import { PerformanceHighlights } from "../components/PerformanceHighlights";
import { WorkoutPlanner } from "../components/WorkoutPlanner";
import { NutritionTracker } from "../components/NutritionTracker";
import { Testimonials } from "../components/Testimonials";
import { PricingPlans } from "../components/PricingPlans";
import { FaqAccordion } from "../components/FaqAccordion";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <FeatureGrid />
      <PerformanceHighlights />
      <WorkoutPlanner />
      <NutritionTracker />
      <Testimonials />
      <PricingPlans />
      <FaqAccordion />
      <Footer />
    </main>
  );
}
