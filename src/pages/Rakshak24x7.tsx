import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const Rakshak24x7 = () => {
  return (
    <div>
      <HeroBanner title="Rakshak24x7" subtitle="Round-the-clock security services tailored to your needs." backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Comprehensive Security Solutions</h2>
          <p className="text-muted-foreground leading-relaxed">
            Rakshak24x7 provides 24/7 security guard services, mobile patrols, and integrated surveillance for residential, commercial, and industrial clients. Our trained personnel ensure complete peace of mind around the clock.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Rakshak24x7;
