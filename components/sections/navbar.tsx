"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <a href="#" className="flex items-center gap-2">
          <ToriiGateIcon className="h-8 w-8 text-torii-red" />
          <span className="font-mono text-xl font-extrabold tracking-tight">
            <span className="text-torii-red">Red</span>
            <span className="text-text-primary"> Torii</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm font-medium text-text-secondary transition-colors hover:text-text-primary tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="bg-torii-red text-text-on-red hover:bg-torii-red-hover font-mono font-semibold tracking-wide">
            Get Started
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
              <Button className="mt-2 w-full bg-torii-red text-text-on-red hover:bg-torii-red-hover font-mono font-semibold">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
