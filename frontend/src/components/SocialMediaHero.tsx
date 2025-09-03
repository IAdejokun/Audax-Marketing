import NavbarHero from "@/components/navbar";
import { ArrowRight } from "lucide-react";

type Props = {
  bgSrc?: string;
  eyebrow?: string;
  title?: string;
  sub?: string;
  ctaText?: string;
  ctaHref?: string;
  // Optional fine-tuning
  overlayClassName?: string;   // e.g. "bg-black/55"
  objectPosition?: string;     // e.g. "object-[50%_30%]"
};

export default function SocialMediaHero({
  bgSrc = "/social-hero.jpg", // put your image in /public
  eyebrow = "Social Media Services",
  title = "Power Your Brand With Strategic Social Media Marketing",
  sub = "Engage. Convert. Grow",
  ctaText = "Book Your Free Consultation",
  ctaHref = "#contact",
  overlayClassName = "bg-black/55",
  objectPosition = "object-center",
}: Props) {
  return (
    <header className="relative isolate overflow-hidden">
      {/* Background image */}
      <img
        src={bgSrc}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 -z-20 h-full w-full object-cover ${objectPosition}`}
        loading="eager"
      />

      {/* Readability overlays */}
      <div className={`absolute inset-0 -z-10 ${overlayClassName}`} />
      <div className="pointer-events-none absolute inset-x-0 -z-10 bottom-0 h-48 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_30%,rgba(255,255,255,.06),transparent_60%)]" />

      {/* Navbar (dark tone so Contact is white) */}
      <NavbarHero tone="dark" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="min-h-[68svh] md:min-h-[76svh] flex flex-col items-center justify-center text-center text-white pb-10">
          <p className="text-white/85 italic mb-3 text-base md:text-lg">{eyebrow}</p>

          <h1 className="text-[36px] leading-[1.1] md:text-[64px] md:leading-[1.05] font-extrabold tracking-tight max-w-5xl">
            {title}
          </h1>

          <p className="mt-4 text-white/90 text-sm md:text-base">{sub}</p>

          <a
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 transition px-6 py-3 md:px-7 md:py-3.5 text-white font-medium shadow-[0_10px_30px_rgba(37,99,235,.35)]"
          >
            {ctaText}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
