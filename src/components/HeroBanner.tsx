import { Link } from "react-router-dom";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showCta?: boolean;
}

const HeroBanner = ({ title, subtitle, backgroundImage, showCta = false }: HeroBannerProps) => {
  return (
    <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative section-container py-16 lg:py-24">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground uppercase leading-tight max-w-3xl animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
        {showCta && (
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/find-a-location" className="px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors">
              Get a Quote
            </Link>
            <a href="https://joblinkapply.com/Joblink/5648/Search/SearchWithFilters" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors">
              Apply Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
