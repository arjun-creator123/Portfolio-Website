import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export function ParticleBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      className="fixed inset-0 -z-10 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: !isMobile, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.5 } },
          },
        },
        particles: {
          color: { value: ["#7DD3FC", "#C084FC", "#6EE7B7"] },
          links: {
            color: "#7DD3FC",
            distance: 140,
            enable: true,
            opacity: 0.18,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            outModes: { default: "bounce" },
          },
          number: {
            value: isMobile ? 30 : 80,
            density: { enable: true, area: 900 },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
      }}
    />
  );
}
