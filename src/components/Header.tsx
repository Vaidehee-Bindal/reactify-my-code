import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Globe, Smartphone, LogIn } from "lucide-react";
import logoImg from "@/assets/ats-logo.png";

const navItems = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    children: [
      { label: "Rakshak24x7 Overview", to: "/services/rakshak" },
      { label: "Rakshak Features", to: "/services/rakshak-features" },
      { label: "Social Problems Solved", to: "/services/social-problems" },
      { label: "ATSIntel Overview", to: "/services/atsintel" },
      { label: "ATSIntel Features", to: "/services/atsintel-features" },
      { label: "Who Can Use ATSIntel", to: "/services/atsintel-users" },
    ],
  },
  {
    label: "How It Works",
    children: [
      { label: "Rakshak Workflow", to: "/how-it-works/rakshak" },
      { label: "ATSIntel Workflow", to: "/how-it-works/atsintel" },
    ],
  },
  {
    label: "Trust & Transparency",
    children: [
      { label: "Why Trust Us", to: "/trust/why-trust-us" },
      { label: "Data Privacy & Retention", to: "/trust/data-privacy" },
      { label: "Service Directory", to: "/trust/service-directory" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About ATS", to: "/about" },
      { label: "Our Team", to: "/about/team" },
      { label: "Expansion Plan", to: "/about/expansion" },
    ],
  },
  { label: "Locations", to: "/locations" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "HI">("EN");

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      {/* Top bar */}
      <div className="section-container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="ATS - Aanjaneya Taskforce Services" className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-primary-foreground tracking-wide leading-tight">
              ATS
            </span>
            <span className="text-[10px] text-primary-foreground/70 tracking-widest uppercase">
              Aanjaneya Taskforce
            </span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground/80 hover:text-secondary transition-colors border border-primary-foreground/20 rounded-full px-3 py-1.5"
          >
            <Globe className="h-3.5 w-3.5" />
            {lang === "EN" ? "EN | हिंदी" : "हिंदी | EN"}
          </button>
          <a
            href="#download"
            className="flex items-center gap-1.5 px-4 py-1.5 bg-secondary text-secondary-foreground font-heading font-bold text-xs uppercase tracking-wider rounded-full hover:bg-gold-dark transition-colors"
          >
            <Smartphone className="h-3.5 w-3.5" /> Download App
          </a>
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 px-4 py-1.5 bg-accent text-accent-foreground font-heading font-bold text-xs uppercase tracking-wider rounded-full hover:bg-emerald-dark transition-colors"
          >
            <LogIn className="h-3.5 w-3.5" /> Dashboard
          </Link>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-primary-foreground">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:block bg-navy-dark">
        <div className="section-container">
          <ul className="flex items-center gap-0">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item relative group">
                {item.to ? (
                  <Link
                    to={item.to}
                    className="flex items-center gap-1 px-4 py-3 text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="flex items-center gap-1 px-4 py-3 text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider hover:text-secondary transition-colors cursor-pointer">
                    {item.label}
                    <ChevronDown className="h-3 w-3" />
                  </span>
                )}
                {item.children && (
                  <ul className="nav-dropdown shadow-xl z-50">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link
                          to={child.to}
                          className="block px-5 py-2.5 text-sm text-primary-foreground hover:bg-navy-light hover:text-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-navy-dark max-h-[80vh] overflow-y-auto">
          <ul className="py-2">
            {navItems.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
            ))}
            <li className="border-t border-navy-light mt-2 pt-2 px-6 flex flex-col gap-2">
              <a href="#download" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-2 text-sm font-semibold text-secondary">
                <Smartphone className="h-4 w-4" /> Download App
              </a>
              <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-2 text-sm font-semibold text-accent">
                <LogIn className="h-4 w-4" /> Dashboard Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

const MobileNavItem = ({ item, onClose }: { item: (typeof navItems)[0]; onClose: () => void }) => {
  const [open, setOpen] = useState(false);

  if (item.to) {
    return (
      <li>
        <Link to={item.to} onClick={onClose} className="block px-6 py-3 text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:text-secondary">
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full px-6 py-3 text-sm font-semibold text-primary-foreground uppercase tracking-wider hover:text-secondary">
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && item.children && (
        <ul className="bg-navy pl-4">
          {item.children.map((child) => (
            <li key={child.to}>
              <Link to={child.to} onClick={onClose} className="block px-6 py-2 text-sm text-primary-foreground hover:text-secondary">
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Header;