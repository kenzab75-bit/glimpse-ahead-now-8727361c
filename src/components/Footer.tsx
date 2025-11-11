import { AlertTriangle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">LemaClinic Truth</span>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#mon-histoire", label: "Mon histoire" },
                { href: "#s-informer", label: "S'informer" },
                { href: "#agir", label: "Agir" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LemaClinic Truth. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Révéler la vérité et défendre les victimes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
