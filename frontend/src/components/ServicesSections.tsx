import { Check, CheckCircle } from "lucide-react";
import CTABannerFramed from "./CTABannerFramed";

/* ---------- Types ---------- */
type Bullet = { k: string; v: string };

type FeatureProps = {
  title: string;
  sub: string;
  imageSrc: string;
  imageAlt?: string;
  imageSide?: "left" | "right"; // choose which side the image sits on at md+
  bullets: Bullet[];
  imageBg?: string; // e.g. "bg-blue-200/40" or "bg-slate-900"
};

/* ---------- Bullet pill ---------- */
function BulletCard({ k, v }: Bullet) {
  return (
    <div className="rounded-[18px] bg-slate-100 px-5 py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="flex items-start gap-3">
        <span className="flex-shrink-0 inline-flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-blue-600">
          <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
        </span>
        <p className="text-[14px] md:text-[15px] leading-6 text-slate-700">
          <span className="font-semibold">{k}:</span> {v}
        </p>
      </div>
    </div>
  );
}

/* ---------- Alternating feature block ---------- */
function FeatureBlock({
  title,
  sub,
  imageSrc,
  imageAlt = "",
  imageSide = "left",
  bullets,
  imageBg = "bg-blue-200/40",
}: FeatureProps) {
  const ImageTile = (
    <div>
      <div className={`rounded-[28px] overflow-hidden ${imageBg}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );

  const TextCol = (
    <div>
      <h3 className="text-[26px] md:text-[30px] font-semibold text-blue-600">
        {title}
      </h3>
      <p className="text-slate-600 mt-1 mb-4">{sub}</p>
      <div className="space-y-4">
        {bullets.map((b, i) => (
          <BulletCard key={i} {...b} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12">
        {imageSide === "left" ? (
          <>
            {ImageTile}
            {TextCol}
          </>
        ) : (
          <>
            {TextCol}
            {ImageTile}
          </>
        )}
      </div>
    </section>
  );
}

/* ---------- Blue gradient banner ---------- */
function WhyItWorks() {
  const rows = [
    "Connect social proof to email campaigns",
    "Turn SEO traffic into loyal subscribers",
    "Use data to refine every interaction",
  ];

  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto rounded-[36px] overflow-hidden bg-gradient-to-br from-[#5EA0FF] to-[#0A61FF] text-white px-6 md:px-10 py-10 md:py-14">
        <h3 className="text-center text-[24px] md:text-[30px] font-semibold">
          Why It Works differently at Audax
        </h3>
        <p className="text-center italic text-white/90 mt-2 mb-6">
          We don’t chase trends, we build systems that:
        </p>

        <div className="max-w-2xl mx-auto space-y-3">
          {rows.map((t, i) => (
            <div
              key={i}
              className="rounded-full bg-white/95 text-slate-800 px-5 py-3 flex items-center gap-2"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                <CheckCircle className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-sm md:text-[15px]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Page section that renders all blocks ---------- */
export default function ServicesSections() {
  return (
    <>
      <FeatureBlock
        imageSide="left"
        imageSrc="/social-selling.png" // put these images in /public
        imageAlt="Social selling"
        title="Trust-Building Social Selling"
        sub="Turn likes into loyalty, browse into buy."
        bullets={[
          {
            k: "Platform Optimization",
            v: "Seamless TikTok, Instagram, and Facebook Shops with inventory sync and trust-driven UX.",
          },
          {
            k: "Conversion-Focused Content",
            v: "Scroll-stopping posts that balance authenticity with clear CTAs.",
          },
          {
            k: "Strategic Paid Ads",
            v: "ROI-driven campaigns targeting high-intent shoppers.",
          },
          {
            k: "UGC & Influencer Partnerships",
            v: "Genuine collaborations that build credibility, not just clicks.",
          },
        ]}
      />

      <FeatureBlock
        imageSide="right"
        imageSrc="/email-sms.png"
        imageAlt="Email and SMS marketing"
        title="Conversion-Driven Email & SMS Marketing"
        sub="Your inbox is a goldmine. We’ll help you dig."
        bullets={[
          {
            k: "Smart Automation",
            v: "Abandoned cart sequences, post-purchase flows, and behavior-triggered campaigns.",
          },
          {
            k: "Hyper-Personalization",
            v: "Segmentation based on purchase history, interests, and actions.",
          },
          {
            k: "Inbox-Winning Content",
            v: "Subject lines that hook, copy that converts, and layouts optimized for every device.",
          },
        ]}
      />

      <FeatureBlock
        imageSide="left"
        imageSrc="/seo-intent.png"
        imageAlt="SEO buyer intent"
        title="SEO That Dominates Buyer Intent"
        sub="Rank where it matters: when customers are ready to buy."
        imageBg="bg-slate-900" // dark tile like your mock
        bullets={[
          {
            k: "Product Page Powerhouse",
            v: "Keywords and content that persuade and rank.",
          },
          {
            k: "Technical Mastery",
            v: "Site speed fixes, mobile optimization, crawl-friendly architecture.",
          },
          {
            k: "Authority Building",
            v: "Blogs and UGC that answer customer questions and boost rankings.",
          },
        ]}
      />

      <WhyItWorks />

      <CTABannerFramed />
      
      
    </>
  );
}
