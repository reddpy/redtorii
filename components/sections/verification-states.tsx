"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert, AlertTriangle, Clock } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { VERIFICATION_STATES } from "@/lib/constants";

const iconMap: Record<string, typeof CheckCircle2> = {
  verified: CheckCircle2,
  "not-found": ShieldAlert,
  compromised: AlertTriangle,
  deprecated: Clock,
};

const styles: Record<
  string,
  { border: string; bg: string; text: string; badge: string; accent: string }
> = {
  "state-verified": {
    border: "border-state-verified",
    bg: "bg-state-verified/5",
    text: "text-state-verified",
    badge: "bg-state-verified/10 text-state-verified border-state-verified/20",
    accent: "bg-state-verified",
  },
  "state-compromised": {
    border: "border-state-compromised",
    bg: "bg-state-compromised/5",
    text: "text-state-compromised",
    badge:
      "bg-state-compromised/10 text-state-compromised border-state-compromised/20",
    accent: "bg-state-compromised",
  },
  "state-deprecated": {
    border: "border-state-deprecated",
    bg: "bg-state-deprecated/5",
    text: "text-state-deprecated",
    badge:
      "bg-state-deprecated/10 text-state-deprecated border-state-deprecated/20",
    accent: "bg-state-deprecated",
  },
};

export function VerificationStates() {
  return (
    <AnimatedSection
      variants={staggerContainer}
      className="bg-background py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="mb-12 lg:mb-16 max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            Verification States
          </p>
          <h2 className="mt-3 tracking-tight text-text-primary">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl">
              Customers search.
            </span>{" "}
            <br />
            <span className="font-mono text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              We answer.
            </span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            When a customer looks up a channel on your Trust Gate, they get one
            of four clear verdicts — no ambiguity, no guessing.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VERIFICATION_STATES.map((state) => {
            const Icon = iconMap[state.status];
            const s = styles[state.color];

            return (
              <div
                key={state.status}
                className={`relative border ${s.border} bg-surface-primary overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                {/* Color accent bar */}
                <div className={`h-1 w-full ${s.accent}`} />

                {/* Status badge + icon */}
                <div className="p-5 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${s.badge} border`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3
                        className={`font-mono text-sm font-bold uppercase tracking-wider ${s.text}`}
                      >
                        {state.label}
                      </h3>
                      <p className="text-xs text-text-muted">
                        {state.description}
                      </p>
                    </div>
                  </div>

                  {/* Example channel */}
                  <div className={`${s.bg} p-3 mb-3`}>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-1">
                      {state.example.type} · {state.example.company}
                    </p>
                    <p className="font-mono text-sm font-bold text-text-primary">
                      {state.example.channel}
                    </p>
                  </div>

                  {/* Action */}
                  <p className="text-xs leading-relaxed text-text-secondary flex-1">
                    {state.action}
                  </p>
                </div>

                {/* Warning bar for dangerous states */}
                {"warning" in state &&
                  (state as { warning?: string }).warning && (
                    <div className={`${s.accent} px-5 py-2.5 mt-auto`}>
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                        {(state as { warning?: string }).warning}
                      </p>
                    </div>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
