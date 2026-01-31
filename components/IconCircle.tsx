"use client";

import {
  SparklesIcon,
  PuzzlePieceIcon,
  BoltIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  TrophyIcon,
  ClockIcon
} from "@heroicons/react/24/outline";
import classNames from "classnames";

const iconMap = {
  SparklesIcon,
  PuzzlePieceIcon,
  BoltIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
  TrophyIcon,
  ClockIcon
} as const;

type IconName = keyof typeof iconMap;

type IconCircleProps = {
  name: IconName;
  variant?: "primary" | "neutral";
  className?: string;
};

export function IconCircle({ name, variant = "primary", className }: IconCircleProps) {
  const Icon = iconMap[name];

  return (
    <span
      className={classNames(
        "inline-flex rounded-full p-3",
        variant === "primary"
          ? "bg-primary-500/15 text-primary-300 ring-1 ring-primary-500/30"
          : "bg-slate-800 text-slate-200 ring-1 ring-slate-700",
        className
      )}
    >
      <Icon className="h-6 w-6" aria-hidden />
    </span>
  );
}
