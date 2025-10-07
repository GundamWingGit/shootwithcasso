import Header from "@/components/Header";
import RevealHero from "@/components/RevealHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import EditorialBlock from "@/components/EditorialBlock";
import Footer from "@/components/Footer";

import { heroSlides, portfolio, editorialFeature, revealSections } from "@/content/home";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <Header variant="dark" />
      {revealSections.map((s) => (
        <RevealHero
          key={s.id}
          heroDesktop={s.heroDesktop}
          heroMobile={s.heroMobile}
          heading={s.heading}
          subheading={s.subheading}
          ctaText={s.ctaText}
          ctaHref={s.ctaHref}
          theme={s.theme}
          behindImage={s.behindImage}
          heightVh={s.heightVh}
        />
      ))}
      <PortfolioGrid items={portfolio} />
      <EditorialBlock {...editorialFeature} />
      <Footer />
    </main>
  );
}
