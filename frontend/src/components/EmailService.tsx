// EmailServicesBody.tsx
import { CheckCircle, HelpCircle } from "lucide-react";
import React from "react";

/* ---------- tiny bits ---------- */

function ChipCheck({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
        <HelpCircle className="h-3.5 w-3.5 text-white" />
      </span>
      <div className="flex-1 rounded-full bg-white/90 px-3 py-2 text-xs text-slate-700 ring-1 ring-blue-100">
        {children}
      </div>
    </div>
  );
}

function PlaceholderIcon({ label = "ICON" }: { label?: string }) {
  return (
    <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-600/10 text-[10px] font-medium text-blue-700 ring-1 ring-blue-200">
      {label}
    </div>
  );
}

/* ---------- image logos with safe fallback ---------- */

type Logo = { src: string; alt?: string; title?: string };

const FALLBACK_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40">
      <rect width="160" height="40" rx="6" fill="#F1F5F9" stroke="#E2E8F0"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            font-family="system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,Helvetica,Arial"
            font-size="12" fill="#64748B">Logo</text>
    </svg>`
  );

function SafeImg({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt || "image"}
      loading="lazy"
      onError={(e) => {
        const img = e.currentTarget;
        img.onerror = null;
        img.src = FALLBACK_SVG;
      }}
      className={className}
    />
  );
}

/* ---------- feature card now supports imgSrc ---------- */

function FeatureCard({
  title,
  body,
  imgSrc, // NEW (optional)
  imgAlt = "",
  className = "",
}: {
  title: string;
  body: string;
  imgSrc?: string;
  imgAlt?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/70 bg-white p-6 text-center ${className}`}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-100">
        {imgSrc ? (
          <SafeImg
            src={imgSrc}
            alt={imgAlt}
            className="h-7 w-7 object-contain"
          />
        ) : (
          <PlaceholderIcon />
        )}
      </div>
      <h4 className="mt-3 text-[15px] font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-xs leading-5 text-slate-600">{body}</p>
    </div>
  );
}

function LogoCell({ logo }: { logo: Logo }) {
  return (
    <div
      className="flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-3"
      title={logo.title || logo.alt}
    >
      <SafeImg
        src={logo.src}
        alt={logo.alt}
        className="h-7 w-full object-contain grayscale transition hover:grayscale-0"
      />
    </div>
  );
}

