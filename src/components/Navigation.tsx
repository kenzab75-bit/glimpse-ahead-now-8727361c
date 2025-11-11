import { useState, useEffect } from "react";
import { Menu, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "backdrop-blur-xl bg-background/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border-b border-white/5" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo - Premium avec effet subtil */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-3 group relative"
          >
            <div className="relative">
              <AlertTriangle className="h-7 w-7 text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]" />
            </div>
            <div className="flex items-baseline space-x-0.5">
              <span className="text-xl font-semibold tracking-tight text-foreground/95 group-hover:text-foreground transition-all duration-300">
                LemaClinic
              </span>
              <span className="text-xl font-bold tracking-tight text-primary group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.4)] transition-all duration-300">
                Truth
              </span>
            </div>
          </button>

          {/* Desktop Menu - Ultra premium */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { id: "accueil", label: "Accueil" },
              { id: "mon-histoire", label: "Mon histoire" },
              { id: "histoire", label: "Anatomie" },
              { id: "temoignages", label: "Témoignages" },
              { id: "agir", label: "Agir" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-[15px] font-medium text-muted-foreground/90 
                         transition-all duration-300 ease-out
                         hover:text-foreground
                         after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                         after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary/0 after:via-primary after:to-primary/0
                         after:transition-all after:duration-300 after:ease-out
                         hover:after:w-full
                         before:absolute before:inset-0 before:rounded-lg
                         before:bg-gradient-to-b before:from-white/0 before:to-white/0
                         before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:from-white/[0.03] hover:before:to-white/[0.01] hover:before:opacity-100"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button - Raffiné */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-white/5 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="h-5 w-5 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Mobile Menu - Premium glassmorphism */}
        {isOpen && (
          <div className="md:hidden mt-6 space-y-1 animate-fade-in">
            <div className="backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/5 p-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              {[
                { id: "accueil", label: "Accueil" },
                { id: "mon-histoire", label: "Mon histoire" },
                { id: "histoire", label: "Anatomie" },
                { id: "temoignages", label: "Témoignages" },
                { id: "agir", label: "Agir" },
                { id: "contact", label: "Contact" }
              ].map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium
                           text-muted-foreground/90 hover:text-foreground
                           hover:bg-white/[0.03] transition-all duration-300
                           border border-transparent hover:border-white/5"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: 'fade-in 0.3s ease-out forwards'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
