"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundGrid } from "@/components/background-grid";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";

export function CTASection() {
  return (
    <AnimatedSection
      variants={staggerContainer}
      className="relative bg-torii-red py-20 lg:py-32 overflow-hidden"
    >
      <BackgroundGrid color="white" opacity={0.05} cellCount={20} />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.p
          variants={fadeInUp}
          className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mb-4"
        >
          Get Started
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="tracking-tight text-text-on-red"
        >
          <span className="font-display text-4xl sm:text-5xl lg:text-6xl">Ready to protect</span>
          <br />
          <span className="font-mono text-3xl font-extrabold sm:text-4xl lg:text-5xl">your customers?</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-4 text-lg text-white/80">
          Deploy the anti-impersonation stack. Help customers verify it&apos;s
          really you.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8">
          <Button
            size="lg"
            className="bg-white text-torii-red hover:bg-white/90 px-8 text-base font-mono font-bold tracking-wide"
          >
            Get Started for Free
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
