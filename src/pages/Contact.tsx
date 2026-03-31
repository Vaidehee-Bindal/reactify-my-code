import { useState } from "react";
import { MapPin, Phone, Mail, Send, Building2 } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const Contact = () => {
  const [formType, setFormType] = useState<"general" | "agency">("general");

  return (
    <div>
      <HeroBanner
        title="Get in Touch"
        subtitle="Whether you're a resident looking for colony security or an agency exploring ATSIntel — we'd love to hear from you."
        backgroundImage={heroBg}
      />

      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setFormType("general")}
                  className={`px-4 py-2 rounded-lg font-heading font-bold text-sm uppercase tracking-wider transition-colors ${formType === "general" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                >
                  General Inquiry
                </button>
                <button
                  onClick={() => setFormType("agency")}
                  className={`px-4 py-2 rounded-lg font-heading font-bold text-sm uppercase tracking-wider transition-colors ${formType === "agency" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                >
                  Agency Onboarding
                </button>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">
                    {formType === "agency" ? "Agency / Organization Name" : "Full Name"}
                  </label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder={formType === "agency" ? "e.g. Rajasthan Police" : "e.g. Rajesh Sharma"} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+91 98765 43210" />
                </div>
                {formType === "agency" && (
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Designation / Role</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. SP, Jaipur Rural" />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder={formType === "agency" ? "Tell us about your requirements for ATSIntel..." : "How can we help secure your colony?"} />
                </div>
                <button type="submit" className={`inline-flex items-center gap-2 px-8 py-3.5 font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-colors ${formType === "agency" ? "bg-accent text-accent-foreground hover:bg-emerald-dark" : "bg-secondary text-secondary-foreground hover:bg-gold-dark"}`}>
                  <Send className="h-4 w-4" /> {formType === "agency" ? "Request ATSIntel Access" : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-card p-8">
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">Contact Information</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">ATS Headquarters</p>
                      <p className="text-sm text-muted-foreground">2nd Floor, Ganpati Plaza, MI Road, Jaipur, Rajasthan 302001</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Building2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Control Room</p>
                      <p className="text-sm text-muted-foreground">B-12, Sitapura Industrial Area, Jaipur, Rajasthan 302022</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-secondary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-secondary transition-colors">+91 98765 43210</a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-secondary shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:info@ats-security.in" className="text-sm text-muted-foreground hover:text-secondary transition-colors">info@ats-security.in</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 bg-primary text-primary-foreground">
                <h3 className="font-heading font-bold text-xl mb-3">Emergency?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">If you're an existing Rakshak24x7 client with an active emergency, use the panic button in your app or call our 24x7 control room directly.</p>
                <a href="tel:+919876543211" className="inline-flex items-center gap-2 px-6 py-3 bg-destructive text-destructive-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg">
                  <Phone className="h-4 w-4" /> Emergency Hotline
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;