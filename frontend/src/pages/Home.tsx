import Navbar from "@/components/navbar";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/footer";
import CTABanner from "@/components/CTABanner";

const items = [
  {
    title: "Targeted Campaigns",
    desc: "Reach the right audience based on demographics, interests, and behaviors.",
  },
  {
    title: "Optimized ROI",
    desc: "Continuous analysis and optimization for budget friendly yet impactful results.",
  },
  {
    title: "Multi-Platform Expertise",
    desc: "Google Ads, Facebook, Instagram, LinkedIn, and more.",
  },
  {
    title: "Data-Driven Strategies",
    desc: "Harness insights from analytics to refine and improve performance.",
  },
];

const bullets = [
  "Search visibility: SEO that ranks for commercial keywords",
  "Email + SMS that people genuinely engage with",
  "Content that builds trust while driving sales",
];

 const steps = [
   {
     title: "Discover Your Unique Challenges",
     desc: "You share where you’re stuck and what you’ve already tried that didn’t work.",
     // Replace these with your actual assets in /public
     img: "/search.png",
   },
   {
     title: "Implementation Optimization and Scaling",
     desc: "We map the exact integration points between SEO, email and social that will unlock your specific business growth.",
     img: "/bullseye-arrow.png",
   },
   {
     title: "Receive Your Custom 360° Marketing Growth Blueprint",
     desc: "You focus on your products and vision—we handle the technical execution and continuous improvement.",
     img: "/pie-chart.png",
   },
 ];

