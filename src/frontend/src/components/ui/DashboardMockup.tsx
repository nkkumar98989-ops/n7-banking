import { cn } from "@/lib/utils";
import * as React from "react";

interface DashboardMockupProps {
  className?: string;
  title?: string;
}

export function DashboardMockup({
  className,
  title = "AML Dashboard",
}: DashboardMockupProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-[#0f1420] shadow-2xl",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">
          {title}
        </span>
        <div className="h-4 w-4 rounded-sm bg-white/10" />
      </div>

      {/* Chart area */}
      <div className="px-5 pt-4">
        <div className="mb-3 flex items-end justify-between gap-1.5">
          {[65, 40, 80, 55, 90, 45, 70, 60, 85, 50, 75, 95].map((h, i) => (
            <div
              key={`bar-${i}-${h}`}
              className="w-full rounded-t-sm"
              style={{
                height: `${h * 0.8}px`,
                backgroundColor:
                  i % 3 === 0 ? "#2563EB" : i % 3 === 1 ? "#06B6D4" : "#3b82f6",
                opacity: 0.7 + (i % 3) * 0.1,
              }}
            />
          ))}
        </div>
        <div className="mb-4 flex justify-between text-[9px] text-white/30">
          <span>Jan</span>
          <span>Mar</span>
          <span>Jun</span>
          <span>Sep</span>
          <span>Dec</span>
        </div>
      </div>

      {/* Table */}
      <div className="border-t border-white/5 px-5 py-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#06B6D4]" />
          <span className="text-[10px] font-medium uppercase tracking-wider text-white/50">
            Recent Alerts
          </span>
        </div>
        <div className="space-y-2">
          {[
            {
              label: "Transaction #4821",
              status: "High Risk",
              color: "#ef4444",
            },
            { label: "Account #9923", status: "Medium", color: "#f59e0b" },
            { label: "Transfer #1102", status: "Cleared", color: "#10b981" },
          ].map((row) => (
            <div
              key={`row-${row.label}`}
              className="flex items-center justify-between rounded-md bg-white/[0.03] px-3 py-2"
            >
              <span className="text-[10px] text-white/60">{row.label}</span>
              <span
                className="text-[9px] font-medium uppercase tracking-wider"
                style={{ color: row.color }}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
