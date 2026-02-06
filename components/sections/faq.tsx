"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20">
      <AnimatedSection
        variants={staggerContainer}
        className="bg-background py-20 lg:pb-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-20">
          {/* Left column — title */}
          <motion.div variants={fadeInUp} className="lg:sticky lg:top-32 lg:self-start">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
              Questions
            </p>
            <h2 className="mt-3 font-display text-6xl tracking-tight text-text-primary sm:text-7xl lg:text-8xl">
              FAQ
            </h2>
          </motion.div>

          {/* Right column — questions */}
          <motion.div variants={fadeInUp} className="space-y-0">
            {FAQ_ITEMS.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-border-default"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <button
                    className={`w-full text-left py-5 font-mono text-base font-semibold tracking-tight transition-colors ${
                      isActive ? "text-torii-red" : "text-text-primary hover:text-torii-red"
                    }`}
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                  >
                    {item.question}
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-text-secondary">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
