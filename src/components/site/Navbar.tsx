import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Services", "services"],
  ["Portfolio", "portfolio"],
  ["Experience", "experience"],
  ["Gallery", "gallery"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"],
] as const;

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    links.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass-strong flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? "neon-border" : ""
        }`}
      >
          <a href="#home" className="group flex items-center">
             <div className="relative flex h-14 w-40 items-center justify-center overflow-hidden rounded-2xl">  
             <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-blue-950/20 to-purple-950/20 backdrop-blur-sm" />
             <img
             src="/src/assets/nattylogo.png"
             alt="Natty Logo"
             className="relative z-10 h-15 w-45 object-contain transition-transform duration-300 group-hover:scale-105"/></div>
          </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                  active === id ? "text-cyan-300" : "text-white/70 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-gradient-to-r from-cyan-400 to-transparent transition-transform duration-500 ${
                    active === id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20 hover:neon-glow lg:inline-flex"
        >
          Let's Talk
        </a>

        <button
          aria-label="Toggle menu"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong fixed inset-x-4 top-20 z-40 rounded-2xl p-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    active === id ? "bg-white/10 text-cyan-300" : "text-white/80"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}