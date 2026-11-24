import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface CountUpNumberProps {
  value: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
}

export function CountUpNumber({
  value,
  suffix = '',
  durationMs = 1100,
  className = '',
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(value);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let frameId = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Smooth cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    setDisplayValue(0);
    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, durationMs, prefersReducedMotion]);

  const formatted = displayValue.toLocaleString('pt-BR');

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {formatted}
      {suffix}
    </span>
  );
}
