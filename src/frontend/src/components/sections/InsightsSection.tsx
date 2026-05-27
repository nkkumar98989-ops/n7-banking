import { Button } from "@/components/ui/N7Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  label: string;
  title: string;
  author: string;
  date: string;
  featured?: boolean;
  index: number;
}

function ArticleCard({
  label,
  title,
  author,
  date,
  featured = false,
  index,
}: ArticleCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563EB]/10 ${
        featured ? "" : "flex flex-col"
      }`}
      data-ocid={`insights.item.${index}`}
    >
      {/* Image placeholder */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#1a1f35] to-[#0d1221] ${
          featured ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/80 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col p-5 ${featured ? "sm:p-6" : ""}`}>
        <h3
          className={`font-display font-bold leading-snug text-white group-hover:text-[#2563EB] transition-colors duration-200 ${
            featured ? "text-lg sm:text-xl" : "text-sm sm:text-base"
          }`}
        >
          {title}
        </h3>
        <p className="mt-2 text-xs text-white/50">
          {author} <span className="mx-1">·</span> {date}
        </p>
        <div className="mt-4">
          <Button
            variant="outlined-white"
            className="text-[10px] px-4 py-2"
            data-ocid={`insights.read_more_button.${index}`}
          >
            Read More
          </Button>
        </div>
      </div>
    </article>
  );
}

export function InsightsSection() {
  return (
    <SectionWrapper id="insights" className="bg-[#0A0E1A] py-20 sm:py-28">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col justify-start lg:w-1/3 lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <div className="mt-8">
            <Button
              variant="outlined-white"
              data-ocid="insights.section_button"
            >
              Insights
            </Button>
          </div>
        </div>

        {/* Right area — article cards */}
        <div className="flex flex-col gap-6 lg:w-2/3">
          {/* Featured article */}
          <ArticleCard
            label="Getting Started"
            title="How to transition from a traditional to a digital bank"
            author="David Groth"
            date="17/08/24"
            featured
            index={1}
          />

          {/* Two smaller articles */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ArticleCard
              label="Getting Started"
              title="The future of open banking APIs"
              author="Sarah Chen"
              date="12/08/24"
              index={2}
            />
            <ArticleCard
              label="Getting Started"
              title="Building secure payment infrastructure"
              author="Michael Torres"
              date="05/08/24"
              index={3}
            />
          </div>

          {/* Read all link */}
          <button
            type="button"
            className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#06B6D4] transition-colors hover:text-[#06B6D4]/80"
            data-ocid="insights.read_all_link"
          >
            Read All Insights
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
