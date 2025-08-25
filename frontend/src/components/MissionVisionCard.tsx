type Props = {
  title: string;
  iconSrc: string; // put your PNG/SVG in /public (e.g., /mission.png)
  iconAlt?: string;
  children: React.ReactNode;
};

export default function MissionVisionCard({
  title,
  iconSrc,
  iconAlt,
  children,
}: Props) {
  return (
    <div
      className="
        overflow-hidden rounded-[28px]
        ring-1 ring-blue-500/35
        shadow-[0_10px_30px_rgba(29,78,216,0.12)]
        bg-white
      "
    >
      {/* HEADER — white band, centered icon + title */}
      <div className="px-8 py-7 flex items-center justify-center gap-4">
        <img
          src={iconSrc}
          alt={iconAlt || title}
          className="h-10 w-10 object-contain"
          onError={(e) => {
            // simple fallback so you don’t see a broken image icon during dev
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <h3 className="text-[28px] md:text-[32px] leading-none font-semibold text-[#1762FF]">
          {title}
        </h3>
      </div>

      {/* crisp separator under the white header */}
      <div className="h-px w-full bg-blue-100" />

      {/* BODY — solid, punchy blue gradient (no opacity wash) */}
      <div
        className="
          px-8 py-8
          text-white
          bg-[linear-gradient(180deg,#75B5FF_0%,#2D7BFF_30%,#0A61FF_100%)]  
        "
      >
        <p className="text-[15px] md:text-[18px] leading-7 md:leading-8">
          {children}
        </p>
      </div>
    </div>
  );
}
