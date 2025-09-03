// components/LogoWordmark.tsx
export default function LogoWordmark({
  tone = "light",
  markSrc = "/logo.png", // change to your mark path if needed
}: {
  tone?: "light" | "dark";
  markSrc?: string;
}) {
  const wordPrimary   = tone === "dark" ? "text-white"    : "text-slate-900";
  const wordSecondary = tone === "dark" ? "text-white/75" : "text-slate-500";
  // subtle stroke on dark to keep type legible over photos
  const wordShadow    = tone === "dark" ? "drop-shadow-[0_1px_1px_rgba(0,0,0,.6)]" : "";

  return (
    <a href="/" className="flex items-center gap-2">
      {/* Keep/remove the blue “A” mark as you wish */}
      <img src={markSrc} alt="Audax mark" className="h-9 w-auto" />

      {/* AUDAX / MARKETING word-mark */}
      <div className={`leading-none ${wordShadow}`}>
        <span
          className={`block text-[15px] md:text-[16px] font-semibold tracking-[0.12em] ${wordPrimary}`}
        >
          AUDAX
        </span>
        <span
          className={`block -mt-[2px] text-[10.5px] md:text-[11.5px] tracking-[0.24em] ${wordSecondary}`}
        >
          MARKETING
        </span>
      </div>
    </a>
  );
}
