import { cn } from "@/lib/utils";
import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined-white" | "outlined-dark";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "filled", className, children, ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] rounded-md transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variantClasses = {
      filled:
        "bg-[#2563EB] text-white hover:bg-[#1d4ed8] hover:shadow-lg hover:-translate-y-0.5",
      "outlined-white":
        "border border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/60",
      "outlined-dark":
        "border border-[#0A0E1A]/30 text-[#0A0E1A] bg-transparent hover:bg-[#0A0E1A]/5 hover:border-[#0A0E1A]/60",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
