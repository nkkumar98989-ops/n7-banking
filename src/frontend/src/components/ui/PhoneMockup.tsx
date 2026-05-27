import { cn } from "@/lib/utils";
import type * as React from "react";

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  screenClassName?: string;
}

export function PhoneMockup({
  children,
  className,
  screenClassName,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] sm:w-[300px] rounded-[2.5rem] border-4 border-[#1a1f2e] bg-[#0d1117] p-2 shadow-2xl",
        className,
      )}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-xl bg-[#0d1117]" />

      {/* Screen */}
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] bg-[#0A0E1A]",
          screenClassName,
        )}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-2 pb-1">
          <span className="text-[10px] font-medium text-white/80">9:41</span>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-3.5 rounded-sm border border-white/40" />
            <div className="h-2.5 w-3.5 rounded-sm border border-white/40" />
            <div className="h-3 w-5 rounded-sm border border-white/40 bg-white/20" />
          </div>
        </div>

        {/* Content placeholder or children */}
        {children || (
          <div className="flex h-[520px] flex-col items-center justify-center gap-4 p-6">
            <div className="h-16 w-16 rounded-2xl bg-[#2563EB]/20" />
            <div className="h-3 w-32 rounded-full bg-white/10" />
            <div className="h-2.5 w-24 rounded-full bg-white/5" />
          </div>
        )}
      </div>
    </div>
  );
}
