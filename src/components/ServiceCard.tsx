import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  to: string;
  icon: ReactNode;
  description?: string;
}

const ServiceCard = ({ title, to, icon, description }: ServiceCardProps) => {
  return (
    <Link to={to} className="group bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border hover:border-secondary">
      <div className="p-6 flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
          <span className="text-primary-foreground group-hover:text-secondary-foreground transition-colors">{icon}</span>
        </div>
        <h3 className="font-heading font-bold text-foreground uppercase text-sm tracking-wider mb-2">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </Link>
  );
};

export default ServiceCard;
