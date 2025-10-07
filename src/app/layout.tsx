import type { Metadata } from "next";
import "./globals.css";
import { assetUrl } from "@/lib/assets";
import { brand } from "@/content/home";

export const metadata: Metadata = {
  title: brand.siteName,
  description: "Premium portrait, wedding, lifestyle, and brand photography.",
  openGraph: {
    title: brand.siteName,
    description: "Premium portrait, wedding, lifestyle, and brand photography.",
    images: [{ url: assetUrl(brand.ogImage) }]
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
