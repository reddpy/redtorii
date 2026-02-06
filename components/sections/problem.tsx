"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { ShieldAlert, HelpCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingCrosses } from "@/components/background-grid";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { PROBLEM_CARDS } from "@/lib/constants";

const iconMap = {
  ShieldAlert,
  HelpCircle,
  TrendingUp,
};

function AnimatedStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Extract number and prefix/suffix (e.g., "$16.6B" → "$", 16.6, "B")
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const num = parseFloat(match?.[2] ?? "0");
  const suffix = match?.[3] ?? "";
  const hasDecimal = match?.[2]?.includes(".") ?? false;

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (isInView) motionVal.set(num);
  }, [isInView, motionVal, num]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (ref.current) {
        const done = Math.abs(v - num) < 0.05;
        if (done) {
          // Snap to final clean value
          ref.current.textContent =
            prefix + (hasDecimal ? num.toFixed(1) : num.toString()) + suffix;
        } else if (hasDecimal || num < 10) {
          // Show one decimal during animation for visibility
          ref.current.textContent = prefix + v.toFixed(1) + suffix;
        } else {
          ref.current.textContent = prefix + Math.round(v).toString() + suffix;
        }
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix, hasDecimal, num]);

  return <span ref={ref}>{value}</span>;
}

function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <span
            key={i}
            className="font-semibold text-text-primary bg-torii-red-light/60 px-0.5"
          >
            {part.slice(2, -2)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function Problem() {
  return (
    <AnimatedSection
      variants={staggerContainer}
      className="relative bg-surface-secondary py-20 lg:py-32"
    >
      <FloatingCrosses count={15} color="text-torii-red/[0.06]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="mb-12 lg:mb-16">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            The Problem
          </p>
          <h2 className="mt-3 tracking-tight text-text-primary">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl">
              Trust is broken
            </span>
            <br />
            <span className="font-mono text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              on every channel
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Scammers impersonate companies across every channel. Customers have
            no way to check what&apos;s real. The cost is measured in billions.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROBLEM_CARDS.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div key={card.title} variants={fadeInUp}>
                <Card className="h-full border-border-default bg-surface-primary shadow-none hover:border-torii-red/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center bg-torii-red-light">
                      <Icon className="h-6 w-6 text-torii-red" />
                    </div>
                    <p className="font-display text-5xl tracking-tight text-torii-red lg:text-6xl">
                      <AnimatedStat value={card.stat} />
                    </p>
                    <p className="mt-1 font-mono text-xs font-medium uppercase tracking-widest text-text-muted">
                      {card.statLabel}
                    </p>
                    <h3 className="mt-4 font-mono text-base font-bold tracking-tight text-text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      <HighlightedText text={card.description} />
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeInUp}
          className="mt-6 flex flex-wrap justify-end gap-x-4 gap-y-1 text-xs text-text-muted"
        >
          <span>Sources:</span>
          <a
            href="https://www.pewresearch.org/internet/2025/07/31/online-scams-and-attacks-in-america-today/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-text-secondary transition-colors"
          >
            Pew Research 2025
          </a>
          <a
            href="https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-text-secondary transition-colors"
          >
            FTC Sentinel 2025
          </a>
          <a
            href="https://www.jec.senate.gov/public/_cache/files/d229cc6d-0dc5-4828-9f92-5de8ffffa326/july-2025-issue-brief-scams-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-text-secondary transition-colors"
          >
            JEC 2025
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
