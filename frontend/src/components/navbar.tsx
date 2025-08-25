import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Pricing", to: "/pricing" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "About Us", to: "/about" },
];

export default function NavbarHero() {
  const [open, setOpen] = useState(false);

  // lock scroll when drawer open
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

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Audax Marketing" className="h-9 w-auto" />
            <span className="hidden sm:block font-semibold tracking-wide">
              AUDAX
            </span>
            <span className="hidden sm:block text-slate-500 -ml-1">
              MARKETING
            </span>
          </a>

          {/* centered nav island — light like the hero */}
          <nav
            className="hidden md:flex items-center gap-1 rounded-full
                          bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur
                          ring-1 ring-black/5 shadow-[0_1px_0_rgba(255,255,255,.6),0_6px_20px_rgba(15,23,42,.06)]
                          px-1 py-1"
          >
            {LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm ${
                    isActive ? activeChip : idleChip
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* contact + hamburger */}
          <div className="justify-self-end flex items-center gap-3">
            <NavLink
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm"
            >
              <span className="font-medium">Contact Us</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-blue-600">
                <ArrowRight className="h-3.5 w-3.5 text-blue-700" />
              </span>
            </NavLink>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-slate-300 hover:bg-slate-50"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer (keeps active link blue) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[82%] max-w-xs bg-white shadow-xl md:hidden
        transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Audax Marketing" className="h-8 w-auto" />
            <span className="font-semibold tracking-wide">AUDAX</span>
          </a>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-4 py-3">
          {LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-3 text-base font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="mt-4 border-t pt-4">
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>
        </nav>
      </aside>
    </>
  );
}
