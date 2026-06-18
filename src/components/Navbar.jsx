import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MarigoldMark } from "./Illustrations";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-linen/90 backdrop-blur-sm border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <MarigoldMark className="w-8 h-8" />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Marigold Café
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative py-1 transition-colors ${
                  isActive ? "text-ink font-semibold" : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-marigold rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="bg-ink text-linen px-4 py-2 rounded-full text-sm font-semibold hover:bg-cocoa transition-colors"
          >
            Visit us
          </NavLink>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[2px] w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 px-6 py-4 flex flex-col gap-4 font-body bg-linen">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base ${isActive ? "text-ink font-semibold" : "text-ink-soft"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
