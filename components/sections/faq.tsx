"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <AnimatedSection
      variants={staggerContainer}
      className="bg-background py-20 lg:py-32"
    >
      <div id="faq" className="mx-auto max-w-3xl px-6 lg:px-8 scroll-mt-24">
        <motion.div
          variants={fadeInUp}
          className="mb-12 lg:mb-16 text-center"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            FAQ
          </p>
          <h2 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border-default"
              >
                <AccordionTrigger className="text-left text-base font-mono font-semibold text-text-primary hover:text-torii-red hover:no-underline py-5 tracking-tight">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-text-secondary pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
