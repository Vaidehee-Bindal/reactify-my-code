import { Link } from "react-router-dom";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

/* ── Shared alternating section component ── */
interface ContentSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  imageLabel: string;
  imageFirst?: boolean;
}

const AlternatingSection = ({ section, bg }: { section: ContentSection; bg?: string }) => {
  const textBlock = (
    <div className="bg-card p-10 md:p-14 flex flex-col justify-center">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground uppercase mb-2">{section.title}</h2>
      <div className="w-16 h-1 bg-primary my-4" />
      {section.paragraphs.map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p }} />
      ))}
      {section.bullets && (
        <ul className="space-y-2 text-muted-foreground">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2"><span className="text-secondary mt-1">•</span> {b}</li>
          ))}
        </ul>
      )}
    </div>
  );

  const imageBlock = (
    <div className="bg-primary min-h-[350px] flex items-center justify-center">
      <div className="text-center text-primary-foreground/30 text-lg font-heading">{section.imageLabel}</div>
    </div>
  );

  return (
    <section className={`py-16 ${bg || ""}`}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {section.imageFirst ? (
            <>{imageBlock}{textBlock}</>
          ) : (
            <>{textBlock}{imageBlock}</>
          )}
        </div>
      </div>
    </section>
  );
};

const BottomCta = ({ title, text }: { title: string; text: string }) => (
  <section className="py-16 bg-[#122C54]">
    <div className="section-container text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground uppercase mb-6">{title}</h2>
      <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">{text}</p>
      <Link to="/contact" className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded hover:bg-gold-dark transition-colors">
        Contact Us
      </Link>
    </div>
  </section>
);

/* ═══════════════ ABOUT COMPANY ═══════════════ */
export const AboutCompany = () => (
  <div>
    <HeroBanner title="About Company" subtitle="We are a leading security solutions provider dedicated to protecting people, properties, and assets across India." backgroundImage={heroBg} />
    <AlternatingSection section={{
      title: "Who We Are",
      paragraphs: [
        "We are a leading security solutions provider dedicated to protecting people, properties, and assets. Our comprehensive approach combines <strong>cutting-edge technology</strong> with highly trained professionals to deliver reliable security services.",
        "Founded with a vision to transform the security landscape in India, we have grown from a small team into a nationally recognized firm driven by trust, innovation, and service excellence.",
      ],
      imageLabel: "Company Office Image",
      imageFirst: true,
    }} />
    <AlternatingSection bg="bg-muted" section={{
      title: "Our Values",
      paragraphs: ["At the core of everything we do are values that define our identity and guide our actions every day."],
      bullets: ["Integrity in every interaction", "Commitment to excellence", "Respect for our clients and communities", "Innovation in security solutions", "Accountability at every level"],
      imageLabel: "Team Values Image",
      imageFirst: false,
    }} />
    <BottomCta title="Partner With Us" text="Discover how we can tailor a security solution for your organization." />
  </div>
);

/* ═══════════════ MISSION & VISION ═══════════════ */
export const Mission = () => (
  <div>
    <HeroBanner title="Mission & Vision" subtitle="Creating safer communities through innovative security solutions." backgroundImage={heroBg} />
    <AlternatingSection section={{
      title: "Our Mission",
      paragraphs: [
        "Our mission is to create safer communities through <strong>innovative security solutions</strong>. We strive to set the standard for excellence, integrity, and professionalism in the security industry.",
        "Every decision we make is guided by our commitment to protecting the people and places that matter most to our clients.",
      ],
      imageLabel: "Mission Image",
      imageFirst: true,
    }} />
    <AlternatingSection bg="bg-muted" section={{
      title: "Our Vision",
      paragraphs: [
        "Our vision is to be the <strong>most trusted security partner</strong> in India. We aim to lead the industry through technology adoption, world-class training, and an unwavering dedication to client success.",
        "By 2030, we envision a network of security operations spanning every major city in the country, staffed by the best-trained professionals in the field.",
      ],
      imageLabel: "Vision Image",
      imageFirst: false,
    }} />
    <BottomCta title="Join Our Mission" text="Be part of a team that's making the world safer, one community at a time." />
  </div>
);

