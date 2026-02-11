"use client";

import { useEffect } from "react";

export function ParallaxScroll() {
  useEffect(() => {
    const root = document.documentElement;

    const onScroll = () => {
      const y = Math.min(window.scrollY, 1400);
      root.style.setProperty("--parallax-y", `${y}px`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
