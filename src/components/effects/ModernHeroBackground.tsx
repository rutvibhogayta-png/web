import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ModernHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    interface Particle {
      x: number;
      y: number;
      size: number;
      alpha: number;
      speedY: number;
      speedX: number;
      pulseSpeed: number;
      pulsePhase: number;
    }

    const particles: Particle[] = [];
    const PARTICLE_COUNT = 45;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.8 + 0.6,
          alpha: Math.random() * 0.5 + 0.15,
          speedY: -(Math.random() * 0.2 + 0.05),
          speedX: (Math.random() - 0.5) * 0.15,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.66, 2);
      lastTime = time;

      if (isVisible && width > 0 && height > 0) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.y += p.speedY * dt;
          p.x += p.speedX * dt;
          p.pulsePhase += p.pulseSpeed * dt;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulsePhase));

          ctx.fillStyle = `rgba(180, 160, 240, ${currentAlpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Primary Ambient Atmospheric Glows */}
      <div
        className="absolute left-1/2 top-[-10%] h-[550px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(153,132,216,0.6) 0%, rgba(63,203,127,0.15) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute right-[-10%] top-[25%] h-[400px] w-[450px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(63,203,127,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute left-[-10%] top-[40%] h-[400px] w-[450px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(153,132,216,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Cyber Subtle Grid Overlay with Radial Vignette */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, #000 40%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, #000 40%, transparent 90%)",
        }}
      />

      {/* Particle Canvas */}
      {!reducedMotion && <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />}

      {/* Soft Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void-black to-transparent" />
    </div>
  );
}
