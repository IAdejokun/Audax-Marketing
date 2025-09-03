import { CheckCircle, ArrowRight } from "lucide-react";

/* Tiny check pill --------------------------------------------------------- */
function TinyPill({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[13px] text-slate-700 ring-1 ring-black/5">
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-600">
        <CheckCircle className="h-2.5 w-2.5 text-white" />
      </span>
      <span>{text}</span>
    </div>
  );
}

/* 1) Intro split ---------------------------------------------------------- */
function SocialIntro() {
  const pains = [
    "Decent engagement, but low sales",
    "Content feels disconnected from purchases",
    "Influencer partnerships costing more than they earn",
    "Algorithm changes pulling focus from your business",
  ];

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-[34px] leading-tight md:text-[40px] font-semibold text-slate-900">
            End-to-End Social Media Solutions
          </h2>
          <p className="mt-4 text-slate-600 max-w-prose">
            At Audax, we do more than post content. We craft social experiences
            that build community, drive engagement, and generate real business
            results. Whether you’re just getting started or scaling up, we bring
            the clarity, creativity, and strategy your brand needs.
          </p>
        </div>

        <div className="rounded-3xl bg-[#EDF4FF] p-5 md:p-6 ring-1 ring-blue-100 shadow-[0_1px_0_rgba(255,255,255,.6),0_10px_30px_rgba(2,48,71,.06)]">
          <h3 className="text-[17px] font-semibold text-slate-900">
            We Understand Your Real Struggles
          </h3>
          <p className="text-[12.5px] text-slate-500 italic">
            you’re not alone, we’ve solved these frustrations before
          </p>

          <div className="mt-4 space-y-3">
            {pains.map((p, i) => (
              <TinyPill key={i} text={p} />
            ))}
          </div>
        </div>
      </div>

      <hr className="mx-auto mt-10 max-w-6xl border-t border-slate-200/70" />
    </section>
  );
}

/* 2) What we offer grid (USES YOUR 6 IMAGES) ----------------------------- */
type OfferItem = { title: string; body: string; img: string; alt: string };

const OFFER: OfferItem[] = [
  {
    img: "/services-icons/shop.png",
    alt: "Social commerce icon",
    title: "Social Commerce Setup",
    body: "Turn TikTok, Instagram, and Facebook into high-converting storefronts with real-time sync and trust-boosting reviews.",
  },
  {
    img: "/services-icons/buyer.png",
    alt: "Paid social icon",
    title: "Data-Driven Paid Social",
    body: "Launch ROI-focused ad campaigns that cut through noise and speak directly to buyer intent.",
  },
  {
    img: "/services-icons/channel.png",
    alt: "Cross channel icon",
    title: "Cross-Channel Sync",
    body: "Connect your email, social, and ad strategy so every platform works together to drive conversions.",
  },
  {
    img: "/services-icons/Video.png",
    alt: "Influencer UGC icon",
    title: "Smart Influencer & UGC Strategy",
    body: "Get creators who align with your brand and content that actually drives results, not just reach.",
  },
  {
    img: "/services-icons/community.png",
    alt: "Community content icon",
    title: "Community-Led Content",
    body: "Build trust and engagement with scroll-stopping content that educates, entertains, and converts.",
  },
  {
    img: "/services-icons/Settings.png",
    alt: "Analytics icon",
    title: "Performance Analytics & Optimization",
    body: "We track what matters, test what works, and scale what sells—no guesswork, just results.",
  },
];

function OfferGrid() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-[28px] md:text-[36px] font-semibold text-slate-900 leading-tight">
          What We Offer: The Audax Social Selling Ecosystem
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-px overflow-hidden rounded-2xl bg-slate-200/60 sm:grid-cols-2 lg:grid-cols-3">
        {OFFER.map((o, i) => (
          <div
            key={i}
            className="bg-white p-6 md:p-7 hover:bg-slate-50 transition"
          >
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50">
              <img
                src={o.img}
                alt={o.alt}
                loading="lazy"
                decoding="async"
                className="h-6 w-6 object-contain"
                draggable={false}
              />
            </div>
            <h3 className="text-[16px] md:text-[17px] font-semibold text-slate-900 text-center">
              {o.title}
            </h3>
            <p className="mt-2 text-center text-[13.5px] md:text-[14px] leading-6 text-slate-600">
              {o.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 3) Why choose banner ---------------------------------------------------- */
function WhyChooseBanner({ bgSrc = "/socialmediaservice.png" }: { bgSrc?: string }) {
  const bullets = [
    "Convert followers into customers with proven frameworks",
    "Eliminate content guesswork with strategy-led execution",
    "Integrate your paid and organic strategy into one growth engine",
    "Create a scalable content pipeline powered by data and relevance",
  ];

  return (
    <section className="px-4 pb-14">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px]">
        <img
          src={bgSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="px-6 py-12 md:px-10 md:py-14 text-white text-center">
          <h3 className="text-[26px] md:text-[30px] font-semibold">
            Why Choose Audax ?
          </h3>
          <p className="mt-1 text-white/90 text-[13px] md:text-[14px] italic">
            We don’t post for likes, we build systems that convert.
          </p>

          <div className="mx-auto mt-6 grid max-w-2xl gap-3">
            {bullets.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-3 text-slate-800"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                  <CheckCircle className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="text-sm md:text-[15px]">{b}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow-[0_10px_30px_rgba(37,99,235,.35)] hover:bg-blue-700 transition"
          >
            Book Your Free Consultation
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* Composition ------------------------------------------------------------- */
export default function SocialMediaSections() {
  return (
    <>
      <SocialIntro />
      <OfferGrid />
      <WhyChooseBanner />
    </>
  );
}
