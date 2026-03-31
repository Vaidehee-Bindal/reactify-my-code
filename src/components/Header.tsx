import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import logoImg from "@/assets/paladin-logo.png";

const navItems = [
  {
    label: "Security Services",
    children: [
      { label: "Guard Services", to: "/security-services/security-guards" },
      { label: "Mobile Patrol", to: "/security-services/mobile-patrols" },
      { label: "Loss Prevention", to: "/security-services/loss-prevention" },
      { label: "Event Security Services", to: "/security-services/event-security-services" },
      { label: "Integrated Guarding", to: "/security-services/integrated-guarding" },
      { label: "Operations Centres", to: "/security-services/operations-centres" },
    ],
  },
  {
    label: "Industries",
    children: [
      { label: "Healthcare", to: "/industries-served/healthcare" },
      { label: "Office & Commercial", to: "/industries-served/office-security-service" },
      { label: "Government & Infrastructure", to: "/industries-served/critical-infrastructure-security" },
      { label: "Aviation", to: "/industries-served/aviation" },
      { label: "Industrial Security", to: "/industries-served/oil-gas-industry" },
      { label: "Retail & Shopping Malls", to: "/industries-served/shopping-malls-retail" },
      { label: "Warehouse & Distribution", to: "/industries-served/warehouse-security-systems" },
      { label: "Post Secondary", to: "/industries-served/university-post-secondary-security" },
    ],
  },
  { label: "Locations", to: "/find-a-location" },
  {
    label: "About Us",
    children: [
      { label: "Why Paladin", to: "/about-us/why-paladin" },
      { label: "History", to: "/history" },
      { label: "Leadership & People", to: "/about-us/leadership" },
      { label: "Our CARE Culture", to: "/about-us/our-culture" },
      { label: "Paladin CARES", to: "/about-us/paladin-cares" },
      { label: "Our Companies", to: "/about-us/our-companies" },
      { label: "Careers", to: "/careers" },
    ],
  },
  { label: "Blog", to: "/blog" },
  {
    label: "Resources",
    children: [
      { label: "Media Relations", to: "/media-relations" },
      { label: "Preparing an RFP?", to: "/knowledge-centre-main/rfp" },
    ],
  },
  { label: "Training Services", to: "/security-services/training-services" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      {/* Top bar */}
      <div className="section-container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Paladin Security" className="h-10 w-10 object-contain" />
          <span className="font-heading text-lg font-bold text-primary-foreground tracking-wide">
            Paladin Security
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/careers" className="text-sm font-semibold text-primary-foreground hover:text-secondary transition-colors">
            Careers
          </Link>
          <a href="https://communications.paladinsecurity.com/paladin" target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-primary-foreground hover:text-secondary transition-colors">
            Employee Login
          </a>
          <Search className="h-4 w-4 text-primary-foreground cursor-pointer hover:text-secondary transition-colors" />
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary-foreground">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block bg-navy-dark">
        <div className="section-container">
          <ul className="flex items-center gap-0">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item relative group">
                {item.to ? (
                  <Link to={item.to} className="flex items-center gap-1 px-4 py-3 text-sm font-heading font-semibold text-primary-foreground uppercase tracking-wider hover:text-secondary transition-colors">
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
                        <Link to={child.to} className="block px-5 py-2.5 text-sm text-primary-foreground hover:bg-navy-light hover:text-secondary transition-colors">
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
        <nav className="md:hidden bg-navy-dark max-h-[80vh] overflow-y-auto">
          <ul className="py-2">
            {navItems.map((item) => (
              <MobileNavItem key={item.label} item={item} onClose={() => setMobileOpen(false)} />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

const MobileNavItem = ({ item, onClose }: { item: typeof navItems[0]; onClose: () => void }) => {
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
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
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
