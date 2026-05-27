import { Button } from "@/components/ui/N7Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import type * as React from "react";

/* ------------------------------------------------------------------ */
/*  Geometric wireframe SVG icons — one per card                       */
/* ------------------------------------------------------------------ */

function CoreBankingIcon() {
  return (
    <svg
      aria-hidden="true"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="4"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <rect
        x="14"
        y="14"
        width="20"
        height="20"
        rx="2"
        stroke="#06B6D4"
        strokeWidth="1"
      />
      <circle cx="24" cy="24" r="4" stroke="#2563EB" strokeWidth="1" />
      <line
        x1="24"
        y1="8"
        x2="24"
        y2="14"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <line
        x1="24"
        y1="34"
        x2="24"
        y2="40"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <line
        x1="8"
        y1="24"
        x2="14"
        y2="24"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <line
        x1="34"
        y1="24"
        x2="40"
        y2="24"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function DigitalBankingIcon() {
  return (
    <svg
      aria-hidden="true"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="6"
        width="28"
        height="36"
        rx="3"
        stroke="#2563EB"
        strokeWidth="1.5"
      />
      <line x1="16" y1="14" x2="32" y2="14" stroke="#06B6D4" strokeWidth="1" />
      <line x1="16" y1="20" x2="28" y2="20" stroke="#06B6D4" strokeWidth="1" />
      <line x1="16" y1="26" x2="30" y2="26" stroke="#06B6D4" strokeWidth="1" />
      <circle cx="24" cy="36" r="2" stroke="#2563EB" strokeWidth="1" />
      <rect x="20" y="4" width="8" height="2" rx="1" fill="#2563EB" />
    </svg>
  );
}

function OpenBankingIcon() {
  return (
    <svg
      aria-hidden="true"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="24" r="8" stroke="#2563EB" strokeWidth="1.5" />
      <circle cx="32" cy="24" r="8" stroke="#06B6D4" strokeWidth="1.5" />
      <line x1="22" y1="20" x2="26" y2="20" stroke="#2563EB" strokeWidth="1" />
      <line x1="22" y1="24" x2="26" y2="24" stroke="#2563EB" strokeWidth="1" />
      <line x1="22" y1="28" x2="26" y2="28" stroke="#2563EB" strokeWidth="1" />
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="4"
        stroke="#2563EB"
        strokeWidth="0.5"
        strokeDasharray="3 3"
        opacity="0.4"
      />
    </svg>
  );
}

function LoanOriginationIcon() {
  return (
    <svg
      aria-hidden="true"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="12"
        width="36"
        height="24"
        rx="3"
        stroke="#2563EB"
        strokeWidth="1.5"
      />
      <line x1="12" y1="20" x2="20" y2="20" stroke="#06B6D4" strokeWidth="1" />
      <line x1="12" y1="24" x2="24" y2="24" stroke="#06B6D4" strokeWidth="1" />
      <line x1="12" y1="28" x2="18" y2="28" stroke="#06B6D4" strokeWidth="1" />
      <circle cx="34" cy="24" r="5" stroke="#2563EB" strokeWidth="1" />
      <path
        d="M32 24L34 26L37 22"
        stroke="#06B6D4"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="24,4 26,8 22,8" fill="#2563EB" />
    </svg>
  );
}

function LoanManagementIcon() {
  return (
    <svg
      aria-hidden="true"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="4"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path
        d="M14 34L20 26L26 30L34 18"
        stroke="#06B6D4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="18" r="2" stroke="#2563EB" strokeWidth="1" />
      <line
        x1="14"
        y1="18"
        x2="18"
        y2="18"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <line
        x1="14"
        y1="22"
        x2="16"
        y2="22"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface SolutionCardData {
  id: string;
  title: string;
  description: string;
  badge?: string;
  icon: React.ReactNode;
}

const solutions: SolutionCardData[] = [
  {
    id: "core-banking",
    title: "Core Banking CB7",
    description:
      "Comprehensive core banking management platform designed for modern financial institutions.",
    icon: <CoreBankingIcon />,
  },
  {
    id: "digital-banking",
    title: "Digital Banking N7",
    description:
      "Complete digital banking suite delivering seamless customer experiences across all channels.",
    icon: <DigitalBankingIcon />,
  },
  {
    id: "open-banking",
    title: "Open Banking",
    description:
      "API-driven open banking infrastructure enabling secure data sharing and third-party integrations.",
    icon: <OpenBankingIcon />,
  },
  {
    id: "loan-origination",
    title: "Loan Origination System",
    description:
      "End-to-end loan processing platform streamlining applications from intake to disbursement.",
    badge: "NBFC",
    icon: <LoanOriginationIcon />,
  },
  {
    id: "loan-management",
    title: "Loan Management System",
    description:
      "Automated loan lifecycle management from origination through servicing and collections.",
    badge: "NBFC",
    icon: <LoanManagementIcon />,
  },
];

/* ------------------------------------------------------------------ */
/*  SolutionCard                                                       */
/* ------------------------------------------------------------------ */

function SolutionCard({
  card,
  index,
}: {
  card: SolutionCardData;
  index: number;
}) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      data-ocid={`solutions.card.${index + 1}`}
      className={cn(
        "group relative flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-[#06B6D4]/50 hover:bg-white/[0.06] hover:shadow-[0_8px_32px_rgba(6,182,212,0.12)]",
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="mb-4">{card.icon}</div>

      {/* Badge */}
      {card.badge && (
        <span className="mb-3 inline-flex w-fit items-center rounded-full bg-[#2563EB]/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#2563EB]">
          {card.badge}
        </span>
      )}

      {/* Title */}
      <h3 className="mb-2 font-display text-lg font-bold text-white">
        {card.title}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-1 text-sm leading-relaxed text-white/50">
        {card.description}
      </p>

      {/* CTA Link */}
      <a
        href={`#${card.id}`}
        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#06B6D4] transition-colors duration-200 hover:text-[#06B6D4]/80"
        data-ocid={`solutions.learn_more_link.${index + 1}`}
      >
        Learn More
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SolutionsSection                                                   */
/* ------------------------------------------------------------------ */

export function SolutionsSection() {
  return (
    <SectionWrapper
      id="solutions"
      className="bg-[#0A0E1A] py-20 sm:py-24 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column — heading + CTA */}
        <div className="flex flex-col justify-center lg:col-span-4">
          <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
            All of our solutions are tailor-made to your needs
          </h2>
          <div className="mt-8">
            <Button
              variant="outlined-white"
              data-ocid="solutions.request_demo_button"
            >
              Request Demo
            </Button>
          </div>
        </div>

        {/* Right column — 2-col card grid */}
        <div className="lg:col-span-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {solutions.map((card, index) => (
              <SolutionCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
