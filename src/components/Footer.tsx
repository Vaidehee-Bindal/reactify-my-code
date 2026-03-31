import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-secondary">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About ATS</Link></li>
              <li><Link to="/about/team" className="hover:text-secondary transition-colors">Our Team</Link></li>
              <li><Link to="/about/expansion" className="hover:text-secondary transition-colors">Expansion Plan</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-secondary">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/rakshak" className="hover:text-secondary transition-colors">Rakshak24x7</Link></li>
              <li><Link to="/services/atsintel" className="hover:text-secondary transition-colors">ATSIntel</Link></li>
              <li><Link to="/how-it-works/rakshak" className="hover:text-secondary transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-secondary">Trust & Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/trust/why-trust-us" className="hover:text-secondary transition-colors">Why Trust Us</Link></li>
              <li><Link to="/trust/data-privacy" className="hover:text-secondary transition-colors">Data Privacy & Retention</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-secondary">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span>ATS HQ, Malviya Nagar, Jaipur, Rajasthan 302017</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:info@ats-security.in" className="hover:text-secondary transition-colors">info@ats-security.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-light mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} ATS (Aanjaneya Taskforce Services). All rights reserved.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-navy-light flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;