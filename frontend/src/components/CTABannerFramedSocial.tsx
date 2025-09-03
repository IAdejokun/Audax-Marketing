// components/CTABannerFramed.tsx
import { ArrowRight } from "lucide-react";

export default function CTABannerFramedSocial({
  eyebrow = "Ready For Growth That Makes Money?",
  title = "Ready to build a sustainable revenue channel?",
  ctaText = "Book a Free Consultation",
  ctaHref = "#contact",
  imageSrc = "/laptop.png",
  imageAlt = "Laptop with brand mark",
}: {
  eyebrow?: string;
  title?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    // Full-bleed background, no overflow
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="rounded-[36px] bg-white ring-1 ring-black/5 shadow-[0_8px_30px_rgba(2,6,23,0.05)] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-6 md:px-12 py-10 md:py-14">
            <div>
              <p className="italic text-slate-600 mb-3">{eyebrow}</p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-blue-600">
                {title}
              </h2>
              <a
                href={ctaHref}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 text-white px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-base hover:bg-blue-700 transition shadow"
              >
                {ctaText}
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-auto h-auto max-w-[260px] md:max-w-[340px] lg:max-w-[420px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
