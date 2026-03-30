import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

const footerLinks = [
  { label: "About Us", to: "/about-us/why-paladin" },
  { label: "Careers", to: "/careers" },
  { label: "Find a Location", to: "/find-a-location" },
  { label: "Blog", to: "/blog" },
  { label: "Media Relations", to: "/media-relations" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/paladinsecurity/" },
  { icon: Facebook, href: "https://www.facebook.com/paladinsecurity/" },
  { icon: Youtube, href: "https://www.youtube.com/user/PaladinSecurityTV" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/paladinsecuritygroup-ltd" },
  { icon: Twitter, href: "https://twitter.com/PaladinSecurity/" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-8">
        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-6">
          {socialLinks.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Footer nav */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          {footerLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-sm hover:text-secondary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-center text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} Paladin Security
        </p>
      </div>
    </footer>
  );
};

export default Footer;