export default function Home() {
    return (
      <>
        <section>
          <header className="relative overflow-hidden">
            {/* subtle page gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-amber-50" />

            <Navbar />

            <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
              {/* Left: copy */}
              <div>
                <p className="italic text-slate-600 mb-4">
                  We Can Help You Out
                </p>

                <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] text-slate-900">
                  Lots of clicks, zero sales?
                  <br />
                  Let’s <span className="text-blue-600">fix</span> what’s broken
                </h1>

                <p className="mt-6 max-w-xl text-slate-600">
                  We’re your 360° e-commerce marketing growth agency seamlessly
                  integrating SEO, Klaviyo and social selling to transform
                  casual browsers into loyal, high-value customers.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 text-white px-6 py-3 text-sm md:text-base hover:bg-blue-700 transition"
                >
                  Book a Free Consultation
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </div>

              {/* Right: image over rounded tile */}
              <div className="relative">
                <div className="absolute right-8 top-10 h-60 w-56 md:h-72 md:w-64 rounded-3xl bg-blue-200/50" />
                <img
                  src="/lady.png" // put your image in /public
                  alt="Advisor"
                  className="relative z-10 w-full max-w-md mx-auto object-contain"
                />
              </div>
            </div>
          </header>

          {/* pill section begin */}

          <section className="px-4 py-8">
            <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[40px] bg-[#0A61FF]">
              {/* curved swoosh (decorative) */}
              <svg
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-[70%] h-[65%] z-0"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 40 Q 58 6 100 8 L100 40 Z"
                  fill="rgba(255,255,255,0.24)"
                />
              </svg>

              {/* content */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center h-[148px] md:h-[170px]">
                {/* left title */}
                <h3 className="md:col-span-4 pl-8 md:pl-12 text-white font-semibold text-2xl md:text-3xl leading-tight">
                  Why
                  <br className="hidden sm:block" />
                  Audax?
                </h3>

                {/* right paragraph */}
                <p className="md:col-span-8 px-8 md:pr-12 text-white/95 text-[13px] md:text-[15px] leading-6">
                  The struggle isn’t about throwing money at ads or chasing
                  trends. It’s about creating a system where every marketing
                  channel works together.
                </p>
              </div>
            </div>
          </section>

          {/* pill section end */}

          {/* digital strategies begin */}

          <section className="py-20 px-4 max-w-7xl mx-auto">
            {/* Top Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 leading-snug">
                Your Trusted Partner in Digital{" "}
                <br className="hidden md:block" />
                Marketing, Driving Business Success
              </h2>
              <p className="mt-4 text-sm text-gray-600">
                Our flexible team has a wide range of skills, which lets us look
                at projects from a complete point of view that combines
                creativity and usefulness.
              </p>
            </div>

            {/* Two-column layout */}

            <section className="py-16 px-4">
              <div className="max-w-7xl mx-auto grid gap-10 md:gap-12 md:grid-cols-2 items-center">
                {/* LEFT: text + cards */}
                <div>
                  <h3 className="text-[22px] font-semibold text-blue-600 mb-2">
                    Tailored Digital Strategies
                  </h3>
                  <p className="text-sm text-gray-700 max-w-xl mb-8">
                    Our team conducts in-depth research on your target audience,
                    competitors, and industry trends to develop strategies that
                    resonate with your brand identity and align with your
                    business objectives.
                  </p>

                  <div className="space-y-4">
                    {items.map((it, i) => (
                      <div
                        key={i}
                        className="bg-blue-50 rounded-2xl px-5 py-4 flex gap-3 items-start shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/90">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </span>
                        <div className="leading-tight">
                          <p className="font-semibold text-gray-800">
                            {it.title}
                          </p>
                          <p className="text-sm text-gray-600">{it.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT: image with soft rounded backdrop */}
                <div className="relative">
                  <div className="absolute -z-10 right-6 top-10 h-52 w-44 md:h-64 md:w-56 rounded-3xl bg-blue-200/40" />
                  <img
                    src="/lady-2.png"
                    alt="Marketing strategist pointing"
                    className="w-full max-w-md mx-auto object-contain"
                  />
                </div>
              </div>
            </section>
          </section>

          {/* digital strategies end */}

          {/* audax offer begin  */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto grid gap-10 md:gap-12 md:grid-cols-2 items-center">
              {/* LEFT: image with soft blob */}
              <div className="relative order-2 md:order-1">
                <div className="absolute -z-10 left-6 top-8 h-52 w-44 md:h-64 md:w-56 rounded-3xl bg-blue-200/40" />
                <img
                  src="/lady-3.png"
                  alt="Audax representative"
                  className="w-full max-w-md mx-auto object-contain"
                />
              </div>

              {/* RIGHT: content */}
              <div className="order-1 md:order-2">
                <h3 className="text-[22px] font-semibold text-blue-600">
                  What Audax Offers You
                </h3>
                <p className="text-sm text-gray-700 max-w-md mt-2 mb-6">
                  Our proven strategies and expert team have consistently
                  delivered impactful results, helping businesses thrive in the
                  ever-evolving digital landscape.
                </p>

                <div className="space-y-3 mb-6">
                  {bullets.map((text, i) => (
                    <div
                      key={i}
                      className="rounded-full bg-blue-50 text-gray-700 text-sm px-4 py-2 inline-flex items-center gap-2 w-full"
                    >
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/90">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </span>
                      {text}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-3 text-sm hover:bg-blue-700 transition"
                >
                  Book a Free Consultation
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>
            </div>
          </section>
          {/* audax offer end */}

          {/* simplicity results begin  */}

          <section className="px-4 py-16">
            <div className="mx-auto max-w-7xl rounded-[44px] md:rounded-[56px] bg-gradient-to-b from-[#2D8CFF] to-[#0057D9] text-white shadow-sm">
              <div className="px-6 md:px-12 pt-12 md:pt-16 text-center">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                  Simplicity That Delivers Results
                </h2>
                <p className="mt-4 mb-12 text-sm md:text-base text-white/90">
                  Get to know about our process at Audax
                </p>
              </div>

              <div className="grid gap-10 md:gap-12 md:grid-cols-3 px-6 md:px-12 pb-14">
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

          {/* call to action begin */}

         <CTABanner/>

          {/* call to action end */}

          {/* footer begin */}
          <Footer />
          {/* footer end */}
        </section>
      </>
    );
}