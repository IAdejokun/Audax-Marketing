import { CheckCircle } from "lucide-react";

type Item = { title: string; desc: string };

const ITEMS: Item[] = [
  {
    title: "SEO",
    desc: "We optimize your website to rank higher for the search terms your customers are actually Googling, bringing in traffic that converts.",
  },
  {
    title: "Email Marketing",
    desc: "We build automated email flows that turn browsers into buyers and one-time shoppers into loyal, repeat customers.",
  },
  {
    title: "Social Media Marketing",
    desc: "We create data-driven content and ads that stop the scroll, build trust, and drive real sales — not just vanity likes.",
  },
];

export default function WhatWeDo({
  imageSrc = "/whatwedo.png",
  imageAlt = "Strategy session",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="relative max-w-6xl mx-auto rounded-[28px] border-2 border-blue-400/90 bg-white p-6 md:p-10">
        {/* floating title pill */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="rounded-full border-2 border-blue-400/90 bg-white px-6 py-2 text-blue-600 font-semibold text-xl shadow-sm">
            What We Do
          </div>
        </div>

        {/* content */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* left image */}
          <div className="order-2 md:order-1">
            <div className="rounded-[24px] overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* right list */}
          <div className="order-1 md:order-2 space-y-4">
            {ITEMS.map((it, i) => (
              <div
                key={i}
                className="rounded-[18px] bg-slate-100 px-5 py-4 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-9 items-center justify-center rounded-full bg-blue-600">
                    <CheckCircle className="h-3.5 w-3.5 text-white" />
                  </span>
                  <div className="leading-tight">
                    <p className="font-semibold text-slate-900">{it.title}</p>
                    <p className="text-sm text-slate-600">{it.desc}</p>
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
