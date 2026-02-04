"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare } from "lucide-react";
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

function ToriiGateIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 8h24M6 8v4M26 8v4M5 12h22M9 12v16M23 12v16M7 8l-3-2h24l-3 2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function PulseLine({
  x1,
  y1,
  x2,
  y2,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}) {
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#E5DED3"
        strokeWidth="1"
      />
      <circle r="3" fill="#C41E3A">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={`M${x1},${y1} L${x2},${y2}`}
        />
        <animate
          attributeName="opacity"
          values="0;0.8;0.8;0"
          dur="3s"
          repeatCount="indefinite"
          begin={`${delay}s`}
        />
      </circle>
      <circle r="2" fill="#C41E3A">
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          begin={`${delay + 1.5}s`}
          path={`M${x1},${y1} L${x2},${y2}`}
        />
        <animate
          attributeName="opacity"
          values="0;0.4;0.4;0"
          dur="3s"
          repeatCount="indefinite"
          begin={`${delay + 1.5}s`}
        />
      </circle>
    </g>
  );
}

// Hub icon size and node icon size (used to offset positions)
const HUB_SIZE = 112;
const NODE_SIZE = 56;

export function SupportedChannels() {
  const size = 680;
  const center = size / 2;
  const orbitRadius = 260;
  const channels = CHANNELS;
  const angleStep = (2 * Math.PI) / channels.length;

  const positions = channels.map((_, i) => {
    const angle = angleStep * i - Math.PI / 2;
    return {
      x: center + Math.cos(angle) * orbitRadius,
      y: center + Math.sin(angle) * orbitRadius,
    };
  });

  return (
    <AnimatedSection
      variants={staggerContainer}
      className="relative bg-background py-12 lg:py-20 overflow-hidden"
    >
      <div
        id="channels"
        className="relative mx-auto max-w-7xl px-6 lg:px-8 scroll-mt-24"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-10 lg:mb-14 text-center"
        >
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            Supported Channels
          </p>
          <h2 className="mt-3 tracking-tight">
            <span className="font-display text-4xl text-text-primary sm:text-5xl lg:text-6xl">Every channel,</span>
            <br className="hidden sm:block" />
            <span className="font-mono text-3xl font-extrabold text-torii-red sm:text-4xl lg:text-5xl"> one source of truth</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-text-secondary">
            Register all your official communication channels in one place.
            Customers verify any contact instantly.
          </p>
        </motion.div>

        {/* Hub and spoke — radial layout */}
        <motion.div
          variants={fadeInUp}
          className="relative mx-auto overflow-visible"
          style={{ width: size, height: size + 40 }}
        >
          {/* SVG layer — rings + pulse lines */}
          <svg
            className="absolute inset-0"
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            overflow="visible"
          >
            {/* Outer dashed ring */}
            <circle
              cx={center}
              cy={center}
              r={orbitRadius + 36}
              fill="none"
              stroke="#F0EBE3"
              strokeWidth="1"
              strokeDasharray="6 6"
            />
            {/* Orbit ring */}
            <circle
              cx={center}
              cy={center}
              r={orbitRadius}
              fill="none"
              stroke="#E5DED3"
              strokeWidth="1"
            />
            {/* Inner dashed ring around hub */}
            <circle
              cx={center}
              cy={center}
              r={HUB_SIZE / 2 + 12}
              fill="none"
              stroke="#E5DED3"
              strokeWidth="1"
              strokeDasharray="4 4"
            />

            {/* Pulse lines from center to each node */}
            {positions.map((pos, i) => (
              <PulseLine
                key={i}
                x1={center}
                y1={center}
                x2={pos.x}
                y2={pos.y}
                delay={i * 0.3}
              />
            ))}
          </svg>

          {/* Center hub — icon only, precisely centered */}
          <motion.div
            className="absolute"
            style={{
              width: HUB_SIZE,
              height: HUB_SIZE,
              top: center - HUB_SIZE / 2,
              left: center - HUB_SIZE / 2,
              zIndex: 10,
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-torii-red/20 bg-torii-red-light shadow-md">
              <ToriiGateIcon className="h-14 w-14 text-torii-red" />
            </div>
            {/* Labels below the hub circle */}
            <div className="mt-2 flex flex-col items-center">
              <span className="font-mono text-xs font-bold text-torii-red tracking-wide">
                Red Torii
              </span>
              <span className="font-mono text-[10px] text-text-muted tracking-wide">
                Verification Hub
              </span>
            </div>
          </motion.div>

          {/* Channel nodes */}
          {channels.map((channel, i) => {
            const pos = positions[i];
            const Icon = iconMap[channel.icon];

            return (
              <motion.div
                key={channel.name}
                className="absolute"
                style={{
                  width: NODE_SIZE,
                  height: NODE_SIZE,
                  top: pos.y - NODE_SIZE / 2,
                  left: pos.x - NODE_SIZE / 2,
                  zIndex: 10,
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border-default bg-surface-primary shadow-sm transition-colors hover:border-torii-red/30 hover:bg-torii-red-light">
                    <Icon className="h-7 w-7 text-text-secondary" />
                  </div>
                  <span className="mt-1.5 font-mono text-[11px] font-medium text-text-secondary whitespace-nowrap">
                    {channel.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
