"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ToriiIcon } from "@/components/torii-icon";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(250,247,242,0.72)] backdrop-blur-xl border-b border-border-default shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <ToriiIcon className="h-7 w-7 text-torii-red" />
          <Image
            src="/logos/redtorii-dark.svg"
            alt="Red Torii"
            width={160}
            height={20}
            className="h-5 w-auto"
            priority
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-sm font-medium text-text-secondary transition-colors hover:text-text-primary tracking-wide"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-torii-red transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild className="bg-torii-red text-text-on-red hover:bg-torii-red-hover font-mono font-semibold tracking-wide">
            <a href="https://calendly.com/karan-redtorii/30min">Get Early Access</a>
          </Button>
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border-default bg-background md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-base font-medium text-text-secondary transition-colors hover:text-text-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-full bg-torii-red text-text-on-red hover:bg-torii-red-hover font-mono font-semibold">
                <a href="https://calendly.com/karan-redtorii/30min">Get Early Access</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

