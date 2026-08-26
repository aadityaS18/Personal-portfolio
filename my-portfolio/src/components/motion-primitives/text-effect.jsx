import { motion } from "motion/react";

export function TextEffect({
  children,
  as = "p",
  className,
  delay = 0,
  per = "word",
  preset = "fade-in-blur",
}) {
  const MotionTag = motion.create(as);
  const text = String(children);
  const pieces = per === "word" ? text.split(" ") : Array.from(text);

  const presets = {
    "fade-in-blur": {
      hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
      visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slide: {
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0 },
    },
  };

  const variant = presets[preset] || presets["fade-in-blur"];

  return (
    <MotionTag className={className} aria-label={text}>
      {pieces.map((piece, index) => (
        <motion.span
          key={`${piece}-${index}`}
          className="inline will-change-transform"
          initial="hidden"
          animate="visible"
          variants={variant}
          transition={{ duration: 0.45, delay: delay + index * 0.035, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {piece}
          {per === "word" && index < pieces.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
