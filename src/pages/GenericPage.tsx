import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const GenericPage = ({ title, content }: { title: string; content: string }) => {
  return (
    <div>
      <HeroBanner title={title} backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container">
          <div className="prose max-w-3xl text-muted-foreground">
            <p>{content}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const HistoryPage = () => (
  <GenericPage title="Our History" content="Paladin Security was founded in 1976 and has grown to become Canada's largest independently owned security company. Over the decades, we've built our reputation on exceptional service, innovation, and a genuine commitment to our people and communities. From humble beginnings in British Columbia, Paladin has expanded coast to coast, serving thousands of clients across healthcare, education, government, retail, and many other sectors. Our promotion-from-within philosophy has been a cornerstone of our success, developing leaders at every level of the organization." />
);

export const MediaRelations = () => (
  <GenericPage title="Media Relations" content="For media inquiries, please contact our communications team. Paladin Security is committed to transparency and is happy to provide expert commentary on security-related topics. Our communications team works with media outlets across Canada to share insights on security trends, best practices, and community safety initiatives." />
);

export const PrivacyPolicy = () => (
  <GenericPage title="Privacy Policy" content="Paladin Security Group is committed to protecting the privacy of our clients, employees, and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information. We comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation." />
);

export const KnowledgeCentre = () => (
  <GenericPage title="Knowledge Centre - Preparing an RFP?" content="If you're preparing a Request for Proposal (RFP) for security services, Paladin can help. We've responded to thousands of RFPs and understand what makes a comprehensive security proposal. Our team can help you develop clear requirements, evaluation criteria, and service level expectations to ensure you select the right security partner." />
);

export const FindYourFit = () => (
  <GenericPage title="Find Your Fit" content="Not sure which security career path is right for you? At Paladin, we offer diverse career opportunities across multiple sectors and specializations. Whether you're interested in healthcare security, mobile patrol, loss prevention, or operations management, we have a role that matches your skills and aspirations. Take the first step toward a rewarding career in security." />
);

export const LawEnforcement = () => (
  <GenericPage title="Law Enforcement" content="Paladin Security maintains strong partnerships with law enforcement agencies across Canada. Many of our officers go on to pursue careers in policing, and our training programs are designed to provide a strong foundation for those interested in law enforcement careers. Our Path to Policing program helps aspiring officers gain valuable experience and skills." />
);

export const PropertyManagement = () => (
  <GenericPage title="Property Management Security" content="Paladin provides comprehensive security solutions for property management companies. Our services include concierge security, mobile patrols, access control, and emergency response for residential and commercial properties. We work closely with property managers to create customized security plans that enhance tenant safety and property value." />
);

export default GenericPage;