/* ═══════════════ FOUNDING STORY ═══════════════ */
export const FoundingStory = () => (
  <div>
    <HeroBanner title="Founding Story" subtitle="From a small team to a nationally recognized security firm." backgroundImage={heroBg} />
    <AlternatingSection section={{
      title: "How It All Began",
      paragraphs: [
        "Founded with a passion for safety and a commitment to excellence, our company started with a small team of dedicated professionals. What began as a local security service quickly grew as <strong>word of our quality and reliability spread</strong>.",
        "Our founders saw a gap in the industry – a need for security services that truly cared about the communities they served. They set out to build a company where every officer would be treated as a valued team member, not just a uniform.",
      ],
      imageLabel: "Founders Image",
      imageFirst: true,
    }} />
    <AlternatingSection bg="bg-muted" section={{
      title: "Growth & Milestones",
      paragraphs: ["Over the years, we've achieved significant milestones that mark our journey from a startup to an industry leader."],
      bullets: ["2015 – Company founded with 10 security officers", "2017 – Expanded to 5 cities across Rajasthan", "2019 – Launched technology-integrated security solutions", "2021 – Crossed 500+ active clients nationwide", "2023 – Introduced ATSIntel intelligence platform", "2025 – Operating in 15+ cities with 2000+ officers"],
      imageLabel: "Milestones Image",
      imageFirst: false,
    }} />
    <BottomCta title="Be Part of Our Story" text="Join us as we continue to grow and set new standards in the security industry." />
  </div>
);

/* ═══════════════ TEAM ═══════════════ */
export const Team = () => (
  <div>
    <HeroBanner title="Our Team" subtitle="Meet the dedicated professionals behind Paladin Security." backgroundImage={heroBg} />
    <AlternatingSection section={{
      title: "Leadership That Inspires",
      paragraphs: [
        "Our leadership team brings <strong>decades of combined experience</strong> in security, law enforcement, and technology. They set the vision and culture that drives our entire organization forward.",
        "Every team member is carefully selected and rigorously trained to uphold the highest standards of professionalism and service delivery.",
      ],
      imageLabel: "Leadership Team Image",
      imageFirst: true,
    }} />
    <AlternatingSection bg="bg-muted" section={{
      title: "Our People, Our Strength",
      paragraphs: [
        "We believe our people are our greatest asset. From frontline officers to management, <strong>every individual plays a crucial role</strong> in delivering the security excellence our clients expect.",
        "We invest heavily in continuous training, career development, and creating a supportive work environment where our team can thrive.",
      ],
      imageLabel: "Team Photo Image",
      imageFirst: false,
    }} />
    <BottomCta title="Join Our Team" text="We're always looking for dedicated professionals who share our passion for safety." />
  </div>
);

/* ═══════════════ EXPANSION ═══════════════ */
export const Expansion = () => (
  <div>
    <HeroBanner title="Expansion Plan" subtitle="Growing our footprint to bring world-class security to every corner of India." backgroundImage={heroBg} />
    <AlternatingSection section={{
      title: "Rapid Growth Across India",
      paragraphs: [
        "We are <strong>rapidly expanding our footprint</strong> across India. With planned offices in 15+ new cities by next year, we aim to make world-class security services accessible to businesses and communities in every region.",
        "Our expansion strategy focuses on strategic markets where our unique blend of technology and trained personnel can make the biggest impact.",
      ],
      imageLabel: "Map Expansion Image",
      imageFirst: true,
    }} />
    <AlternatingSection bg="bg-muted" section={{
      title: "What's Next",
      paragraphs: ["Our roadmap includes ambitious goals that will shape the future of security in India."],
      bullets: ["Opening offices in Tier-2 and Tier-3 cities", "Launching mobile patrol services in rural areas", "Building regional training academies", "Expanding our technology platform nationwide", "Partnering with local law enforcement agencies"],
      imageLabel: "Future Plans Image",
      imageFirst: false,
    }} />
    <BottomCta title="Grow With Us" text="Interested in partnering or joining us in a new city? Let's talk." />
  </div>
);

/* ═══════════════ WHY TRUST US ═══════════════ */
export const WhyTrustUs = () => (
  <div>
    <HeroBanner title="Why Trust Us" subtitle="A proven track record of excellence, integrity, and client-first service." backgroundImage={heroBg} />
    <AlternatingSection section={{
      title: "Proven Track Record",
      paragraphs: [
        "With hundreds of satisfied clients and a <strong>client retention rate above 95%</strong>, our results speak for themselves. We've earned trust through consistent delivery, transparent operations, and an unwavering commitment to quality.",
        "Our certified professionals operate under rigorous quality standards, ensuring every client receives the highest level of service.",
      ],
      imageLabel: "Trust Badge Image",
      imageFirst: true,
    }} />
    <AlternatingSection bg="bg-muted" section={{
      title: "What Sets Us Apart",
      paragraphs: ["There are many reasons why organizations across India choose us as their security partner."],
      bullets: ["24/7 monitoring capabilities", "Certified and rigorously trained professionals", "Custom security plans for every client", "Transparent operations and reporting", "Industry-leading technology integration", "Rapid emergency response times"],
      imageLabel: "Excellence Image",
      imageFirst: false,
    }} />
    <BottomCta title="Experience the Difference" text="Contact us today and discover why hundreds of organizations trust us with their security." />
  </div>
);
