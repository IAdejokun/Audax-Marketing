import Navbar from "@/components/navbar";
import {
  ArrowRight,
} from "lucide-react";
import WhoWeAre from "@/components/WhoWeAre";
import MissionVisionCard from "@/components/MissionVisionCard";
import CoreValues from "@/components/CoreValues";
import WhatWeDo from "@/components/WhatWeDo";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import CTABannerFramed from "@/components/CTABannerFramed";
import Footer from '@/components/footer';
const steps = [
  {
    title: "Deep-Dive Audit",
    desc: "We start by digging into your current strategy to uncover what’s working, what’s wasting money, and where your biggest growth opportunities are hiding.",
    // Replace these with your actual assets in /public
    img: "/search.png",
  },

  {
    title: "360° Growth Blueprint",
    desc: "Next, we build a custom growth plan that connects SEO, email, and social media into one high-performing, unified marketing system.",
    img: "/pie-chart.png",
  },

  {
    title: "Flawless Execution",
    desc: "We handle the heavy lifting writing, building, optimizing so you get campaigns that don’t just launch, they actually perform.",
    img: "/bullseye-arrow.png",
  },

  {
    title: "Data-Driven Refinement",
    desc: "Once the results start rolling in, we let the numbers lead. We test, refine, and scale what converts to turn solid performance into sustained profit.",
    img: "/rocket.png",
  },
];


export default function About() {
  return (
    <>
      <header className="relative overflow-hidden">
        {/* same soft wash as your hero */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F3F8FF] via-white/60 to-transparent" />
        <Navbar tone="light" /> {/* move the nav INSIDE the header */}
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div>
            <p className="italic text-slate-600 mb-2">About Audax</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-slate-900">
              We design strategies that prioritize what actually{" "}
              <span className="text-blue-600">grows your business</span>
            </h1>
            <p className="mt-5 max-w-xl text-slate-600">
              Whether you’re battling stagnant sales, inefficient ad spend, or
              outdated SEO tactics, our solutions cut through the noise to
              deliver measurable ROI.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 text-white px-6 py-3 text-sm md:text-base hover:bg-blue-700 transition"
            >
              Let’s Talk
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>

          {/* Right: layered images */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg aspect-[4/3]">
              <img
                src="/spiral-about.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-contain pointer-events-none select-none"
                loading="lazy"
              />
              <img
                src="/laptop-hero-about.png"
                alt="Audax laptop mockup"
                className="absolute inset-0 h-full w-full object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </header>

      <WhoWeAre />

      {/* Mission and Vision begin */}

      <section className="px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid gap-6 md:gap-8 md:grid-cols-2">
          <MissionVisionCard
            title="Mission"
            iconSrc="/bullseye-about.png" // ✅ replace with your actual image in /public
          >
            To engineer strategic marketing systems that drive measurable
            growth, turning traffic into loyal customers and campaigns into
            revenue.
          </MissionVisionCard>

          <MissionVisionCard
            title="Vision"
            iconSrc="/rocket-about.png" // ✅ replace with your actual image in /public
          >
            To engineer strategic marketing systems that drive measurable
            growth, turning traffic into loyal customers and campaigns into
            revenue.
          </MissionVisionCard>
        </div>
      </section>

      {/* Mission and Vision ended */}

      {/* Core Values Begin */}

      <CoreValues />

      {/* Core Values Ended */}

      {/* what we do begin */}
      <WhatWeDo />
      {/* what we do ended */}

      {/* simplicity results begin  */}

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl rounded-[44px] md:rounded-[56px] bg-gradient-to-b from-[#2D8CFF] to-[#0057D9] text-white shadow-sm">
          <div className="px-6 md:px-12 pt-12 md:pt-16 text-center">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 mb-12 text-sm md:text-base text-white/90">
              Smart Strategy. Relentless Execution. Measurable Growth.
            </p>
          </div>

          <div className="grid gap-10 md:gap-12 md:grid-cols-4 px-6 md:px-12 pb-14">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                {/* Image placeholder + real image layer */}
                <div className="relative mx-auto mb-6 h-16 w-16 md:h-20 md:w-20">
                  {/* Placeholder sits under the <img>; if the image is missing, you still see this */}
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="mx-auto max-w-xs text-lg md:text-xl font-semibold leading-snug">
                  {s.title}
                </h3>

                <p className="mx-auto mt-4 max-w-xs text-sm text-white/90">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* simplicity results end */}

      {/* Why work with us begin */}
      <WhyWorkWithUs />
      {/* Why work with us ended */}

      <CTABannerFramed />

      <Footer />
    </>
  );
}
