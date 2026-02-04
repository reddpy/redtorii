"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GridCell {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export function BackgroundGrid({
  color = "torii-red",
  opacity = 0.06,
  cellCount = 40,
}: {
  color?: string;
  opacity?: number;
  cellCount?: number;
}) {
  const [cells, setCells] = useState<GridCell[]>([]);

  useEffect(() => {
    const generated: GridCell[] = [];
    for (let i = 0; i < cellCount; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
      });
    }
    setCells(generated);
  }, [cellCount]);

  const colorClass =
    color === "white"
      ? "bg-white"
      : color === "torii-red"
        ? "bg-torii-red"
        : "bg-torii-red";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Static grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border-default) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border-default) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: opacity * 3,
        }}
      />
      {/* Animated highlight cells */}
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className={`absolute h-[80px] w-[80px] ${colorClass}`}
          style={{
            left: `${cell.x}%`,
            top: `${cell.y}%`,
          }}
          animate={{
            opacity: [0, opacity, opacity, 0],
          }}
          transition={{
            duration: 4,
            delay: cell.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 6 + 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function FloatingCrosses({
  count = 20,
  color = "text-torii-red/8",
}: {
  count?: number;
  color?: string;
}) {
  const [crosses, setCrosses] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generated = [];
    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 16 + 10,
        delay: Math.random() * 5,
      });
    }
    setCrosses(generated);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {crosses.map((cross) => (
        <motion.span
          key={cross.id}
          className={`absolute font-mono font-bold select-none ${color}`}
          style={{
            left: `${cross.x}%`,
            top: `${cross.y}%`,
            fontSize: `${cross.size}px`,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -20],
          }}
          transition={{
            duration: 6,
            delay: cross.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 4 + 3,
            ease: "easeInOut",
          }}
        >
          +
        </motion.span>
      ))}
    </div>
  );
}

export function BinaryRain({ columns = 12 }: { columns?: number }) {
  const [cols, setCols] = useState<
    { id: number; x: number; chars: string; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generated = [];
    for (let i = 0; i < columns; i++) {
      const chars = Array.from({ length: 20 }, () =>
        Math.random() > 0.5 ? "1" : "0"
      ).join("\n");
      generated.push({
        id: i,
        x: (i / columns) * 100 + Math.random() * (100 / columns),
        chars,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 10,
      });
    }
    setCols(generated);
  }, [columns]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {cols.map((col) => (
        <motion.pre
          key={col.id}
          className="absolute font-mono text-xs text-torii-red/10 leading-6 select-none whitespace-pre"
          style={{
            left: `${col.x}%`,
            top: "-20%",
          }}
          animate={{
            y: ["0%", "120%"],
          }}
          transition={{
            duration: col.duration,
            delay: col.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {col.chars}
        </motion.pre>
      ))}
    </div>
  );
}
