"use client";

import { motion } from "framer-motion";
import { ShieldAlert, HelpCircle, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingCrosses } from "@/components/background-grid";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { PROBLEM_CARDS } from "@/lib/constants";

const iconMap = {
  ShieldAlert,
  HelpCircle,
  TrendingDown,
};

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
          <h2 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Trust is broken on every channel
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROBLEM_CARDS.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div key={card.title} variants={fadeInUp}>
                <Card className="h-full border-border-default bg-surface-primary shadow-none hover:border-torii-red/20 transition-colors">
                  <CardContent className="p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center bg-torii-red-light">
                      <Icon className="h-6 w-6 text-torii-red" />
                    </div>
                    <h3 className="font-mono text-base font-bold tracking-tight text-text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
