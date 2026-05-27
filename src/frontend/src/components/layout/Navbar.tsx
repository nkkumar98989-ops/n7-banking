import { Button } from "@/components/ui/N7Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import * as React from "react";

const navLinks = [
  { label: "SOLUTIONS", href: "#solutions" },
  { label: "RESOURCES", href: "#resources" },
  { label: "ABOUT US", href: "#footer" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0A0E1A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-white"
          data-ocid="navbar.logo_link"
        >
          N7
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-medium uppercase tracking-[0.15em] text-white/70 transition-colors duration-200 hover:text-white"
              data-ocid={`navbar.link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            variant="outlined-white"
            className="px-5 py-2.5 text-[10px]"
            data-ocid="navbar.request_demo_button"
          >
            REQUEST DEMO
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white/70 transition-colors hover:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          data-ocid="navbar.mobile_menu_button"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-white/10 bg-[#0A0E1A]/95 px-4 py-4 backdrop-blur-md">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
                data-ocid={`navbar.mobile_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="outlined-white"
              className="mt-2 w-full text-[10px]"
              data-ocid="navbar.mobile_request_demo_button"
            >
              REQUEST DEMO
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
