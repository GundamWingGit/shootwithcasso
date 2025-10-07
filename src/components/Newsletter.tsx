"use client";

import Image from "next/image";
import { assetUrl } from "@/lib/assets";

export default function Newsletter({
  bg,
  title,
  blurb,
  ctaText
}: { bg: string; title: string; blurb: string; ctaText: string }) {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Image src={assetUrl(bg)} alt="" fill className="object-cover opacity-30" />
      </div>
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
        <p className="mt-3 text-gray-700">{blurb}</p>
        <form
          className="mt-6 flex items-center justify-center gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! (Hook this up later.)");
          }}
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full max-w-xs rounded-xl border border-black/20 px-4 py-2 outline-none focus:ring focus:ring-black/10"
          />
          <button className="rounded-xl bg-black text-white px-5 py-2 hover:opacity-90">{ctaText}</button>
        </form>
      </div>
    </section>
  );
}


