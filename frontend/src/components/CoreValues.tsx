import {
  CheckCircle,
} from "lucide-react";
import type { ComponentType } from "react";

type Value = { text: string; icon?: ComponentType<{ className?: string }> };

export default function CoreValues({
  title = "Core Values",
  values = [
    {
      text: "Revenue Over Reach: Focus on strategies that build your bottom line, not vanity metrics.",
      icon: CheckCircle,
    },
    {
      text: "Authentic Connection: Build relationships not just follower counts.",
      icon: CheckCircle,
    },
    {
      text: "Customer solutions: No templates, strategies tailored to your business.",
      icon: CheckCircle,
    },
    {
      text: "Measurable Growth: Track ROI, not vanity stats.",
      icon: CheckCircle,
    },
  ] as Value[],
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

          {/* list */}
          <ul className="mt-4 space-y-3 md:space-y-4">
            {values.map((v, i) => {
              const Icon = v.icon ?? CheckCircle; // default icon
              return (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-full bg-slate-100 px-4 py-3 text-slate-700"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                    <Icon className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-sm md:text-[15px] leading-6">
                    {v.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
