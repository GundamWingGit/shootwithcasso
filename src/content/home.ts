export const heroSlides = [
  {
    id: "hero-01",
    desktop: "hero/hero-01-desktop.png",
    mobile:  "hero/hero-01-mobile.png",
    heading: "Photography that elevates your story",
    subheading: "Portraits · Weddings · Lifestyle · Products",
    ctaText: "View portfolio",
    ctaHref: "#portfolio",
    theme: "dark" as const
  },
  {
    id: "hero-02",
    desktop: "hero/hero-02-desktop.png",
    mobile:  "hero/hero-02-mobile.png",
    heading: "On location or in studio",
    subheading: "Expert light, natural color, clean compositions",
    ctaText: "Book a session",
    ctaHref: "#contact",
    theme: "light" as const
  },
  {
    id: "hero-03",
    desktop: "hero/hero-03-desktop.png",
    mobile:  "hero/hero-03-mobile.png",
    heading: "Crafted for brands & people",
    subheading: "From candid to commercial",
    ctaText: "See case studies",
    ctaHref: "#editorial",
    theme: "dark" as const
  }
];

export const portfolio = [
  { id: "nov-01", path: "novelties/novelty-01.png", alt: "Editorial portrait" },
  { id: "nov-02", path: "novelties/novelty-02.png", alt: "Wedding candid" },
  { id: "nov-03", path: "novelties/novelty-03.png", alt: "Lifestyle brand/product" },
  { id: "nov-04", path: "novelties/novelty-04.png", alt: "Real estate interior" },
  { id: "nov-05", path: "novelties/novelty-05.png", alt: "Event / concert" },
  { id: "nov-06", path: "novelties/novelty-06.png", alt: "Family / newborn" }
];

export const editorialFeature = {
  path: "editorial/editorial-01.png",
  alt: "Case study header photo",
  eyebrow: "Feature Case Study",
  title: "City Hall Wedding · Natural light + candid moments",
  blurb:
    "An intimate celebration with timeless portraits and honest, story-driven coverage—edited with a soft, cinematic grade.",
  ctaText: "Read the case study",
  ctaHref: "#"
};

export const brand = {
  logoLight: "global/logo-light.png",
  logoDark:  "global/logo-dark.png",
  ogImage:   "global/og-image.png",
  siteName:  "ShootWithCasso"
};

// Optional: multiple reveal sections for stacked reveal-on-scroll hero effect
export const revealSections = [
  {
    id: "rev-01",
    heroDesktop: "hero/hero-01-desktop.png",
    heroMobile: "hero/hero-01-mobile.png",
    behindImage: "editorial/editorial-01.png",
    heading: heroSlides[0].heading,
    subheading: heroSlides[0].subheading,
    ctaText: heroSlides[0].ctaText,
    ctaHref: heroSlides[0].ctaHref,
    theme: heroSlides[0].theme as "dark" | "light",
    heightVh: 200,
  },
  {
    id: "rev-02",
    heroDesktop: "hero/hero-02-desktop.png",
    heroMobile: "hero/hero-02-mobile.png",
    behindImage: "novelties/novelty-01.png",
    heading: heroSlides[1].heading,
    subheading: heroSlides[1].subheading,
    ctaText: heroSlides[1].ctaText,
    ctaHref: heroSlides[1].ctaHref,
    theme: heroSlides[1].theme as "dark" | "light",
    heightVh: 200,
  },
  {
    id: "rev-03",
    heroDesktop: "hero/hero-03-desktop.png",
    heroMobile: "hero/hero-03-mobile.png",
    behindImage: "novelties/novelty-02.png",
    heading: heroSlides[2].heading,
    subheading: heroSlides[2].subheading,
    ctaText: heroSlides[2].ctaText,
    ctaHref: heroSlides[2].ctaHref,
    theme: heroSlides[2].theme as "dark" | "light",
    heightVh: 200,
  },
  {
    id: "rev-04",
    heroDesktop: "hero/hero-01-desktop.png",
    heroMobile: "hero/hero-01-mobile.png",
    behindImage: "novelties/novelty-03.png",
    heading: heroSlides[0].heading,
    subheading: heroSlides[0].subheading,
    ctaText: heroSlides[0].ctaText,
    ctaHref: heroSlides[0].ctaHref,
    theme: heroSlides[0].theme as "dark" | "light",
    heightVh: 200,
  },
  {
    id: "rev-05",
    heroDesktop: "hero/hero-02-desktop.png",
    heroMobile: "hero/hero-02-mobile.png",
    behindImage: "novelties/novelty-04.png",
    heading: heroSlides[1].heading,
    subheading: heroSlides[1].subheading,
    ctaText: heroSlides[1].ctaText,
    ctaHref: heroSlides[1].ctaHref,
    theme: heroSlides[1].theme as "dark" | "light",
    heightVh: 200,
  },
  {
    id: "rev-06",
    heroDesktop: "hero/hero-03-desktop.png",
    heroMobile: "hero/hero-03-mobile.png",
    behindImage: "novelties/novelty-05.png",
    heading: heroSlides[2].heading,
    subheading: heroSlides[2].subheading,
    ctaText: heroSlides[2].ctaText,
    ctaHref: heroSlides[2].ctaHref,
    theme: heroSlides[2].theme as "dark" | "light",
    heightVh: 200,
  },
];


