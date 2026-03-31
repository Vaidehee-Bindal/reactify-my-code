import { useState, useEffect } from "react";
import { X, MessageCircle, Smartphone } from "lucide-react";

const FloatingElements = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <>
      {/* Download Popup */}
      {showPopup && !dismissed && (
        <div className="fixed bottom-24 right-6 z-50 glass-card p-5 max-w-xs animate-fade-in shadow-2xl">
          <button onClick={() => { setShowPopup(false); setDismissed(true); }} className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-secondary-foreground" />
            </div>
            <p className="font-heading font-bold text-sm text-foreground">Secure your colony now!</p>
          </div>
          <p className="text-xs text-muted-foreground mb-4">Download Rakshak24x7 and get 24/7 surveillance, instant alerts & guard tracking.</p>
          <div className="flex gap-2">
            <a href="#" className="flex-1 text-center px-3 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-lg hover:bg-navy-light transition-colors">
              Play Store
            </a>
            <a href="#" className="flex-1 text-center px-3 py-2 bg-primary text-primary-foreground text-xs font-bold rounded-lg hover:bg-navy-light transition-colors">
              App Store
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210?text=Hi%20ATS%2C%20I%20need%20help%20with%20security%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </>
  );
};

export default FloatingElements;