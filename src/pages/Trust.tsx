import { useParams, Link } from "react-router-dom";
import { Lock, Shield, Users, FileText, Eye, CheckCircle, Search, Radio, Zap } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const WhyTrustUs = () => (
  <section className="py-20">
    <div className="section-container">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl font-bold text-foreground uppercase mb-4">Built on Trust</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-3xl mx-auto">ATS operates with complete transparency. Here's why 30+ colonies and multiple agencies trust us.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { icon: Shield, title: "Registered & Compliant", desc: "ATS is a registered security services company under the Private Security Agencies Regulation Act (PSARA). Fully licensed and insured." },
          { icon: Lock, title: "Zero Data Selling", desc: "We never sell, share, or monetize your data. Period. Your CCTV footage and personal information belong to you." },
          { icon: Users, title: "Background-Verified Staff", desc: "Every guard undergoes police verification, Aadhaar-based identity check, and comprehensive background screening." },
          { icon: FileText, title: "Monthly Audit Reports", desc: "Every colony receives a detailed monthly security audit with incident analysis, guard performance metrics, and improvement recommendations." },
          { icon: Eye, title: "24x7 Monitoring SLA", desc: "We guarantee 99.9% uptime on monitoring. If our control room misses an alert, you get a service credit." },
          { icon: CheckCircle, title: "Client Dashboard Access", desc: "Full transparency — colony RWA members get dashboard access to view guard schedules, incident logs, and camera health status." },
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 flex gap-5">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <item.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DataPrivacy = () => (
  <section className="py-20">
    <div className="section-container max-w-4xl">
      <h2 className="font-heading text-3xl font-bold text-foreground uppercase mb-8 text-center">Data Privacy & Retention Policy</h2>
      <div className="w-16 h-1 bg-secondary mx-auto mb-10" />
      <div className="space-y-8">
        {[
          { title: "What Data We Collect", content: "CCTV footage from colony cameras, guard GPS locations during shifts, visitor entry/exit logs, and resident app usage data (anonymized). We do NOT collect personal messages, phone data, or any information outside the security scope." },
          { title: "How We Store Data", content: "All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit. CCTV footage is stored on AWS India (Mumbai region) servers. No data ever leaves Indian soil." },
          { title: "Retention Period", content: "CCTV footage: 30 days (extendable to 90 days on request). Guard attendance logs: 1 year. Incident reports: 3 years. Visitor logs: 6 months. After the retention period, data is permanently and irreversibly deleted." },
          { title: "Who Can Access Data", content: "Only authorized colony RWA members (via the dashboard), ATS control room operators (live monitoring only), and law enforcement (with valid legal order). No third party ever gets access." },
          { title: "Your Rights", content: "You can request a copy of your data, request deletion of specific records, opt out of anonymized analytics, and file a grievance with our Data Protection Officer at dpo@ats-security.in." },
        ].map((item, i) => (
          <div key={i} className="glass-card p-8">
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServiceDirectory = () => (
  <section className="py-20">
    <div className="section-container">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl font-bold text-foreground uppercase mb-4">Service Directory</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">Our trained and verified security personnel, available 24x7.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "Ramesh Kumar", role: "Senior Security Guard", area: "Shanti Nagar", exp: "8 years", verified: true },
          { name: "Suresh Yadav", role: "Patrol Supervisor", area: "Green Park", exp: "12 years", verified: true },
          { name: "Amit Sharma", role: "Control Room Operator", area: "Central Hub", exp: "5 years", verified: true },
          { name: "Deepak Singh", role: "Security Guard", area: "Royal Residency", exp: "3 years", verified: true },
          { name: "Pradeep Meena", role: "Mobile Patrol", area: "Jaipur South", exp: "6 years", verified: true },
          { name: "Vikram Rathore", role: "Investigation Analyst", area: "ATSIntel Division", exp: "10 years", verified: true },
        ].map((person, i) => (
          <div key={i} className="glass-card p-6 flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="text-primary-foreground font-bold">{person.name[0]}</span>
            </div>
            <div>
              <p className="font-heading font-bold text-foreground">{person.name}</p>
              <p className="text-sm text-secondary font-semibold">{person.role}</p>
              <p className="text-xs text-muted-foreground mt-1">Area: {person.area} · Exp: {person.exp}</p>
              {person.verified && <span className="inline-flex items-center gap-1 text-xs text-accent mt-1"><CheckCircle className="h-3 w-3" /> Verified</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const trustPages: Record<string, { title: string; subtitle: string; component: React.FC }> = {
  "why-trust-us": { title: "Why Trust ATS?", subtitle: "Transparency, accountability, and zero-compromise security.", component: WhyTrustUs },
  "data-privacy": { title: "Data Privacy & Retention", subtitle: "Your data belongs to you. Here's exactly how we handle it.", component: DataPrivacy },
  "service-directory": { title: "Service Directory", subtitle: "Meet the trained professionals protecting your colony.", component: ServiceDirectory },
};

const Trust = () => {
  const { page } = useParams();
  const data = trustPages[page || "why-trust-us"] || trustPages["why-trust-us"];
  const Content = data.component;

  return (
    <div>
      <HeroBanner title={data.title} subtitle={data.subtitle} backgroundImage={heroBg} />
      <Content />
    </div>
  );
};

export default Trust;