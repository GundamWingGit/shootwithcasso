"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assetUrl } from "@/lib/assets";

type RevealHeroProps = {
  heroDesktop: string;
  heroMobile: string;
  behindImage: string;
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  theme?: "dark" | "light";
  heightVh?: number;
};

export default function RevealHero({
  heroDesktop,
  heroMobile,
  behindImage,
  heading,
  subheading,
  ctaText,
  ctaHref,
  theme = "dark",
  heightVh = 200,
}: RevealHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const windowH = window.innerHeight || 1;
        const total = rect.height - windowH;
        const p = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
        setProgress(p);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const isDark = (theme ?? "dark") === "dark";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const overlayTint = isDark ? "bg-black/40" : "bg-white/40";

  const overlayOpacity = 1 - progress;
  const behindScale = 1 + 0.06 * progress;
  const behindTranslate = 12 * progress;

  return (
    <section ref={containerRef} aria-label="Reveal Hero" style={{ height: `${heightVh}vh` }} className="relative w-full">
      <div className="sticky top-0 h-[100vh]">
        <div
          className="relative h-full w-full"
          style={{
            transform: `translateY(${behindTranslate}px) scale(${behindScale})`,
            transition: "transform 0.06s linear",
          }}
        >
          <Image src={assetUrl(behindImage)} alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0" style={{ opacity: overlayOpacity }}>
        <div className="relative h-full w-full">
          <div className="hidden md:block">
            <Image
              src={assetUrl(heroDesktop)}
              alt={heading}
              fill
              priority
              sizes="(min-width: 768px) 100vw, 0"
              className="object-cover"
            />
          </div>
          <div className="block md:hidden">
            <Image src={assetUrl(heroMobile)} alt={heading} fill priority sizes="100vw" className="object-cover" />
          </div>

          <div className={`absolute inset-0 ${overlayTint}`}>
            <div className="mx-auto max-w-6xl px-6 h-full flex items-center">
              <div className={`max-w-2xl ${textColor} pointer-events-auto`}>
                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">{heading}</h1>
                {subheading && <p className="mt-3 md:mt-4 text-lg md:text-xl opacity-90">{subheading}</p>}
                {ctaText && ctaHref && (
                  <a href={ctaHref} className="inline-block mt-6 rounded-2xl px-6 py-3 bg-black text-white hover:opacity-90 transition md:shadow-md">
                    {ctaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


