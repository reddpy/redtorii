"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  Shield,
  AlertTriangle,
  XCircle,
  AlertOctagon,
  Clock,
  Skull,
  ArrowRight,
} from "lucide-react";
import {
  FaXTwitter,
  FaTelegram,
  FaDiscord,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { fadeInUp, staggerContainer } from "@/lib/animation-variants";
import { CHANNELS } from "@/lib/constants";

const iconMap: Record<string, IconType | LucideIcon> = {
  phone: Phone,
  email: Mail,
  sms: MessageSquare,
  x: FaXTwitter,
  telegram: FaTelegram,
  discord: FaDiscord,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
};

const ROTATING_CHANNELS = [
  {
    icon: FaDiscord,
    name: "Discord",
    color: "#5865F2",
    darkColor: "#5865F2",
    fakeUrl: "disc0rd-acme.xyz",
    realUrl: "discord.gg/acme",
  },
  {
    icon: FaXTwitter,
    name: "Twitter",
    color: "#000000",
    darkColor: "#FFFFFF",
    fakeUrl: "twitter-acme.support",
    realUrl: "x.com/acmecorp",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    color: "#0A66C2",
    darkColor: "#0A66C2",
    fakeUrl: "linkedin-jobs.acme.net",
    realUrl: "linkedin.com/company/acme",
  },
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    color: "#25D366",
    darkColor: "#25D366",
    fakeUrl: "+1-555-SCAM-123",
    realUrl: "+1-800-555-ACME",
  },
  {
    icon: FaTelegram,
    name: "Telegram",
    color: "#229ED9",
    darkColor: "#229ED9",
    fakeUrl: "t.me/acme_support_help",
    realUrl: "t.me/acmecorp",
  },
];

const COMPROMISED_STATES = [
  { icon: Skull, label: "Phishing", sublabel: "Steals credentials" },
  { icon: AlertOctagon, label: "Impersonator", sublabel: "Fake support" },
  { icon: XCircle, label: "Hijacked", sublabel: "Leads to malware" },
  { icon: Clock, label: "Dead Link", sublabel: "Page not found" },
];

/* ─── Vertical Arrow Component for Mobile ─── */
function VerticalArrow({ color = "state-compromised" }: { color?: string }) {
  const gradientColor = color === "state-compromised" ? "rgba(220,38,38,1)" : "rgba(196,30,58,1)";
  return (
    <div className="flex flex-col items-center py-2">
      <div className="w-0.5 h-8 bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute inset-x-0 h-4"
          style={{ background: `linear-gradient(to bottom, transparent, ${gradientColor}, transparent)` }}
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white/30" />
    </div>
  );
}

