import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-primary font-bold tracking-widest uppercase text-sm">
          {label}
        </label>
      )}
      <input 
        className={`bg-input border border-border text-foreground p-3 focus:outline-none focus:border-primary focus:box-glow-cyan transition-all w-full ${className}`}
        {...props}
      />
    </div>
  );
}