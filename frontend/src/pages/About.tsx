import Navbar from "@/components/navbar";
import {
  ArrowRight,
} from "lucide-react";
import WhoWeAre from "@/components/WhoWeAre";
import MissionVisionCard from "@/components/MissionVisionCard";
import CoreValues from "@/components/CoreValues";


export default function About() {
  return (
    <>
      <header className="relative overflow-hidden">
        {/* same soft wash as your hero */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F3F8FF] via-white/60 to-transparent" />
        <Navbar /> {/* move the nav INSIDE the header */}
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

      <CoreValues
        values={[
          { text: "Revenue Over Reach…", iconSrc: "/check-blue.png" },
          { text: "Authentic Connection…", iconSrc: "/check-blue.png" },
          // ...
        ]}
      />

      {/* Core Values End */}
    </>
  );
}
