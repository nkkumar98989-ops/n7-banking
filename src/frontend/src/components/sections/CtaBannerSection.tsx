import { Button } from "@/components/ui/N7Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CtaBannerSection() {
  return (
    <SectionWrapper
      id="cta-banner"
      className="relative overflow-hidden bg-[#0A0E1A] py-20 sm:py-28"
    >
      {/* Decorative CB7 watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
        <span
          className="font-display text-[12rem] font-bold uppercase tracking-tight text-[#2563EB]/[0.06] sm:text-[18rem] lg:text-[24rem]"
          aria-hidden="true"
        >
          CB7
        </span>
      </div>

      {/* Foreground panel */}
      <div className="relative mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 backdrop-blur-sm sm:px-12 sm:py-16 lg:px-16 lg:py-20">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Left column */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations
            </p>
          </div>

          {/* Right column — buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <Button
              variant="outlined-white"
              className="min-w-[180px]"
              data-ocid="cta.contact_button"
            >
              Contact Us
            </Button>
            <Button
              variant="filled"
              className="min-w-[180px]"
              data-ocid="cta.demo_button"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
