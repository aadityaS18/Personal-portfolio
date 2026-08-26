import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function GlowEffect({
  className,
  style,
  colors = ["#38bdf8", "#818cf8", "#22d3ee", "#60a5fa"],
  mode = "rotate",
  blur = "medium",
  transition,
  scale = 1,
  duration = 5,
}) {
  const baseTransition = {
    repeat: Infinity,
    duration,
    ease: "linear",
  };

  const animations = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(", ")})`,
      ],
      transition: transition ?? baseTransition,
    },
    breathe: {
      background: colors.map((color) => `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`),
      scale: [1 * scale, 1.05 * scale, 1 * scale],
      transition: transition ?? { ...baseTransition, repeatType: "mirror" },
    },
    pulse: {
      background: colors.map((color) => `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`),
      scale: [1 * scale, 1.1 * scale, 1 * scale],
      opacity: [0.5, 0.8, 0.5],
      transition: transition ?? { ...baseTransition, repeatType: "mirror" },
    },
    static: {
      background: `linear-gradient(to right, ${colors.join(", ")})`,
    },
  };

  const blurClass =
    typeof blur === "number"
      ? `blur-[${blur}px]`
      : {
          softest: "blur-xs",
          soft: "blur-sm",
          medium: "blur-md",
          strong: "blur-lg",
          stronger: "blur-xl",
          strongest: "blur-2xl",
          none: "blur-none",
        }[blur];

  return (
    <motion.div
      style={{ ...style, willChange: "transform" }}
      animate={animations[mode]}
      className={cn("pointer-events-none absolute inset-0 h-full w-full transform-gpu", blurClass, className)}
    />
  );
}
