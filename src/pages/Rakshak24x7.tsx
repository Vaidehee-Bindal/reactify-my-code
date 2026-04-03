import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const Rakshak24x7 = () => {
  return (
    <div>
      <HeroBanner
        title="Rakshak24x7"
        subtitle="Our security officers are dedicated to making the world a safer and friendlier place. Our tailored and strategic staffing approach ensures you get the perfect fit for the job, providing peace of mind and confidence in your safety."
        backgroundImage={heroBg}
        showCta
      />

      {/* Your Success, Our Commitment */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <div className="bg-primary min-h-[350px] flex items-center justify-center">
              <div className="text-center text-primary-foreground/30 text-lg font-heading">Security Officer Image</div>
            </div>
            <div className="bg-card p-10 md:p-14 flex flex-col justify-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase mb-2">
                Your Success, Our Commitment
              </h2>
              <div className="w-16 h-1 bg-primary my-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Paladin, we see you as a trusted partner, not a number. We get it – every facility has its own distinct security needs, and that's why <strong>we're all about customizing a security plan</strong> that's just right for your site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our security officers are championed by top-of-the-line training and an outstanding leadership team that's got their back. We truly believe that when our security officers shine, your facility thrives – and that's what we care about: <strong>your success.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Security Officers */}
      <section className="py-16 bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <div className="bg-card p-10 md:p-14 flex flex-col justify-center order-2 md:order-1">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase mb-2">
                Professional Security Officers
              </h2>
              <div className="w-16 h-1 bg-primary my-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're your one-stop shop for comprehensive security solutions, and our security officers are second to none when it comes to performance. Thanks to our rigorous selection process of <strong>handpicked talent</strong>, <strong>training excellence</strong>, and <strong>investment in success</strong>, we proudly boast the highest client retention rate in the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Here's a glimpse of what we bring to the table:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Facility Security Management</li>
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Customer Service & Wayfinding</li>
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> First Aid & Safety</li>
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Security Ambassadors</li>
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Compliance and Enforcement</li>
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Incident Management & Response</li>
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Access Control</li>
              </ul>
            </div>
            <div className="bg-primary min-h-[350px] flex items-center justify-center order-1 md:order-2">
              <div className="text-center text-primary-foreground/30 text-lg font-heading">Officer Portrait Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Staffing Services */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <div className="bg-primary min-h-[350px] flex items-center justify-center">
              <div className="text-center text-primary-foreground/30 text-lg font-heading">Team Image</div>
            </div>
            <div className="bg-card p-10 md:p-14 flex flex-col justify-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase mb-2">
                Security Staffing Services
              </h2>
              <div className="w-16 h-1 bg-primary my-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                We can provide all security departmental roles, from security officers to positions of leadership. We have the training standards and systems for each level, and can confidently supply our team with additional tools and defensive equipment if desired.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Complementing our security guard services, we offer:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Security operations centres</li>
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Mobile and bike patrol</li>
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Visitor screening and front door ambassador services</li>
                <li className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> Emergency, on-demand, and surge capacity coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-6">
            Ready to Secure Your Facility?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your security needs and get a customized plan for your facility.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Rakshak24x7;
