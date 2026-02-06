"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Globe, Layers, Rocket, Search, Upload, Phone, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { STEPS, STEP_CHANNELS } from "@/lib/constants";

const stepIconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  Rocket,
};

const channelIconMap: Record<string, IconType | LucideIcon> = {
  phone: Phone,
  email: Mail,
  sms: MessageSquare,
  x: FaXTwitter,
  telegram: FaTelegram,
};

/* ─── Domain Verification Mockup ─── */
function DomainMockup({ progress }: { progress?: MotionValue<number> }) {
  const fallback = useMotionValue(1);
  const p = progress ?? fallback;

  const shellOpacity = useTransform(p, [0.05, 0.2], [0, 1]);
  const shellY = useTransform(p, [0.05, 0.2], [20, 0]);
  const successOpacity = useTransform(p, [0.2, 0.4], [0, 1]);
  const successY = useTransform(p, [0.2, 0.4], [6, 0]);

  return (
    <motion.div style={{ opacity: shellOpacity, y: shellY }} className="border border-border-default bg-surface-primary overflow-hidden w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border-default px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <Globe className="h-4 w-4 text-torii-red" />
          <span className="font-mono text-sm font-bold text-text-primary">
            Domain Verification
          </span>
        </div>
        <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
          Step 1 of 3
        </span>
      </div>

      <div className="p-5 space-y-4">
        {/* Domain input */}
        <div>
          <label className="font-mono text-[10px] font-semibold uppercase tracking-wider text-text-muted block mb-1.5">
            Your company domain
          </label>
          <div className="flex items-center border border-border-default bg-background px-3.5 py-2.5">
            <span className="font-mono text-sm text-text-primary">
              acmecorp.com
            </span>
          </div>
        </div>

        {/* Verify button */}
        <div className="flex items-center gap-3">
          <div className="bg-torii-red px-4 py-2">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Verify Domain
            </span>
          </div>
          <span className="font-mono text-[10px] text-text-muted">
            We&apos;ll confirm ownership automatically
          </span>
        </div>

        {/* Scroll-driven success state */}
        <motion.div
          style={{ opacity: successOpacity, y: successY }}
          className="border border-state-verified/20 bg-state-verified/5 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-state-verified/10 border border-state-verified/20 rounded-full">
              <div className="h-2.5 w-2.5 bg-state-verified rounded-full animate-pulse" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-state-verified">
                Domain verified
              </p>
              <p className="font-mono text-[10px] text-text-secondary mt-0.5">
                acmecorp.com is confirmed as yours. You&apos;re ready to add channels.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Dashboard Mockup: Channel Registration ─── */
function DashboardMockup({ progress }: { progress?: MotionValue<number> }) {
  const fallback = useMotionValue(1);
  const p = progress ?? fallback;

  // Each channel row reveals sequentially across the scroll range
  const ch0Opacity = useTransform(p, [0.03, 0.1], [0, 1]);
  const ch0X = useTransform(p, [0.03, 0.1], [-8, 0]);
  const ch1Opacity = useTransform(p, [0.08, 0.15], [0, 1]);
  const ch1X = useTransform(p, [0.08, 0.15], [-8, 0]);
  const ch2Opacity = useTransform(p, [0.13, 0.2], [0, 1]);
  const ch2X = useTransform(p, [0.13, 0.2], [-8, 0]);
  const ch3Opacity = useTransform(p, [0.18, 0.25], [0, 1]);
  const ch3X = useTransform(p, [0.18, 0.25], [-8, 0]);
  const ch4Opacity = useTransform(p, [0.23, 0.3], [0, 1]);
  const ch4X = useTransform(p, [0.23, 0.3], [-8, 0]);
  const bulkOpacity = useTransform(p, [0.3, 0.4], [0, 1]);

  const channelStyles = [
    { opacity: ch0Opacity, x: ch0X },
    { opacity: ch1Opacity, x: ch1X },
    { opacity: ch2Opacity, x: ch2X },
    { opacity: ch3Opacity, x: ch3X },
    { opacity: ch4Opacity, x: ch4X },
  ];

  return (
    <div className="border border-border-default bg-surface-primary overflow-hidden w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border-default px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-text-primary">
            Channels
          </span>
          <span className="font-mono text-[10px] text-text-muted bg-surface-secondary px-1.5 py-0.5 border border-border-subtle">
            {STEP_CHANNELS.length}
          </span>
        </div>
        <span className="font-mono text-[10px] text-torii-red font-semibold uppercase tracking-wider cursor-pointer hover:text-torii-red-hover transition-colors">
          + Add channel
        </span>
      </div>

      {/* Channel rows */}
      {STEP_CHANNELS.map((ch, i) => {
        const Icon = channelIconMap[ch.icon];
        return (
          <motion.div
            key={ch.value}
            style={channelStyles[i]}
            className="flex items-center justify-between px-4 py-2.5 border-b border-border-subtle"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Icon className="h-4 w-4 text-text-muted shrink-0" />
              <div className="min-w-0">
                <span className="font-mono text-xs text-text-primary block truncate">
                  {ch.value}
                </span>
                <span className="font-mono text-[9px] text-text-muted block">
                  {ch.label}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                {ch.type}
              </span>
              <div className="h-1.5 w-1.5 bg-state-verified rounded-full" />
            </div>
          </motion.div>
        );
      })}

      {/* Bulk import bar */}
      <motion.div
        style={{ opacity: bulkOpacity }}
        className="px-4 py-2.5 bg-torii-red-light/50 flex items-center gap-2"
      >
        <Upload className="h-3.5 w-3.5 text-torii-red" />
        <span className="font-mono text-[10px] text-torii-red font-semibold">
          Bulk import from CSV
        </span>
      </motion.div>
    </div>
  );
}

/* ─── Browser Mockup: Deployed Trust Gate (simple "you're live" version) ─── */
function BrowserMockup({ progress }: { progress?: MotionValue<number> }) {
  const fallback = useMotionValue(1);
  const p = progress ?? fallback;

  const resultOpacity = useTransform(p, [0.1, 0.3], [0, 1]);
  const resultScale = useTransform(p, [0.1, 0.3], [0.95, 1]);
  const pillsOpacity = useTransform(p, [0.25, 0.4], [0, 1]);
  const badgeOpacity = useTransform(p, [0.3, 0.45], [0, 1]);

  return (
    <div className="relative w-full">
      <div className="border border-border-default bg-surface-primary shadow-lg overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-border-default bg-surface-secondary px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-state-compromised/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-state-deprecated/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-state-verified/60" />
          </div>
          <div className="ml-3 flex-1 bg-background border border-border-default px-3 py-1">
            <span className="font-mono text-xs text-text-muted">
              verify.yourcompany.com
            </span>
          </div>
        </div>

        {/* Trust Gate content */}
        <div className="p-5">
          {/* Company header */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-8 w-8 bg-torii-red flex items-center justify-center">
              <span className="text-white font-mono text-[10px] font-bold">
                YC
              </span>
            </div>
            <div>
              <p className="font-mono text-sm font-bold text-text-primary">
                Your Company
              </p>
              <p className="font-mono text-[10px] text-state-verified">
                Domain verified
              </p>
            </div>
          </div>

          {/* Search bar with query */}
          <div className="flex items-center gap-2 border border-border-default bg-background px-3 py-2.5 mb-4">
            <Search className="h-4 w-4 text-text-muted" />
            <span className="font-mono text-sm text-text-primary">
              +1-800-555-0142
            </span>
          </div>

          {/* Verified result */}
          <motion.div
            style={{ opacity: resultOpacity, scale: resultScale }}
            className="border-l-4 border-l-state-verified border border-border-default bg-background p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-state-verified">
                Verified
              </span>
              <span className="font-mono text-[10px] text-text-muted">
                Phone
              </span>
            </div>
            <p className="font-mono text-sm font-semibold text-text-primary">
              +1-800-555-0142
            </p>
            <p className="font-mono text-xs text-text-secondary mt-1">
              Official support line. Registered Jan 2024.
            </p>
          </motion.div>

          {/* Channel pills */}
          <motion.div
            style={{ opacity: pillsOpacity }}
            className="mt-3 flex gap-2"
          >
            {["Phone", "Email", "Telegram"].map((ch) => (
              <span
                key={ch}
                className="font-mono text-[10px] font-medium text-text-muted border border-border-default px-2 py-0.5"
              >
                {ch}
              </span>
            ))}
            <span className="font-mono text-[10px] text-text-muted">
              +7 more
            </span>
          </motion.div>
        </div>
      </div>

      {/* Floating "Live" badge */}
      <motion.div
        style={{ opacity: badgeOpacity }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-3 -right-3 bg-state-verified px-3 py-1.5 shadow-md z-10"
      >
        <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">
          Live
        </span>
      </motion.div>
    </div>
  );
}

/* ─── Mockup components array ─── */
const mockups: Array<(props: { progress?: MotionValue<number> }) => React.JSX.Element> = [DomainMockup, DashboardMockup, BrowserMockup];

/* ─── Main Component ─── */
export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const payoffRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    function check() {
      setIsMobile(window.innerWidth < 1024);
    }
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  // Scroll tracking for desktop sticky
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to progress bar height (0% to 100%)
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Per-step sub-progress (0→1 within each step's scroll range)
  const step0Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const step1Progress = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const step2Progress = useTransform(scrollYProgress, [0.66, 1], [0, 1]);
  const stepProgresses = [step0Progress, step1Progress, step2Progress];

  // Payoff section scroll tracking
  const { scrollYProgress: payoffProgress } = useScroll({
    target: payoffRef,
    offset: ["start 0.7", "end end"],
  });

  // Whole screen tints more red as you scroll, fully solid by 40%
  const payoffBgOpacity = useTransform(payoffProgress, [0, 0.4], [0, 1]);

  // Phase 2: text content appears on solid red (50%+ scroll)
  const word1Opacity = useTransform(payoffProgress, [0.5, 0.55], [0, 1]);
  const word1Y = useTransform(payoffProgress, [0.5, 0.55], [150, 0]);
  const word1Scale = useTransform(payoffProgress, [0.5, 0.55], [1.15, 1]);
  const word2Opacity = useTransform(payoffProgress, [0.55, 0.6], [0, 1]);
  const word2Y = useTransform(payoffProgress, [0.55, 0.6], [150, 0]);
  const word2Scale = useTransform(payoffProgress, [0.55, 0.6], [1.15, 1]);
  const subtextOpacity = useTransform(payoffProgress, [0.62, 0.67], [0, 1]);
  const subtextY = useTransform(payoffProgress, [0.62, 0.67], [40, 0]);
  const checklistOpacity = useTransform(payoffProgress, [0.67, 0.72], [0, 1]);
  const checklistY = useTransform(payoffProgress, [0.67, 0.72], [40, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (isMobile) return;
    const step = Math.min(2, Math.floor(v * 3));
    setActiveStep(step);
  });

  return (
    <section id="how-it-works" className="scroll-mt-20">
      <AnimatedSection
        variants={staggerContainer}
        className="bg-background"
      >
        {/* Section header */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto max-w-7xl px-6 lg:px-8 pt-8 lg:pt-12 pb-8 lg:pb-10 max-w-2xl"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            How It Works
          </p>
          <h2 className="mt-3 tracking-tight text-text-primary">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl">
              Live in
            </span>
            <br />
            <span className="font-mono text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              three steps
            </span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            No engineers required. Go from signup to a fully deployed Trust Gate
            your customers can use immediately.
          </p>
        </motion.div>

        {/* ─── Desktop: Sticky scroll-through ─── */}
        <div className="hidden lg:block" ref={sectionRef} style={{ height: "400vh" }}>
          <div className="sticky top-0 h-screen flex items-start pt-[12vh]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                {/* Left: Step indicators */}
                <div className="lg:col-span-5">
                  <div className="relative flex">
                    {/* Red progress bar */}
                    <div className="relative w-1 shrink-0 mr-4 self-stretch">
                      <div className="absolute inset-0 bg-border-subtle" />
                      <motion.div
                        className="absolute top-0 left-0 w-full bg-torii-red origin-top"
                        style={{ height: progressHeight }}
                      />
                    </div>
                    <div className="flex-1 space-y-1">
                    {STEPS.map((step, i) => {
                      const Icon = stepIconMap[step.icon];
                      const isActive = activeStep === i;
                      const isCompleted = activeStep > i;
                      const isHighlighted = isActive || isCompleted;

                      return (
                        <motion.div
                          key={step.number}
                          className={`p-6 transition-all duration-300 ${
                            isActive
                              ? "bg-surface-primary border border-border-default"
                              : "border border-transparent"
                          }`}
                        >
                          <div className="flex items-start gap-5">
                            <div
                              className={`flex h-14 w-14 shrink-0 items-center justify-center transition-colors duration-300 ${
                                isHighlighted
                                  ? "bg-torii-red"
                                  : "bg-surface-secondary"
                              }`}
                            >
                              <span
                                className={`font-mono text-base font-extrabold transition-colors duration-300 ${
                                  isHighlighted ? "text-white" : "text-text-muted"
                                }`}
                              >
                                {step.number}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2.5">
                                <Icon
                                  className={`h-5 w-5 transition-colors duration-300 ${
                                    isHighlighted
                                      ? "text-torii-red"
                                      : "text-text-muted"
                                  }`}
                                />
                                <h3
                                  className={`font-mono text-lg font-bold tracking-tight transition-colors duration-300 ${
                                    isHighlighted
                                      ? "text-text-primary"
                                      : "text-text-muted"
                                  }`}
                                >
                                  {step.title}
                                </h3>
                              </div>
                              <AnimatePresence mode="wait">
                                {isActive && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <p className="mt-2.5 text-base leading-relaxed text-text-secondary">
                                      {step.description}
                                    </p>
                                    <span className="inline-block mt-3 font-mono text-xs font-semibold uppercase tracking-wider text-torii-red bg-torii-red-light px-2.5 py-1">
                                      {step.detail}
                                    </span>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                    </div>
                  </div>

                </div>

                {/* Right: Mockup area */}
                <div className="lg:col-span-7">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      className="ml-auto"
                    >
                      {(() => {
                        const Mockup = mockups[activeStep];
                        return <Mockup progress={stepProgresses[activeStep]} />;
                      })()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Mobile: Stacked cards ─── */}
        <div className="lg:hidden mx-auto max-w-7xl px-6 pb-20">
          {STEPS.map((step, i) => {
            const Icon = stepIconMap[step.icon];
            const Mockup = mockups[i];

            return (
              <div key={step.number}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="border border-border-default bg-surface-primary p-5"
                >
                  {/* Step header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-torii-red">
                      <span className="font-mono text-xs font-extrabold text-white">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-torii-red" />
                        <h3 className="font-mono text-base font-bold tracking-tight text-text-primary">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-text-secondary mb-2">
                    {step.description}
                  </p>
                  <span className="inline-block mb-5 font-mono text-[10px] font-semibold uppercase tracking-wider text-torii-red bg-torii-red-light px-2 py-0.5">
                    {step.detail}
                  </span>

                  {/* Mockup — no progress prop = renders fully visible */}
                  <Mockup />
                </motion.div>

                {/* Connector between steps */}
                {i < STEPS.length - 1 && (
                  <div className="flex justify-center py-3">
                    <div className="relative w-px h-8">
                      <div className="w-px h-full border-l border-dashed border-border-default" />
                      <motion.div
                        className="absolute left-1/2 -translate-x-1/2 h-1.5 w-1.5 bg-torii-red"
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ─── Payoff: Customers Protected (scroll-driven) ─── */}
        <div ref={payoffRef} className="relative" style={{ height: "500vh" }}>
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            {/* Base background */}
            <div className="absolute inset-0 bg-background" />
            {/* Red tint that builds as you scroll */}
            <motion.div
              className="absolute inset-0 bg-torii-red"
              style={{ opacity: payoffBgOpacity }}
            />

<div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
              <h3 className="font-display text-7xl sm:text-8xl lg:text-9xl text-white leading-[0.95]">
                <motion.span
                  className="inline-block"
                  style={{ opacity: word1Opacity, y: word1Y, scale: word1Scale }}
                >
                  Customers
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  style={{ opacity: word2Opacity, y: word2Y, scale: word2Scale }}
                >
                  protected.
                </motion.span>
              </h3>

              <motion.p
                style={{ opacity: subtextOpacity, y: subtextY }}
                className="mt-5 font-mono text-sm sm:text-base text-white/90 max-w-lg mx-auto"
              >
                Your Trust Gate is live. Every channel verified. Customers can now confirm it&apos;s really you.
              </motion.p>

              <motion.div
                style={{ opacity: checklistOpacity, y: checklistY }}
                className="mt-10 flex justify-center flex-wrap gap-x-8 gap-y-3"
              >
                {["Domain verified", "Channels registered", "Portal deployed"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                    <span className="font-mono text-xs sm:text-sm text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
