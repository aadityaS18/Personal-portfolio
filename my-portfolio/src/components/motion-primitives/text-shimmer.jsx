import { useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function TextShimmer({ children, as: Component = "p", className, duration = 2, spread = 2 }) {
  const MotionComponent = motion.create(Component);
  const dynamicSpread = useMemo(() => children.length * spread, [children, spread]);

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent",
        "[--base-color:#64748b] [--base-gradient-color:#0f172a]",
        "dark:[--base-color:#94a3b8] dark:[--base-gradient-color:#ffffff]",
        "[background-repeat:no-repeat,padding-box]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        className
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      style={{
        "--spread": `${dynamicSpread}px`,
        backgroundImage: "var(--bg), linear-gradient(var(--base-color), var(--base-color))",
      }}
    >
      {children}
    </MotionComponent>
  );
}
