"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { fadeIn } from "@/lib/animation-variants";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const brandX = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);
  const brandOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.06, 0.06]);

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="relative bg-surface-dark overflow-hidden"
    >
      {/* Animated large brand text in background */}
      <div className="pointer-events-none absolute inset-0 flex items-end overflow-hidden select-none">
        <motion.div
          style={{ x: brandX, opacity: brandOpacity }}
          className="whitespace-nowrap pb-8"
        >
          <span className="font-display text-[12rem] sm:text-[16rem] lg:text-[20rem] leading-none text-white tracking-tighter">
            RED TORII
          </span>
        </motion.div>
      </div>

      {/* Animated grid texture in background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-surface-dark/80" />

      <div className="relative pt-16 pb-8 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Top section: logo + tagline + links */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <ToriiGateIcon className="h-8 w-8 text-torii-red" />
                <span className="font-mono text-xl font-extrabold tracking-tight">
                  <span className="text-torii-red">Red</span>
                  <span className="text-text-on-dark"> Torii</span>
                </span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
                The anti-impersonation stack. Everything you need to help
                customers verify it&apos;s really you.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-on-dark">
                Product
              </h4>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.product.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-torii-red"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-on-dark">
                Company
              </h4>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-torii-red"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-text-on-dark">
                Legal
              </h4>
              <ul className="mt-4 space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-torii-red"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-10 bg-white/[0.06]" />

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-mono text-xs text-text-muted tracking-wide">
              &copy; {new Date().getFullYear()} Red Torii. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <span className="font-mono text-xs text-text-muted tracking-wide">
                redtorii.com
              </span>
              <span className="inline-block h-2 w-2 bg-torii-red animate-pulse ml-1" />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

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