/* ─── Danger Row: Without Red Torii ─── */
function DangerRow() {
  const [channelIndex, setChannelIndex] = useState(0);
  const [stateIndex, setStateIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChannelIndex((prev) => (prev + 1) % ROTATING_CHANNELS.length);
      setStateIndex((prev) => (prev + 1) % COMPROMISED_STATES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const channel = ROTATING_CHANNELS[channelIndex];
  const state = COMPROMISED_STATES[stateIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-7 w-7 rounded-full bg-state-compromised/20 flex items-center justify-center">
          <AlertTriangle className="h-3.5 w-3.5 text-state-compromised" />
        </div>
        <h3 className="font-mono text-sm font-bold text-state-compromised uppercase tracking-wider">
          Without Red Torii
        </h3>
      </div>

      {/* Flow */}
      <div className="relative bg-surface-dark rounded-2xl border border-white/10 p-4 sm:p-6 lg:p-8">
        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:flex items-center justify-between gap-6">
          {/* Source: Channel */}
          <div className="flex flex-col items-center gap-3 w-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={channelIndex}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.4 }}
                className="h-16 w-16 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: channel.darkColor + "20",
                  border: `2px solid ${channel.darkColor}40`,
                }}
              >
                <channel.icon
                  className="h-8 w-8"
                  style={{ color: channel.darkColor }}
                />
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-xs text-white/60">User clicks</span>
          </div>

          {/* Arrow with pulse */}
          <div className="flex-1 flex items-center">
            <div className="flex-1 h-0.5 bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-state-compromised to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <ArrowRight className="h-5 w-5 text-white/30 mx-2" />
          </div>

          {/* No Verification */}
          <div className="flex flex-col items-center gap-3">
            <motion.div
              className="h-20 w-20 rounded-2xl bg-state-compromised/10 border-2 border-dashed border-state-compromised/40 flex items-center justify-center"
              animate={{
                borderColor: [
                  "rgba(220,38,38,0.4)",
                  "rgba(220,38,38,0.2)",
                  "rgba(220,38,38,0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-3xl font-bold text-state-compromised/60">
                ?
              </span>
            </motion.div>
            <span className="font-mono text-xs text-state-compromised">
              No verification
            </span>
          </div>

          {/* Arrow with pulse */}
          <div className="flex-1 flex items-center">
            <ArrowRight className="h-5 w-5 text-white/30 mx-2" />
            <div className="flex-1 h-0.5 bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-state-compromised to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.4,
                }}
              />
            </div>
          </div>

          {/* Bad Outcome */}
          <div className="flex flex-col items-center gap-3 w-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={stateIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-20 w-full rounded-2xl bg-state-compromised/10 border border-state-compromised/30 flex items-center gap-3 px-4"
              >
                <state.icon className="h-7 w-7 text-state-compromised shrink-0" />
                <div className="min-w-0">
                  <p className="font-mono text-sm font-bold text-white truncate">
                    {state.label}
                  </p>
                  <p className="font-mono text-xs text-state-compromised truncate">
                    {state.sublabel}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-xs text-state-compromised">
              Possible outcome
            </span>
          </div>
        </div>

        {/* Mobile: Vertical flow */}
        <div className="flex lg:hidden flex-col items-center gap-0">
          {/* Source: Channel */}
          <div className="flex flex-col items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={channelIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="h-14 w-14 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: channel.darkColor + "20",
                  border: `2px solid ${channel.darkColor}40`,
                }}
              >
                <channel.icon
                  className="h-7 w-7"
                  style={{ color: channel.darkColor }}
                />
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-[11px] text-white/60">User clicks</span>
          </div>

          <VerticalArrow color="state-compromised" />

          {/* No Verification */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="h-14 w-14 rounded-xl bg-state-compromised/10 border-2 border-dashed border-state-compromised/40 flex items-center justify-center"
              animate={{
                borderColor: [
                  "rgba(220,38,38,0.4)",
                  "rgba(220,38,38,0.2)",
                  "rgba(220,38,38,0.4)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl font-bold text-state-compromised/60">?</span>
            </motion.div>
            <span className="font-mono text-[11px] text-state-compromised">No verification</span>
          </div>

          <VerticalArrow color="state-compromised" />

          {/* Bad Outcome */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={stateIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-16 w-full rounded-xl bg-state-compromised/10 border border-state-compromised/30 flex items-center gap-3 px-3"
              >
                <state.icon className="h-6 w-6 text-state-compromised shrink-0" />
                <div className="min-w-0">
                  <p className="font-mono text-sm font-bold text-white truncate">
                    {state.label}
                  </p>
                  <p className="font-mono text-[10px] text-state-compromised truncate">
                    {state.sublabel}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-[11px] text-state-compromised">Possible outcome</span>
          </div>
        </div>

        {/* Bottom: Fake URL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={channelIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-white/10 text-center"
          >
            <span className="font-mono text-xs sm:text-sm text-white/40">
              Destination:{" "}
            </span>
            <span className="font-mono text-xs sm:text-sm text-state-compromised break-all">
              {channel.fakeUrl}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ─── Safe Vertical Arrow for Mobile ─── */
function SafeVerticalArrow({ isVerified = false }: { isVerified?: boolean }) {
  const color = isVerified ? "rgba(34,197,94,1)" : "rgba(196,30,58,1)";
  return (
    <div className="flex flex-col items-center py-2">
      <div className="w-0.5 h-8 bg-border-default relative overflow-hidden">
        <motion.div
          className="absolute inset-x-0 h-4"
          style={{ background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }}
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div
        className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px]"
        style={{ borderTopColor: "rgba(128,128,128,0.3)" }}
      />
    </div>
  );
}

/* ─── Safe Row: With Red Torii ─── */
function SafeRow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [channelIndex, setChannelIndex] = useState(0);
  const [checkState, setCheckState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChannelIndex((prev) => (prev + 1) % ROTATING_CHANNELS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCheckState((prev) => (prev + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, [isInView]);

  const channel = ROTATING_CHANNELS[channelIndex];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-7 w-7 rounded-full bg-torii-red/20 flex items-center justify-center">
          <Shield className="h-3.5 w-3.5 text-torii-red" />
        </div>
        <h3 className="font-mono text-sm font-bold text-torii-red uppercase tracking-wider">
          With Red Torii
        </h3>
      </div>

      {/* Flow */}
      <div className="relative bg-gradient-to-b lg:bg-gradient-to-r from-surface-primary via-surface-primary to-state-verified/5 rounded-2xl border border-state-verified/20 p-4 sm:p-6 lg:p-8">
        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:flex items-center justify-between gap-6">
          {/* Source: Channel */}
          <div className="flex flex-col items-center gap-3 w-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={channelIndex}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                transition={{ duration: 0.4 }}
                className="h-16 w-16 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: channel.color + "15",
                  border: `2px solid ${channel.color}30`,
                }}
              >
                <channel.icon
                  className="h-8 w-8"
                  style={{ color: channel.color }}
                />
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-xs text-text-muted">
              User clicks
            </span>
          </div>

          {/* Arrow */}
          <div className="flex-1 flex items-center">
            <div className="flex-1 h-0.5 bg-border-default relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-torii-red to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <ArrowRight className="h-5 w-5 text-text-muted mx-2" />
          </div>

          {/* Checkpoint */}
          <div className="flex flex-col items-center gap-3">
            <motion.div
              className="relative h-20 w-28 rounded-2xl bg-surface-dark border-2 border-torii-red/40 flex flex-col items-center justify-center overflow-hidden"
              animate={
                isInView
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(196, 30, 58, 0)",
                        "0 0 30px 0 rgba(196, 30, 58, 0.2)",
                        "0 0 0 0 rgba(196, 30, 58, 0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-torii-red/5 to-transparent" />
              <Shield className="h-5 w-5 text-torii-red relative z-10" />
              <div className="h-4 flex items-center mt-1 relative z-10">
                {checkState === 0 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-mono text-[10px] text-white/60"
                  >
                    Checking...
                  </motion.span>
                )}
                {checkState === 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-1"
                  >
                    <CheckCircle2 className="h-3 w-3 text-state-verified" />
                    <span className="font-mono text-[10px] text-state-verified font-semibold">
                      Verified
                    </span>
                  </motion.div>
                )}
                {checkState === 2 && (
                  <span className="font-mono text-[10px] text-white/60">
                    Redirecting...
                  </span>
                )}
                {checkState === 3 && (
                  <span className="font-mono text-[10px] text-state-verified">
                    Done
                  </span>
                )}
              </div>
            </motion.div>
            <span className="font-mono text-xs text-torii-red font-medium">
              Checkpoint
            </span>
          </div>

          {/* Arrow */}
          <div className="flex-1 flex items-center">
            <ArrowRight className="h-5 w-5 text-text-muted mx-2" />
            <div className="flex-1 h-0.5 bg-border-default relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-state-verified to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
              />
            </div>
          </div>

          {/* Verified Destination */}
          <div className="flex flex-col items-center gap-3 w-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={channelIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-20 w-full rounded-2xl bg-state-verified/5 border border-state-verified/30 flex items-center gap-3 px-4"
              >
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: channel.color }}
                >
                  <channel.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs text-text-primary font-semibold truncate">
                    {channel.realUrl}
                  </p>
                  <p className="font-mono text-[10px] text-state-verified">
                    Official
                  </p>
                </div>
                <CheckCircle2 className="h-4 w-4 text-state-verified shrink-0" />
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-xs text-state-verified">
              Verified destination
            </span>
          </div>
        </div>

        {/* Mobile: Vertical flow */}
        <div className="flex lg:hidden flex-col items-center gap-0">
          {/* Source: Channel */}
          <div className="flex flex-col items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={channelIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="h-14 w-14 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: channel.color + "15",
                  border: `2px solid ${channel.color}30`,
                }}
              >
                <channel.icon
                  className="h-7 w-7"
                  style={{ color: channel.color }}
                />
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-[11px] text-text-muted">User clicks</span>
          </div>

          <SafeVerticalArrow />

          {/* Checkpoint */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              className="relative h-16 w-24 rounded-xl bg-surface-dark border-2 border-torii-red/40 flex flex-col items-center justify-center overflow-hidden"
              animate={
                isInView
                  ? {
                      boxShadow: [
                        "0 0 0 0 rgba(196, 30, 58, 0)",
                        "0 0 20px 0 rgba(196, 30, 58, 0.2)",
                        "0 0 0 0 rgba(196, 30, 58, 0)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-torii-red/5 to-transparent" />
              <Shield className="h-4 w-4 text-torii-red relative z-10" />
              <div className="h-4 flex items-center mt-0.5 relative z-10">
                {checkState === 0 && (
                  <span className="font-mono text-[9px] text-white/60">Checking...</span>
                )}
                {checkState === 1 && (
                  <div className="flex items-center gap-0.5">
                    <CheckCircle2 className="h-2.5 w-2.5 text-state-verified" />
                    <span className="font-mono text-[9px] text-state-verified font-semibold">Verified</span>
                  </div>
                )}
                {checkState === 2 && (
                  <span className="font-mono text-[9px] text-white/60">Redirecting...</span>
                )}
                {checkState === 3 && (
                  <span className="font-mono text-[9px] text-state-verified">Done</span>
                )}
              </div>
            </motion.div>
            <span className="font-mono text-[11px] text-torii-red font-medium">Checkpoint</span>
          </div>

          <SafeVerticalArrow isVerified />

          {/* Verified Destination */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={channelIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-16 w-full rounded-xl bg-state-verified/5 border border-state-verified/30 flex items-center gap-2 px-3"
              >
                <div
                  className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: channel.color }}
                >
                  <channel.icon className="h-4 w-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] text-text-primary font-semibold truncate">
                    {channel.realUrl}
                  </p>
                  <p className="font-mono text-[9px] text-state-verified">Official</p>
                </div>
                <CheckCircle2 className="h-3.5 w-3.5 text-state-verified shrink-0" />
              </motion.div>
            </AnimatePresence>
            <span className="font-mono text-[11px] text-state-verified">Verified destination</span>
          </div>
        </div>

        {/* Bottom: Real URL */}
        <AnimatePresence mode="wait">
          <motion.div
            key={channelIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-border-default text-center"
          >
            <span className="font-mono text-xs sm:text-sm text-text-muted">
              Destination:{" "}
            </span>
            <span className="font-mono text-xs sm:text-sm text-state-verified font-medium break-all">
              {channel.realUrl}
            </span>
            <CheckCircle2 className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-state-verified inline ml-1 sm:ml-1.5 -mt-0.5" />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ─── Channel Strip ─── */
function ChannelStrip() {
  return (
    <motion.div
      variants={fadeInUp}
      className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-border-default"
    >
      <p className="text-center font-mono text-xs sm:text-sm text-text-muted uppercase tracking-wider mb-6 sm:mb-8">
        Works with all your channels
      </p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5">
        {CHANNELS.map((channel, i) => {
          const Icon = iconMap[channel.icon];
          return (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex flex-col items-center gap-1.5 sm:gap-2"
            >
              <div className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11 flex items-center justify-center border border-border-subtle bg-surface-primary rounded-lg sm:rounded-xl hover:border-torii-red/30 transition-colors">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-text-muted" />
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-text-muted">
                {channel.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export function SupportedChannels() {
  return (
    <AnimatedSection
      variants={staggerContainer}
      className="relative bg-background py-12 sm:py-16 lg:py-20 xl:py-28 overflow-hidden"
    >
      <div
        id="channels"
        className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="mb-8 sm:mb-10 lg:mb-14 text-center">
          <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            Supported Channels
          </p>
          <h2 className="mt-2 sm:mt-3 tracking-tight">
            <span className="font-display text-3xl text-text-primary sm:text-4xl lg:text-5xl xl:text-6xl">
              Every link,
            </span>
            <br className="hidden sm:block" />
            <span className="font-mono text-2xl font-extrabold text-torii-red sm:text-3xl lg:text-4xl xl:text-5xl">
              {" "}
              protected
            </span>
          </h2>
          <p className="mt-4 sm:mt-5 mx-auto max-w-lg text-base sm:text-lg text-text-secondary px-4 sm:px-0">
            Hard links can be hijacked or expired. <br className="hidden sm:block" /> Red Torii verifies
            every click.
          </p>
        </motion.div>

        {/* Two flow rows */}
        <div className="space-y-8">
          <DangerRow />
          <SafeRow />
        </div>

        {/* Channel strip */}
        <ChannelStrip />
      </div>
    </AnimatedSection>
  );
}
