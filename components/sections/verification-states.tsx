"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { VERIFICATION_STATES } from "@/lib/constants";

const iconMap: Record<string, typeof CheckCircle2> = {
  verified: CheckCircle2,
  "not-found": XCircle,
  compromised: AlertTriangle,
  deprecated: AlertCircle,
};

const colorMap: Record<string, string> = {
  "state-verified": "text-state-verified",
  "state-not-found": "text-state-not-found",
  "state-compromised": "text-state-compromised",
  "state-deprecated": "text-state-deprecated",
};

const borderMap: Record<string, string> = {
  "state-verified": "border-l-state-verified",
  "state-not-found": "border-l-state-not-found",
  "state-compromised": "border-l-state-compromised",
  "state-deprecated": "border-l-state-deprecated",
};

const bgMap: Record<string, string> = {
  "state-verified": "bg-state-verified/10",
  "state-not-found": "bg-state-not-found/10",
  "state-compromised": "bg-state-compromised/10",
  "state-deprecated": "bg-state-deprecated/10",
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
          <h2 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Customers search. We answer.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            When a customer searches a channel on your trust page, they see one
            of four statuses — with a clear explanation and action to take.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {VERIFICATION_STATES.map((state) => {
            const Icon = iconMap[state.status];
            return (
              <motion.div
                key={state.status}
                variants={fadeInUp}
                className={`border-l-4 ${borderMap[state.color]} border border-border-default bg-surface-primary overflow-hidden`}
              >
                {/* Status header */}
                <div className="flex items-center justify-between p-5 pb-0">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 items-center justify-center ${bgMap[state.color]}`}
                    >
                      <Icon
                        className={`h-4 w-4 ${colorMap[state.color]}`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-mono text-sm font-bold uppercase tracking-wider ${colorMap[state.color]}`}
                      >
                        {state.label}
                      </h3>
                      <p className="text-xs text-text-muted">
                        {state.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Example lookup */}
                <div className="mx-5 mt-4 mb-4 border border-border-subtle bg-background p-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                      {state.example.type}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      {state.example.company}
                    </span>
                  </div>
                  <p className="font-mono text-sm font-semibold text-text-primary">
                    {state.example.channel}
                  </p>
                </div>

                {/* Action text */}
                <div className={`px-5 pb-4`}>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    {state.action}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
