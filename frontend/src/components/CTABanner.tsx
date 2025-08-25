import { ArrowRight } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function CTABanner({
  title = "Ready to stop wasting marketing dollars on disconnected tactics?",
  subtitle = "Your brand deserves a sustainable system that converts browsers into buyers and first time customers into life time fans.",
  ctaText = "Book a Free Consultation",
  ctaHref = "#contact",
  imageSrc = "/laptop.png", // put your image in /public
  imageAlt = "Laptop with Audax mark",
}: Props) {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-7xl rounded-[36px] md:rounded-[44px] bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-6 md:px-12 py-10 md:py-14">
          {/* Left: copy */}
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-blue-600">
              {title}
            </h2>
            <p className="mt-5 text-sm md:text-base text-slate-600 max-w-xl">
              {subtitle}
            </p>

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

          {/* Right: image */}
          <div className="relative">
            {/* keeps aspect and prevents overflow on small screens */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full object-contain mx-auto max-w-xs md:max-w-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
