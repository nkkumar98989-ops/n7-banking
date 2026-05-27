import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { Button } from "@/components/ui/N7Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Check } from "lucide-react";
import * as React from "react";

const checklistItems = [
  "Customer On-Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, NEFT, RTGS)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances",
];

function GeometricBackground() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
    >
      <line x1="0" y1="0" x2="1440" y2="900" stroke="#2563EB" strokeWidth="1" />
      <line x1="1440" y1="0" x2="0" y2="900" stroke="#2563EB" strokeWidth="1" />
      <line
        x1="720"
        y1="0"
        x2="720"
        y2="900"
        stroke="#06B6D4"
        strokeWidth="0.5"
      />
      <line
        x1="0"
        y1="450"
        x2="1440"
        y2="450"
        stroke="#06B6D4"
        strokeWidth="0.5"
      />
      <rect
        x="360"
        y="225"
        width="720"
        height="450"
        fill="none"
        stroke="#2563EB"
        strokeWidth="0.5"
      />
      <rect
        x="180"
        y="112"
        width="1080"
        height="676"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="0.5"
      />
      <circle
        cx="720"
        cy="450"
        r="300"
        fill="none"
        stroke="#2563EB"
        strokeWidth="0.5"
      />
      <circle
        cx="720"
        cy="450"
        r="200"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function CoreBankingSection() {
  return (
    <SectionWrapper
      id="core-banking"
      className="relative overflow-hidden bg-[#0A0E1A] py-20 md:py-28"
    >
      <GeometricBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top row: heading left + AML dashboard right */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: heading + CTAs */}
          <div className="flex flex-col items-start gap-6">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              A complete cloud-based core banking.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-white/60 md:text-lg">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="filled"
                className="min-w-[160px]"
                data-ocid="corebanking.request_demo_button"
              >
                Request Demo
              </Button>
              <a
                href="#solutions"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.15em] text-[#06B6D4] transition-smooth hover:text-[#22d3ee] hover:underline"
                data-ocid="corebanking.learn_more_link"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: AML Dashboard */}
          <div className="relative lg:-mt-4">
            <DashboardMockup
              title="AML Dashboard"
              className="w-full max-w-lg lg:ml-auto"
              data-ocid="corebanking.aml_dashboard"
            />
          </div>
        </div>

        {/* Bottom row: KYC dashboard left + checklist right */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Left: KYC Dashboard (overlapping / offset) */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="w-full max-w-lg lg:-ml-8 lg:mt-8">
              <DashboardMockup
                title="KYC Dashboard"
                className="w-full"
                data-ocid="corebanking.kyc_dashboard"
              />
            </div>
          </div>

          {/* Right: feature checklist */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
              Run a more efficient, flexible, and digitally connected
              corebanking system
            </h3>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
              What you will get:
            </p>

            <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {checklistItems.map((item, idx) => (
                <div
                  key={`checklist-${item}`}
                  className="flex items-start gap-3"
                  data-ocid={`corebanking.checklist.item.${idx + 1}`}
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#06B6D4]/10">
                    <Check
                      className="h-3.5 w-3.5 text-[#06B6D4]"
                      strokeWidth={3}
                    />
                  </span>
                  <span className="text-sm leading-relaxed text-white/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
