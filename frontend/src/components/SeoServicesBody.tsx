// SeoServicesBody.tsx
import { Check, HelpCircle } from "lucide-react";

/** Generic bullet chip that can show a check or a question icon */
function BulletChip({
  children,
  icon = "check",
}: {
  children: React.ReactNode;
  icon?: "check" | "question";
}) {
  const Icon = icon === "question" ? HelpCircle : Check;
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
        <Icon aria-hidden className="h-3.5 w-3.5 text-white" />
      </span>
      <div className="flex-1 rounded-full bg-white/90 ring-1 ring-blue-100 px-3 py-2 text-xs text-slate-700">
        {children}
      </div>
    </div>
  );
}

/** Small chip used in the “Perfect For” list (always shows a check) */
function LiteChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-full bg-slate-100 px-3 py-2">
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-600/90">
        <Check aria-hidden className="h-3 w-3 text-white" />
      </span>
      <span className="text-xs text-slate-700">{children}</span>
    </div>
  );
}

/** Circle icon that can show a placeholder text OR an image (when iconSrc provided) */
function FeatureCircle({
  label = "ICON",
  iconSrc,
}: {
  label?: string;
  iconSrc?: string;
}) {
  if (iconSrc) {
    return (
      <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-50 ring-1 ring-blue-200 overflow-hidden">
        {/* 32x32–48x48 is ideal */}
        <img
          src={iconSrc}
          className="h-8 w-8 object-contain"
          alt=""
          aria-hidden
          loading="lazy"
        />
      </span>
    );
  }
  return (
    <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-50 ring-1 ring-blue-200 text-[10px] font-medium text-blue-700">
      {label}
    </span>
  );
}

/** One cell in the 2×2 features grid */
function FeatureCell({
  title,
  body,
  iconSrc,
  placeholder = "ICON",
  className = "",
}: {
  title: string;
  body: string;
  iconSrc?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-start gap-3 p-6 text-center ${className}`}
    >
      <FeatureCircle iconSrc={iconSrc} label={placeholder} />
      <h4 className="text-[15px] font-semibold text-slate-900">{title}</h4>
      <p className="text-xs leading-6 text-slate-600 max-w-[36ch]">{body}</p>
    </div>
  );
}

export default function SeoServicesBody({
  rightImageSrc = "/public/whatwedo.png"    , // put your image in /public/images/seo
  featuresIcons = {
    product: undefined, // e.g. "/icons/product.svg"
    data: undefined,
    architecture: undefined,
    technical: undefined,
  },
}: {
  /** Image shown on the right of “Why Choose Strategic SEO?” */
  rightImageSrc?: string;
  /** Optional icon sources for the 4 feature cells */
  featuresIcons?: {
    product?: string;
    data?: string;
    architecture?: string;
    technical?: string;
  };
}) {
  const fails = [
    "Are you chasing keywords your buyers aren’t",
    "Does every algorithm update feel like starting from zero",
    "Are you trying to outrank Amazon with the same playbook",
    "Is your SEO strategy clashing with your brand voice and content",
  ];

  const perfectFor = [
    "Shopify/Woo brands tired of “algorithm anxiety”",
    "Stores with large catalogs needing smart structure",
    "Founders looking for sustainable growth without ad burnout",
    "Challenger brands ready to outrank the giants",
  ];

  return (
    <div className="w-full">
      {/* ===================== 1) Intro + “Why SEO fails” ===================== */}
      <section className="px-4 pt-12 md:pt-16 pb-10">
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-[30px] md:text-[40px] font-semibold tracking-tight text-slate-900">
              End-to-End
              <br className="hidden sm:block" /> SEO Solutions
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-6 text-slate-600">
              Your audience is searching but are they finding you or your
              competitors? Let’s make your brand the answer, every time.
            </p>
          </div>

          <div className="rounded-3xl bg-blue-50 p-5 ring-1 ring-blue-100">
            <p className="text-[15px] font-semibold text-slate-900">
              Why Most E-commerce SEO Fails
            </p>
            <p className="text-[11px] italic text-slate-500">
              you’re not alone; we’ve solved these frustrations before
            </p>

            <div className="mt-4 space-y-3">
              {fails.map((item) => (
                <BulletChip key={item} icon="question">
                  {item}
                </BulletChip>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto my-6 h-px max-w-6xl bg-slate-100" />

      {/* ===================== 2) Why choose + image ===================== */}
      <section className="px-4 py-10">
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2">
          {/* left text */}
          <div>
            <h3 className="text-[26px] md:text-[30px] font-semibold tracking-tight text-slate-900">
              Why Choose Strategic SEO?
            </h3>
            <p className="mt-3 text-[14px] leading-6 text-slate-700">
              Strategic SEO means building assets not just rankings. We help you
              own your space online through buyer-intent targeting, future-proof
              optimization, and systems that scale.
            </p>

            <p className="mt-5 text-[12px] font-semibold tracking-wide uppercase text-slate-500">
              Perfect For:
            </p>
            <div className="mt-3 space-y-3">
              {perfectFor.map((p) => (
                <LiteChip key={p}>{p}</LiteChip>
              ))}
            </div>
          </div>

          {/* right image card */}
          <div className="rounded-3xl p-3 md:p-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={rightImageSrc}
                alt="Team reviewing analytics and whiteboard"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3) How we build SEO grid ===================== */}
      <section className="px-4 pb-14">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="text-[28px] md:text-[36px] font-semibold tracking-tight text-slate-900">
            How We Build SEO That Sells
          </h3>
        </div>

        <div className="mx-auto mt-8 max-w-6xl grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-2xl overflow-hidden bg-white">
          <FeatureCell
            title="Product Page Optimization"
            body="Search-friendly titles. Conversion-driven copy. Schema that works behind the scenes."
            iconSrc={featuresIcons.product}
            placeholder="⭐"
            className="border-b md:border-b md:border-r border-slate-200"
          />

          <FeatureCell
            title="Data-Driven Content"
            body="We create content that attracts, ranks, and sells. Backed by real data and publishing strategy."
            iconSrc={featuresIcons.data}
            placeholder="📈"
            className="border-b md:border-b border-slate-200"
          />

          <FeatureCell
            title="Site Architecture & Authority Building"
            body="From crawl-friendly structure to strategic linking, we help search engines and buyers flow through your store."
            iconSrc={featuresIcons.architecture}
            placeholder="⛓️"
            className="md:border-r border-slate-200"
          />

          <FeatureCell
            title="Technical SEO"
            body="We fix what’s slowing you down: speed, mobile issues, and indexation barriers that silently cost you traffic."
            iconSrc={featuresIcons.technical}
            placeholder="🛠️"
          />
        </div>
      </section>
    </div>
  );
}
