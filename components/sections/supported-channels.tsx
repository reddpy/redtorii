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
import { BinaryRain } from "@/components/background-grid";
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

export function SupportedChannels() {
  return (
    <AnimatedSection
      variants={staggerContainer}
      className="relative bg-surface-dark py-20 lg:py-32"
    >
      <BinaryRain columns={10} />

      <div
        id="channels"
        className="relative mx-auto max-w-7xl px-6 lg:px-8 scroll-mt-24"
      >
        <motion.div variants={fadeInUp} className="mb-12 lg:mb-16">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.2em] text-torii-red">
            Supported Channels
          </p>
          <h2 className="mt-3 font-mono text-3xl font-extrabold tracking-tight text-text-on-dark sm:text-4xl lg:text-5xl">
            Every channel, one source of truth
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-muted">
            Register all your official communication channels in one place.
            Customers verify any contact instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {CHANNELS.map((channel) => {
            const Icon = iconMap[channel.icon];
            return (
              <motion.div
                key={channel.name}
                variants={fadeInUp}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group flex flex-col items-center gap-3 border border-white/[0.06] bg-surface-dark-secondary p-5 rounded-lg transition-colors hover:border-torii-red/30 hover:bg-white/[0.03]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] group-hover:bg-torii-red/10 transition-colors">
                  <Icon className="h-5 w-5 text-torii-red" />
                </div>
                <span className="font-mono text-xs font-medium text-text-on-dark tracking-wide">
                  {channel.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
