import { Button } from "@/components/ui/N7Button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CreditCard, MoreHorizontal, Wallet } from "lucide-react";
import * as React from "react";

const trustedBrands = [
  "SHELLS",
  "SmartFinder",
  "Zoomerr",
  "ArtVenue",
  "WAVESMARATHON",
];

const recentActivity = [
  {
    name: "Jin",
    label: "Work",
    amount: "-$59",
    color: "bg-red-500/20 text-red-400",
  },
  {
    name: "Sarah",
    label: "Design",
    amount: "-$120",
    color: "bg-red-500/20 text-red-400",
  },
  {
    name: "Mike",
    label: "Freelance",
    amount: "+$350",
    color: "bg-emerald-500/20 text-emerald-400",
  },
];

function BalanceCard() {
  return (
    <div className="w-64 rounded-2xl border border-white/10 bg-[#111827]/90 p-5 shadow-2xl backdrop-blur-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB]/20">
          <span className="text-sm font-bold text-[#2563EB]">TK</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Toni Kross</p>
          <p className="text-[10px] uppercase tracking-wider text-white/40">
            Total balance
          </p>
        </div>
      </div>
      <p className="mb-5 text-2xl font-bold text-white">
        $42,295.00{" "}
        <span className="text-sm font-normal text-white/50">USD</span>
      </p>
      <div className="flex items-center justify-between">
        {[
          { icon: ArrowUpRight, label: "Fund Transfer" },
          { icon: Wallet, label: "Add Money" },
          { icon: MoreHorizontal, label: "More" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10">
              <item.icon className="h-4 w-4 text-white/70" />
            </div>
            <span className="text-[9px] text-white/40">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActivityCard() {
  return (
    <div className="w-72 rounded-2xl border border-white/10 bg-[#111827]/90 p-5 shadow-2xl backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-white">Recent Activity</h4>
        <span className="text-[10px] text-[#2563EB] cursor-pointer hover:underline">
          View all
        </span>
      </div>
      <div className="space-y-3">
        {recentActivity.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold",
                  item.color,
                )}
              >
                {item.name[0]}
              </div>
              <div>
                <p className="text-xs font-medium text-white">To {item.name}</p>
                <p className="text-[10px] text-white/40">{item.label}</p>
              </div>
            </div>
            <span
              className={cn(
                "text-xs font-semibold",
                item.amount.startsWith("+")
                  ? "text-emerald-400"
                  : "text-red-400",
              )}
            >
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLElement>({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0A0E1A]"
    >
      {/* Radial glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(37, 99, 235, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pt-24 sm:px-6 lg:px-8 xl:px-12">
        {/* Main two-column content */}
        <div className="flex flex-1 flex-col items-center gap-12 py-12 lg:flex-row lg:gap-8 lg:py-0">
          {/* Left: Text content */}
          <div
            className={cn(
              "flex flex-1 flex-col items-start text-left transition-all duration-700 ease-out",
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              The new foundation of modern banking
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
              We drive innovation and growth, provide seamless customer
              experience and operational excellence
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="filled" data-ocid="hero.request_demo_button">
                REQUEST DEMO
              </Button>
              <Button
                variant="outlined-white"
                data-ocid="hero.contact_us_button"
              >
                CONTACT US
              </Button>
            </div>
          </div>

          {/* Right: Layered mockup cards */}
          <div
            className={cn(
              "relative flex flex-1 items-center justify-center transition-all duration-700 ease-out",
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="relative h-[420px] w-full max-w-md">
              {/* Activity card — top-right, slightly rotated */}
              <div className="absolute right-0 top-0 z-10 rotate-3 transition-transform duration-500 hover:rotate-0">
                <ActivityCard />
              </div>
              {/* Balance card — bottom-left, slightly rotated opposite */}
              <div className="absolute left-0 bottom-8 z-20 -rotate-2 transition-transform duration-500 hover:rotate-0">
                <BalanceCard />
              </div>
              {/* Decorative blurred orb behind */}
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-3xl" />
            </div>
          </div>
        </div>

        {/* Bottom: Trusted By bar */}
        <div
          className={cn(
            "border-t border-white/10 py-8 transition-all duration-700 ease-out",
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6",
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Trusted By:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
              {trustedBrands.map((brand) => (
                <span
                  key={brand}
                  className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 transition-colors duration-200 hover:text-white/60"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
