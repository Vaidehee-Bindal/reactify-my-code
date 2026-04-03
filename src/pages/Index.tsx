import { Link } from "react-router-dom";
import { Shield, Car, ShoppingBag, Calendar, Heart, Briefcase, Factory, ShoppingCart, Warehouse, GraduationCap, Plane, Building2, MapPin } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import ServiceCard from "@/components/ServiceCard";
import JaipurMap from "@/components/JaipurMap";
import heroBg from "@/assets/hero-bg.jpg";
import differenceBg from "@/assets/paladin-difference.jpg";

const services = [
  { title: "Security Guards", to: "/security-services/security-guards", icon: <Shield className="h-7 w-7" /> },
  { title: "Mobile Patrol & Emergency Response", to: "/security-services/mobile-patrols", icon: <Car className="h-7 w-7" /> },
  { title: "Loss Prevention", to: "/security-services/loss-prevention", icon: <ShoppingBag className="h-7 w-7" /> },
  { title: "Special Events & Ad-Hoc", to: "/security-services/event-security-services", icon: <Calendar className="h-7 w-7" /> },
];

const industries = [
  { title: "Healthcare Security Services", to: "/industries-served/healthcare", icon: <Heart className="h-6 w-6" /> },
  { title: "Retail & Shopping Mall Security", to: "/industries-served/shopping-malls-retail", icon: <ShoppingCart className="h-6 w-6" /> },
  { title: "College Campus Security", to: "/industries-served/university-post-secondary-security", icon: <GraduationCap className="h-6 w-6" /> },
  { title: "Office Security Service", to: "/industries-served/office-security-service", icon: <Briefcase className="h-6 w-6" /> },
  { title: "Industrial Security Services", to: "/industries-served/oil-gas-industry", icon: <Factory className="h-6 w-6" /> },
  { title: "Critical Infrastructure Security", to: "/industries-served/critical-infrastructure-security", icon: <Building2 className="h-6 w-6" /> },
  { title: "Aviation Security Services", to: "/industries-served/aviation", icon: <Plane className="h-6 w-6" /> },
  { title: "Warehouse & Distribution Security", to: "/industries-served/warehouse-security-systems", icon: <Warehouse className="h-6 w-6" /> },
];

const blogPosts = [
  {
    title: "2026 FIFA World Cup: Multi-City Risk Considerations in a Heightened Geopolitical Climate",
    date: "March 19, 2026",
    excerpt: "The 2026 FIFA World Cup will span multiple major North American cities, including Vancouver, Toronto, Atlanta, Boston, Dallas, Houston, Kansas...",
    to: "/blog",
  },
  {
    title: "Rising Threat Environment Targeting Data Centers and Technology Infrastructure",
    date: "March 17, 2026",
    excerpt: "Data centers and technology infrastructure are no longer viewed solely as back-end corporate assets. Increasingly, they are perceived as symbolic...",
    to: "/blog",
  },
  {
    title: "Insider Threats: The Hidden Risk Within Modern Organizations",
    date: "March 2, 2026",
    excerpt: "Insider threats remain one of the most complex and damaging risks facing modern organizations because they originate from individuals who...",
    to: "/blog",
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <HeroBanner
        title="Security Services That Make the World a Safer & Friendlier Place"
        subtitle="We are defined by our above-and-beyond approach to security. Discover our range of security services, industry-leading training, unparalleled customer success, and the amazing Paladin team that makes it all happen."
        backgroundImage={heroBg}
        showCta
      />

      {/* Paladin Difference */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${differenceBg})` }} />
        <div className="relative section-container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-6">
            The Paladin Difference
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We develop the most responsive security programs by bringing deep expertise, passion for innovation, and a constant drive to improve. Paladin is the ultimate choice when looking for a security partner who goes the extra mile.
          </p>
        </div>
      </section>

      {/* Leading Canada's Security Services */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-4">
              Leading Canada's Security Services
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to offer top-notch security services and products that empower our clients to manage their operations effortlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.to} title={s.title} to={s.to} icon={s.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Security Programs (Industries) */}
      <section className="py-16 bg-primary">
        <div className="section-container">
          <div className="text-center mb-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-4">
              Innovative Security Programs
            </h2>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto mb-10">
              As the largest full-service security company in the country, Paladin provides specialized security services across a wide range of sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <Link key={ind.to} to={ind.to} className="group flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-navy-light transition-colors text-center">
                <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-secondary-foreground">{ind.icon}</span>
                </div>
                <span className="text-sm font-heading font-semibold text-primary-foreground">{ind.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations CTA + Map */}
      <section className="py-16 bg-muted">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-6">
            Security Service Locations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            With offices across Jaipur and Rajasthan, Paladin Security has you covered. Find the location nearest to you.
          </p>
          <Link to="/location" className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors mb-10">
            <MapPin className="h-4 w-4" /> Find a Location
          </Link>
          <div className="mt-10">
            <JaipurMap />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase text-center mb-10">
            Security Tips & Career Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.title} to={post.to} className="group bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-xl transition-all">
                <div className="h-48 bg-primary flex items-center justify-center">
                  <Shield className="h-16 w-16 text-primary-foreground/30" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-secondary font-semibold uppercase mb-2">Paladin Risk Solutions</p>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{post.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-sm font-heading font-bold text-secondary uppercase">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
