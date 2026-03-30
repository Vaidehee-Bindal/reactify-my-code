import HeroBanner from "@/components/HeroBanner";
import { Link, useParams } from "react-router-dom";
import { Heart, Briefcase, Building2, Plane, Factory, ShoppingCart, Warehouse, GraduationCap, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const industriesData: Record<string, { title: string; description: string; challenges: string[] }> = {
  healthcare: {
    title: "Healthcare Security Services",
    description: "Paladin specializes in healthcare security, protecting patients, staff, and visitors in hospitals, clinics, and long-term care facilities. Our officers are trained in de-escalation techniques and empathy-led security approaches.",
    challenges: ["Patient & staff safety", "Emergency department security", "Visitor management", "Code response protocols", "Mental health crisis support", "Workplace violence prevention"],
  },
  "office-security-service": {
    title: "Office & Commercial Security",
    description: "We provide comprehensive office security solutions designed to protect your employees, visitors, and assets. From lobby concierge services to after-hours building security.",
    challenges: ["Access control systems", "Lobby & concierge services", "After-hours security", "Parking management", "Visitor screening", "Emergency response"],
  },
  "critical-infrastructure-security": {
    title: "Government & Critical Infrastructure Security",
    description: "Paladin provides specialized security services for government facilities and critical infrastructure. Our officers hold necessary security clearances and understand the unique requirements of protecting vital national assets.",
    challenges: ["Security clearance personnel", "Perimeter security", "Access management", "CCTV monitoring", "Threat assessment", "Emergency protocols"],
  },
  aviation: {
    title: "Aviation Security Services",
    description: "Our aviation security professionals deliver reliable and responsive security at airports and aviation facilities, ensuring the safety and security of passengers, staff, and property.",
    challenges: ["Passenger screening support", "Perimeter patrol", "Terminal security", "Cargo area protection", "Emergency evacuation", "Access control"],
  },
  "oil-gas-industry": {
    title: "Industrial Security Services",
    description: "Paladin offers specialized security for oil & gas, mining, and industrial operations. Our officers are experienced in remote and challenging environments.",
    challenges: ["Remote site security", "Access control", "Safety compliance", "Emergency response", "Environmental monitoring", "Worker safety"],
  },
  "shopping-malls-retail": {
    title: "Retail & Shopping Mall Security",
    description: "Our retail security services create a safe and welcoming shopping environment. We help retailers prevent theft, manage crowds, and respond to emergencies.",
    challenges: ["Loss prevention", "Customer service", "Crowd management", "Parking lot patrols", "Incident response", "Tenant relations"],
  },
  "warehouse-security-systems": {
    title: "Warehouse & Distribution Security",
    description: "We protect warehouses and distribution centres with comprehensive security solutions including access control, perimeter patrols, and inventory protection.",
    challenges: ["Inventory protection", "Loading dock security", "Perimeter patrols", "Access management", "CCTV monitoring", "Truck driver verification"],
  },
  "university-post-secondary-security": {
    title: "College & University Security",
    description: "Paladin specializes in campus security, creating safe learning environments for students, faculty, and staff. Our approach balances safety with the open, inclusive nature of academic institutions.",
    challenges: ["Campus patrol", "Student safety programs", "Event security", "Residence security", "Emergency response", "Safe walk programs"],
  },
};

const IndustriesServed = () => {
  const { industry } = useParams();

  if (industry && industriesData[industry]) {
    const data = industriesData[industry];
    return (
      <div>
        <HeroBanner title={data.title} backgroundImage={heroBg} />
        <section className="py-16">
          <div className="section-container">
            <p className="text-lg text-muted-foreground max-w-3xl mb-10">{data.description}</p>
            <h3 className="font-heading text-xl font-bold text-foreground uppercase mb-6">How We Help</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.challenges.map((c) => (
                <div key={c} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Shield className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="font-heading font-semibold text-sm text-foreground">{c}</span>
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

  const industryList = [
    { key: "healthcare", icon: <Heart className="h-8 w-8" />, label: "Healthcare" },
    { key: "office-security-service", icon: <Briefcase className="h-8 w-8" />, label: "Office & Commercial" },
    { key: "critical-infrastructure-security", icon: <Building2 className="h-8 w-8" />, label: "Government & Infrastructure" },
    { key: "aviation", icon: <Plane className="h-8 w-8" />, label: "Aviation" },
    { key: "oil-gas-industry", icon: <Factory className="h-8 w-8" />, label: "Industrial" },
    { key: "shopping-malls-retail", icon: <ShoppingCart className="h-8 w-8" />, label: "Retail & Shopping Malls" },
    { key: "warehouse-security-systems", icon: <Warehouse className="h-8 w-8" />, label: "Warehouse & Distribution" },
    { key: "university-post-secondary-security", icon: <GraduationCap className="h-8 w-8" />, label: "Post Secondary" },
  ];

  return (
    <div>
      <HeroBanner title="Industries We Serve" subtitle="Specialized security for every sector" backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryList.map((ind) => (
              <Link key={ind.key} to={`/industries-served/${ind.key}`} className="group bg-card rounded-lg shadow-md p-8 text-center border border-border hover:border-secondary hover:shadow-xl transition-all">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                  <span className="text-primary-foreground group-hover:text-secondary-foreground">{ind.icon}</span>
                </div>
                <h3 className="font-heading font-bold text-foreground uppercase text-sm">{ind.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesServed;
