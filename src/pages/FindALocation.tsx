import HeroBanner from "@/components/HeroBanner";
import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const locations = [
  { city: "Vancouver", province: "BC", slug: "security-company-vancouver" },
  { city: "Victoria", province: "BC", slug: "security-company-victoria" },
  { city: "Kelowna", province: "BC", slug: "security-company-kelowna" },
  { city: "Kamloops", province: "BC", slug: "security-company-kamloops" },
  { city: "Nanaimo", province: "BC", slug: "security-company-nanaimo" },
  { city: "Prince George", province: "BC", slug: "security-company-prince-george" },
  { city: "Calgary", province: "AB", slug: "security-company-calgary" },
  { city: "Edmonton", province: "AB", slug: "security-company-edmonton" },
  { city: "Red Deer", province: "AB", slug: "security-company-red-deer" },
  { city: "Lethbridge", province: "AB", slug: "security-company-lethbridge" },
  { city: "Grande Prairie", province: "AB", slug: "security-company-grande-prairie" },
  { city: "Fort McMurray", province: "AB", slug: "security-company-fort-mcmurray" },
  { city: "Saskatoon", province: "SK", slug: "security-company-saskatoon" },
  { city: "Regina", province: "SK", slug: "security-company-regina" },
  { city: "Winnipeg", province: "MB", slug: "security-company-winnipeg" },
  { city: "Brandon", province: "MB", slug: "security-company-brandon" },
  { city: "Toronto", province: "ON", slug: "security-company-toronto" },
  { city: "Ottawa", province: "ON", slug: "security-company-ottawa" },
  { city: "Hamilton", province: "ON", slug: "security-company-hamilton" },
  { city: "London", province: "ON", slug: "security-company-london" },
  { city: "Kingston", province: "ON", slug: "security-company-kingston" },
  { city: "Kitchener", province: "ON", slug: "security-company-kitchener" },
  { city: "Windsor", province: "ON", slug: "security-company-windsor" },
  { city: "Thunder Bay", province: "ON", slug: "security-company-thunder-bay" },
  { city: "Niagara Falls", province: "ON", slug: "security-company-niagara-falls" },
  { city: "Sarnia", province: "ON", slug: "security-company-sarnia" },
  { city: "Halifax", province: "NS", slug: "security-company-halifax" },
  { city: "Moncton", province: "NB", slug: "security-company-moncton" },
  { city: "St. John's", province: "NL", slug: "security-company-st-johns" },
];

const provinces = [...new Set(locations.map((l) => l.province))];

const FindALocation = () => {
  return (
    <div>
      <HeroBanner title="Find a Paladin Security Location" subtitle="Coast to coast coverage across Canada" backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <Link to="/find-a-location" className="px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors">
              Contact Us For A Quote
            </Link>
          </div>

          {provinces.map((prov) => (
            <div key={prov} className="mb-10">
              <h3 className="font-heading text-xl font-bold text-foreground uppercase mb-4 border-b-2 border-secondary pb-2 inline-block">
                {prov === "BC" ? "British Columbia" : prov === "AB" ? "Alberta" : prov === "SK" ? "Saskatchewan" : prov === "MB" ? "Manitoba" : prov === "ON" ? "Ontario" : prov === "NS" ? "Nova Scotia" : prov === "NB" ? "New Brunswick" : "Newfoundland & Labrador"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {locations.filter((l) => l.province === prov).map((loc) => (
                  <Link key={loc.slug} to={`/locations/${loc.slug}`} className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-sm border border-border hover:border-secondary hover:shadow-md transition-all group">
                    <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                    <div>
                      <span className="font-heading font-semibold text-foreground group-hover:text-secondary transition-colors">{loc.city}</span>
                      <span className="text-sm text-muted-foreground ml-2">{loc.province}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FindALocation;
