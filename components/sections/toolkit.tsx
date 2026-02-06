"use client";

import { motion } from "framer-motion";
import {
  Globe,
  BarChart3,
  QrCode,
  Code2,
  FileText,
  Bell,
  ShieldOff,
  Search,
  Link,
  MousePointer2,
  CheckCircle2,
} from "lucide-react";
import {
  FaXTwitter,
  FaTelegram,
  FaDiscord,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingCrosses } from "@/components/background-grid";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";

/* ─── Visual mockups ─── */

function TrustPageVisual() {
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-border-default bg-surface-secondary px-2.5 py-1.5">
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
        </div>
        <div className="ml-1.5 flex-1 bg-background border border-border-subtle px-2 py-0.5">
          <span className="font-mono text-[8px] text-text-muted">
            verify.acmecorp.com
          </span>
        </div>
      </div>
      <div className="px-2.5 pt-2.5 pb-1.5 flex items-center gap-1.5">
        <div className="h-4 w-4 bg-torii-red flex items-center justify-center">
          <span className="text-white font-mono text-[5px] font-bold">AC</span>
        </div>
        <div>
          <span className="font-mono text-[8px] font-bold text-text-primary">
            Acme Corp
          </span>
          <span className="font-mono text-[6px] text-state-verified ml-1">
            &#x2713; Verified
          </span>
        </div>
      </div>
      <div className="mx-2.5 flex items-center gap-1.5 border border-border-default bg-surface-secondary px-2 py-1.5 mb-2">
        <Search className="h-2.5 w-2.5 text-text-muted" />
        <span className="font-mono text-[8px] text-text-primary">
          +1-800-555-0142
        </span>
      </div>
      <div className="mx-2.5 mb-2.5 border-l-2 border-l-state-verified bg-state-verified/5 px-2 py-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 bg-state-verified rounded-full" />
            <span className="font-mono text-[8px] font-bold text-state-verified">
              Verified
            </span>
          </div>
          <span className="font-mono text-[6px] text-text-muted">Phone</span>
        </div>
        <span className="font-mono text-[7px] text-text-primary font-semibold block mt-0.5">
          +1-800-555-0142
        </span>
        <span className="font-mono text-[6px] text-text-secondary">
          Main support line · Registered Jan 2024
        </span>
      </div>
      <div className="mx-2.5 mb-2 flex gap-2">
        {[
          { n: "8", l: "Verified", c: "text-state-verified" },
          { n: "1", l: "Retired", c: "text-state-deprecated" },
          { n: "1", l: "Alert", c: "text-state-compromised" },
        ].map((s) => (
          <div key={s.l} className="flex items-center gap-0.5">
            <span className={`font-mono text-[7px] font-bold ${s.c}`}>
              {s.n}
            </span>
            <span className="font-mono text-[6px] text-text-muted">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  const bars = [
    { h: "35%", label: "Mon" },
    { h: "55%", label: "Tue" },
    { h: "45%", label: "Wed" },
    { h: "70%", label: "Thu" },
    { h: "90%", label: "Fri" },
    { h: "60%", label: "Sat" },
    { h: "40%", label: "Sun" },
  ];
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      <div className="flex items-center justify-between border-b border-border-default px-3 py-2">
        <span className="font-mono text-[8px] font-bold text-text-primary uppercase tracking-wider">
          Analytics
        </span>
        <div className="flex gap-1.5">
          {["7d", "30d", "90d"].map((range) => (
            <span
              key={range}
              className={`font-mono text-[7px] px-1.5 py-0.5 ${
                range === "7d"
                  ? "bg-torii-red text-white font-semibold"
                  : "text-text-muted border border-border-subtle"
              }`}
            >
              {range}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 border-b border-border-default">
        {[
          { value: "1,247", label: "Total lookups", change: "+23%" },
          { value: "34", label: "Unknown queries", change: "+8" },
          { value: "3", label: "Flagged trends", change: "New" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="px-3 py-2 border-r border-border-default last:border-r-0"
          >
            <div className="flex items-baseline gap-1">
              <span className="font-mono text-sm font-bold text-text-primary">
                {stat.value}
              </span>
              <span className="font-mono text-[7px] font-semibold text-state-verified">
                {stat.change}
              </span>
            </div>
            <span className="font-mono text-[6px] text-text-muted uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      <div className="px-3 pt-3 pb-2">
        <div className="flex items-end gap-1.5 h-16">
          {bars.map((bar) => (
            <div
              key={bar.label}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <div
                className="w-full bg-torii-red/15 relative"
                style={{ height: bar.h }}
              >
                <div
                  className="absolute inset-x-0 bottom-0 bg-torii-red"
                  style={{ height: "60%" }}
                />
              </div>
              <span className="font-mono text-[6px] text-text-muted">
                {bar.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-3 mb-2.5 bg-state-compromised/5 border border-state-compromised/15 px-2 py-1.5 flex items-center gap-1.5">
        <div className="h-1.5 w-1.5 bg-state-compromised rounded-full animate-pulse shrink-0" />
        <span className="font-mono text-[7px] text-text-secondary">
          <span className="text-state-compromised font-semibold">
            Trending:
          </span>{" "}
          12 lookups for unregistered +1-555-0199
        </span>
      </div>
    </div>
  );
}

function QrCodeVisual() {
  const pattern = [
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  ];
  const size = 4;
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      <div className="p-3 flex gap-3">
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
              ) : null,
            ),
          )}
        </svg>
        <div className="flex flex-col justify-between py-0.5">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <div className="h-3 w-3 bg-torii-red flex items-center justify-center">
                <span className="text-white font-mono text-[4px] font-bold">
                  AC
                </span>
              </div>
              <span className="font-mono text-[8px] font-bold text-text-primary">
                Acme Corp
              </span>
            </div>
            <span className="font-mono text-[7px] text-text-secondary block">
              Scan to verify
            </span>
            <span className="font-mono text-[7px] text-text-secondary block">
              our identity
            </span>
          </div>
          <span className="font-mono text-[6px] text-text-muted">
            verify.acmecorp.com
          </span>
        </div>
      </div>
      <div className="border-t border-border-default px-3 py-1.5 flex gap-2">
        {["Statements", "Business cards", "Signage"].map((use) => (
          <span
            key={use}
            className="font-mono text-[6px] text-text-muted uppercase tracking-wider"
          >
            {use}
          </span>
        ))}
      </div>
    </div>
  );
}

function WidgetVisual() {
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-border-default bg-surface-secondary px-2.5 py-1.5">
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
        </div>
        <div className="ml-1.5 flex-1 bg-background border border-border-subtle px-2 py-0.5">
          <span className="font-mono text-[8px] text-text-muted">
            acmecorp.com/contact
          </span>
        </div>
      </div>
      <div className="p-2.5 space-y-1.5">
        <span className="font-mono text-[8px] font-bold text-text-primary block">
          Contact Us
        </span>
        <div className="h-1.5 w-full bg-text-muted/8 rounded-sm" />
        <div className="h-1.5 w-3/4 bg-text-muted/8 rounded-sm" />
      </div>
      <div className="mx-2.5 mb-2 border-2 border-torii-red/25 bg-torii-red-light/20 p-2">
        <div className="flex items-center gap-1.5 bg-background border border-border-default px-2 py-1.5">
          <Search className="h-2.5 w-2.5 text-text-muted" />
          <span className="font-mono text-[8px] text-text-muted">
            Verify a contact...
          </span>
        </div>
        <div className="mt-1.5 flex items-center gap-1">
          <div className="h-1 w-1 bg-torii-red" />
          <span className="font-mono text-[6px] text-torii-red font-semibold">
            Powered by Red Torii
          </span>
        </div>
      </div>
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
      <div className="border-b border-border-default px-2.5 py-2">
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="h-4 w-4 bg-torii-red flex items-center justify-center">
            <span className="text-white font-mono text-[5px] font-bold">
              AC
            </span>
          </div>
          <span className="font-mono text-[8px] font-bold text-text-primary">
            Acme Corp
          </span>
        </div>
        <div className="space-y-0.5">
          <div className="flex gap-1">
            <span className="font-mono text-[6px] text-text-muted w-5 shrink-0">
              To:
            </span>
            <span className="font-mono text-[6px] text-text-secondary">
              customer@email.com
            </span>
          </div>
          <div className="flex gap-1">
            <span className="font-mono text-[6px] text-text-muted w-5 shrink-0">
              Sub:
            </span>
            <span className="font-mono text-[6px] text-text-primary font-semibold">
              How to verify it&apos;s really us
            </span>
          </div>
        </div>
      </div>
      <div className="p-2.5">
        <span className="font-mono text-[7px] text-text-secondary block mb-1.5">
          Hi there,
        </span>
        <span className="font-mono text-[7px] text-text-secondary block mb-1">
          We&apos;ve set up a Trust Gate so you can always confirm you&apos;re
          talking to the real us.
        </span>
        <div className="h-1.5 w-4/5 bg-text-muted/8 rounded-sm mb-2" />
        <div className="bg-torii-red px-2.5 py-1.5 inline-flex items-center gap-1">
          <span className="font-mono text-[7px] font-bold text-white uppercase tracking-wider">
            Visit Trust Gate →
          </span>
        </div>
        <div className="mt-2 border-t border-border-subtle pt-1.5">
          <span className="font-mono text-[6px] text-text-muted">
            verify.acmecorp.com
          </span>
        </div>
      </div>
    </div>
  );
}

function ScamAlertVisual() {
  return (
    <div className="border border-state-compromised/30 bg-state-compromised/5 overflow-hidden">
      <div className="bg-state-compromised px-2.5 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 bg-white rounded-full animate-pulse" />
          <span className="font-mono text-[8px] font-bold text-white uppercase tracking-wider">
            Active Threat Advisories
          </span>
        </div>
        <span className="font-mono text-[7px] text-white/70">2 active</span>
      </div>
      <div className="p-2.5 space-y-2">
        <div className="border-l-2 border-l-state-compromised pl-2">
          <span className="font-mono text-[8px] font-bold text-state-compromised">
            Fake &quot;@AcmeSupport&quot; on Telegram
          </span>
          <span className="font-mono text-[7px] text-text-secondary block mt-0.5">
            Impersonating support staff. Asking for wallet keys.
          </span>
          <div className="flex gap-2 mt-1">
            <span className="font-mono text-[6px] text-text-muted">Jan 28</span>
            <span className="font-mono text-[6px] text-state-compromised font-semibold">
              12 reports
            </span>
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
            <span className="font-mono text-[6px] text-state-compromised font-semibold">
              8 reports
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function IncidentModeVisual() {
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      <div className="flex items-center justify-between px-2.5 py-2 border-b border-state-compromised/30 bg-state-compromised/5">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 bg-state-compromised rounded-full animate-pulse" />
          <span className="font-mono text-[8px] font-bold text-state-compromised uppercase tracking-wider">
            Incident Lockdown
          </span>
        </div>
        <div className="w-7 h-4 bg-state-compromised rounded-full relative">
          <div className="absolute right-0.5 top-0.5 h-3 w-3 bg-white rounded-full shadow-sm" />
        </div>
      </div>
      <div className="px-2.5 py-1.5 border-b border-border-default bg-surface-secondary">
        <span className="font-mono text-[7px] text-text-secondary">
          3 channels flagged as compromised
        </span>
      </div>
      <div className="p-2 space-y-1">
        {[
          { ch: "+1-800-555-0142", type: "Phone" },
          { ch: "@AcmeCorp", type: "Twitter" },
          { ch: "help@acme.com", type: "Email" },
        ].map((item) => (
          <div
            key={item.ch}
            className="flex items-center justify-between px-1.5 py-1.5 bg-state-compromised/5 border border-state-compromised/10"
          >
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 bg-state-compromised rounded-full" />
              <div>
                <span className="font-mono text-[8px] text-text-primary block">
                  {item.ch}
                </span>
                <span className="font-mono text-[6px] text-text-muted">
                  {item.type}
                </span>
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

function ProtectedLinksVisual() {
  return (
    <div className="border border-border-default bg-background overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-border-default bg-surface-secondary px-2.5 py-1.5">
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-text-muted/30" />
        </div>
        <div className="ml-1.5 flex-1 bg-background border border-border-subtle px-2 py-0.5">
          <span className="font-mono text-[8px] text-text-muted">
            rt.link/acme/support
          </span>
        </div>
      </div>
      {/* Flow visualization */}
      <div className="p-3">
        <div className="flex items-center justify-between gap-2">
          {/* Click - Mouse cursor */}
          <div className="flex flex-col items-center gap-1">
            <div className="h-9 w-9 rounded bg-torii-red/10 border border-torii-red/20 flex items-center justify-center">
              <MousePointer2 className="h-4 w-4 text-torii-red" />
            </div>
            <span className="font-mono text-[6px] text-text-muted">Click</span>
          </div>
          {/* Arrow */}
          <div className="flex-1 h-px bg-gradient-to-r from-torii-red/40 to-torii-red relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-torii-red" />
          </div>
          {/* Checkpoint - Torii Gate */}
          <div className="flex flex-col items-center gap-1">
            <div className="h-11 w-14 rounded bg-surface-dark border-2 border-torii-red/40 flex flex-col items-center justify-center">
              {/* Simple Torii Gate SVG */}
              <svg viewBox="0 0 24 20" className="h-5 w-5" fill="none">
                <path
                  d="M2 4h20M4 4v14M20 4v14M1 2h22M6 8h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-torii-red"
                />
              </svg>
              <span className="font-mono text-[5px] text-white/60 mt-0.5">Verified</span>
            </div>
            <span className="font-mono text-[6px] text-torii-red font-medium">Gate</span>
          </div>
          {/* Arrow */}
          <div className="flex-1 h-px bg-gradient-to-r from-state-verified to-state-verified/40 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[5px] border-l-state-verified/40" />
          </div>
          {/* Destination - Big checkmark */}
          <div className="flex flex-col items-center gap-1">
            <div className="h-9 w-9 rounded bg-state-verified/10 border border-state-verified/30 flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-state-verified" />
            </div>
            <span className="font-mono text-[6px] text-state-verified">Safe</span>
          </div>
        </div>
      </div>
      {/* Bottom info */}
      <div className="border-t border-border-default px-2.5 py-2 bg-surface-secondary">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 bg-state-verified rounded-full" />
            <span className="font-mono text-[7px] text-text-secondary">
              discord.gg/acmecorp
            </span>
          </div>
          <span className="font-mono text-[6px] text-state-verified font-semibold">
            Redirected
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Feature card component ─── */
function FeatureCard({
  icon: Icon,
  title,
  description,
  visual: Visual,
  visualFooter,
}: {
  icon: typeof Globe;
  title: string;
  description: string;
  visual: () => React.JSX.Element;
  visualFooter?: React.ReactNode;
}) {
  return (
    <Card className="h-full border-border-default bg-surface-primary shadow-none hover:border-torii-red/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="p-4 pb-0">
          <Visual />
          {visualFooter}
        </div>
        <div className="p-4 pt-3 mt-auto">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="flex h-8 w-8 items-center justify-center bg-torii-red-light shrink-0">
              <Icon className="h-4 w-4 text-torii-red" />
            </div>
            <h3 className="font-mono text-base font-bold tracking-tight text-text-primary">
              {title}
            </h3>
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Subsection label ─── */
function SubsectionLabel({ label, number }: { label: string; number: string }) {
  return (
    <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
      <span className="font-mono text-[10px] font-bold text-torii-red bg-torii-red-light px-2 py-0.5 uppercase tracking-wider">
        {number}
      </span>
      <span className="font-mono text-sm font-semibold text-text-primary uppercase tracking-wider">
        {label}
      </span>
      <div className="flex-1 h-px bg-border-default" />
    </motion.div>
  );
}

/* ─── Main component ─── */
export function Toolkit() {
  return (
    <section id="toolkit" className="scroll-mt-20">
      <AnimatedSection
        variants={staggerContainer}
        className="relative bg-surface-secondary py-20 lg:pb-32"
      >
        <FloatingCrosses count={12} color="text-torii-red/[0.05]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div variants={fadeInUp} className="mb-14 lg:mb-20 max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            Toolkit
          </p>
          <h2 className="mt-3 tracking-tight text-text-primary">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl">
              The complete
            </span>
            <br />
            <span className="font-mono text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              anti-impersonation stack
            </span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Not just a page. A full fraud communication kit — ready to deploy,
            no engineering required.
          </p>
        </motion.div>

        {/* ── Core Platform ── */}
        <SubsectionLabel number="01" label="Core Platform" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-16">
          <motion.div variants={fadeInUp} className="h-full">
            <FeatureCard
              icon={Globe}
              title="Trust Gate"
              description="A branded trust portal on your own domain. Customers search any phone, email, or handle and get an instant verdict. Lives at verify.yourcompany.com."
              visual={TrustPageVisual}
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="h-full">
            <FeatureCard
              icon={BarChart3}
              title="Threat Intelligence"
              description="Live dashboard tracking every customer lookup. Surface unknown channels, detect impersonation patterns, and catch fraud campaigns before they scale."
              visual={AnalyticsVisual}
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="h-full md:col-span-2 lg:col-span-1">
            <FeatureCard
              icon={Link}
              title="Protected Links"
              description="Every outbound link passes through a verification checkpoint before redirecting. Embed rt.link URLs anywhere — websites, emails, social bios."
              visual={ProtectedLinksVisual}
              visualFooter={
                <div className="mt-3 flex items-center justify-center gap-3 py-2 border-t border-border-subtle">
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">Works with</span>
                  <div className="flex items-center gap-2.5">
                    <FaXTwitter className="h-4 w-4 text-text-muted" />
                    <FaLinkedin className="h-4 w-4 text-text-muted" />
                    <FaDiscord className="h-4 w-4 text-text-muted" />
                    <FaTelegram className="h-4 w-4 text-text-muted" />
                    <FaWhatsapp className="h-4 w-4 text-text-muted" />
                    <span className="font-mono text-[10px] text-text-muted">+more</span>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>

        {/* ── Rollout Kit ── */}
        <SubsectionLabel number="02" label="Rollout Kit" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-16">
          <motion.div variants={fadeInUp} className="h-full">
            <FeatureCard
              icon={QrCode}
              title="Scan-to-Verify"
              description="Auto-generated QR codes for statements, business cards, and signage. One scan takes customers straight to your Trust Gate."
              visual={QrCodeVisual}
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="h-full">
            <FeatureCard
              icon={Code2}
              title="Embeddable Verification"
              description="Embed a verification search bar on any page of your site. One line of code. Customers verify without ever leaving your domain."
              visual={WidgetVisual}
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="h-full">
            <FeatureCard
              icon={FileText}
              title="Outbound Alerts"
              description="Proactively notify customers via email and SMS when new threats emerge, channels change, or verification is available."
              visual={EmailTemplateVisual}
            />
          </motion.div>
        </div>

        {/* ── Threat Response ── */}
        <SubsectionLabel number="03" label="Threat Response" />
        <div className="grid gap-5 md:grid-cols-2">
          <motion.div variants={fadeInUp} className="h-full">
            <FeatureCard
              icon={Bell}
              title="Threat Advisories"
              description="Publish real-time warnings about active impersonation campaigns. Customers see advisories front and center on your Trust Gate."
              visual={ScamAlertVisual}
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="h-full">
            <FeatureCard
              icon={ShieldOff}
              title="Incident Lockdown"
              description="One click to flag every compromised channel during a security breach. Bulk status override, instant customer-facing warnings, full audit trail."
              visual={IncidentModeVisual}
            />
          </motion.div>
        </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
