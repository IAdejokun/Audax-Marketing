// SeoHero.tsx
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type SeoHeroProps = {
  /** Path to your background image (public/…) */
  bgSrc?: string;
  /** Small eyebrow text above the headline */
  eyebrow?: string;
  /** CTA href (route or external) */
  ctaHref?: string;
  /** CTA label text */
  ctaLabel?: string;
  /** Navbar height so the hero can tuck under it (px) */
  navHeight?: number;
};

export default function SeoHero({
  bgSrc = "/images/seo-hero.jpg", // put your image in /public/images
  eyebrow = "Email Services",     // change to "SEO Services" if you prefer
  ctaHref = "/contact",
  ctaLabel = "Book a Free Consultation",
  navHeight = 72, // keep this equal to your navbar height
}: SeoHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        // tuck hero under the navbar so the image touches the top like the design
        marginTop: `-${navHeight}px`,
        paddingTop: `${navHeight}px`,
      }}
    >
      {/* Background image */}
      <img
        src={bgSrc}
        alt="SEO analytics background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Blue overlay + subtle radial to match vibe */}
      <div className="absolute inset-0 bg-[rgba(3,31,102,0.78)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_20%,rgba(41,98,255,0.35),transparent)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="min-h-[72vh] md:min-h-[78vh] grid place-items-center text-center">
          <div className="max-w-5xl">
            <p className="text-white/80 italic text-[14px] md:text-[16px]">
              {eyebrow}
            </p>

            <h1
              className="mt-4 text-white font-semibold leading-tight tracking-[-0.02em]
                           text-[34px] sm:text-[44px] md:text-[56px] lg:text-[64px]"
            >
              SEO That Converts Clicks Into
              <br className="hidden sm:block" /> Customers
            </h1>

            <p className="mt-5 text-white/85 text-[14px] md:text-[16px]">
              Engage. Convert. Grow
            </p>

            <div className="mt-8">
              <Link
                to={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3
                           text-white text-[15px] shadow-[0_10px_30px_rgba(37,99,235,.35)]
                           hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {ctaLabel}
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* gradient fade at bottom for nice blend into next section (optional) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/10" />
    </section>
  );
}
