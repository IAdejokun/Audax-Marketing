export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2D8CFF] to-[#0057D9] text-white px-4 py-20 md:py-28">
      {/* corner shapes (decorative) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-12 -left-16 h-40 w-64 rounded-3xl rotate-[-18deg] bg-white/20 ring-1 ring-white/30 backdrop-blur-sm"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-44 w-72 rounded-3xl rotate-[18deg] bg-white/20 ring-1 ring-white/30 backdrop-blur-sm"
      />

      {/* content */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Who We Are</h2>
        <div className="mx-auto mt-3 h-[3px] w-28 rounded-full bg-white/80" />

        <p className="mt-8 text-base md:text-lg leading-8 text-white/95">
          At Audax Marketing, we’re not here to chase clout or win engagement trophies. We’re a
          performance-driven e-commerce marketing agency that thrives on real business growth. The
          kind that shows up in your revenue, not just your likes.
        </p>

        <p className="mt-8 text-base md:text-lg leading-8 text-white/95">
          We were founded on one simple belief: marketing should move the needle. That means no
          gimmicks, no guesswork, just intelligent strategy, clean execution, and a relentless focus
          on ROI. Our team blends sharp analytics, creative thinking, and platform expertise to help
          brands escape the chaos of spray-and-pray marketing. From deep-dive audits to full-funnel
          execution, we build systems that convert, not just attract.
        </p>
      </div>
    </section>
  );
}