function LogoRow({
  label,
  logos,
  colsMd = 5,
}: {
  label: string;
  logos: Logo[];
  colsMd?: 4 | 5;
}) {
  return (
    <div>
      <p className="mb-2 text-[11px] uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <div
        className={`grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-${colsMd}`}
      >
        {logos.map((l, i) => (
          <LogoCell key={`${l.src}-${i}`} logo={l} />
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */

export default function EmailServicesBody() {
  /* 🔁 Change THESE ICON PATHS (place your files in /public/icons/...) */
  const features: Array<{
    title: string;
    body: string;
    imgSrc?: string;
    imgAlt?: string;
  }> = [
    {
      title: "Smart Automation",
      body: "Welcome sequences, abandoned cart emails, and post-purchase flows that build trust and drive sales.",
      imgSrc: "/services-icons/Settings.png",
      imgAlt: "Automation",
    },
    {
      title: "Advanced Segmentation",
      body: "Send the right message to the right person at the right time based on behavior, history, and intent.",
      imgSrc: "/services-icons/Arrow.png",
      imgAlt: "Segmentation",
    },
    {
      title: "Conversion-Focused Content",
      body: "Subject lines that get opened. Messaging that gets results. Layouts designed to convert across every screen.",
      imgSrc: "/services-icons/community.png",
      imgAlt: "Conversion",
    },
    {
      title: "Continuous Optimization",
      body: "Ongoing A/B testing, deliverability tuning, and data-led improvements to keep performance trending up.",
      imgSrc: "/services-icons/Sync.png",
      imgAlt: "Optimization",
    },
  ];

  /* 🔁 change THESE LOGO PATHS (place your files in /public/logos/...) */
  const row1: Logo[] = [
    { src: "/brands/Klaviyo.png", alt: "Klaviyo" },
    { src: "/brands/Mailchimp.png", alt: "Mailchimp" },
    { src: "/brands/ActiveCampaign.png", alt: "ActiveCampaign" },
    { src: "/brands/Omnisend.png", alt: "Omnisend" },
    { src: "/brands/Brevo.png", alt: "Brevo" },
  ];
  const row2: Logo[] = [
    { src: "/brands/HubSpot.png", alt: "HubSpot" },
    { src: "/brands/Mailgun.png", alt: "Mailgun" },
    { src: "/brands/Twilio.png", alt: "Twilio" },
    { src: "/brands/Iterable.png", alt: "Iterable" },
  ];
  const row3: Logo[] = [
    { src: "/brands/Constant-Contact.png", alt: "Constant Contact" },
    { src: "/brands/Campaign-Monitor.png", alt: "Campaign Monitor" },
    { src: "/brands/MailerLite.png", alt: "MailerLite" },
    { src: "/brands/Drip.png", alt: "Drip" },
    { src: "/brands/SmartrMail.png", alt: "SmartrMail" },
  ];

  return (
    <div className="w-full">
      {/* 1) Intro + “Is your strategy falling flat?” card */}
      <section className="px-4 py-14 md:py-18">
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-[30px] font-semibold tracking-tight text-slate-900 md:text-[40px]">
              End-to-End Email
              <br className="hidden sm:block" /> Marketing Solutions
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-6 text-slate-600">
              Your email list shouldn’t sit there, it should sell. We transform
              underperforming email campaigns into revenue engines through smart
              automation, laser-focused targeting, and content that connects.
            </p>
          </div>

          <div className="rounded-3xl bg-blue-50 p-5 ring-1 ring-blue-100">
            <p className="text-[15px] font-semibold text-slate-900">
              Is Your Email Strategy Falling Flat?
            </p>
            <p className="text-[11px] italic text-slate-500">
              you’re not alone; we’ve solved these frustrations before
            </p>

            <div className="mt-4 space-y-3">
              <ChipCheck>High unsubscribe rates</ChipCheck>
              <ChipCheck>Low open and click-through rates</ChipCheck>
              <ChipCheck>Inconsistent sending schedules</ChipCheck>
              <ChipCheck>
                Generic messaging that lacks personalization
              </ChipCheck>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto my-6 h-px max-w-6xl bg-slate-100" />

      {/* 2) How we turn your emails into revenue */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="text-[28px] font-semibold tracking-tight text-slate-900 md:text-[36px]">
            How We Turn Your Emails Into
            <br className="hidden md:block" /> Revenue
          </h3>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              title={f.title}
              body={f.body}
              imgSrc={f.imgSrc}
              imgAlt={f.imgAlt}
            />
          ))}
        </div>
      </section>

      {/* 3) Blue compatibility banner — matches figma */}
      <section className="px-4 py-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#0A61FF]">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-[72%] w-[75%]"
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40 Q 58 6 100 8 L100 40 Z"
              fill="rgba(255,255,255,0.24)"
            />
          </svg>

          <div className="relative z-10 grid min-h-[148px] grid-cols-1 items-center gap-5 px-6 py-6 md:grid-cols-12 md:px-10 md:py-7">
            <h3 className="md:col-span-5 text-[22px] font-semibold leading-tight text-white md:text-[28px]">
              Compatible With Your
              <br className="hidden sm:block" />
              Platform of Choice
            </h3>
            <div className="hidden md:col-span-1 md:flex md:justify-center">
              <span className="h-[90px] w-[2px] rounded-full bg-white/80" />
            </div>
            <p className="md:col-span-6 text-[13px] leading-6 text-white/95 md:text-[15px]">
              We are fully equipped to integrate, optimize, and scale your email
              performance on any platform you’re already using — or help you
              choose the best one for your business model.
            </p>
          </div>
        </div>
      </section>

      {/* 4) Logos grid (image-based; just change the src paths above) */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-6xl space-y-6 rounded-3xl bg-slate-50/60 p-6 ring-1 ring-slate-100">
          <LogoRow label="E-commerce Platforms" logos={row1} colsMd={5} />
          <LogoRow label="Enterprise solutions" logos={row2} colsMd={4} />
          <LogoRow label="We Also Support (15+ more)" logos={row3} colsMd={5} />
        </div>
      </section>

      {/* 5) Our simple 4-step process */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-gradient-to-br from-white to-slate-50 p-6 ring-1 ring-slate-100 md:p-10">
          <div className="text-center">
            <h3 className="text-[26px] font-semibold text-slate-900 md:text-[30px]">
              Our Simple 4-Step Process
            </h3>
            <p className="mt-1 text-[11px] italic text-slate-500">
              From underperforming emails to scalable results.
            </p>
          </div>

          <div className="mx-auto mt-6 max-w-3xl space-y-3">
            {[
              "Audit: Deep-dive into your current performance and bottlenecks.",
              "Blueprint: We map a clear, data-backed strategy aligned with your goals.",
              "Implementation: Set up, integration, and high-converting content creation.",
              "Scale: Track, test, and continuously improve your ROI.",
            ].map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-3 text-[13px] text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                  <CheckCircle className="h-3.5 w-3.5 text-white" />
                </span>
                <span>{t}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white shadow-[0_10px_30px_rgba(37,99,235,.35)] hover:bg-blue-700"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
