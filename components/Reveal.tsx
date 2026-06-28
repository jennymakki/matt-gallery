"use client";

import { useInView } from "@/hooks/useInView";

export function Reveal({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-1000 ease-out
        will-change-transform
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }
      `}
    >
      {children}
    </div>
  );
}