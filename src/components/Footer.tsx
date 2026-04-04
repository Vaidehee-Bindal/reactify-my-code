import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Top CTA Strip */}
      <div className="bg-primary">
        <div className="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground font-heading font-semibold text-sm md:text-base text-center sm:text-left">
            Trusted Security, Intelligence &amp; Emergency Response Solutions Across India
          </p>
          <button className="border-2 border-primary-foreground text-primary-foreground px-6 py-2.5 font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-primary-foreground hover:text-primary transition-colors whitespace-nowrap">
            Download App
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[hsl(0,0%,15%)] text-[hsl(0,0%,80%)]">
        <div className="section-container py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Column 1 */}
            <div>
              <h4 className="font-heading font-bold text-[hsl(0,0%,95%)] uppercase text-sm tracking-wider mb-5">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about/company" className="hover:text-secondary transition-colors">About ATS</Link></li>
                <li><Link to="/about/mission" className="hover:text-secondary transition-colors">Mission &amp; Vision</Link></li>
                <li><Link to="/about/founding" className="hover:text-secondary transition-colors">Founding Story</Link></li>
                <li><Link to="/about/trust" className="hover:text-secondary transition-colors">Why Trust Us</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-heading font-bold text-[hsl(0,0%,95%)] uppercase text-sm tracking-wider mb-5">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services/rakshak24x7" className="hover:text-secondary transition-colors">Rakshak24x7</Link></li>
                <li><Link to="/services/atsintel" className="hover:text-secondary transition-colors">ATSIntel</Link></li>
                <li><Link to="/services/atsintel#how-it-works" className="hover:text-secondary transition-colors">How It Works</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-heading font-bold text-[hsl(0,0%,95%)] uppercase text-sm tracking-wider mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/careers" className="hover:text-secondary transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
                <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
                <li><Link to="/location" className="hover:text-secondary transition-colors">Location</Link></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="font-heading font-bold text-[hsl(0,0%,95%)] uppercase text-sm tracking-wider mb-5">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>Email: <a href="mailto:support@atsindia.in" className="hover:text-secondary transition-colors">support@atsindia.in</a></li>
                <li>Phone: <a href="tel:+91XXXXXXXXXX" className="hover:text-secondary transition-colors">+91 XXXXX XXXXX</a></li>
                <li>Location: Jaipur, Rajasthan, India</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[hsl(0,0%,25%)]">
          <div className="section-container py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[hsl(0,0%,55%)]">
            <p>© {new Date().getFullYear()} Aanjaneya Taskforce Services (ATS). All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-secondary transition-colors">Terms &amp; Conditions</Link>
              <div className="flex items-center gap-3 ml-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Linkedin className="h-4 w-4" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Instagram className="h-4 w-4" /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Facebook className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
