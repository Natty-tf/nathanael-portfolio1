import { useEffect, useRef } from "react";

/**
 * Cinematic animated background:
 * - mouse-reactive aurora
 * - floating blur orbs
 * - subtle cyber grid + drifting particles on canvas
 */
export function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const auroraRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.6 + 0.2,
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const onMove = (e: MouseEvent) => {
      if (!auroraRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      auroraRef.current.style.background = `
        radial-gradient(600px circle at ${x}% ${y}%, rgba(56,232,255,0.18), transparent 60%),
        radial-gradient(800px circle at ${100 - x}% ${100 - y}%, rgba(111,139,255,0.14), transparent 65%)
      `;
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125,252,255,${p.a})`;
        ctx.shadowColor = "rgba(56,232,255,0.8)";
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,30,70,0.7),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(10,20,50,0.8),transparent_60%)]" />
      {/* grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* floating orbs */}
      <div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full blur-[140px] opacity-50"
        style={{ background: "#22d3ee", animation: "float-orb 18s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full blur-[160px] opacity-40"
        style={{ background: "#6366f1", animation: "float-orb 22s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full blur-[150px] opacity-30"
        style={{ background: "#0ea5e9", animation: "float-orb 26s ease-in-out infinite" }}
      />
      {/* mouse aurora */}
      <div ref={auroraRef} className="absolute inset-0 transition-[background] duration-300" />
      {/* particles */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(5,8,20,0.85)_100%)]" />
    </div>
  );
}