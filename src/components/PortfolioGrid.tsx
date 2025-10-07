import Image from "next/image";
import { assetUrl } from "@/lib/assets";

type Item = { id: string; path: string; alt: string };

export default function PortfolioGrid({ items }: { items: Item[] }) {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
        <a href="#" className="text-sm md:text-base underline underline-offset-4">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map((it) => (
          <figure key={it.id} className="relative aspect-square overflow-hidden rounded-2xl shadow-sm">
            <Image
              src={assetUrl(it.path)}
              alt={it.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority={it.id === "nov-01"}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}


