import { CheckCircle } from "lucide-react";

type Reason = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const REASONS: Reason[] = [
  {
    title: "We Turn Visibility Into Revenue",
    desc: "We don’t just help brands get seen, we help them get paid. Every campaign is built to convert attention into action and visibility into real business growth.",
    icon: CheckCircle,
  },
  {
    title: "Strategy First. Always.",
    desc: "We don’t guess. We map, analyze, and execute with intent because throwing money at ads without a plan isn’t marketing, it’s gambling.",
    icon: CheckCircle,
  },
  {
    title: "We Act Like Partners, Not Vendors",
    desc: "We’re not just another agency on your invoice. We move like a growth partner: proactive, accountable, and just as invested in your success as you are.",
    icon: CheckCircle,
  },
];

export default function WhyWorkWithUs({
  imageSrc = "/about-lady.png", // put your image in /public
  imageAlt = "Audax team member",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
        {/* Left: image inside rounded tile */}
        <div className="order-2 md:order-1">
          <div className="rounded-[24px] overflow-hidden ">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: headline + reasons */}
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            Why Work With Us?
          </h2>

          <div className="space-y-4">
            {REASONS.map(({ title, desc, icon: Icon }, i) => (
              <div
                key={i}
                className="rounded-[18px] bg-slate-100 px-5 py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-10 items-center justify-center rounded-full bg-blue-600">
                    <Icon className="h-3.5 w-3.5 text-white" />
                  </span>
                  <div className="leading-tight">
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
