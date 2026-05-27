import { Button } from "@/components/ui/N7Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    label: "Getting Started",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    description:
      "We helped Zoomerr streamline their financial operations by implementing our core banking solution, resulting in a 40% reduction in processing time and improved customer satisfaction scores.",
  },
  {
    id: 2,
    label: "Case Study",
    title: "Transforming legacy systems for modern banking",
    company: "Finova",
    description:
      "Finova partnered with us to modernize their legacy infrastructure, enabling real-time transactions and seamless digital experiences for their growing customer base.",
  },
  {
    id: 3,
    label: "Success Story",
    title: "Scaling digital payments across borders",
    company: "PayGlobal",
    description:
      "PayGlobal leveraged our open banking APIs to expand into 12 new markets, processing over $2B in cross-border transactions within the first year.",
  },
];

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = caseStudies[activeIndex];

  const goPrev = () => {
    setActiveIndex((i) => (i === 0 ? caseStudies.length - 1 : i - 1));
  };

  const goNext = () => {
    setActiveIndex((i) => (i === caseStudies.length - 1 ? 0 : i + 1));
  };

  return (
    <SectionWrapper id="case-studies" className="bg-[#0A0E1A] py-20 sm:py-28">
      {/* Heading */}
      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        Our Case Studies
      </h2>

      {/* Featured card */}
      <div
        className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-500"
        data-ocid="case_studies.featured_card"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left — image placeholder */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#1a1f35] to-[#0d1221] lg:aspect-auto lg:w-1/2">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl font-bold text-white/5 sm:text-8xl">
                {current.company}
              </span>
            </div>
            <div className="absolute top-4 left-4">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                {current.label}
              </span>
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:w-1/2 lg:p-12">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              {current.title}
            </h3>

            {/* Company logo text */}
            <div className="mt-4">
              <span className="font-display text-2xl font-bold tracking-tight text-[#2563EB]">
                {current.company}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
              {current.description}
            </p>

            <div className="mt-8">
              <Button
                variant="outlined-white"
                data-ocid="case_studies.read_more_button"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination row */}
      <div className="mt-8 flex items-center justify-between">
        {/* Arrow buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-200 hover:border-[#2563EB] hover:bg-[#2563EB]/10 hover:text-[#2563EB]"
            aria-label="Previous case study"
            data-ocid="case_studies.pagination_prev"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-200 hover:border-[#2563EB] hover:bg-[#2563EB]/10 hover:text-[#2563EB]"
            aria-label="Next case study"
            data-ocid="case_studies.pagination_next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {caseStudies.map((cs, i) => (
            <button
              key={`dot-${cs.company}`}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-[#2563EB]"
                  : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to case study ${i + 1}`}
              data-ocid={`case_studies.pagination_dot.${i + 1}`}
            />
          ))}
        </div>

        {/* View all link */}
        <button
          type="button"
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#06B6D4] transition-colors hover:text-[#06B6D4]/80"
          data-ocid="case_studies.view_all_link"
        >
          View All
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </SectionWrapper>
  );
}
