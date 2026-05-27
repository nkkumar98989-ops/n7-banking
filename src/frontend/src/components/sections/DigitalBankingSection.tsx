import { Button } from "@/components/ui/N7Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import type * as React from "react";

const tickerContent =
  "N7 ✦ Say 👋 to the new way of banking ✦ CB7 ✦ Say 👋 to the new way of banking ✦ ";

function Ticker() {
  return (
    <div className="overflow-hidden bg-[#0A0E1A] py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
          {tickerContent}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
          {tickerContent}
        </span>
      </div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#06B6D4]/10">
        <svg
          aria-hidden="true"
          className="h-3 w-3 text-[#06B6D4]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
      <span className="text-sm font-medium text-[#0A0E1A]/80">{text}</span>
    </li>
  );
}

function FeatureRow({
  heading,
  description,
  checklist,
  mockup,
  layout,
  delay = 0,
}: {
  heading: string;
  description: string;
  checklist: string[];
  mockup: React.ReactNode;
  layout: "left" | "right";
  delay?: number;
}) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
    triggerOnce: true,
  });

  const textContent = (
    <div className="flex flex-col justify-center">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-[#0A0E1A] sm:text-3xl lg:text-4xl">
        {heading}
      </h3>
      <p className="mb-6 text-base leading-relaxed text-[#0A0E1A]/60">
        {description}
      </p>
      <ul className="space-y-3">
        {checklist.map((item) => (
          <CheckItem key={`check-${item}`} text={item} />
        ))}
      </ul>
    </div>
  );

  return (
    <div
      ref={ref}
      className={cn(
        "grid items-center gap-8 transition-all duration-700 ease-out lg:gap-16",
        layout === "left"
          ? "lg:grid-cols-[1fr_auto]"
          : "lg:grid-cols-[auto_1fr]",
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {layout === "left" ? (
        <>
          {textContent}
          <div className="flex justify-center">{mockup}</div>
        </>
      ) : (
        <>
          <div className="flex justify-center">{mockup}</div>
          {textContent}
        </>
      )}
    </div>
  );
}

function BalanceScreen() {
  return (
    <div className="flex h-[520px] flex-col p-5">
      <div className="mb-6">
        <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
          Total Balance
        </p>
        <p className="mt-1 text-3xl font-bold text-white">$42,295.00</p>
        <p className="text-xs text-white/40">USD</p>
      </div>
      <div className="mb-4 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#2563EB] py-2.5 text-xs font-semibold text-white transition-smooth hover:bg-[#1d4ed8]"
        >
          Send
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-white/10 py-2.5 text-xs font-semibold text-white transition-smooth hover:bg-white/20"
        >
          Request
        </button>
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
          Recent Activity
        </p>
        <div className="space-y-3">
          {[
            { name: "Netflix Subscription", amount: "-$15.99", date: "Today" },
            { name: "Salary Deposit", amount: "+$4,250.00", date: "Yesterday" },
            { name: "Grocery Store", amount: "-$87.43", date: "May 24" },
            { name: "Uber Ride", amount: "-$24.50", date: "May 23" },
            { name: "Freelance Payment", amount: "+$1,200.00", date: "May 22" },
          ].map((tx) => (
            <div
              key={`tx-${tx.name}`}
              className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2.5"
            >
              <div>
                <p className="text-xs font-medium text-white">{tx.name}</p>
                <p className="text-[10px] text-white/40">{tx.date}</p>
              </div>
              <p
                className={cn(
                  "text-xs font-semibold",
                  tx.amount.startsWith("+") ? "text-[#06B6D4]" : "text-white",
                )}
              >
                {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChartScreen() {
  return (
    <div className="flex h-[520px] flex-col p-5">
      <div className="mb-6">
        <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
          Monthly Spending
        </p>
        <p className="mt-1 text-3xl font-bold text-white">$8,295.00</p>
        <p className="text-xs text-white/40">USD</p>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {[
          { label: "Jan", value: 45 },
          { label: "Feb", value: 62 },
          { label: "Mar", value: 38 },
          { label: "Apr", value: 75 },
          { label: "May", value: 55 },
        ].map((bar) => (
          <div key={`bar-${bar.label}`} className="flex items-center gap-3">
            <span className="w-6 text-[10px] text-white/40">{bar.label}</span>
            <div className="h-6 flex-1 rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-[#2563EB] transition-all duration-1000"
                style={{ width: `${bar.value}%` }}
              />
            </div>
            <span className="w-8 text-right text-[10px] text-white/60">
              {bar.value}%
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-[#06B6D4]/10 p-4">
        <p className="text-xs font-medium text-[#06B6D4]">+12% vs last month</p>
        <p className="text-[10px] text-white/40">Your spending is on track</p>
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div className="flex h-[520px] flex-col p-5">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB]/20">
          <span className="text-lg font-bold text-[#2563EB]">TK</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Toni Kross</p>
          <p className="text-[10px] text-white/40">Premium Member</p>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { icon: "👤", label: "Profile setting" },
          { icon: "⚙️", label: "Setting" },
          { icon: "❓", label: "Support" },
          { icon: "🚪", label: "Sign out" },
        ].map((item) => (
          <button
            type="button"
            key={`profile-${item.label}`}
            className="flex w-full items-center gap-3 rounded-lg bg-white/5 px-4 py-3 text-left transition-smooth hover:bg-white/10"
          >
            <span className="text-sm">{item.icon}</span>
            <span className="text-xs font-medium text-white">{item.label}</span>
            <svg
              aria-hidden="true"
              className="ml-auto h-3 w-3 text-white/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        ))}
      </div>
      <div className="mt-auto rounded-xl bg-[#06B6D4]/10 p-4">
        <p className="text-xs font-medium text-[#06B6D4]">Account Status</p>
        <p className="text-[10px] text-white/40">Fully verified and active</p>
      </div>
    </div>
  );
}

export function DigitalBankingSection() {
  return (
    <section id="digital-banking" className="bg-white">
      <Ticker />

      <div className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center lg:mb-24">
            <div className="mb-4 flex items-center justify-center gap-4">
              <Button
                variant="outlined-dark"
                className="text-[10px]"
                data-ocid="digital.request_demo_button"
              >
                Request Demo
              </Button>
              <a
                href="#solutions"
                className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#06B6D4] transition-smooth hover:text-[#2563EB]"
                data-ocid="digital.learn_more_link"
              >
                Learn More
                <svg
                  aria-hidden="true"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-[#0A0E1A] sm:text-4xl lg:text-5xl">
              Digital banking out-of-the-box
            </h2>
            <p className="mx-auto max-w-2xl text-base text-[#0A0E1A]/60 sm:text-lg">
              Transform your banking experience with our comprehensive digital
              banking suite
            </p>
          </div>

          {/* Feature Rows */}
          <div className="space-y-20 lg:space-y-32">
            <FeatureRow
              heading="Fully compliant with regulatory requirement"
              description="Our platform ensures complete adherence to global banking regulations, providing peace of mind for institutions and their customers alike."
              checklist={[
                "Pre-integrated Security System",
                "Fully Compliant With Regulatory Requirement",
                "Digitally Connected Core",
              ]}
              mockup={
                <PhoneMockup>
                  <BalanceScreen />
                </PhoneMockup>
              }
              layout="left"
              delay={0}
            />

            <FeatureRow
              heading="No legacy IT systems"
              description="Break free from outdated infrastructure with our modern, cloud-native architecture designed for the future of finance."
              checklist={[
                "Adaptive & Intelligent API monetization",
                "Ambient User Experience",
                "Cloud-native With lower TCO",
              ]}
              mockup={
                <PhoneMockup>
                  <ChartScreen />
                </PhoneMockup>
              }
              layout="right"
              delay={100}
            />

            <FeatureRow
              heading="No traditional branches"
              description="Deliver seamless banking experiences anywhere, anytime with our branchless and paperless digital-first approach."
              checklist={[
                "Branchless & Paperless Banking",
                "Digital Transformation Capability",
                "Optimized Adoptable and Scalable",
              ]}
              mockup={
                <PhoneMockup>
                  <ProfileScreen />
                </PhoneMockup>
              }
              layout="left"
              delay={200}
            />
          </div>

          {/* CTA Card */}
          <div className="mt-20 lg:mt-32">
            <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#0A0E1A] p-8 sm:p-12 lg:flex-row lg:p-16">
              <div className="max-w-xl text-center lg:text-left">
                <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                  Take the full advantage of going paper-less now.
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  Join hundreds of financial institutions already transforming
                  their operations with N7&apos;s digital banking solutions.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="filled" data-ocid="digital.cta_contact_button">
                  Contact Us
                </Button>
                <Button
                  variant="outlined-white"
                  data-ocid="digital.cta_request_demo_button"
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
