import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import logoImg from "@/assets/ats-logo.png";
import { cn } from "@/lib/utils";

interface NavChild {
  label: string;
  to: string;
  icon?: React.ReactNode;
}

interface NavItem {
  label: string;
  to?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    children: [
      { label: "Rakshak24x7", to: "/services/rakshak24x7" },
      { label: "ATSIntel", to: "/services/atsintel" },
      { label: "How It Works", to: "/how-it-works" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Company", to: "/about/company" },
      { label: "Mission & Vision", to: "/about/mission" },
      { label: "Founding Story", to: "/about/founding" },
      { label: "Expansion Plan", to: "/about/expansion" },
      { label: "Why Trust Us", to: "/about/trust" },
      { label: "Team", to: "/about/team" },
    ],
  },
  { label: "Location", to: "/location" },
  { label: "Contact Us", to: "/contact" },
  { label: "FAQ", to: "/faq" },
];

const DesktopDropdown = ({ item }: { item: NavItem }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const isActive = item.children?.some((c) => location.pathname.startsWith(c.to));

  const enter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <li className="relative flex items-center" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className={cn(
          "flex items-center gap-1.5 h-[56px] px-5 text-[15px] font-body font-medium tracking-wide transition-colors duration-200",
          isActive ? "text-secondary" : "text-primary-foreground hover:text-secondary"
        )}
      >
        {item.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")} />
      </button>
      <ul
        className={cn(
          "absolute top-full left-0 min-w-[230px] rounded-sm bg-primary shadow-xl py-2 transition-all duration-200 z-50 border border-navy-light",
          open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
        )}
      >
        {item.children!.map((child) => (
          <li key={child.to}>
            <Link
              to={child.to}
              className={cn(
                "flex items-center gap-2.5 px-6 py-2.5 text-sm font-body font-medium transition-colors duration-150",
                location.pathname === child.to
                  ? "text-secondary bg-navy-light"
                  : "text-primary-foreground hover:bg-navy-light hover:text-secondary"
              )}
            >
              {child.icon}
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const MobileNavItem = ({ item, onClose }: { item: NavItem; onClose: () => void }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  if (item.to) {
    return (
      <li>
        <Link
          to={item.to}
          onClick={onClose}
          className={cn(
            "block px-6 py-3 text-sm font-semibold uppercase tracking-wider",
            location.pathname === item.to ? "text-secondary" : "text-primary-foreground hover:text-secondary"
          )}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-3 text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:text-secondary"
      >
        {item.label}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && item.children && (
        <ul className="bg-navy pl-4">
          {item.children.map((child) => (
            <li key={child.to}>
              <Link
                to={child.to}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-2 px-6 py-2 text-sm",
                  location.pathname === child.to
                    ? "text-secondary"
                    : "text-primary-foreground hover:text-secondary"
                )}
              >
                {child.icon}
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "HI">("EN");
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md backdrop-blur supports-[backdrop-filter]:bg-primary/95 transition-shadow duration-200">
      {/* Top bar */}
      <div className="section-container flex items-center justify-between py-2 px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="ATS Logo" className="h-12 w-12 rounded-sm object-contain" />
          <span className="font-heading text-base md:text-lg font-bold text-primary-foreground tracking-wide">
            Aanjaneya Taskforce Services
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-sm border-2 border-primary-foreground/30 text-xs font-semibold text-primary-foreground hover:bg-navy-light hover:border-primary-foreground/60 transition-all duration-200"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "EN" ? "हिंदी" : "English"}
          </button>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary-foreground">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block bg-navy-dark border-t border-navy-light/40">
        <div className="section-container flex items-center justify-between h-[56px] px-6 lg:px-8">
          <ul className="flex items-center justify-center flex-1 gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <li key={item.label} className="flex items-center">
                  <Link
                    to={item.to!}
                    className={cn(
                      "flex items-center h-[56px] px-5 text-[15px] font-body font-medium tracking-wide transition-colors duration-200",
                      location.pathname === item.to
                        ? "text-secondary"
                        : "text-primary-foreground hover:text-secondary"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Download App CTA */}
          <button
            className="ml-6 px-7 py-2.5 rounded-sm border-2 border-secondary bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider hover:bg-gold-dark hover:border-gold-dark transition-all duration-200"
          >
            Download App
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-navy-dark max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <ul className="py-2">
            {navItems.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
            ))}
            <li className="px-6 py-3">
              <button
                className="w-full px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wider hover:bg-gold-dark transition-colors"
              >
                Download App
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
