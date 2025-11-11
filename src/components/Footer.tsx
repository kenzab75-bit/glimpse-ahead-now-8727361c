import { AlertTriangle } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">LemaClinic Truth</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { id: "hero", label: "Home" },
                { id: "whistleblow", label: "Whistleblow" },
                { id: "stories", label: "Stories" },
                { id: "faq", label: "FAQ" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} LemaClinic Truth. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Dedicated to exposing medical malpractice and protecting whistleblowers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
