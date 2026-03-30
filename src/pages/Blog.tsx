import HeroBanner from "@/components/HeroBanner";
import { Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const blogPosts = [
  { title: "2026 FIFA World Cup: Multi-City Risk Considerations", date: "March 19, 2026", category: "Paladin Risk Solutions", excerpt: "The 2026 FIFA World Cup will span multiple major North American cities..." },
  { title: "Rising Threat Environment Targeting Data Centers", date: "March 17, 2026", category: "Paladin Risk Solutions", excerpt: "Data centers and technology infrastructure are no longer viewed solely as back-end corporate assets..." },
  { title: "Insider Threats: The Hidden Risk Within Modern Organizations", date: "March 2, 2026", category: "Paladin Risk Solutions", excerpt: "Insider threats remain one of the most complex and damaging risks facing modern organizations..." },
  { title: "Early Season Wildfire Risk in North America", date: "February 2026", category: "Security Prevention", excerpt: "With changing climate patterns, wildfire season is starting earlier and lasting longer..." },
  { title: "Ransomware Risk in Canada: What Organizations Should Expect", date: "January 2026", category: "Security Prevention", excerpt: "Ransomware attacks continue to escalate in frequency and sophistication across Canada..." },
  { title: "What Canadian Colleges and Universities Should Prepare For Next", date: "January 2026", category: "Security Prevention", excerpt: "Post-secondary institutions face an evolving threat landscape that requires proactive security measures..." },
];

const Blog = () => {
  return (
    <div>
      <HeroBanner title="Blog & Security Insights" subtitle="Stay informed with the latest security tips, career advice, and industry insights." backgroundImage={heroBg} />
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-xl transition-all group cursor-pointer">
                <div className="h-48 bg-primary flex items-center justify-center">
                  <Shield className="h-16 w-16 text-primary-foreground/30" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-secondary font-semibold uppercase mb-2">{post.category}</p>
                  <h3 className="font-heading font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{post.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-sm font-heading font-bold text-secondary uppercase">Read More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
