"use client";

import { motion } from "framer-motion";
import { Globe, QrCode, Code2, FileText, Bell, ShieldOff, Search } from "lucide-react";
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

/* ─── Inline visuals for each card ─── */

function TrustPageVisual() {
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      {/* Mini browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-border-default bg-surface-secondary px-2.5 py-1.5">
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
        </div>
        <div className="ml-1.5 flex-1 bg-background border border-border-subtle px-2 py-0.5">
          <span className="font-mono text-[8px] text-text-muted">verify.acmecorp.com</span>
        </div>
      </div>
      {/* Company header */}
      <div className="px-2.5 pt-2.5 pb-1.5 flex items-center gap-1.5">
        <div className="h-4 w-4 bg-torii-red flex items-center justify-center">
          <span className="text-white font-mono text-[5px] font-bold">AC</span>
        </div>
        <div>
          <span className="font-mono text-[8px] font-bold text-text-primary">Acme Corp</span>
          <span className="font-mono text-[6px] text-state-verified ml-1">&#x2713; Verified</span>
        </div>
      </div>
      {/* Search bar */}
      <div className="mx-2.5 flex items-center gap-1.5 border border-border-default bg-surface-secondary px-2 py-1.5 mb-2">
        <Search className="h-2.5 w-2.5 text-text-muted" />
        <span className="font-mono text-[8px] text-text-primary">+1-800-555-0142</span>
      </div>
      {/* Result */}
      <div className="mx-2.5 mb-2.5 border-l-2 border-l-state-verified bg-state-verified/5 px-2 py-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 bg-state-verified rounded-full" />
            <span className="font-mono text-[8px] font-bold text-state-verified">Verified</span>
          </div>
          <span className="font-mono text-[6px] text-text-muted">Phone</span>
        </div>
        <span className="font-mono text-[7px] text-text-primary font-semibold block mt-0.5">+1-800-555-0142</span>
        <span className="font-mono text-[6px] text-text-secondary">Main support line · Registered Jan 2024</span>
      </div>
      {/* Channel count */}
      <div className="mx-2.5 mb-2 flex gap-2">
        {[{ n: "8", l: "Verified", c: "text-state-verified" }, { n: "1", l: "Retired", c: "text-state-deprecated" }, { n: "1", l: "Alert", c: "text-state-compromised" }].map((s) => (
          <div key={s.l} className="flex items-center gap-0.5">
            <span className={`font-mono text-[7px] font-bold ${s.c}`}>{s.n}</span>
            <span className="font-mono text-[6px] text-text-muted">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QrCodeVisual() {
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0],
    [0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1],
    [1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0],
    [0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1],
    [1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0],
    [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0],
    [1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
  ];
  const size = 4;
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      {/* Business card context */}
      <div className="p-3 flex gap-3">
        {/* QR code */}
        <svg
          width={pattern[0].length * size}
          height={pattern.length * size}
          viewBox={`0 0 ${pattern[0].length * size} ${pattern.length * size}`}
          className="shrink-0"
        >
          {pattern.map((row, y) =>
            row.map((cell, x) =>
              cell ? (
                <rect
                  key={`${x}-${y}`}
                  x={x * size}
                  y={y * size}
                  width={size}
                  height={size}
                  className="fill-text-primary"
                />
              ) : null
            )
          )}
        </svg>
        {/* Card context */}
        <div className="flex flex-col justify-between py-0.5">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <div className="h-3 w-3 bg-torii-red flex items-center justify-center">
                <span className="text-white font-mono text-[4px] font-bold">AC</span>
              </div>
              <span className="font-mono text-[8px] font-bold text-text-primary">Acme Corp</span>
            </div>
            <span className="font-mono text-[7px] text-text-secondary block">Scan to verify</span>
            <span className="font-mono text-[7px] text-text-secondary block">our identity</span>
          </div>
          <span className="font-mono text-[6px] text-text-muted">verify.acmecorp.com</span>
        </div>
      </div>
      {/* Use case labels */}
      <div className="border-t border-border-default px-3 py-1.5 flex gap-2">
        {["Statements", "Business cards", "Signage"].map((use) => (
          <span key={use} className="font-mono text-[6px] text-text-muted uppercase tracking-wider">{use}</span>
        ))}
      </div>
    </div>
  );
}

function WidgetVisual() {
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      {/* Mini browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-border-default bg-surface-secondary px-2.5 py-1.5">
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
        </div>
        <div className="ml-1.5 flex-1 bg-background border border-border-subtle px-2 py-0.5">
          <span className="font-mono text-[8px] text-text-muted">acmecorp.com/contact</span>
        </div>
      </div>
      {/* Page content with embedded widget */}
      <div className="p-2.5 space-y-1.5">
        <span className="font-mono text-[8px] font-bold text-text-primary block">Contact Us</span>
        <div className="h-1.5 w-full bg-text-muted/8 rounded-sm" />
        <div className="h-1.5 w-3/4 bg-text-muted/8 rounded-sm" />
      </div>
      {/* Embedded widget — highlighted */}
      <div className="mx-2.5 mb-2 border-2 border-torii-red/25 bg-torii-red-light/20 p-2">
        <div className="flex items-center gap-1.5 bg-background border border-border-default px-2 py-1.5">
          <Search className="h-2.5 w-2.5 text-text-muted" />
          <span className="font-mono text-[8px] text-text-muted">Verify a contact...</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="h-1 w-1 bg-torii-red" />
            <span className="font-mono text-[6px] text-torii-red font-semibold">Powered by Red Torii</span>
          </div>
        </div>
      </div>
      {/* More page content */}
      <div className="px-2.5 pb-2.5 space-y-1.5">
        <div className="h-1.5 w-full bg-text-muted/8 rounded-sm" />
        <div className="h-1.5 w-1/2 bg-text-muted/8 rounded-sm" />
      </div>
    </div>
  );
}

function EmailTemplateVisual() {
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      {/* Email header */}
      <div className="border-b border-border-default px-2.5 py-2">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="h-4 w-4 bg-torii-red flex items-center justify-center">
            <span className="text-white font-mono text-[5px] font-bold">AC</span>
          </div>
          <span className="font-mono text-[8px] font-bold text-text-primary">Acme Corp</span>
        </div>
        <div className="space-y-0.5">
          <div className="flex gap-1">
            <span className="font-mono text-[6px] text-text-muted w-5 shrink-0">To:</span>
            <span className="font-mono text-[6px] text-text-secondary">customer@email.com</span>
          </div>
          <div className="flex gap-1">
            <span className="font-mono text-[6px] text-text-muted w-5 shrink-0">Sub:</span>
            <span className="font-mono text-[6px] text-text-primary font-semibold">How to verify it&apos;s really us</span>
          </div>
        </div>
      </div>
      {/* Email body */}
      <div className="p-2.5">
        <span className="font-mono text-[7px] text-text-secondary block mb-1.5">Hi there,</span>
        <span className="font-mono text-[7px] text-text-secondary block mb-1">
          We&apos;ve set up a verification page so you can always confirm you&apos;re talking to the real us.
        </span>
        <div className="h-1.5 w-4/5 bg-text-muted/8 rounded-sm mb-2" />
        <div className="bg-torii-red px-2.5 py-1.5 inline-flex items-center gap-1">
          <span className="font-mono text-[7px] font-bold text-white uppercase tracking-wider">
            Visit Verification Page →
          </span>
        </div>
        <div className="mt-2 border-t border-border-subtle pt-1.5">
          <span className="font-mono text-[6px] text-text-muted">verify.acmecorp.com</span>
        </div>
      </div>
    </div>
  );
}

