import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const AboutPage = ({ title, content }: { title: string; content: string }) => (
  <div>
    <HeroBanner title={title} backgroundImage={heroBg} />
    <section className="py-16">
      <div className="section-container max-w-3xl">
        <p className="text-muted-foreground leading-relaxed">{content}</p>
      </div>
    </section>
  </div>
);

export const AboutCompany = () => (
  <AboutPage title="About Company" content="We are a leading security solutions provider dedicated to protecting people, properties, and assets. Our comprehensive approach combines cutting-edge technology with highly trained professionals to deliver reliable security services across India." />
);

export const Mission = () => (
  <AboutPage title="Mission & Vision" content="Our mission is to create safer communities through innovative security solutions. Our vision is to be the most trusted security partner in India, setting the standard for excellence, integrity, and professionalism in the security industry." />
);

export const FoundingStory = () => (
  <AboutPage title="Founding Story" content="Founded with a passion for safety and a commitment to excellence, our company started with a small team of dedicated professionals. Over the years, we've grown into a nationally recognized security firm, driven by our core values of trust, innovation, and service." />
);

export const Team = () => (
  <AboutPage title="Our Team" content="Our leadership team brings decades of combined experience in security, law enforcement, and technology. Every team member is carefully selected and rigorously trained to uphold the highest standards of professionalism and service delivery." />
);

export const Expansion = () => (
  <AboutPage title="Expansion Plan" content="We are rapidly expanding our footprint across India. With planned offices in 15+ new cities by next year, we aim to make world-class security services accessible to businesses and communities in every region of the country." />
);

export const WhyTrustUs = () => (
  <AboutPage title="Why Trust Us" content="With a proven track record, certified professionals, 24/7 monitoring capabilities, and a client-first approach, we've earned the trust of hundreds of organizations. Our transparent operations and rigorous quality standards set us apart from the competition." />
);
