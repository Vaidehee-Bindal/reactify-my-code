import { useParams } from "react-router-dom";
import { Phone, Camera, Radio, Shield, Eye, Search, Zap, FileText, Lock, Users } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const workflows: Record<string, { title: string; subtitle: string; steps: { icon: any; title: string; desc: string }[] }> = {
  rakshak: {
    title: "How Rakshak24x7 Works",
    subtitle: "From signup to full colony protection in 48 hours.",
    steps: [
      { icon: Phone, title: "Register Your Colony", desc: "Colony RWA signs up on the Rakshak platform. Our team conducts a free site survey within 24 hours." },
      { icon: Camera, title: "Camera Setup & Integration", desc: "We install new cameras or integrate your existing CCTV system with our cloud-based monitoring platform." },
      { icon: Users, title: "Guard Deployment", desc: "Background-verified, trained security guards are deployed with GPS trackers and digital check-in devices." },
      { icon: Radio, title: "Control Room Activation", desc: "Your colony goes live on our 24x7 centralized control room. Operators monitor feeds around the clock." },
      { icon: Shield, title: "App Goes Live", desc: "Residents download the Rakshak app and get access to live CCTV, visitor management, and panic alerts." },
      { icon: Zap, title: "Continuous Monitoring", desc: "Daily reports, weekly audits, and monthly reviews ensure the highest security standards are maintained." },
    ],
  },
  atsintel: {
    title: "How ATSIntel Works",
    subtitle: "Enterprise-grade intelligence platform deployment for authorized agencies.",
    steps: [
      { icon: FileText, title: "Application & Verification", desc: "Authorized agencies submit an access request. Our team verifies credentials and clearance levels." },
      { icon: Lock, title: "Secure Onboarding", desc: "Multi-factor authentication setup, role-based access control, and data classification configuration." },
      { icon: Search, title: "Data Integration", desc: "Connect existing databases — FIR systems, CCTV networks, criminal records — via secure APIs." },
      { icon: Eye, title: "AI Model Training", desc: "Our AI models learn from your region's crime patterns to provide accurate predictions and insights." },
      { icon: Zap, title: "Dashboard Goes Live", desc: "Officers get access to real-time dashboards, case management tools, and intelligence reports." },
      { icon: Users, title: "Ongoing Support", desc: "Dedicated account manager, 24x7 technical support, and quarterly platform upgrades." },
    ],
  },
};

const HowItWorks = () => {
  const { product } = useParams();
  const data = workflows[product || "rakshak"] || workflows.rakshak;

  return (
    <div>
      <HeroBanner title={data.title} subtitle={data.subtitle} backgroundImage={heroBg} />

      <section className="py-20">
        <div className="section-container max-w-4xl">
          <div className="space-y-0">
            {data.steps.map((step, i) => (
              <div key={i} className="flex gap-6 relative">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center z-10 shrink-0">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  {i < data.steps.length - 1 && <div className="w-0.5 flex-1 bg-border" />}
                </div>
                {/* Content */}
                <div className="pb-12">
                  <span className="text-xs font-heading font-bold text-secondary uppercase tracking-wider">Step {i + 1}</span>
                  <h3 className="font-heading font-bold text-xl text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;