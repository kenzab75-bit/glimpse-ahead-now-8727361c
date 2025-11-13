import { useState, MouseEvent, FocusEvent } from "react";
import { Menu, X, Scale, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useMotionPreferences } from "@/context/MotionContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInformerDropdownOpen, setIsInformerDropdownOpen] = useState(false);
  const [isTemoignagesDropdownOpen, setIsTemoignagesDropdownOpen] = useState(false);
  const [isMobileInformerOpen, setIsMobileInformerOpen] = useState(false);
  const [isMobileTemoignagesOpen, setIsMobileTemoignagesOpen] = useState(false);
  const { y } = useScrollPosition();
  const isScrolled = y > 20;
  const { reducedMotion, preference, setPreference } = useMotionPreferences();

  const closeMenus = () => {
    setIsOpen(false);
    setIsInformerDropdownOpen(false);
    setIsTemoignagesDropdownOpen(false);
    setIsMobileInformerOpen(false);
    setIsMobileTemoignagesOpen(false);
  };

  const navigateTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
      closeMenus();
    }
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    navigateTo(id);
  };

  const cycleMotionPreference = () => {
    const nextPreference =
      preference === "system"
        ? "reduce"
        : preference === "reduce"
          ? "allow"
          : "system";
    setPreference(nextPreference);
  };

  const motionLabel = {
    system: "Animations : système",
    reduce: "Animations réduites",
    allow: "Animations actives",
  } as const;

  const informerMenuId = "navigation-informer-menu";
  const temoignagesMenuId = "navigation-temoignages-menu";
  const mobileMenuId = "navigation-mobile-menu";
  const mobileInformerMenuId = "navigation-mobile-informer";
  const mobileTemoignagesMenuId = "navigation-mobile-temoignages";
  const mobileToggleLabel = isOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation";

  const handleInformerBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsInformerDropdownOpen(false);
    }
  };

  const handleTemoignagesBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsTemoignagesDropdownOpen(false);
    }
  };

  return (
    <nav
      aria-label="Navigation principale"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "backdrop-blur-xl bg-background/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo - Modern Design avec effet premium */}
          <a
            href="#accueil"
            onClick={(event) => handleNavigation(event, "accueil")}
            className="flex items-center gap-3 group relative px-3 py-2 rounded-xl transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.03] hover:to-white/[0.01] hover:backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {/* Icône de balance avec conteneur glassmorphism */}
            <div className="relative">
              {/* Glow effect derrière l'icône */}
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Conteneur glassmorphism pour l'icône */}
              <div className="relative glass-strong rounded-lg p-2 border border-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                <Scale className="h-6 w-6 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-[5deg]" strokeWidth={2.5} />
              </div>
            </div>
            
            {/* Texte du logo */}
            <div className="flex items-center gap-1 relative">
              <span className="text-2xl font-black tracking-tight text-foreground transition-all duration-300 group-hover:text-foreground/95">
                LemaClinic
              </span>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_12px_rgba(220,38,38,0.6)] transition-all duration-300">
                Truth
              </span>
              
              {/* Underline effect */}
              <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
            </div>
          </a>

          {/* Desktop Menu - Ultra premium */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#accueil"
              onClick={(event) => handleNavigation(event, "accueil")}
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
            </a>
            <a
              href="#mon-histoire"
              onClick={(event) => handleNavigation(event, "mon-histoire")}
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
            </a>
            {/* S'informer avec dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsInformerDropdownOpen(true)}
              onMouseLeave={() => setIsInformerDropdownOpen(false)}
              onFocus={() => setIsInformerDropdownOpen(true)}
              onBlur={handleInformerBlur}
            >
              <button
                type="button"
                onClick={() => navigateTo("histoire")}
                aria-haspopup="true"
                aria-expanded={isInformerDropdownOpen}
                aria-controls={informerMenuId}
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
              
              {/* Zone invisible pour garder le dropdown ouvert */}
              <div className="absolute top-full left-0 right-0 h-2"></div>
              
              {/* Dropdown menu */}
              {isInformerDropdownOpen && (
                <div
                  id={informerMenuId}
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-52 backdrop-blur-xl bg-background/95 rounded-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden animate-fade-in z-[60]"
                >
                  <a
                    href="#histoire"
                    role="menuitem"
                    onClick={(event) => handleNavigation(event, "histoire")}
                    className="block w-full text-left px-4 py-3 text-[15px] font-medium text-muted-foreground/90 hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
                  >
                    Le piège
                  </a>
                  <a
                    href="#vos-droits"
                    role="menuitem"
                    onClick={(event) => handleNavigation(event, "vos-droits")}
                    className="block w-full text-left px-4 py-3 text-[15px] font-medium text-muted-foreground/90 hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
                  >
                    Vos droits
                  </a>
                </div>
              )}
            </div>
            
            {/* Témoignages avec dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsTemoignagesDropdownOpen(true)}
              onMouseLeave={() => setIsTemoignagesDropdownOpen(false)}
              onFocus={() => setIsTemoignagesDropdownOpen(true)}
              onBlur={handleTemoignagesBlur}
            >
              <button
                type="button"
                onClick={() => navigateTo("temoignages")}
                aria-haspopup="true"
                aria-expanded={isTemoignagesDropdownOpen}
                aria-controls={temoignagesMenuId}
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
              
              {/* Zone invisible pour garder le dropdown ouvert */}
              <div className="absolute top-full left-0 right-0 h-2"></div>
              
              {/* Dropdown menu */}
              {isTemoignagesDropdownOpen && (
                <div
                  id={temoignagesMenuId}
                  role="menu"
                  className="absolute top-full left-0 mt-2 w-52 backdrop-blur-xl bg-background/95 rounded-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden animate-fade-in z-[60]"
                >
                  <a
                    href="#temoignages"
                    role="menuitem"
                    onClick={(event) => handleNavigation(event, "temoignages")}
                    className="block w-full text-left px-4 py-3 text-[15px] font-medium text-muted-foreground/90 hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
                  >
                    Voir les témoignages
                  </a>
                  <a
                    href="#agir"
                    role="menuitem"
                    onClick={(event) => handleNavigation(event, "agir")}
                    className="block w-full text-left px-4 py-3 text-[15px] font-medium text-muted-foreground/90 hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
                  >
                    Agir
                  </a>
                </div>
              )}
            </div>

            {/* Contact button - Plus visible */}
            <a
              href="#contact"
              onClick={(event) => handleNavigation(event, "contact")}
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
            </a>
            <button
              type="button"
              onClick={cycleMotionPreference}
              className="ml-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground/80 hover:text-foreground border border-white/10 rounded-lg transition-all duration-300 hover:border-white/40 hover:bg-white/[0.05]"
              aria-label={`${motionLabel[preference]} – activer l'option suivante`}
            >
              {motionLabel[preference]}
            </button>
          </div>

          {/* Mobile Menu Button - Raffiné */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-white/5 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
            aria-label={mobileToggleLabel}
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
          <div
            id={mobileMenuId}
            className="md:hidden mt-6 space-y-1 animate-fade-in"
            aria-label="Navigation principale mobile"
          >
            <div className="backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/5 p-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
              <a
                href="#accueil"
                onClick={(event) => handleNavigation(event, "accueil")}
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
              </a>
              <a
                href="#mon-histoire"
                onClick={(event) => handleNavigation(event, "mon-histoire")}
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
              </a>
              
              {/* S'informer with sub-menu */}
              <button
                type="button"
                onClick={() => setIsMobileInformerOpen(!isMobileInformerOpen)}
                aria-expanded={isMobileInformerOpen}
                aria-controls={mobileInformerMenuId}
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
                <div id={mobileInformerMenuId} className="ml-4 space-y-1 animate-fade-in">
                  <a
                    href="#histoire"
                    onClick={(event) => handleNavigation(event, "histoire")}
                    className="block w-full text-left px-4 py-2 rounded-xl text-[14px] font-medium
                             text-muted-foreground/80 hover:text-foreground
                             hover:bg-white/[0.03] transition-all duration-300"
                  >
                    → Le piège
                  </a>
                  <a
                    href="#vos-droits"
                    onClick={(event) => handleNavigation(event, "vos-droits")}
                    className="block w-full text-left px-4 py-2 rounded-xl text-[14px] font-medium
                             text-muted-foreground/80 hover:text-foreground
                             hover:bg-white/[0.03] transition-all duration-300"
                  >
                    → Vos droits
                  </a>
                </div>
              )}
              
              {/* Témoignages with sub-menu */}
              <button
                type="button"
                onClick={() => setIsMobileTemoignagesOpen(!isMobileTemoignagesOpen)}
                aria-expanded={isMobileTemoignagesOpen}
                aria-controls={mobileTemoignagesMenuId}
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
                <div id={mobileTemoignagesMenuId} className="ml-4 space-y-1 animate-fade-in">
                  <a
                    href="#temoignages"
                    onClick={(event) => handleNavigation(event, "temoignages")}
                    className="block w-full text-left px-4 py-2 rounded-xl text-[14px] font-medium
                             text-muted-foreground/80 hover:text-foreground
                             hover:bg-white/[0.03] transition-all duration-300"
                  >
                    → Voir les témoignages
                  </a>
                  <a
                    href="#agir"
                    onClick={(event) => handleNavigation(event, "agir")}
                    className="block w-full text-left px-4 py-2 rounded-xl text-[14px] font-medium
                             text-muted-foreground/80 hover:text-foreground
                             hover:bg-white/[0.03] transition-all duration-300"
                  >
                    → Agir
                  </a>
                </div>
              )}
              <a
                href="#contact"
                onClick={(event) => handleNavigation(event, "contact")}
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
              </a>
              <button
                type="button"
                onClick={() => {
                  cycleMotionPreference();
                  setTimeout(() => {
                    if (typeof document !== "undefined") {
                      document.getElementById(mobileMenuId)?.focus();
                    }
                  }, 0);
                }}
                className="w-full px-4 py-3 rounded-xl text-[14px] font-semibold text-muted-foreground/80 border border-white/10 hover:border-white/40 hover:text-foreground hover:bg-white/[0.05] transition-all duration-300"
                style={{
                  animationDelay: '300ms',
                  animation: 'fade-in 0.3s ease-out forwards'
                }}
                aria-label={`${motionLabel[preference]} – activer l'option suivante`}
              >
                {motionLabel[preference]}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
