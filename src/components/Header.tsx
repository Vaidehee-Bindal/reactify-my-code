import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Bell,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import logoImg from "@/assets/ats-logo.png";
import { cn } from "@/lib/utils";

interface NavChild {
  label: string;
  to: string;
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

const socialLinks = [
  { Icon: Twitter, href: "#", label: "Twitter", color: "text-foreground" },
  { Icon: Facebook, href: "#", label: "Facebook", color: "text-[#1877F2]" },
  { Icon: Linkedin, href: "#", label: "LinkedIn", color: "text-[#0A66C2]" },
  { Icon: Youtube, href: "#", label: "YouTube", color: "text-[#FF0000]" },
  { Icon: Instagram, href: "#", label: "Instagram", color: "text-[#E4405F]" },
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
          "flex items-center gap-1 h-[52px] px-5 text-[15px] font-body font-semibold transition-colors duration-200",
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
                "block px-6 py-2.5 text-sm font-body font-medium transition-colors duration-150",
                location.pathname === child.to
                  ? "text-secondary bg-navy-light"
                  : "text-primary-foreground hover:bg-navy-light hover:text-secondary"
              )}
            >
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
                  "block px-6 py-2 text-sm",
                  location.pathname === child.to
                    ? "text-secondary"
                    : "text-primary-foreground hover:text-secondary"
                )}
              >
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
  const [langOpen, setLangOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Apply font scale
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
    return () => {
      document.documentElement.style.fontSize = "";
    };
  }, [fontScale]);

  // Apply high contrast
  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [highContrast]);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      {/* Utility bar */}
      <div className="bg-navy-dark border-b border-navy-light/40">
        <div className="section-container flex items-center justify-between py-1.5 px-4 lg:px-8 text-[13px]">
          <div className="flex items-center gap-1 text-primary-foreground">
            <a
              href="#"
              className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-sm font-semibold hover:bg-gold-dark transition-colors"
            >
              Feedback
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3 text-primary-foreground">
            {/* Font size toggles */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setFontScale((s) => Math.max(0.85, s - 0.1))}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-navy-light transition-colors"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => setFontScale(1)}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-navy-light transition-colors"
                aria-label="Reset font size"
              >
                A
              </button>
              <button
                onClick={() => setFontScale((s) => Math.min(1.3, s + 0.1))}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-navy-light transition-colors"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1 hover:underline"
              >
                {lang === "EN" ? "English" : "हिंदी"}
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", langOpen && "rotate-180")} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-primary border border-navy-light rounded-sm shadow-lg min-w-[120px] z-50">
                  <button
                    onClick={() => {
                      setLang("EN");
                      setLangOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-navy-light"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLang("HI");
                      setLangOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-navy-light"
                  >
                    हिंदी
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main bar: logo, socials, search, CTA */}
      <div className="bg-primary">
        <div className="section-container flex items-center justify-between gap-4 py-3 px-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logoImg} alt="ATS Logo" className="h-14 w-14 object-contain" />
            <div className="leading-tight">
              <div className="font-heading text-lg md:text-xl font-bold text-primary-foreground tracking-wide">
                Aanjaneya Taskforce Services
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/70">
                Private Security & Intelligence
              </div>
            </div>
          </Link>

          {/* Social icons */}
          <div className="hidden lg:flex items-center gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-primary-foreground hover:text-secondary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-sm relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full h-11 pl-4 pr-11 rounded-full border border-navy-light bg-navy-dark text-sm text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center text-secondary hover:bg-navy-light rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Download App CTA */}
          <button className="hidden md:flex items-center gap-2 h-11 px-5 rounded-md bg-secondary text-secondary-foreground text-sm font-bold hover:bg-gold-dark transition-colors shrink-0">
            <Bell className="h-4 w-4" />
            Download App
          </button>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary-foreground">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block bg-navy-dark border-t border-navy-light/40">
        <div className="section-container flex items-center justify-center px-4 lg:px-8">
          <ul className="flex items-center justify-center gap-2">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <li key={item.label} className="flex items-center">
                  <Link
                    to={item.to!}
                    className={cn(
                      "flex items-center h-[52px] px-5 text-[15px] font-body font-semibold transition-colors duration-200",
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
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary max-h-[80vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <ul className="py-2">
            {navItems.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
            ))}
            <li className="px-6 py-3 flex items-center justify-center gap-4">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <a key={label} href={href} aria-label={label} className={color}>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </li>
            <li className="px-6 py-3">
              <button className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground text-sm font-bold hover:bg-gold-dark transition-colors">
                <Bell className="h-4 w-4" />
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
