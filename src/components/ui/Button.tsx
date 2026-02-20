import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary/10 border border-primary text-primary hover:bg-primary/20 hover:box-glow-cyan",
    secondary: "bg-secondary/10 border border-secondary text-secondary hover:bg-secondary/20 hover:box-glow-pink",
    ghost: "bg-transparent border border-transparent text-muted-foreground hover:text-foreground hover:border-border",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}