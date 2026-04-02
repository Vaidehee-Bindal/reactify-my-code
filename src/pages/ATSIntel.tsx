import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";
import { Brain, Search, ShieldCheck, BarChart3 } from "lucide-react";

const steps = [
  { icon: <Search className="h-8 w-8 text-secondary" />, title: "Data Collection", description: "We gather intelligence from multiple open and proprietary sources." },
  { icon: <Brain className="h-8 w-8 text-secondary" />, title: "Analysis", description: "Our analysts process and correlate data to identify patterns and threats." },
  { icon: <ShieldCheck className="h-8 w-8 text-secondary" />, title: "Threat Assessment", description: "Risk levels are evaluated and actionable insights are generated." },
  { icon: <BarChart3 className="h-8 w-8 text-secondary" />, title: "Reporting", description: "Comprehensive reports are delivered with recommendations for mitigation." },
];

const ATSIntel = () => {
  return (
    <div>
      <HeroBanner title="ATSIntel" subtitle="Advanced threat intelligence and security analytics." backgroundImage={heroBg} />

      <section className="py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Intelligence-Driven Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            ATSIntel leverages cutting-edge technology and expert analysis to deliver real-time threat intelligence, helping organizations stay ahead of security risks.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-muted">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-card rounded-lg p-6 text-center shadow-sm border border-border">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ATSIntel;
