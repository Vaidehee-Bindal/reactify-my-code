import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const ATSIntel = () => {
  return (
    <div>
      <HeroBanner
        title="ATSIntel"
        subtitle="Advanced threat intelligence and security analytics powered by cutting-edge technology and expert analysis."
        backgroundImage={heroBg}
        showCta
      />

      {/* Intelligence-Driven Security */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <div className="bg-primary min-h-[350px] flex items-center justify-center">
              <div className="text-center text-primary-foreground/30 text-lg font-heading">Intelligence Dashboard Image</div>
            </div>
            <div className="bg-card p-10 md:p-14 flex flex-col justify-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase mb-2">
                Intelligence-Driven Security
              </h2>
              <div className="w-16 h-1 bg-primary my-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                ATSIntel leverages cutting-edge technology and expert analysis to deliver <strong>real-time threat intelligence</strong>, helping organizations stay ahead of security risks. Our team of analysts monitors global and local threats 24/7.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We provide actionable intelligence that empowers your security team to make informed decisions and <strong>respond proactively</strong> to emerging threats before they become incidents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <div className="bg-card p-10 md:p-14 flex flex-col justify-center order-2 md:order-1">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase mb-2">
                Our Expert's Entire Careers Are in Security Intelligence
              </h2>
              <div className="w-16 h-1 bg-primary my-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our experts grew up in security intelligence and are actively involved in shaping the industry today. The security industry turns to ATSIntel's team to address the most pressing security issues, whether <strong>determining policies</strong>, building <strong>industry standards and guidelines</strong>, leading training initiatives, or speaking at thought leadership events.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You can be confident in our abilities – and, more importantly – assured that your security program meets the standard of care expected of a high-performing security program.
              </p>
            </div>
            <div className="bg-primary min-h-[350px] flex items-center justify-center order-1 md:order-2">
              <div className="text-center text-primary-foreground/30 text-lg font-heading">Expert Analyst Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear visual separator */}
      <div className="bg-[#122C54] py-12">
        <div className="section-container text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground uppercase mb-4">
            Discover Our Intelligence Process
          </h2>
          <p className="text-primary-foreground/70">Learn the step-by-step methodology behind ATSIntel's threat intelligence.</p>
        </div>
      </div>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-background">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-2">
              How It Works
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

      {/* When an Incident Happens */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <div className="bg-card p-10 md:p-14 flex flex-col justify-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase mb-2">
                When an Incident Happens, You Want Us to Respond
              </h2>
              <div className="w-16 h-1 bg-primary my-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services start with our specialized security intelligence officers, and that means <strong>hiring and training the right people</strong>. Our experts influence best practices and we lead the way in patient-centric training and focus on safety and well-being.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our foundational officer training far exceeds security industry standards. When coupled with our renowned training system, our officers are equipped with the tools, knowledge, and resources to proactively manage threats and excel in their role.
              </p>
            </div>
            <div className="bg-primary min-h-[350px] flex items-center justify-center">
              <div className="text-center text-primary-foreground/30 text-lg font-heading">Incident Response Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-6">
            Get Intelligence-Driven Protection
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact our team to learn how ATSIntel can strengthen your security posture with real-time threat intelligence.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ATSIntel;
