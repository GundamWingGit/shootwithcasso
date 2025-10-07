import Header from "@/components/Header";
import RevealHero from "@/components/RevealHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import EditorialBlock from "@/components/EditorialBlock";
import Footer from "@/components/Footer";

import { heroSlides, portfolio, editorialFeature } from "@/content/home";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <Header variant="dark" />
      <RevealHero
        heroDesktop={heroSlides[0].desktop}
        heroMobile={heroSlides[0].mobile}
        heading={heroSlides[0].heading}
        subheading={heroSlides[0].subheading}
        ctaText={heroSlides[0].ctaText}
        ctaHref={heroSlides[0].ctaHref}
        theme={heroSlides[0].theme}
        behindImage={editorialFeature.path}
        heightVh={200}
      />
      <PortfolioGrid items={portfolio} />
      <EditorialBlock {...editorialFeature} />
      <Footer />
    </main>
  );
}
