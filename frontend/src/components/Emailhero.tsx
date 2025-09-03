// components/EmailHero.tsx
import { ArrowRight } from "lucide-react";

export default function EmailHero({
  bgSrc = "/email-services-hero.png",
}: {
  bgSrc?: string;
}) {
  return (
    <header className="relative isolate w-full">
      {/* Hero box covers the viewport behind the fixed nav */}
      <div className="relative w-full min-h-[72svh] md:min-h-[78svh] overflow-hidden flex items-center">
        {/* Background image */}
        <img
          src={bgSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay + bottom gradient */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Content — add top padding to create space under fixed navbar */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center text-white pt-[96px] md:pt-[110px]">
          <p className="text-white/85 italic">Email Services</p>

          <h1 className="mt-5 font-semibold leading-[1.05] text-[34px] sm:text-[44px] md:text-[56px]">
            Send Emails People Actually Open,
            <br className="hidden sm:block" />
            Click, and Buy From
          </h1>

          <p className="mt-4 text-white/90">Engage. Convert. Grow</p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow-[0_10px_30px_rgba(37,99,235,.35)] hover:bg-blue-700 transition"
          >
            Book a Free Consultation
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
