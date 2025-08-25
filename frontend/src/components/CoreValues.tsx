type Value = { text: string; iconSrc?: string; iconAlt?: string };

export default function CoreValues({
  title = "Core Values",
  values = [
    {
      text: "Revenue Over Reach: Focus on strategies that build your bottom line, not vanity metrics.",
    },
    {
      text: "Authentic Connection: Build relationships not just follower counts.",
    },
    {
      text: "Customer solutions: No templates, strategies tailored to your business.",
    },
    { text: "Measurable Growth: Track ROI, not vanity stats." },
  ],
}: {
  title?: string;
  values?: Value[];
}) {
  return (
    <section className="px-4 py-12">
      <div className="relative max-w-4xl mx-auto">
        {/* outer card */}
        <div className="relative rounded-[24px] border-2 border-blue-400/80 bg-white p-6 md:p-8">
          {/* floating title pill */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="rounded-full border-2 border-blue-400/90 bg-white px-5 py-1.5 text-blue-600 font-semibold shadow-sm">
              {title}
            </div>
          </div>

          {/* values list */}
          <ul className="mt-4 space-y-3 md:space-y-4">
            {values.map((v, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-full bg-slate-100 px-4 py-3 text-slate-700"
              >
                {/* icon: use provided image if given, else fallback to a tiny check */}
                {v.iconSrc ? (
                  <img
                    src={v.iconSrc}
                    alt={v.iconAlt || "bullet"}
                    className="mt-0.5 h-4 w-4 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-600"
                  >
                    {/* tiny check mark */}
                    <svg viewBox="0 0 12 10" className="h-2.5 w-2.5 fill-white">
                      <path d="M4.2 7.3 1.8 4.9 0.7 6l3.5 3.3L11.3 2.1 10.2 1z" />
                    </svg>
                  </span>
                )}
                <span className="text-sm md:text-[15px] leading-6">
                  {v.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
