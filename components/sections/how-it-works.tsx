"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Rocket, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { STEPS } from "@/lib/constants";

const iconMap = {
  Globe,
  Layers,
  Rocket,
};

export function HowItWorks() {
  return (
    <AnimatedSection
      variants={staggerContainer}
      className="bg-background py-20 lg:py-32"
    >
      <div
        id="how-it-works"
        className="mx-auto max-w-7xl px-6 lg:px-8 scroll-mt-24"
      >
        <motion.div variants={fadeInUp} className="mb-16 lg:mb-20 max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            How It Works
          </p>
          <h2 className="mt-3 tracking-tight text-text-primary">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl">Live in</span>
            <br />
            <span className="font-mono text-3xl font-extrabold sm:text-4xl lg:text-5xl">three steps</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            No engineers required. Go from signup to a fully deployed trust page
            your customers can use immediately.
          </p>
        </motion.div>

        <div className="space-y-0">
          {STEPS.map((step, index) => {
            const Icon = iconMap[step.icon];
            const isLast = index === STEPS.length - 1;
            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative"
              >
                <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                  {/* Left: number + connector */}
                  <div className="md:col-span-1 flex md:flex-col items-center gap-4 md:gap-0">
                    <div className="flex h-14 w-14 items-center justify-center bg-torii-red">
                      <span className="font-mono text-lg font-extrabold text-white">
                        {step.number}
                      </span>
                    </div>
                    {!isLast && (
                      <div className="hidden md:block w-px flex-1 bg-border-default min-h-[60px]" />
                    )}
                  </div>

                  {/* Right: content */}
                  <div
                    className={`md:col-span-11 ${!isLast ? "pb-12 md:pb-16" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="hidden lg:flex h-12 w-12 items-center justify-center bg-torii-red-light shrink-0">
                        <Icon className="h-6 w-6 text-torii-red" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-mono text-xl font-bold tracking-tight text-text-primary">
                            {step.title}
                          </h3>
                          {!isLast && (
                            <ArrowRight className="h-4 w-4 text-torii-red/40 hidden sm:block" />
                          )}
                        </div>
                        <p className="text-base leading-relaxed text-text-secondary max-w-lg">
                          {step.description}
                        </p>
                        <span className="inline-block mt-3 font-mono text-xs font-semibold uppercase tracking-wider text-torii-red bg-torii-red-light px-2.5 py-1">
                          {step.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
