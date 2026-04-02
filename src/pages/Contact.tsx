import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <HeroBanner title="Contact Us" subtitle="Get in touch with our team." backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Reach Out</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm resize-none" />
              <button type="submit" className="w-full bg-secondary text-secondary-foreground font-semibold py-3 rounded-md hover:bg-gold-dark transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
