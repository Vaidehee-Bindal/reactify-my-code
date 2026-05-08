import { Link } from "react-router-dom";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showCta?: boolean;
}

const HeroBanner = ({ title, subtitle, backgroundImage, showCta = false }: HeroBannerProps) => {
  return (
    <section className="relative min-h-[520px] lg:min-h-[640px] flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative section-container py-24 lg:py-32">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-[64px] font-bold text-primary-foreground uppercase leading-[1.1] max-w-4xl animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-8 text-lg md:text-xl lg:text-[20px] leading-relaxed text-primary-foreground/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
        {showCta && (
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/find-a-location" className="px-8 py-3.5 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-sm border-2 border-secondary hover:bg-gold-dark hover:border-gold-dark transition-colors">
              Get a Quote
            </Link>
            <a href="https://joblinkapply.com/Joblink/5648/Search/SearchWithFilters" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-sm border-2 border-secondary hover:bg-gold-dark hover:border-gold-dark transition-colors">
              Apply Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
