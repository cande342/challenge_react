import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glow?: "cyan" | "pink" | "none";
}

export function Card({ children, glow = "none", className = "", ...props }: CardProps) {
  const glowStyles = {
    cyan: "border-primary/50 box-glow-cyan",
    pink: "border-secondary/50 box-glow-pink",
    none: "border-border",
  };

  return (
    <div 
      className={`bg-card/85 backdrop-blur-md border rounded-lg p-6 relative z-10 ${glowStyles[glow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}