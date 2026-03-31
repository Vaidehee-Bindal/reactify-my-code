import { MapPin, CheckCircle, Phone } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const areas = [
  { zone: "Jaipur South", colonies: ["Shanti Nagar Colony", "Green Park Enclave", "Royal Residency", "Sunrise Apartments", "Laxmi Vihar", "Mahalaxmi Nagar", "Vaishali Colony", "Pratap Enclave"] },
  { zone: "Jaipur West", colonies: ["Jagatpura Heights", "Durgapura Gardens", "Sanganer Residency", "Mansarovar Extension", "New Colony Ajmer Road", "Khatipura Township"] },
  { zone: "Jaipur East", colonies: ["Sitapura Industrial Area", "Agra Road Residency", "Transport Nagar Colony", "Jhotwara Housing", "Amber Tower Society", "Nahargarh View Apartments"] },
  { zone: "Jaipur North", colonies: ["Civil Lines Colony", "Bani Park Society", "Gopalpura Bypass Residency", "Sodala Township", "Jyoti Nagar", "Raja Park Extension", "Tilak Nagar Colony", "Adarsh Nagar Enclave", "Vidhyadhar Nagar Colony", "Murlipura Heights"] },
];

const Locations = () => {
  return (
    <div>
      <HeroBanner
        title="Our Coverage Areas"
        subtitle="Currently operational across 30+ colonies in Jaipur. Check if your area is covered or request onboarding."
        backgroundImage={heroBg}
      />

      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, i) => (
              <div key={i} className="glass-card p-8">
                <div className="flex items-center gap-3 mb-5">
                  <MapPin className="h-6 w-6 text-secondary" />
                  <h3 className="font-heading font-bold text-xl text-foreground">{area.zone}</h3>
                </div>
                <ul className="space-y-2">
                  {area.colonies.map((colony, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {colony}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 glass-card p-8 text-center">
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Colony Not Listed?</h3>
            <p className="text-muted-foreground mb-6">We're expanding fast! Contact us to request Rakshak24x7 for your colony.</p>
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gold-dark transition-colors">
              <Phone className="h-4 w-4" /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;