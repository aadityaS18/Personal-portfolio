import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const lerp = (start, end, amount) => start + (end - start) * amount;

const isInteractive = (node) => {
  if (!(node instanceof Element)) return false;
  return Boolean(
    node.closest("a, button, [role='button'], [role='tab'], input, textarea, select, label")
  );
};

const CustomCursor = () => {
  const { darkMode } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const pointer = useRef({ x: 0, y: 0, hovering: false, pressed: false, visible: false });
  const trail = useRef({ x: 0, y: 0 });
  const frame = useRef(0);
  const coreRef = useRef(null);
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return undefined;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (event) => {
      pointer.current.x = event.clientX;
      pointer.current.y = event.clientY;
      pointer.current.visible = true;
      pointer.current.hovering = isInteractive(event.target);
    };

    const onDown = () => {
      pointer.current.pressed = true;
    };

    const onUp = () => {
      pointer.current.pressed = false;
    };

    const onLeave = () => {
      pointer.current.visible = false;
    };

    const render = () => {
      const { x, y, hovering, pressed, visible } = pointer.current;
      trail.current.x = lerp(trail.current.x || x, x, 0.18);
      trail.current.y = lerp(trail.current.y || y, y, 0.18);

      const opacity = visible ? "1" : "0";
      const hoverScale = hovering ? 1.7 : 1;
      const pressScale = pressed ? 0.82 : 1;

      if (coreRef.current) {
        coreRef.current.style.opacity = opacity;
        coreRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${pressed ? 0.65 : hovering ? 0.55 : 1})`;
      }

      if (glowRef.current) {
        glowRef.current.style.opacity = opacity;
        glowRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0) translate(-50%, -50%) scale(${hoverScale * pressScale})`;
      }

      if (ringRef.current) {
        ringRef.current.style.opacity = opacity;
        ringRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0) translate(-50%, -50%) scale(${hoverScale * pressScale})`;
        ringRef.current.dataset.hover = hovering ? "true" : "false";
      }

      frame.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    frame.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block" aria-hidden="true">
      <div
        ref={glowRef}
        className={`cursor-glow ${darkMode ? "cursor-glow-dark" : "cursor-glow-light"}`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${darkMode ? "cursor-ring-dark" : "cursor-ring-light"}`}
      />
      <div
        ref={coreRef}
        className={`cursor-core ${darkMode ? "bg-sky-300" : "bg-slate-900"}`}
      />
    </div>
  );
};

export default CustomCursor;
