import { Link } from "react-router-dom";
import {
  Shield, Eye, Camera, Bell, Users, MapPin, AlertTriangle, Lock, Zap,
  CheckCircle, ChevronRight, Building2, Globe, TrendingUp, Phone,
  Smartphone, Radio, Search, FileText
} from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <HeroBanner
        title="Eyes That Never Sleep"
        subtitle="Rakshak24x7 brings real-time CCTV surveillance, trained guards, and instant alerts to your residential colony. ATSIntel empowers law enforcement with AI-powered investigation tools."
        backgroundImage={heroBg}
        primaryCta={{ label: "Download Rakshak App", to: "/services/rakshak" }}
        secondaryCta={{ label: "Request ATSIntel Access", to: "/contact" }}
      />

      {/* Problem Statement */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-4">
              The Problem We Solve
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Residential colonies across India face growing security challenges — from petty theft and unauthorized access to delayed emergency response.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: AlertTriangle, title: "Unchecked Entry/Exit", desc: "Unknown visitors walk in without verification. No logs, no accountability." },
              { icon: Camera, title: "Blind Spots Everywhere", desc: "Existing CCTV systems are unmonitored, poorly maintained, and footage goes unchecked." },
              { icon: Bell, title: "Delayed Emergency Response", desc: "By the time a guard notices an incident, it's already too late. No real-time alerts." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 text-center hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions: Rakshak + ATSIntel */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-4">
              Our Solutions
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>

          {/* Rakshak */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground font-heading font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                For Residents
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Rakshak24x7</h3>
              <p className="text-muted-foreground mb-6">
                A complete colony security platform — live CCTV access on your phone, verified guard check-ins, visitor management, and instant panic alerts. Your colony, under your watch.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Live CCTV feed on your smartphone",
                  "Real-time guard tracking & attendance",
                  "Instant SOS & panic button alerts",
                  "Visitor pre-approval & digital logs",
                  "Centralized control room monitoring",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/services/rakshak" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-dark transition-colors">
                Learn More <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-primary rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px]">
              <Shield className="h-24 w-24 text-secondary mb-4" />
              <p className="font-heading font-bold text-xl text-primary-foreground">Rakshak24x7</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Colony Security Platform</p>
            </div>
          </div>

          {/* ATSIntel */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-navy-dark rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px]">
              <Eye className="h-24 w-24 text-accent mb-4" />
              <p className="font-heading font-bold text-xl text-primary-foreground">ATSIntel</p>
              <p className="text-primary-foreground/60 text-sm mt-1">AI-Powered Intelligence</p>
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block px-3 py-1 bg-accent/20 text-foreground font-heading font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                For Authorities
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">ATSIntel</h3>
              <p className="text-muted-foreground mb-6">
                An AI-powered intelligence and analytics platform built for law enforcement, private investigators, and security agencies. Pattern detection, threat mapping, and investigation management — all in one dashboard.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "AI-based crime pattern detection",
                  "Investigation case management",
                  "Threat mapping & hotspot analysis",
                  "Secure inter-agency data sharing",
                  "Real-time intelligence dashboards",
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-emerald-dark transition-colors">
                Request Access <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-4">
              How Rakshak24x7 Works
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", icon: Phone, title: "Download App", desc: "Install Rakshak24x7 from Play Store or App Store and register your colony." },
              { step: "02", icon: Camera, title: "Connect CCTV", desc: "We set up & connect your existing or new CCTV cameras to the cloud platform." },
              { step: "03", icon: Radio, title: "Control Room Live", desc: "Our 24x7 control room monitors feeds, dispatches guards, and manages alerts." },
              { step: "04", icon: Shield, title: "Stay Protected", desc: "Get instant alerts, track guards in real-time, and manage visitors from your phone." },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="text-5xl font-heading font-black text-secondary/20 mb-4">{item.step}</div>
                <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-primary">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-4">
              Why Trust ATS?
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              We're built on transparency, accountability, and zero-compromise data privacy. Every guard, every camera feed, every data point — fully traceable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: "End-to-End Encryption", desc: "All data — CCTV feeds, alerts, personal info — encrypted at rest and in transit." },
              { icon: Users, title: "Verified Guards", desc: "Every guard is background-checked, trained, and GPS-tracked during shifts." },
              { icon: FileText, title: "Transparent Reporting", desc: "Daily incident reports, guard attendance logs, and monthly security audits." },
              { icon: Search, title: "30-Day Retention", desc: "All CCTV footage retained for 30 days. Access anytime via your dashboard." },
            ].map((item, i) => (
              <div key={i} className="bg-navy-light/30 rounded-xl p-6 text-center hover:bg-navy-light/50 transition-colors">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Directory Preview */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-4">
              Our Service Team
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trained, verified, and ready to serve. Meet the people who keep your colonies safe.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { role: "Security Guards", count: "120+", icon: Shield },
              { role: "Control Room Operators", count: "15", icon: Radio },
              { role: "Mobile Patrol Units", count: "8", icon: Zap },
              { role: "Investigation Analysts", count: "6", icon: Eye },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <item.icon className="h-10 w-10 text-secondary mx-auto mb-3" />
                <p className="font-heading font-bold text-2xl text-foreground">{item.count}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/trust/service-directory" className="inline-flex items-center gap-2 text-secondary font-heading font-bold text-sm uppercase hover:underline">
              View Full Directory <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expansion Vision */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-6">
                Our Expansion Vision
              </h2>
              <div className="w-16 h-1 bg-secondary mb-6" />
              <p className="text-muted-foreground mb-6">
                Starting in Jaipur, we're building a scalable security network that will cover all major Tier-1 and Tier-2 cities in India within the next 3 years.
              </p>
              <div className="space-y-4">
                {[
                  { phase: "Phase 1 — Jaipur", status: "Active", desc: "30+ colonies, 120+ guards, full control room operations" },
                  { phase: "Phase 2 — Rajasthan", status: "2027", desc: "Expanding to Jodhpur, Udaipur, Kota, Ajmer" },
                  { phase: "Phase 3 — Pan-India", status: "2028", desc: "Delhi NCR, Mumbai, Bangalore, Hyderabad" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${i === 0 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground">
                        {item.phase} <span className="text-xs ml-2 px-2 py-0.5 rounded-full bg-secondary/20 text-secondary-foreground">{item.status}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 flex flex-col items-center justify-center min-h-[300px]">
              <Globe className="h-24 w-24 text-primary mb-4" />
              <p className="font-heading font-bold text-lg text-foreground">Jaipur → India</p>
              <p className="text-muted-foreground text-sm mt-1">Building a safer nation, one colony at a time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Coverage */}
      <section className="py-16 bg-primary">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-6">
            Active Coverage
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Currently operational in 30+ residential colonies across Jaipur. Check if your area is covered.
          </p>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-dark transition-colors"
          >
            <MapPin className="h-4 w-4" /> View Locations
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase mb-4">
              What Residents Say
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Sharma", colony: "Shanti Nagar Colony", quote: "Since Rakshak24x7, we've had zero unauthorized entries. The live CCTV feed on my phone gives me peace of mind even when I'm traveling." },
              { name: "Priya Gupta", colony: "Green Park Enclave", quote: "The guard tracking feature is amazing. We can see exactly where our security personnel are at all times. Truly 24x7 protection." },
              { name: "Vikram Singh", colony: "Royal Residency", quote: "The panic button saved us during an emergency. The control room responded within 90 seconds. That's the kind of speed that matters." },
            ].map((t, i) => (
              <div key={i} className="glass-card p-8">
                <p className="text-sm text-muted-foreground italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.colony}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-navy-dark">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-6">
            Ready to Secure Your Colony?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join 30+ colonies in Jaipur who trust ATS for their daily safety. Download the Rakshak app or get in touch for a custom security assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-dark transition-colors shadow-lg">
              <Smartphone className="h-4 w-4" /> Download Rakshak App
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary-foreground text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-primary-foreground/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;