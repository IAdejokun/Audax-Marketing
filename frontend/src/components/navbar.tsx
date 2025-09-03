import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import LogoWordmark from "@/components/LogoWordMark";

const SERVICES_SUBNAV = [
  { label: "Social Media Marketing", to: "/services/SocialMediaService" },
  { label: "Email & SMS Marketing", to: "/services/EmailService" },
  { label: "SEO", to: "/services/SeoService" },
];

const isServicesPath = (path: string) => /^\/services(\/|$)/.test(path);

type Props = {
  tone?: "light" | "dark";
  fixed?: boolean; // overlay at top
  reserveSpace?: boolean; // add spacer div under a fixed nav
};

export default function NavbarHero({
  tone = "light",
  fixed = true,
  reserveSpace = true,
}: Props) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const servicesActive = isServicesPath(pathname);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const activeChip =
    "bg-blue-600 text-white shadow-[0_4px_14px_rgba(37,99,235,.35)] ring-1 ring-blue-500/35";
  const idleChip = "text-slate-700 hover:text-blue-600";

  const contactText = tone === "dark" ? "text-white" : "text-slate-900";
  const contactRing = tone === "dark" ? "ring-white/80" : "ring-blue-600";
  const contactIcon = tone === "dark" ? "text-white" : "text-blue-700";

  const wrapperCls = fixed
    ? "fixed top-0 left-0 right-0 z-40"
    : "relative z-20";

  return (
    <>
      {/* NAVBAR */}
      <div className={wrapperCls}>
        {/* changed: add `relative` so we can absolutely position the mobile button */}
        <div className="max-w-7xl mx-auto px-4 pt-4 md:pt-5 relative">
          {/* mobile hamburger — out of the grid, fixed to top-right */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-slate-300 bg-white/90 backdrop-blur hover:bg-slate-50"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            {/* Logo */}
            <LogoWordmark tone={tone} markSrc="/logo.png" />

            {/* Nav island */}
            <nav
              className="hidden md:flex items-center gap-1 rounded-full
                         bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur
                         ring-1 ring-black/5 shadow-[0_1px_0_rgba(255,255,255,.6),0_6px_20px_rgba(15,23,42,.06)]
                         px-1 py-1"
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm ${
                    isActive ? activeChip : idleChip
                  }`
                }
              >
                Home
              </NavLink>

              <div className="relative group/drop">
                <NavLink
                  to="/services"
                  className={`px-4 py-2 rounded-full text-sm inline-flex items-center gap-1 ${
                    servicesActive ? activeChip : idleChip
                  }`}
                >
                  Services <ChevronDown className="h-4 w-4 opacity-80" />
                </NavLink>
                <div className="absolute left-1/2 top-full -translate-x-1/2 z-50 pt-2 opacity-0 pointer-events-none transition group-hover/drop:opacity-100 group-hover/drop:pointer-events-auto group-focus-within/drop:opacity-100 group-focus-within/drop:pointer-events-auto">
                  <div className="w-64 rounded-2xl bg-white/90 backdrop-blur ring-1 ring-black/5 shadow-xl p-2">
                    {SERVICES_SUBNAV.map((s) => (
                      <NavLink
                        key={s.to}
                        to={s.to}
                        className={({ isActive }) =>
                          `block rounded-xl px-3 py-2 text-sm ${
                            isActive
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-700 hover:bg-slate-100"
                          }`
                        }
                      >
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm ${
                    isActive ? activeChip : idleChip
                  }`
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm ${
                    isActive ? activeChip : idleChip
                  }`
                }
              >
                About
              </NavLink>
            </nav>

            {/* Contact (desktop). Mobile hamburger is now absolute at top-right. */}
            <div className="justify-self-end hidden md:flex items-center gap-3">
              <NavLink
                to="/contact"
                className={`inline-flex items-center gap-2 text-sm ${contactText}`}
              >
                <span className="font-medium">Contact Us</span>
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ${contactRing}`}
                >
                  <ArrowRight className={`h-3.5 w-3.5 ${contactIcon}`} />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer: only for fixed nav when you want to push normal content down.
          On hero pages set reserveSpace={false} so hero covers the top. */}
      {fixed && reserveSpace && <div className="h-[76px] md:h-[88px]" />}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] transition ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <img src="/logo.png" alt="Audax" className="h-8" />
            <button
              className="h-9 w-9 inline-flex items-center justify-center rounded-md ring-1 ring-slate-300"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="p-3 space-y-1">
            <NavLink
              to="/"
              end
              className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <div className="px-3 py-2 text-slate-500 uppercase text-xs">
              Services
            </div>
            <NavLink
              to="/services"
              className="block rounded-lg px-5 py-2 text-slate-800 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              All Services
            </NavLink>
            {SERVICES_SUBNAV.map((s) => (
              <NavLink
                key={s.to}
                to={s.to}
                className="block rounded-lg px-5 py-2 text-slate-800 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </NavLink>
            ))}
            <NavLink
              to="/blog"
              className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="block rounded-lg px-3 py-2 text-slate-800 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
