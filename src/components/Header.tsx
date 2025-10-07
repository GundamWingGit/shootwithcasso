import Image from "next/image";
import Link from "next/link";
import { assetUrl } from "@/lib/assets";

type HeaderProps = { variant?: "light" | "dark" };

export default function Header({ variant = "dark" }: HeaderProps) {
  const logo = variant === "dark" ? "global/logo-dark.png" : "global/logo-light.png";
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-8 w-36">
            <Image src={assetUrl(logo)} alt="Logo" fill className="object-contain" priority />
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#portfolio" className="hover:opacity-70">Portfolio</a>
          <a href="#editorial" className="hover:opacity-70">Case Studies</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
        </nav>
      </div>
    </header>
  );
}


