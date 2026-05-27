import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const offices = [
  {
    city: "London",
    address:
      "Linkitia Infosystems Ltd CB7, 26 Main Road Sundridge, TN14 6EP, England UK",
  },
  {
    city: "Dubai",
    address:
      "Linkitia Infosystems Ltd CB7, Jumeirah Business Center, Jumeirah Lakes Towers, Dubai UAE",
  },
  {
    city: "India",
    address:
      "Linkitia Infosystems Ltd CB7, Nirmal Anand Nagar, Suncity Road, Pune Maharashtra 411041 India",
  },
];

const navColumns = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    title: "N7 Banking",
    links: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center",
    ],
  },
  {
    title: "Our Socials",
    links: ["LinkedIn", "X (Twitter)"],
  },
];

export function FooterSection({ id }: { id?: string }) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <footer
      id={id}
      ref={ref}
      data-ocid="footer.section"
      className="w-full bg-[#0A0E1A] border-t border-white/10"
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 transition-all duration-700 ${
          isIntersecting
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        {/* Top area: Logo + Offices */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
          {/* Large N7 Logo */}
          <div className="shrink-0">
            <span className="text-7xl sm:text-8xl lg:text-9xl font-bold font-display tracking-tight bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent select-none">
              N7
            </span>
          </div>

          {/* Office Addresses */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 lg:max-w-3xl">
            {offices.map((office) => (
              <div key={office.city} className="flex flex-col gap-2">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                  {office.city}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {navColumns.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      data-ocid={`footer.link.${column.title.toLowerCase().replace(/\s+/g, "_")}`}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <p className="text-xs text-white/40 text-center lg:text-left leading-relaxed">
            Copyright 2023 Linkitia Infosystems Limited — CB7 and N7 are
            Commercial Brand — Registered under the Companies Act 2006 in
            England and Wales | Number of Incorporation 10109610
          </p>
        </div>
      </div>
    </footer>
  );
}