function ScamAlertVisual() {
  return (
    <div className="border border-state-compromised/30 bg-state-compromised/5 overflow-hidden">
      {/* Alert header */}
      <div className="bg-state-compromised px-2.5 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
          <span className="font-mono text-[8px] font-bold text-white uppercase tracking-wider">
            Active Scam Alerts
          </span>
        </div>
        <span className="font-mono text-[7px] text-white/70">2 active</span>
      </div>
      {/* Alert items */}
      <div className="p-2.5 space-y-2">
        <div className="border-l-2 border-l-state-compromised pl-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[8px] font-bold text-state-compromised">
              Fake &quot;@AcmeSupport&quot; on Telegram
            </span>
          </div>
          <span className="font-mono text-[7px] text-text-secondary block mt-0.5">
            Impersonating support staff. Asking for wallet keys.
          </span>
          <div className="flex gap-2 mt-1">
            <span className="font-mono text-[6px] text-text-muted">Jan 28</span>
            <span className="font-mono text-[6px] text-state-compromised font-semibold">12 reports</span>
          </div>
        </div>
        <div className="border-l-2 border-l-state-compromised pl-2">
          <span className="font-mono text-[8px] font-bold text-state-compromised block">
            Phishing: support@acme-help.net
          </span>
          <span className="font-mono text-[7px] text-text-secondary block mt-0.5">
            Fake password reset emails with malicious links.
          </span>
          <div className="flex gap-2 mt-1">
            <span className="font-mono text-[6px] text-text-muted">Jan 30</span>
            <span className="font-mono text-[6px] text-state-compromised font-semibold">8 reports</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IncidentModeVisual() {
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      {/* Header with toggle */}
      <div className="flex items-center justify-between px-2.5 py-2 border-b border-state-compromised/30 bg-state-compromised/5">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 bg-state-compromised rounded-full animate-pulse" />
          <span className="font-mono text-[8px] font-bold text-state-compromised uppercase tracking-wider">
            Incident Mode
          </span>
        </div>
        {/* Toggle switch — ON state */}
        <div className="w-7 h-4 bg-state-compromised rounded-full relative">
          <div className="absolute right-0.5 top-0.5 h-3 w-3 bg-white rounded-full shadow-sm" />
        </div>
      </div>
      {/* Status bar */}
      <div className="px-2.5 py-1.5 border-b border-border-default bg-surface-secondary">
        <span className="font-mono text-[7px] text-text-secondary">
          3 channels flagged as compromised
        </span>
      </div>
      {/* Channels being flagged */}
      <div className="p-2 space-y-1">
        {[
          { ch: "+1-800-555-0142", type: "Phone" },
          { ch: "@AcmeCorp", type: "Twitter" },
          { ch: "help@acme.com", type: "Email" },
        ].map((item) => (
          <div key={item.ch} className="flex items-center justify-between px-1.5 py-1.5 bg-state-compromised/5 border border-state-compromised/10">
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 bg-state-compromised rounded-full" />
              <div>
                <span className="font-mono text-[8px] text-text-primary block">{item.ch}</span>
                <span className="font-mono text-[6px] text-text-muted">{item.type}</span>
              </div>
            </div>
            <span className="font-mono text-[6px] text-state-compromised font-bold uppercase tracking-wider">
              Compromised
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const visualMap: Record<string, () => React.JSX.Element> = {
  Globe: TrustPageVisual,
  QrCode: QrCodeVisual,
  Code2: WidgetVisual,
  FileText: EmailTemplateVisual,
  Bell: ScamAlertVisual,
  ShieldOff: IncidentModeVisual,
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
            const Visual = visualMap[feature.icon];
            return (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full border-border-default bg-surface-primary shadow-none hover:border-torii-red/20 transition-colors group">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Visual mockup */}
                    <div className="p-4 pb-0">
                      <Visual />
                    </div>

                    {/* Text content — pinned to bottom */}
                    <div className="p-4 pt-3 mt-auto">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className="flex h-8 w-8 items-center justify-center bg-torii-red-light shrink-0">
                          <Icon className="h-4 w-4 text-torii-red" />
                        </div>
                        <h3 className="font-mono text-base font-bold tracking-tight text-text-primary">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                        {feature.description}
                      </p>
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
