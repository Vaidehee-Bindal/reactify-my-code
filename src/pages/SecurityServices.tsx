import HeroBanner from "@/components/HeroBanner";
import { Link, useParams } from "react-router-dom";
import { Shield, Car, ShoppingBag, Calendar, Layers, Radio } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const servicesData: Record<string, { title: string; description: string; features: string[] }> = {
  "security-guards": {
    title: "Security Guard Services",
    description: "Paladin's security guard services provide professional, uniformed security officers for a wide range of industries. Our guards are carefully selected, trained, and deployed to meet the unique needs of each client.",
    features: ["24/7 security coverage", "Trained & licensed professionals", "Customized security plans", "Regular reporting & communication", "Incident management", "Emergency response"],
  },
  "mobile-patrols": {
    title: "Mobile Patrol & Emergency Response",
    description: "Our mobile patrol services offer cost-effective security through regular patrols of your property. Our patrol officers conduct thorough inspections and provide rapid emergency response.",
    features: ["Scheduled & random patrols", "GPS-tracked patrol vehicles", "Lock/unlock services", "Alarm response", "Incident reporting", "Emergency response"],
  },
  "loss-prevention": {
    title: "Loss Prevention",
    description: "Paladin's loss prevention officers are specially trained to identify and prevent theft, fraud, and other losses. We work with retailers to create a safe shopping environment while protecting your bottom line.",
    features: ["Uniformed & plainclothes officers", "Theft deterrence programs", "Inventory protection", "Employee awareness training", "Incident investigation", "Court-ready reporting"],
  },
  "event-security-services": {
    title: "Event Security Services",
    description: "From concerts to corporate events, Paladin provides comprehensive event security solutions. Our team handles crowd management, access control, and emergency procedures for events of all sizes.",
    features: ["Crowd management", "Access control", "VIP protection", "Emergency planning", "Venue security", "Post-event reporting"],
  },
  "integrated-guarding": {
    title: "Integrated Guarding",
    description: "Paladin's integrated guarding combines traditional security with advanced technology to deliver comprehensive security solutions that maximize effectiveness and efficiency.",
    features: ["Technology integration", "Real-time monitoring", "Data analytics", "Custom security protocols", "Scalable solutions", "Performance metrics"],
  },
  "operations-centres": {
    title: "Operations Centres",
    description: "Our state-of-the-art operations centres provide 24/7 monitoring and coordination of security services. We serve as the central hub for communications, incident management, and emergency response.",
    features: ["24/7 monitoring", "CCTV surveillance", "Alarm monitoring", "Dispatch coordination", "Incident tracking", "Real-time reporting"],
  },
  "training-services": {
    title: "Training Services",
    description: "Paladin offers comprehensive security training programs designed to develop industry-leading security professionals. Our training covers everything from basic security fundamentals to specialized skills.",
    features: ["Security guard training", "First aid & CPR", "De-escalation techniques", "Use of force training", "Customer service excellence", "Industry-specific modules"],
  },
};

const SecurityServices = () => {
  const { service } = useParams();

  if (service && servicesData[service]) {
    const data = servicesData[service];
    return (
      <div>
        <HeroBanner title={data.title} backgroundImage={heroBg} />
        <section className="py-16">
          <div className="section-container">
            <p className="text-lg text-muted-foreground max-w-3xl mb-10">{data.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.features.map((f) => (
                <div key={f} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Shield className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="font-heading font-semibold text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/find-a-location" className="px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Services overview
  const servicesList = [
    { key: "security-guards", icon: <Shield className="h-8 w-8" />, label: "Guard Services" },
    { key: "mobile-patrols", icon: <Car className="h-8 w-8" />, label: "Mobile Patrol" },
    { key: "loss-prevention", icon: <ShoppingBag className="h-8 w-8" />, label: "Loss Prevention" },
    { key: "event-security-services", icon: <Calendar className="h-8 w-8" />, label: "Event Security" },
    { key: "integrated-guarding", icon: <Layers className="h-8 w-8" />, label: "Integrated Guarding" },
    { key: "operations-centres", icon: <Radio className="h-8 w-8" />, label: "Operations Centres" },
  ];

  return (
    <div>
      <HeroBanner title="Security Services" subtitle="Comprehensive security solutions tailored to your needs" backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((s) => (
              <Link key={s.key} to={`/security-services/${s.key}`} className="group bg-card rounded-lg shadow-md p-8 text-center border border-border hover:border-secondary hover:shadow-xl transition-all">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                  <span className="text-primary-foreground group-hover:text-secondary-foreground">{s.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground uppercase">{s.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityServices;
