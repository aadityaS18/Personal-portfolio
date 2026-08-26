import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function InView({
  children,
  className,
  variants = defaultVariants,
  transition = { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  viewOptions = { once: true, amount: 0.2 },
  as = "div",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);
  const [isViewed, setIsViewed] = useState(false);
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView || isViewed ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      onAnimationComplete={() => {
        if (viewOptions.once) setIsViewed(true);
      }}
    >
      {children}
    </MotionComponent>
  );
}
