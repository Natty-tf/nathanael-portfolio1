import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

export function MagneticButton({ children, href = "#", variant = "primary", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 ease-out will-change-transform";
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-indigo-500 text-black shadow-[0_8px_40px_-8px_rgba(56,232,255,0.6)] hover:shadow-[0_12px_60px_-6px_rgba(56,232,255,0.8)]",
    ghost:
      "glass text-white hover:bg-white/10",
    outline:
      "border border-cyan-300/40 bg-cyan-400/5 text-cyan-100 hover:bg-cyan-400/10 hover:neon-glow",
  } as const;

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-full">
        <span className="absolute -inset-x-10 top-0 h-full -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </span>
    </a>
  );
}