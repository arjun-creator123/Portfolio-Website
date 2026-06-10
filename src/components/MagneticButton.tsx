import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export function MagneticButton({ children, href, variant = "primary", onClick }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "relative inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-sm tracking-wide transition-colors overflow-hidden group";
  const styles =
    variant === "primary"
      ? "text-primary-foreground"
      : "text-foreground border border-border hover:border-neon-cyan";

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles}`}
    >
      {variant === "primary" && (
        <span
          className="absolute inset-0 -z-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      )}
      {variant === "secondary" && (
        <span
          className="absolute inset-0 -z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "var(--gradient-emerald)" }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
