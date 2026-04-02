import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";
import { MapPin } from "lucide-react";

const locations = [
  { city: "New Delhi", address: "Connaught Place, New Delhi 110001" },
  { city: "Mumbai", address: "Bandra Kurla Complex, Mumbai 400051" },
  { city: "Bangalore", address: "Whitefield, Bangalore 560066" },
  { city: "Hyderabad", address: "HITEC City, Hyderabad 500081" },
];

const Location = () => {
  return (
    <div>
      <HeroBanner title="Our Locations" subtitle="Find us across India." backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container">
          {/* Map placeholder */}
          <div className="w-full h-80 rounded-lg bg-muted border border-border flex items-center justify-center mb-12">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-3 text-secondary" />
              <p className="font-heading font-semibold">Interactive Map Coming Soon</p>
              <p className="text-sm">Google Maps integration will be added here</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-card border border-border rounded-lg p-6">
                <MapPin className="h-5 w-5 text-secondary mb-2" />
                <h3 className="font-heading font-bold text-foreground">{loc.city}</h3>
                <p className="text-sm text-muted-foreground mt-1">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
