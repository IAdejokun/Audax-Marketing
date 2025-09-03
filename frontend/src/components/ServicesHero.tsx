import NavbarHero from "@/components/navbar";
import { ArrowRight } from "lucide-react";

type Props = {
  bgSrc?: string; // background image
  eyebrow?: string;
  title?: string;
  sub?: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: string; // tailwind classes for overlay tone
};

export default function ServicesHero({
  bgSrc = "/services-hero.jpg", // put your image in /public
  eyebrow = "Our Services",
  title = "Transform Your Marketing Chaos into a Cohesive Growth Engine",
  sub = "Are you tired of pouring effort into disconnected campaigns that look busy but act broke? At Audax, we don’t just “do” marketing — we engineer integrated systems where every channel works together to turn engagement into sales, followers into customers, and first-time buyers into lifetime advocates.",
  ctaText = "Book Your Free Consultation",
  ctaHref = "#contact",
  overlay = "bg-black/60", // adjust to taste (e.g. bg-black/50)
}: Props) {
  return (
    <header className="relative overflow-hidden">
      {/* background image */}
      <img
        src={bgSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* dark overlay for readability */}
      <div className={`absolute inset-0 -z-10 ${overlay}`} />
      {/* optional bottom gradient lift */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* nav on top */}
      <NavbarHero tone="dark" />

      {/* content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-white py-16 md:py-24">
        <p className="text-white/80 mb-3">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4">
          {title}
        </h1>
        <p className="text-white/85 max-w-3xl mx-auto text-sm md:text-base leading-6 md:leading-7 mb-8">
          {sub}
        </p>

        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-5 py-3 text-white font-medium transition"
        >
          {ctaText}
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </div>
    </header>
  );
}
