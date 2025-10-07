"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assetUrl } from "@/lib/assets";

type Slide = {
  id: string;
  desktop: string;
  mobile: string;
  heading: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
  theme?: "dark" | "light";
};

export default function Hero({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const active = slides[i];

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const isDark = (active.theme ?? "dark") === "dark";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const overlay = isDark ? "bg-black/40" : "bg-white/40";

  return (
    <section aria-label="Hero" className="relative w-full overflow-hidden">
      <div className="relative h-[64vh] md:h-[78vh]">
        <div className="hidden md:block">
          <Image
            src={assetUrl(active.desktop)}
            alt={active.heading}
            fill
            priority
            sizes="(min-width: 768px) 100vw, 0"
            className="object-cover"
          />
        </div>
        <div className="block md:hidden">
          <Image
            src={assetUrl(active.mobile)}
            alt={active.heading}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className={`absolute inset-0 ${overlay}`}>
          <div className="mx-auto max-w-6xl px-6 h-full flex items-center">
            <div className={`${textColor} max-w-2xl`}>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                {active.heading}
              </h1>
              {active.subheading && (
                <p className="mt-3 md:mt-4 text-lg md:text-xl opacity-90">{active.subheading}</p>
              )}
              {active.ctaText && active.ctaHref && (
                <a
                  href={active.ctaHref}
                  className="inline-block mt-6 rounded-2xl px-6 py-3 bg-black text-white md:text-base text-sm hover:opacity-90 transition md:shadow-md"
                >
                  {active.ctaText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full ${idx === i ? "bg-white/90" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}


