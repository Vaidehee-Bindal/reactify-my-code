import HeroBanner from "@/components/HeroBanner";
import { Link } from "react-router-dom";
import { Users, Award, Heart, TrendingUp, History as HistoryIcon, Building } from "lucide-react";
import heroBg from "@/assets/paladin-difference.jpg";

const aboutPages = [
  { title: "Why Paladin", to: "/about-us/why-paladin", icon: <Award className="h-8 w-8" />, description: "Learn what sets Paladin apart as Canada's leading security company." },
  { title: "Leadership & People", to: "/about-us/leadership", icon: <Users className="h-8 w-8" />, description: "Meet the people behind Paladin's success." },
  { title: "Our CARE Culture", to: "/about-us/our-culture", icon: <Heart className="h-8 w-8" />, description: "Discover our values-driven approach to security." },
  { title: "Paladin CARES", to: "/about-us/paladin-cares", icon: <Heart className="h-8 w-8" />, description: "Our community engagement and social responsibility initiatives." },
  { title: "Our Companies", to: "/about-us/our-companies", icon: <Building className="h-8 w-8" />, description: "The Paladin Group of Companies." },
  { title: "History", to: "/history", icon: <HistoryIcon className="h-8 w-8" />, description: "Our journey from a small company to Canada's largest security provider." },
];

const AboutUs = () => {
  return (
    <div>
      <HeroBanner title="About Paladin Security" subtitle="Canada's leading security services provider, committed to making the world a safer and friendlier place." backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-3xl mb-12">
            <p className="text-lg text-muted-foreground">
              Paladin Security Group is Canada's leading independent security company. With over 30 years of experience, we've built our reputation on exceptional service, innovation, and a genuine commitment to making communities safer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutPages.map((page) => (
              <Link key={page.to} to={page.to} className="group bg-card rounded-lg shadow-md p-8 border border-border hover:border-secondary hover:shadow-xl transition-all">
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                  <span className="text-primary-foreground group-hover:text-secondary-foreground">{page.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground uppercase mb-2">{page.title}</h3>
                <p className="text-sm text-muted-foreground">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
