import { Link } from "react-router-dom";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string; external?: boolean };
}

const HeroBanner = ({ title, subtitle, backgroundImage, primaryCta, secondaryCta }: HeroBannerProps) => {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative section-container py-20 lg:py-28">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground uppercase leading-tight max-w-4xl animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {primaryCta && (
              <Link to={primaryCta.to} className="px-8 py-3.5 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-dark transition-colors shadow-lg">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              secondaryCta.external ? (
                <a href={secondaryCta.to} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-accent text-accent-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-emerald-dark transition-colors shadow-lg">
                  {secondaryCta.label}
                </a>
              ) : (
                <Link to={secondaryCta.to} className="px-8 py-3.5 border-2 border-primary-foreground text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-primary-foreground/10 transition-colors">
                  {secondaryCta.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;