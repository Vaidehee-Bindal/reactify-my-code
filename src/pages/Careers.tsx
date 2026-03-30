import HeroBanner from "@/components/HeroBanner";
import { Link } from "react-router-dom";
import { Briefcase, TrendingUp, Award, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Careers = () => {
  return (
    <div>
      <HeroBanner title="Careers at Paladin Security" subtitle="Join Canada's largest and most progressive security company. We're always looking for passionate individuals to join the Paladin family." backgroundImage={heroBg} showCta={false} />
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground uppercase mb-4">Why Work at Paladin?</h2>
              <p className="text-muted-foreground mb-6">
                At Paladin, we believe in investing in our people. Our promotion-from-within philosophy means you'll have real opportunities for growth and advancement. We offer industry-leading training, competitive compensation, and a supportive team culture.
              </p>
              <a href="https://joblinkapply.com/Joblink/5648/Search/SearchWithFilters" target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors">
                View Open Positions
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp className="h-6 w-6" />, title: "Promotion From Within", desc: "Real career growth opportunities" },
                { icon: <Award className="h-6 w-6" />, title: "Industry-Leading Training", desc: "Comprehensive development programs" },
                { icon: <Heart className="h-6 w-6" />, title: "CARE Culture", desc: "Values-driven workplace" },
                { icon: <Briefcase className="h-6 w-6" />, title: "Benefits Package", desc: "Competitive compensation & perks" },
              ].map((item) => (
                <div key={item.title} className="bg-muted rounded-lg p-5 text-center">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground">{item.icon}</span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-heading text-xl font-bold text-foreground uppercase mb-4">Explore Career Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/careers/benefits" className="px-6 py-2 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-navy-light transition-colors">Benefits</Link>
              <Link to="/careers/paladin-promotion" className="px-6 py-2 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-navy-light transition-colors">Promotion From Within</Link>
              <Link to="/find-your-fit" className="px-6 py-2 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-navy-light transition-colors">Find Your Fit</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
