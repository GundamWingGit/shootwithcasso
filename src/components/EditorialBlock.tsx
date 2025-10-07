import Image from "next/image";
import { assetUrl } from "@/lib/assets";

type Props = {
  path: string;
  alt: string;
  eyebrow: string;
  title: string;
  blurb: string;
  ctaText: string;
  ctaHref: string;
};

export default function EditorialBlock(props: Props) {
  const { path, alt, eyebrow, title, blurb, ctaText, ctaHref } = props;
  return (
    <section id="editorial" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-sm">
          <Image src={assetUrl(path)} alt={alt} fill className="object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">{eyebrow}</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">{blurb}</p>
          <a href={ctaHref} className="inline-block mt-6 rounded-2xl px-5 py-3 bg-black text-white hover:opacity-90">
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}


