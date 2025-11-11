import { useState, useEffect } from "react";
import { Menu, X, AlertTriangle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInformerDropdownOpen, setIsInformerDropdownOpen] = useState(false);
  const [isTemoignagesDropdownOpen, setIsTemoignagesDropdownOpen] = useState(false);
  const [isMobileInformerOpen, setIsMobileInformerOpen] = useState(false);
  const [isMobileTemoignagesOpen, setIsMobileTemoignagesOpen] = useState(false);

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
      setIsInformerDropdownOpen(false);
      setIsTemoignagesDropdownOpen(false);
      setIsMobileInformerOpen(false);
      setIsMobileTemoignagesOpen(false);
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
              <span className="text-xl font-black tracking-tight text-foreground/95 group-hover:text-foreground transition-all duration-300">
                LemaClinic
              </span>
              <span className="text-xl font-black tracking-tight text-primary group-hover:drop-shadow-[0_0_8px_rgba(220,38,38,0.4)] transition-all duration-300">
                Truth
              </span>
            </div>
          </button>

          {/* Desktop Menu - Ultra premium */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection("accueil")}
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
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("mon-histoire")}
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
              Mon histoire
            </button>
            {/* S'informer avec dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsInformerDropdownOpen(true)}
              onMouseLeave={() => setIsInformerDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection("histoire")}
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
                         hover:before:from-white/[0.03] hover:before:to-white/[0.01] hover:before:opacity-100
                         flex items-center gap-1"
              >
                S'informer
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isInformerDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown menu */}
              {isInformerDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 backdrop-blur-xl bg-background rounded-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden animate-fade-in z-[60]">
                  <button
                    onClick={() => scrollToSection("histoire")}
                    className="block w-full text-left px-4 py-3 text-[15px] font-medium text-muted-foreground/90 hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
                  >
                    Le piège
                  </button>
                  <button
                    onClick={() => scrollToSection("vos-droits")}
                    className="block w-full text-left px-4 py-3 text-[15px] font-medium text-muted-foreground/90 hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
                  >
                    Vos droits
                  </button>
                </div>
              )}
            </div>
            
            {/* Témoignages avec dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsTemoignagesDropdownOpen(true)}
              onMouseLeave={() => setIsTemoignagesDropdownOpen(false)}
            >
              <button
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
                         hover:before:from-white/[0.03] hover:before:to-white/[0.01] hover:before:opacity-100
                         flex items-center gap-1"
              >
                Témoignages
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isTemoignagesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown menu */}
              {isTemoignagesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 backdrop-blur-xl bg-background rounded-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden animate-fade-in z-[60]">
                  <button
                    onClick={() => scrollToSection("temoignages")}
                    className="block w-full text-left px-4 py-3 text-[15px] font-medium text-muted-foreground/90 hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
                  >
                    Voir les témoignages
                  </button>
                  <button
                    onClick={() => scrollToSection("agir")}
                    className="block w-full text-left px-4 py-3 text-[15px] font-medium text-muted-foreground/90 hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
                  >
                    Agir
                  </button>
                </div>
              )}
            </div>

            {/* Contact button - Plus visible */}
            <button
              onClick={() => scrollToSection("contact")}
              className="relative px-5 py-2 ml-2 text-[15px] font-semibold
                       bg-primary/10 text-primary border border-primary/30
                       rounded-lg transition-all duration-300 ease-out
                       hover:bg-primary hover:text-primary-foreground hover:border-primary
                       hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]
                       hover:scale-105
                       before:absolute before:inset-0 before:rounded-lg
                       before:bg-gradient-to-b before:from-white/10 before:to-white/0
                       before:opacity-0 before:transition-opacity before:duration-300
                       hover:before:opacity-100"
            >
              Contact
            </button>
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
              <button
                onClick={() => scrollToSection("accueil")}
                className="block w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium
                         text-muted-foreground/90 hover:text-foreground
                         hover:bg-white/[0.03] transition-all duration-300
                         border border-transparent hover:border-white/5"
                style={{
                  animationDelay: '0ms',
                  animation: 'fade-in 0.3s ease-out forwards'
                }}
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("mon-histoire")}
                className="block w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium
                         text-muted-foreground/90 hover:text-foreground
                         hover:bg-white/[0.03] transition-all duration-300
                         border border-transparent hover:border-white/5"
                style={{
                  animationDelay: '50ms',
                  animation: 'fade-in 0.3s ease-out forwards'
                }}
              >
                Mon histoire
              </button>
              
              {/* S'informer with sub-menu */}
              <button
                onClick={() => setIsMobileInformerOpen(!isMobileInformerOpen)}
                className="block w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium
                         text-muted-foreground/90 hover:text-foreground
                         hover:bg-white/[0.03] transition-all duration-300
                         border border-transparent hover:border-white/5 flex items-center justify-between"
                style={{
                  animationDelay: '100ms',
                  animation: 'fade-in 0.3s ease-out forwards'
                }}
              >
                S'informer
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileInformerOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileInformerOpen && (
                <div className="ml-4 space-y-1 animate-fade-in">
                  <button
                    onClick={() => scrollToSection("histoire")}
                    className="block w-full text-left px-4 py-2 rounded-xl text-[14px] font-medium
                             text-muted-foreground/80 hover:text-foreground
                             hover:bg-white/[0.03] transition-all duration-300"
                  >
                    → Le piège
                  </button>
                  <button
                    onClick={() => scrollToSection("vos-droits")}
                    className="block w-full text-left px-4 py-2 rounded-xl text-[14px] font-medium
                             text-muted-foreground/80 hover:text-foreground
                             hover:bg-white/[0.03] transition-all duration-300"
                  >
                    → Vos droits
                  </button>
                </div>
              )}
              
              {/* Témoignages with sub-menu */}
              <button
                onClick={() => setIsMobileTemoignagesOpen(!isMobileTemoignagesOpen)}
                className="block w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium
                         text-muted-foreground/90 hover:text-foreground
                         hover:bg-white/[0.03] transition-all duration-300
                         border border-transparent hover:border-white/5 flex items-center justify-between"
                style={{
                  animationDelay: '150ms',
                  animation: 'fade-in 0.3s ease-out forwards'
                }}
              >
                Témoignages
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isMobileTemoignagesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileTemoignagesOpen && (
                <div className="ml-4 space-y-1 animate-fade-in">
                  <button
                    onClick={() => scrollToSection("temoignages")}
                    className="block w-full text-left px-4 py-2 rounded-xl text-[14px] font-medium
                             text-muted-foreground/80 hover:text-foreground
                             hover:bg-white/[0.03] transition-all duration-300"
                  >
                    → Voir les témoignages
                  </button>
                  <button
                    onClick={() => scrollToSection("agir")}
                    className="block w-full text-left px-4 py-2 rounded-xl text-[14px] font-medium
                             text-muted-foreground/80 hover:text-foreground
                             hover:bg-white/[0.03] transition-all duration-300"
                  >
                    → Agir
                  </button>
                </div>
              )}
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 rounded-xl text-[15px] font-semibold
                         bg-primary/10 text-primary border border-primary/30
                         hover:bg-primary hover:text-primary-foreground hover:border-primary
                         transition-all duration-300 mt-2"
                style={{
                  animationDelay: '250ms',
                  animation: 'fade-in 0.3s ease-out forwards'
                }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
