import { useState } from "react";
import { LogIn, Lock, Mail, Eye, EyeOff } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import heroBg from "@/assets/hero-bg.jpg";

const Dashboard = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <HeroBanner
        title="Dashboard Login"
        subtitle="Access your Rakshak24x7 colony dashboard or ATSIntel intelligence platform."
        backgroundImage={heroBg}
      />

      <section className="py-20">
        <div className="section-container max-w-md">
          <div className="glass-card p-8">
            <div className="text-center mb-8">
              <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-foreground">Sign In</h2>
              <p className="text-sm text-muted-foreground mt-1">Enter your credentials to access the dashboard</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input type="email" className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input type={showPassword ? "text" : "password"} className="w-full pl-10 pr-12 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-navy-light transition-colors">
                <LogIn className="h-4 w-4" /> Sign In
              </button>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-6">
              Don't have access? <a href="/contact" className="text-secondary hover:underline font-semibold">Contact us</a> to get onboarded.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;