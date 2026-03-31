import { useParams } from "react-router-dom";
import { Shield, Users, TrendingUp, Target, Award, Globe, CheckCircle } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const AboutATS = () => (
  <section className="py-20">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground uppercase mb-6">Our Mission</h2>
          <div className="w-16 h-1 bg-secondary mb-6" />
          <p className="text-muted-foreground mb-4">
            ATS — Aanjaneya Taskforce Services — was founded with a singular mission: to make every residential colony in India as safe as a gated community, and to give law enforcement the AI tools they need to stay ahead of crime.
          </p>
          <p className="text-muted-foreground mb-6">
            We believe security is not a luxury — it's a fundamental right. From the smallest colony in a Tier-3 city to the largest metro, every family deserves to feel safe in their home.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Colonies Protected", value: "30+" },
              { label: "Guards Deployed", value: "120+" },
              { label: "Cities Active", value: "1" },
              { label: "Incidents Prevented", value: "500+" },
            ].map((stat, i) => (
              <div key={i} className="bg-muted rounded-lg p-4 text-center">
                <p className="font-heading font-bold text-2xl text-secondary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-primary rounded-2xl p-10 text-center">
          <Shield className="h-24 w-24 text-secondary mx-auto mb-4" />
          <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-2">Aanjaneya Taskforce</h3>
          <p className="text-primary-foreground/60">Strength. Vigilance. Trust.</p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground uppercase mb-4">Our Values</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Vigilance", desc: "Eyes that never sleep. We monitor, patrol, and protect 24 hours a day, 365 days a year." },
            { icon: Award, title: "Integrity", desc: "Complete transparency in operations, data handling, and billing. No hidden charges, no hidden agendas." },
            { icon: Users, title: "Community", desc: "We're not just a security vendor — we're a part of your colony. Our guards know your residents by name." },
          ].map((v, i) => (
            <div key={i} className="glass-card p-8 text-center">
              <v.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section className="py-20">
    <div className="section-container">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl font-bold text-foreground uppercase mb-4">Our Leadership</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">A team of security professionals, technologists, and community builders.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Arjun Rajawat", role: "Founder & CEO", bio: "Ex-Army officer with 15 years in defence and private security. Built ATS to bridge the gap between military-grade security and civilian communities." },
          { name: "Neha Kapoor", role: "CTO", bio: "IIT Delhi alumna. Led AI teams at a major tech company before building ATSIntel. Passionate about using technology to make communities safer." },
          { name: "Ravi Mathur", role: "Head of Operations", bio: "20+ years in security operations management. Oversees guard deployment, control room operations, and quality assurance across all colonies." },
        ].map((member, i) => (
          <div key={i} className="glass-card p-8 text-center">
            <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-2xl">{member.name[0]}</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground">{member.name}</h3>
            <p className="text-secondary font-semibold text-sm mb-3">{member.role}</p>
            <p className="text-sm text-muted-foreground">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Expansion = () => (
  <section className="py-20">
    <div className="section-container max-w-4xl">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl font-bold text-foreground uppercase mb-4">Expansion Plan</h2>
        <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">Our roadmap to making India's residential colonies the safest in the world.</p>
      </div>
      <div className="space-y-0">
        {[
          { phase: "Phase 1 — Jaipur", period: "2025–2026", status: "Active", items: ["30+ colonies onboarded", "120+ guards deployed", "24x7 control room operational", "Rakshak app launched on Play Store & App Store"] },
          { phase: "Phase 2 — Rajasthan", period: "2026–2027", status: "Planned", items: ["Expand to Jodhpur, Udaipur, Kota, Ajmer", "200+ colonies target", "Regional control room in each city", "ATSIntel pilot with Rajasthan Police"] },
          { phase: "Phase 3 — North India", period: "2027–2028", status: "Vision", items: ["Delhi NCR, Chandigarh, Lucknow", "500+ colonies target", "Enterprise tier for large townships", "ATSIntel national rollout"] },
          { phase: "Phase 4 — Pan-India", period: "2028–2029", status: "Vision", items: ["Mumbai, Bangalore, Hyderabad, Chennai", "1000+ colonies target", "IPO preparation", "International partnerships exploration"] },
        ].map((phase, i) => (
          <div key={i} className="flex gap-6 relative">
            <div className="flex flex-col items-center">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center z-10 shrink-0 ${i === 0 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                <TrendingUp className="h-5 w-5" />
              </div>
              {i < 3 && <div className="w-0.5 flex-1 bg-border" />}
            </div>
            <div className="pb-10">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-heading font-bold text-xl text-foreground">{phase.phase}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${i === 0 ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>{phase.status}</span>
              </div>
              <p className="text-sm text-secondary font-semibold mb-3">{phase.period}</p>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const aboutPages: Record<string, { title: string; subtitle: string; component: React.FC }> = {
  about: { title: "About ATS", subtitle: "Aanjaneya Taskforce Services — Strength. Vigilance. Trust.", component: AboutATS },
  team: { title: "Our Team", subtitle: "The people behind India's most trusted colony security platform.", component: Team },
  expansion: { title: "Expansion Plan", subtitle: "From Jaipur to Pan-India — our vision for a safer nation.", component: Expansion },
};

const About = () => {
  const { page } = useParams();
  const key = page || "about";
  const data = aboutPages[key] || aboutPages.about;
  const Content = data.component;

  return (
    <div>
      <HeroBanner title={data.title} subtitle={data.subtitle} backgroundImage={heroBg} />
      <Content />
    </div>
  );
};

export default About;