"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundGrid } from "@/components/background-grid";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animation-variants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-40 lg:pb-32">
      <BackgroundGrid color="torii-red" opacity={0.04} cellCount={30} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-start"
          >
            <motion.div variants={fadeInUp}>
              <Badge
                variant="secondary"
                className="mb-6 bg-torii-red-light text-torii-red font-mono text-xs tracking-wider px-3 py-1.5 uppercase"
              >
                Anti-Impersonation Stack
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-mono text-4xl font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              Your gateway
              <br />
              to{" "}
              <span className="text-torii-red">security</span>.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary"
            >
              A fraud communication toolkit — trust page, QR codes, widgets,
              templates, and app integrations. Everything you need to help
              customers verify it&apos;s really you.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="bg-torii-red text-text-on-red hover:bg-torii-red-hover px-8 text-base font-mono font-semibold tracking-wide gap-2"
              >
                Start for free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border-default text-text-primary hover:bg-surface-secondary px-8 text-base font-mono font-medium"
              >
                See how it works
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust page mockup */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="relative"
          >
            <div className="border border-border-default bg-surface-primary shadow-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-border-default bg-surface-secondary px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-state-compromised/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-state-deprecated/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-state-verified/60" />
                </div>
                <div className="ml-3 flex-1 bg-background border border-border-default px-3 py-1">
                  <span className="font-mono text-xs text-text-muted">
                    verify.acmecorp.com
                  </span>
                </div>
              </div>

              {/* Trust page content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-8 w-8 bg-torii-red flex items-center justify-center">
                    <span className="text-white font-mono text-xs font-bold">
                      AC
                    </span>
                  </div>
                  <div>
                    <p className="font-mono text-sm font-bold text-text-primary">
                      Acme Corp
                    </p>
                    <p className="font-mono text-[10px] text-state-verified">
                      Domain verified
                    </p>
                  </div>
                </div>

                {/* Search bar */}
                <div className="flex items-center gap-2 border border-border-default bg-background px-3 py-2.5 mb-5">
                  <Search className="h-4 w-4 text-text-muted" />
                  <span className="font-mono text-sm text-text-muted">
                    +1-800-555-0142
                  </span>
                </div>

                {/* Result card */}
                <div className="border-l-4 border-l-state-verified border border-border-default bg-background p-4">
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
                </div>

                {/* Channel list preview */}
                <div className="mt-4 flex gap-2">
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
                </div>
              </div>
            </div>

            {/* Floating verified badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-3 -right-3 bg-surface-dark border border-white/10 px-4 py-2.5 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-state-verified animate-pulse" />
                <span className="font-mono text-xs font-bold text-text-on-dark tracking-wider uppercase">
                  3 channels verified
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
