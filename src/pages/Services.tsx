import { useParams, Link } from "react-router-dom";
import { Shield, Eye, Camera, Bell, Users, Lock, Zap, CheckCircle, ChevronRight, Smartphone, Radio, AlertTriangle, Search, FileText, Building2 } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const servicesData: Record<string, {
  title: string; subtitle: string; tag: string; features: { icon: any; title: string; desc: string }[];
  cta: { label: string; to: string }; extra?: string;
}> = {
  rakshak: {
    title: "Rakshak24x7 — Colony Security Platform",
    subtitle: "Complete 24x7 surveillance, guard management, and emergency response for residential colonies.",
    tag: "For Residents",
    features: [
      { icon: Camera, title: "Live CCTV Access", desc: "Watch your colony cameras live from your smartphone — anytime, anywhere." },
      { icon: Bell, title: "Instant Alerts", desc: "Get real-time push notifications for suspicious activity, unauthorized entry, or emergencies." },
      { icon: Users, title: "Guard Tracking", desc: "GPS-based guard check-in system ensures your guards are patrolling as scheduled." },
      { icon: Radio, title: "Control Room 24x7", desc: "Our centralized control room monitors all feeds and dispatches response teams instantly." },
      { icon: Smartphone, title: "Visitor Management", desc: "Pre-approve visitors, delivery personnel, and domestic help via the app." },
      { icon: Zap, title: "Panic Button", desc: "One-tap SOS button that immediately alerts the control room and nearest patrol unit." },
    ],
    cta: { label: "Download App", to: "#" },
  },
  "rakshak-features": {
    title: "Rakshak24x7 Features",
    subtitle: "A deep dive into every feature that makes Rakshak the most trusted colony security platform.",
    tag: "Features",
    features: [
      { icon: Camera, title: "Multi-Camera Streaming", desc: "Support for up to 64 cameras per colony with cloud-based NVR recording." },
      { icon: Bell, title: "AI Motion Detection", desc: "Smart alerts triggered by unusual movement patterns — reducing false alarms by 80%." },
      { icon: Lock, title: "Encrypted Storage", desc: "30-day cloud storage with AES-256 encryption. Your footage is secure." },
      { icon: Users, title: "Digital Attendance", desc: "Guards check in/out via biometric + GPS. No buddy-punching possible." },
      { icon: FileText, title: "Incident Reports", desc: "Automated daily and weekly reports delivered to colony RWA committee." },
      { icon: Search, title: "Smart Search", desc: "Search footage by date, time, camera, or detected events." },
    ],
    cta: { label: "Download App", to: "#" },
  },
  "social-problems": {
    title: "Social Problems We Solve",
    subtitle: "Indian residential colonies face unique security challenges. Here's how Rakshak24x7 addresses them.",
    tag: "Impact",
    features: [
      { icon: AlertTriangle, title: "Theft & Burglary", desc: "Real-time monitoring and instant alerts have reduced theft incidents by 90% in our colonies." },
      { icon: Users, title: "Unauthorized Entry", desc: "Digital visitor management ensures every person entering is verified and logged." },
      { icon: Bell, title: "Women's Safety", desc: "Panic button with instant response ensures women feel safe walking in the colony at any hour." },
      { icon: Camera, title: "Vandalism", desc: "24x7 CCTV coverage deters vandalism and provides evidence when incidents occur." },
      { icon: Zap, title: "Guard Negligence", desc: "GPS tracking and digital check-ins ensure guards actually patrol instead of sleeping." },
      { icon: Lock, title: "Data Tampering", desc: "Encrypted cloud storage prevents anyone from deleting or tampering with footage." },
    ],
    cta: { label: "Get Rakshak for Your Colony", to: "/contact" },
  },
  atsintel: {
    title: "ATSIntel — AI-Powered Intelligence Platform",
    subtitle: "Advanced analytics, investigation management, and threat intelligence for law enforcement and security agencies.",
    tag: "For Authorities",
    features: [
      { icon: Eye, title: "Crime Pattern Analysis", desc: "AI algorithms detect crime patterns across geography and time to predict hotspots." },
      { icon: Search, title: "Case Management", desc: "End-to-end investigation workflow — from FIR to closure with full evidence chain." },
      { icon: Building2, title: "Multi-Agency Collaboration", desc: "Secure data sharing between police stations, districts, and intelligence agencies." },
      { icon: Zap, title: "Real-time Dashboards", desc: "Live crime maps, resource deployment views, and KPI tracking for senior officers." },
      { icon: Lock, title: "Secure & Compliant", desc: "Built with government-grade security. Compliant with IT Act 2000 and data protection laws." },
      { icon: FileText, title: "Automated Reporting", desc: "Generate court-ready reports, statistical summaries, and trend analyses with one click." },
    ],
    cta: { label: "Request Demo", to: "/contact" },
  },
  "atsintel-features": {
    title: "ATSIntel Features",
    subtitle: "Deep technical capabilities designed for modern investigation and intelligence workflows.",
    tag: "Features",
    features: [
      { icon: Eye, title: "Facial Recognition", desc: "AI-powered facial recognition across CCTV networks for suspect identification." },
      { icon: Search, title: "Link Analysis", desc: "Visualize connections between people, places, and events to uncover hidden networks." },
      { icon: Zap, title: "Geospatial Intelligence", desc: "Map-based analysis with heatmaps, cluster detection, and route tracking." },
      { icon: Bell, title: "Alert Engine", desc: "Custom alert rules for specific crime types, locations, or suspect activities." },
      { icon: Lock, title: "Audit Trail", desc: "Every action logged with timestamps. Complete chain of custody for evidence." },
      { icon: FileText, title: "API Integration", desc: "REST APIs for integration with existing police databases and RTO/passport systems." },
    ],
    cta: { label: "Request Access", to: "/contact" },
  },
  "atsintel-users": {
    title: "Who Can Use ATSIntel?",
    subtitle: "ATSIntel is designed for authorized security professionals and law enforcement agencies.",
    tag: "Access",
    features: [
      { icon: Building2, title: "State Police", desc: "District-level and state-level police departments for crime analysis and investigation." },
      { icon: Shield, title: "Private Security Firms", desc: "Large security companies managing multi-site operations with analytics needs." },
      { icon: Eye, title: "Intelligence Agencies", desc: "Threat assessment, pattern detection, and inter-agency intelligence sharing." },
      { icon: Users, title: "Corporate Security", desc: "Fortune 500 companies managing internal investigations and risk assessment." },
      { icon: Search, title: "Private Investigators", desc: "Licensed PIs conducting background checks and surveillance operations." },
      { icon: Lock, title: "Government Bodies", desc: "Municipal corporations, smart city projects, and government security departments." },
    ],
    cta: { label: "Apply for Access", to: "/contact" },
  },
};

const Services = () => {
  const { service } = useParams();
  const data = servicesData[service || "rakshak"] || servicesData.rakshak;

  return (
    <div>
      <HeroBanner title={data.title} subtitle={data.subtitle} backgroundImage={heroBg} />

      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground font-heading font-bold text-xs uppercase tracking-wider rounded-full mb-4">
              {data.tag}
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground uppercase">Key Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((f, i) => (
              <div key={i} className="glass-card p-8 hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-5">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to={data.cta.to} className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-dark transition-colors">
              {data.cta.label} <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;