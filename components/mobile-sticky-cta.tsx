"use client";

import { useEffect, useMemo, useState } from "react";

type CtaTarget = {
  id: string;
  label: string;
  href: string;
};

type MobileStickyCtaProps = {
  phoneHref: string;
  targets: CtaTarget[];
};

export function MobileStickyCta({ phoneHref, targets }: MobileStickyCtaProps) {
  const [activeId, setActiveId] = useState<string>(targets[0]?.id ?? "");

  useEffect(() => {
    const sections = targets
      .map((target) => document.getElementById(target.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [targets]);

  const activeTarget = useMemo(
    () => targets.find((target) => target.id === activeId) ?? targets[0],
    [activeId, targets]
  );

  if (!activeTarget) return null;

  const isExternal = /^https?:\/\//i.test(activeTarget.href);

  return (
    <div className="sticky-mobile-cta" aria-label="Быстрые действия">
      <a href={phoneHref}>Позвонить</a>
      <a
        href={activeTarget.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {activeTarget.label}
      </a>
    </div>
  );
}
