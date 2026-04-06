import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const HowItWorks = () => {
  return (
    <div>
      <HeroBanner
        title="How It Works"
        subtitle="Discover our proven intelligence methodology that delivers actionable security insights to protect your organization."
        backgroundImage={heroBg}
      />

      {/* Process Steps */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-2">
              Our Intelligence Process
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto my-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our intelligence process follows a proven methodology to deliver actionable security insights.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Data Collection", desc: "We gather intelligence from multiple open and proprietary sources across global networks." },
              { step: "02", title: "Analysis", desc: "Our analysts process and correlate data to identify patterns, trends, and emerging threats." },
              { step: "03", title: "Threat Assessment", desc: "Risk levels are evaluated and actionable insights are generated with priority ratings." },
              { step: "04", title: "Reporting", desc: "Comprehensive reports are delivered with clear recommendations for risk mitigation." },
            ].map((item) => (
              <div key={item.step} className="bg-card rounded-lg p-8 text-center shadow-sm border border-border hover:shadow-lg transition-shadow">
                <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-secondary-foreground text-lg">{item.step}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <div className="bg-primary min-h-[350px] flex items-center justify-center">
              <div className="text-center text-primary-foreground/30 text-lg font-heading">Intelligence Dashboard Image</div>
            </div>
            <div className="bg-card p-10 md:p-14 flex flex-col justify-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase mb-2">
                Real-Time Monitoring & Alerts
              </h2>
              <div className="w-16 h-1 bg-primary my-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our platform provides <strong>24/7 real-time monitoring</strong> of security threats, delivering instant alerts to your team when action is needed. Every alert includes context, severity rating, and recommended response steps.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With customizable dashboards and automated reporting, your security team stays informed without information overload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <div className="bg-card p-10 md:p-14 flex flex-col justify-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase mb-2">
                Seamless Integration With Your Operations
              </h2>
              <div className="w-16 h-1 bg-primary my-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our intelligence platform integrates directly with your existing security infrastructure. Whether you use <strong>access control systems, CCTV networks, or incident management tools</strong>, ATSIntel connects seamlessly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with your team during onboarding to ensure a smooth transition and minimal disruption to ongoing operations.
              </p>
            </div>
            <div className="bg-primary min-h-[350px] flex items-center justify-center">
              <div className="text-center text-primary-foreground/30 text-lg font-heading">Integration Diagram Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-6">
            Ready to See It in Action?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Schedule a demo with our team and experience the power of intelligence-driven security firsthand.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors">
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
