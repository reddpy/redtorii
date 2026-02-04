"use client";

import { motion } from "framer-motion";
import { Globe, QrCode, Code2, FileText, Bell, ShieldOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingCrosses } from "@/components/background-grid";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { TOOLKIT_FEATURES } from "@/lib/constants";

const iconMap = {
  Globe,
  QrCode,
  Code2,
  FileText,
  Bell,
  ShieldOff,
};

export function Toolkit() {
  return (
    <AnimatedSection
      variants={staggerContainer}
      className="relative bg-surface-secondary py-20 lg:py-32"
    >
      <FloatingCrosses count={12} color="text-torii-red/[0.05]" />

      <div
        id="toolkit"
        className="relative mx-auto max-w-7xl px-6 lg:px-8 scroll-mt-24"
      >
        <motion.div variants={fadeInUp} className="mb-12 lg:mb-16 max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            Toolkit
          </p>
          <h2 className="mt-3 tracking-tight text-text-primary">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl">The complete</span>
            <br />
            <span className="font-mono text-3xl font-extrabold sm:text-4xl lg:text-5xl">anti-impersonation stack</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Not just a page. A full fraud communication kit — ready to deploy,
            no engineering required.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TOOLKIT_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full border-border-default bg-surface-primary shadow-none hover:border-torii-red/20 transition-colors group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center bg-torii-red-light shrink-0">
                        <Icon className="h-5 w-5 text-torii-red" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-mono text-base font-bold tracking-tight text-text-primary">
                          {feature.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    {/* Preview snippet */}
                    <div className="mt-4 border border-border-subtle bg-background px-3 py-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-torii-red shrink-0" />
                      <span className="font-mono text-xs text-text-muted truncate">
                        {feature.preview}
                      </span>
                    </div>
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
