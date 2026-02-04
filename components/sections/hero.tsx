"use client";

import Image from "next/image";
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
        {/* Centered text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center"
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
            className="font-display text-5xl leading-[1.1] tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
          >
            Help customers verify
            <br />
            <span className="font-mono text-4xl font-extrabold sm:text-5xl lg:text-6xl text-torii-red">
              it&apos;s really you
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary"
          >
            Protect your customers from impersonation and fraud. Red Torii gives
            companies the tools to prove authenticity across every channel — so
            people always know who they&apos;re really talking to.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              asChild
              className="bg-torii-red text-text-on-red hover:bg-torii-red-hover px-8 text-base font-mono font-semibold tracking-wide gap-2"
            >
              <a href="mailto:hello@redtorii.com">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-border-default text-text-primary hover:bg-surface-secondary px-8 text-base font-mono font-medium"
            >
              <a href="#how-it-works">See how it works</a>
            </Button>
          </motion.div>

          {/* Social proof logos */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
              Built by a team from
            </p>
            <div className="flex items-center gap-10">
              <Image
                src="/logos/cornell.svg"
                alt="Cornell University"
                width={120}
                height={40}
                className="h-10 w-auto opacity-40 grayscale"
              />
              <Image
                src="/logos/stanford.png"
                alt="Stanford University"
                width={40}
                height={40}
                className="h-10 w-auto opacity-40 grayscale"
              />
              <Image
                src="/logos/new-relic.svg"
                alt="New Relic"
                width={120}
                height={24}
                className="h-6 w-auto opacity-40 grayscale"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Gate mockup below */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="relative mt-16 lg:mt-20 mx-auto max-w-3xl"
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

            {/* Scam alert banner */}
            <div className="bg-state-compromised/10 border-b border-state-compromised/20 px-4 py-2 flex items-center gap-2">
              <div className="h-1.5 w-1.5 bg-state-compromised rounded-full animate-pulse" />
              <span className="font-mono text-[10px] font-semibold text-state-compromised">
                Active alert:
              </span>
              <span className="font-mono text-[10px] text-text-secondary">
                Fake &quot;@AcmeSupport&quot; accounts reported on Telegram
              </span>
            </div>

            {/* Trust Gate content */}
            <div className="p-5">
              {/* Company header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
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
                <span className="font-mono text-[10px] text-text-muted border border-border-default px-2 py-0.5">
                  10 channels registered
                </span>
              </div>

              {/* Search bar */}
              <div className="flex items-center gap-2 border border-border-default bg-background px-3 py-2.5 mb-4">
                <Search className="h-4 w-4 text-text-muted" />
                <span className="font-mono text-sm text-text-muted">
                  Search any phone, email, or handle...
                </span>
              </div>

              {/* Channel list */}
              <div className="border border-border-default divide-y divide-border-subtle">
                {[
                  {
                    value: "+1-800-555-0142",
                    desc: "Main support line",
                    type: "Phone",
                    dot: "bg-state-verified",
                    status: "Verified",
                    statusColor: "text-state-verified",
                  },
                  {
                    value: "@AcmeCorp",
                    desc: "Official account",
                    type: "X / Twitter",
                    dot: "bg-state-verified",
                    status: "Verified",
                    statusColor: "text-state-verified",
                  },
                  {
                    value: "j.park@acmecorp.com",
                    desc: "James Park — Account Mgr",
                    type: "Email",
                    dot: "bg-state-verified",
                    status: "Verified",
                    statusColor: "text-state-verified",
                  },
                  {
                    value: "+1-800-555-0199",
                    desc: "Old fraud desk",
                    type: "Phone",
                    dot: "bg-state-deprecated",
                    status: "Retired",
                    statusColor: "text-state-deprecated",
                  },
                ].map((ch) => (
                  <div
                    key={ch.value}
                    className="flex items-center justify-between px-3 py-2.5"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`h-1.5 w-1.5 rounded-full shrink-0 ${ch.dot}`}
                      />
                      <div className="min-w-0">
                        <span className="font-mono text-xs text-text-primary block truncate">
                          {ch.value}
                        </span>
                        <span className="font-mono text-[9px] text-text-muted block">
                          {ch.desc}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                        {ch.type}
                      </span>
                      <span
                        className={`font-mono text-[10px] font-semibold uppercase tracking-wider ${ch.statusColor}`}
                      >
                        {ch.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer stats */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-3">
                  {[
                    {
                      label: "Verified",
                      count: "8",
                      color: "text-state-verified",
                    },
                    {
                      label: "Deprecated",
                      count: "1",
                      color: "text-state-deprecated",
                    },
                    {
                      label: "Alerts",
                      count: "1",
                      color: "text-state-compromised",
                    },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-1">
                      <span
                        className={`font-mono text-[10px] font-bold ${stat.color}`}
                      >
                        {stat.count}
                      </span>
                      <span className="font-mono text-[10px] text-text-muted">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="font-mono text-[10px] text-text-muted">
                  Last updated 2m ago
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
                10 channels verified
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
