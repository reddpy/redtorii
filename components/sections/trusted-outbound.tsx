"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  HeartPulse,
  TrendingUp,
  Landmark,
  Phone,
  Mail,
  MessageSquare,
  Search,
  CheckCircle2,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { OUTBOUND_INDUSTRIES } from "@/lib/constants";

const industryIconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  "heart-pulse": HeartPulse,
  "trending-up": TrendingUp,
  landmark: Landmark,
};

const channelIconMap: Record<string, IconType | LucideIcon> = {
  phone: Phone,
  email: Mail,
  sms: MessageSquare,
  linkedin: FaLinkedin,
};

/* ─── Step 1: Message Sent ─── */
function MessageSent({
  sender,
  message,
  color,
}: {
  sender: typeof OUTBOUND_INDUSTRIES[0]["sender"];
  message: typeof OUTBOUND_INDUSTRIES[0]["message"];
  color: string;
}) {
  const ChannelIcon = channelIconMap[message.channelIcon];

  return (
    <div className="border border-border-default bg-surface-primary h-full">
      {/* Step label */}
      <div className="border-b border-border-default px-5 py-3 flex items-center gap-3">
        <div
          className="h-7 w-7 flex items-center justify-center text-white font-mono text-xs font-bold"
          style={{ background: color }}
        >
          1
        </div>
        <div>
          <p className="font-mono text-sm font-bold text-text-primary">
            Message Sent
          </p>
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
            via {message.channel}
          </p>
        </div>
      </div>

      {/* Message content */}
      <div className="p-5">
        {/* Sender */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="h-10 w-10 flex items-center justify-center text-white font-mono text-xs font-bold shrink-0"
            style={{ background: color }}
          >
            {sender.avatar}
          </div>
          <div className="min-w-0">
            <p className="font-mono text-sm font-bold text-text-primary">
              {sender.name}
            </p>
            <p className="font-mono text-xs text-text-muted">
              {sender.company}
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="bg-surface-secondary border border-border-subtle p-4 mb-4">
          <p className="font-mono text-sm text-text-secondary leading-relaxed">
            &ldquo;{message.preview}&rdquo;
          </p>
        </div>

        {/* Channel identifier - this is what they'll search */}
        <div className="flex items-center gap-2">
          <ChannelIcon className="h-4 w-4 text-text-muted" />
          <span className="font-mono text-xs font-semibold text-text-primary">
            {message.channelValue}
          </span>
        </div>

        {/* Recipient thinking */}
        <div className="mt-4 pt-4 border-t border-border-subtle">
          <p className="font-mono text-xs text-text-muted italic">
            &ldquo;Is this actually from {sender.company}?&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 2: Recipient Searches ─── */
function RecipientSearches({
  sender,
  message,
  color,
}: {
  sender: typeof OUTBOUND_INDUSTRIES[0]["sender"];
  message: typeof OUTBOUND_INDUSTRIES[0]["message"];
  color: string;
}) {

  return (
    <div className="border border-border-default bg-surface-primary h-full">
      {/* Step label */}
      <div className="border-b border-border-default px-5 py-3 flex items-center gap-3">
        <div
          className="h-7 w-7 flex items-center justify-center text-white font-mono text-xs font-bold"
          style={{ background: color }}
        >
          2
        </div>
        <div>
          <p className="font-mono text-sm font-bold text-text-primary">
            Recipient Checks
          </p>
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
            Your Trust Gate
          </p>
        </div>
      </div>

      {/* Browser mockup */}
      <div className="p-5">
        {/* URL bar */}
        <div className="flex items-center gap-2 border border-border-default bg-surface-secondary px-3 py-2 mb-4">
          <div className="flex gap-1">
            <div className="h-2 w-2 rounded-full bg-state-compromised/40" />
            <div className="h-2 w-2 rounded-full bg-state-deprecated/40" />
            <div className="h-2 w-2 rounded-full bg-state-verified/40" />
          </div>
          <div className="flex-1 bg-background border border-border-subtle px-2 py-1">
            <span className="font-mono text-[10px] text-text-muted">
              verify.{sender.company.toLowerCase().replace(/\s/g, "")}.com
            </span>
          </div>
        </div>

        {/* Company header */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="h-6 w-6 flex items-center justify-center text-white font-mono text-[8px] font-bold"
            style={{ background: color }}
          >
            {sender.avatar}
          </div>
          <span className="font-mono text-xs font-bold text-text-primary">
            {sender.company}
          </span>
          <span className="font-mono text-[10px] text-state-verified">
            Verified
          </span>
        </div>

        {/* Search bar with the channel value */}
        <div className="flex items-center gap-2 border-2 border-torii-red/30 bg-background px-3 py-2.5 mb-4">
          <Search className="h-4 w-4 text-torii-red" />
          <span className="font-mono text-sm text-text-primary font-medium">
            {message.channelValue}
          </span>
        </div>

        {/* Searching indicator */}
        <div className="flex items-center justify-center gap-2 py-2">
          <div className="h-1.5 w-1.5 rounded-full bg-torii-red animate-pulse" />
          <span className="font-mono text-xs text-text-muted">
            Searching registered channels...
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 3: Verified Result ─── */
function VerifiedResult({
  sender,
  message,
}: {
  sender: typeof OUTBOUND_INDUSTRIES[0]["sender"];
  message: typeof OUTBOUND_INDUSTRIES[0]["message"];
}) {
  const ChannelIcon = channelIconMap[message.channelIcon];

  return (
    <div className="border border-state-verified/30 bg-surface-primary h-full">
      {/* Step label */}
      <div className="border-b border-state-verified/20 bg-state-verified/5 px-5 py-3 flex items-center gap-3">
        <div className="h-7 w-7 flex items-center justify-center bg-state-verified text-white font-mono text-xs font-bold">
          3
        </div>
        <div>
          <p className="font-mono text-sm font-bold text-state-verified">
            Verified
          </p>
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
            Safe to respond
          </p>
        </div>
      </div>

      {/* Verification result */}
      <div className="p-5">
        {/* Result card */}
        <div className="border-l-4 border-l-state-verified bg-state-verified/5 p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="h-5 w-5 text-state-verified" />
            <span className="font-mono text-sm font-bold text-state-verified uppercase tracking-wider">
              Official Channel
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <ChannelIcon className="h-4 w-4 text-text-muted" />
            <span className="font-mono text-sm font-semibold text-text-primary">
              {message.channelValue}
            </span>
          </div>
          <p className="font-mono text-xs text-text-secondary">
            Registered to {sender.company}
          </p>
        </div>

        {/* Verification checks */}
        <div className="space-y-2 mb-4">
          {[
            "Company domain verified",
            "Channel registered",
            "No security alerts",
          ].map((check) => (
            <div key={check} className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-state-verified" />
              <span className="font-mono text-xs text-text-secondary">{check}</span>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="bg-state-verified text-white px-4 py-3 flex items-center justify-center gap-2">
          <CheckCircle2 className="h-4 w-4" />
          <span className="font-mono text-sm font-bold uppercase tracking-wider">
            Safe to Respond
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Industry Selector ─── */
function IndustrySelector({
  industries,
  activeIndex,
  onSelect,
}: {
  industries: typeof OUTBOUND_INDUSTRIES;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {industries.map((industry, index) => {
        const Icon = industryIconMap[industry.icon];
        const isActive = index === activeIndex;

        return (
          <button
            key={industry.id}
            onClick={() => onSelect(index)}
            className={`group relative flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 border font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
              isActive
                ? "bg-surface-dark text-text-on-dark border-surface-dark"
                : "bg-surface-primary text-text-secondary border-border-default hover:border-text-muted hover:text-text-primary"
            }`}
          >
            <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${isActive ? "text-torii-red" : "text-text-muted group-hover:text-torii-red"}`} />
            <span>{industry.shortName}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── Mobile Step Indicator ─── */
function MobileStepIndicator({
  currentStep,
  onStepChange,
  color,
}: {
  currentStep: number;
  onStepChange: (step: number) => void;
  color: string;
}) {
  const steps = [
    { num: 1, label: "Sent" },
    { num: 2, label: "Check" },
    { num: 3, label: "Verified" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      {steps.map((step, i) => (
        <button
          key={step.num}
          onClick={() => onStepChange(step.num)}
          className="flex items-center gap-1"
        >
          <div
            className={`h-8 w-8 flex items-center justify-center font-mono text-xs font-bold transition-all ${
              currentStep === step.num
                ? "text-white"
                : "bg-surface-secondary text-text-muted border border-border-default"
            }`}
            style={currentStep === step.num ? { background: step.num === 3 ? "#22C55E" : color } : {}}
          >
            {step.num}
          </div>
          <span className={`font-mono text-[10px] uppercase tracking-wider ${
            currentStep === step.num ? "text-text-primary font-semibold" : "text-text-muted"
          }`}>
            {step.label}
          </span>
          {i < steps.length - 1 && (
            <div className="w-4 h-px bg-border-default mx-1" />
          )}
        </button>
      ))}
    </div>
  );
}

/* ─── Main Component ─── */
export function TrustedOutbound() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileStep, setMobileStep] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const activeIndustry = OUTBOUND_INDUSTRIES[activeIndex];

  // Auto-rotate industries - 18 seconds to allow steps to complete
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % OUTBOUND_INDUSTRIES.length);
    }, 18000);

    return () => clearInterval(timer);
  }, [isInView]);

  // Auto-advance mobile steps - 5 seconds each (15s total for all 3)
  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setMobileStep((prev) => (prev % 3) + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isInView, activeIndex]);

  // Reset mobile step when industry changes
  useEffect(() => {
    setMobileStep(1);
  }, [activeIndex]);

  return (
    <AnimatedSection
      variants={staggerContainer}
      className="relative bg-background pt-20 pb-12 lg:pt-32 lg:pb-16 overflow-hidden"
    >
      <div
        ref={sectionRef}
        id="use-cases"
        className="relative mx-auto max-w-7xl px-6 lg:px-8 scroll-mt-24"
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="text-center mb-12 lg:mb-16">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            Use Cases
          </p>
          <h2 className="mt-3 tracking-tight text-text-primary">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl">
              Let them verify
            </span>
            <br />
            <span className="font-mono text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              it&apos;s really you
            </span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-text-secondary">
            When your team reaches out, recipients can instantly check your Trust Gate
            to confirm it&apos;s legitimate — then respond with confidence.
          </p>
        </motion.div>

        {/* Industry selector */}
        <motion.div variants={fadeInUp} className="mb-6">
          <p className="text-center mb-3 font-mono text-xs text-text-muted uppercase tracking-wider">
            See how it works for
          </p>
          <IndustrySelector
            industries={OUTBOUND_INDUSTRIES}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </motion.div>

        {/* Industry stat - right below buttons */}
        <motion.div variants={fadeInUp} className="mb-10 lg:mb-14 text-center h-12 flex items-center justify-center">
          <p className="font-mono text-sm sm:text-base text-text-secondary max-w-xl mx-auto">
            <span className="font-bold text-base sm:text-lg" style={{ color: activeIndustry.color }}>
              {activeIndustry.stat}
            </span>
            {" "}{activeIndustry.statLabel}
          </p>
        </motion.div>

        {/* Three-step flow */}
        <motion.div variants={fadeInUp}>
          {/* Desktop: 3 columns */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <MessageSent
              sender={activeIndustry.sender}
              message={activeIndustry.message}
              color={activeIndustry.color}
            />
            <RecipientSearches
              sender={activeIndustry.sender}
              message={activeIndustry.message}
              color={activeIndustry.color}
            />
            <VerifiedResult
              sender={activeIndustry.sender}
              message={activeIndustry.message}
            />
          </div>

          {/* Mobile: Single card with step switcher */}
          <div className="lg:hidden max-w-md mx-auto">
            <MobileStepIndicator
              currentStep={mobileStep}
              onStepChange={setMobileStep}
              color={activeIndustry.color}
            />

            <div className="relative overflow-hidden">
              {mobileStep === 1 && (
                <MessageSent
                  sender={activeIndustry.sender}
                  message={activeIndustry.message}
                  color={activeIndustry.color}
                />
              )}
              {mobileStep === 2 && (
                <RecipientSearches
                  sender={activeIndustry.sender}
                  message={activeIndustry.message}
                  color={activeIndustry.color}
                />
              )}
              {mobileStep === 3 && (
                <VerifiedResult
                  sender={activeIndustry.sender}
                  message={activeIndustry.message}
                />
              )}
            </div>

            {/* Tap hint */}
            <p className="text-center mt-3 font-mono text-[10px] text-text-muted">
              Tap steps above to navigate
            </p>
          </div>
        </motion.div>

      </div>
    </AnimatedSection>
  );
}
