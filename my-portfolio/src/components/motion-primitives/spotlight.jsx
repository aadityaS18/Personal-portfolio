import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export function Spotlight({
  className,
  size = 220,
  springOptions = { bounce: 0 },
}) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState(null);
  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);
  const spotlightLeft = useTransform(mouseX, (value) => `${value - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (value) => `${value - size / 2}px`);

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;
    parent.style.position = "relative";
    setParentElement(parent);
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;
    const abortController = new AbortController();
    parentElement.addEventListener("mousemove", handleMouseMove, { signal: abortController.signal });
    parentElement.addEventListener("mouseenter", () => setIsHovered(true), { signal: abortController.signal });
    parentElement.addEventListener("mouseleave", () => setIsHovered(false), { signal: abortController.signal });
    return () => abortController.abort();
  }, [parentElement, handleMouseMove]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.22),transparent_72%)] blur-2xl transition-opacity duration-200",
        isHovered ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ width: size, height: size, left: spotlightLeft, top: spotlightTop }}
    />
  );
}
