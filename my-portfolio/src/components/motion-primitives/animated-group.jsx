import React, { useMemo } from "react";
import { motion } from "motion/react";

const defaultContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const defaultItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function AnimatedGroup({ children, className, as = "div", asChild = "div" }) {
  const MotionComponent = useMemo(() => motion.create(as), [as]);
  const MotionChild = useMemo(() => motion.create(asChild), [asChild]);

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      animate="visible"
      variants={defaultContainerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <MotionChild key={index} variants={defaultItemVariants} transition={{ duration: 0.4 }}>
          {child}
        </MotionChild>
      ))}
    </MotionComponent>
  );
}
