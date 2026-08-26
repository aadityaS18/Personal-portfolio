import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const SPRING_CONFIG = { stiffness: 26.7, damping: 4.1, mass: 0.2 };

export function Magnetic({
  children,
  intensity = 0.6,
  range = 100,
  actionArea = "self",
  springOptions = SPRING_CONFIG,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  useEffect(() => {
    const calculateDistance = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const distanceX = e.clientX - (rect.left + rect.width / 2);
      const distanceY = e.clientY - (rect.top + rect.height / 2);
      const absoluteDistance = Math.hypot(distanceX, distanceY);

      if (isHovered && absoluteDistance <= range) {
        const scale = 1 - absoluteDistance / range;
        x.set(distanceX * intensity * scale);
        y.set(distanceY * intensity * scale);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    document.addEventListener("mousemove", calculateDistance);
    return () => document.removeEventListener("mousemove", calculateDistance);
  }, [isHovered, intensity, range, x, y]);

  useEffect(() => {
    if (actionArea === "parent" && ref.current?.parentElement) {
      const parent = ref.current.parentElement;
      const handleEnter = () => setIsHovered(true);
      const handleLeave = () => setIsHovered(false);
      parent.addEventListener("mouseenter", handleEnter);
      parent.addEventListener("mouseleave", handleLeave);
      return () => {
        parent.removeEventListener("mouseenter", handleEnter);
        parent.removeEventListener("mouseleave", handleLeave);
      };
    }
    if (actionArea === "global") setIsHovered(true);
  }, [actionArea]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => actionArea === "self" && setIsHovered(true)}
      onMouseLeave={() => {
        if (actionArea === "self") {
          setIsHovered(false);
          x.set(0);
          y.set(0);
        }
      }}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
