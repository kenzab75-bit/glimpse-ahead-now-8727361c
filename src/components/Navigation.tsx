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

  const linkClasses =
    "relative px-4 py-2 text-[15px] font-medium text-foreground/80 transition-colors duration-200 rounded-lg hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-secondary/50";
  const dropdownLinkClasses =
    "block w-full text-left px-4 py-3 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-secondary/50 transition-colors duration-200";
  const mobileLinkClasses =
    "block w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium text-foreground/75 hover:text-foreground hover:bg-secondary/40 transition-colors duration-200 border border-transparent hover:border-accent/30";
  const mobileSubLinkClasses =
    "block w-full text-left px-4 py-2 rounded-xl text-[14px] font-medium text-foreground/70 hover:text-foreground hover:bg-secondary/40 transition-colors duration-200";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "backdrop-blur-xl bg-background/88 border-b border-accent/20 shadow-[0_12px_32px_rgba(8,12,20,0.45)]"
          : "bg-gradient-to-b from-background/95 via-background/70 to-transparent"
      }`}
    >
      <div className="container mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Modern Design avec effet premium */}
          <a
            href="#accueil"
            onClick={(event) => handleNavigation(event, "accueil")}
            className="flex items-center gap-3 relative px-3 py-2 rounded-xl transition-colors duration-200 hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <div className="rounded-lg bg-gradient-to-br from-secondary/90 via-secondary/70 to-secondary/60 p-2 border border-accent/25 shadow-inner">
              <Scale className="h-6 w-6 text-accent" strokeWidth={2.5} />
            </div>

            <div className="flex items-center gap-1 relative">
              <span className="text-2xl font-black tracking-tight text-foreground">LemaClinic</span>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-primary via-[#8f1f32] to-[#1A102A] bg-clip-text text-transparent">
                Truth
              </span>
            </div>
          </a>

          {/* Desktop Menu - Ultra premium */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#accueil"
              onClick={(event) => handleNavigation(event, "accueil")}
              className={linkClasses}
            >
              Accueil
            </a>
            <a
              href="#mon-histoire"
              onClick={(event) => handleNavigation(event, "mon-histoire")}
              className={linkClasses}
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
                className={`${linkClasses} flex items-center gap-1`}
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
                  className="absolute top-full left-0 mt-2 w-56 backdrop-blur-xl bg-secondary/90 rounded-xl border border-accent/25 shadow-[0_18px_40px_rgba(8,12,20,0.45)] overflow-hidden animate-fade-in z-[60]"
                >
                  <a
                    href="#histoire"
                    role="menuitem"
                    onClick={(event) => handleNavigation(event, "histoire")}
                    className={dropdownLinkClasses}
                  >
                    Le piège
                  </a>
                  <a
                    href="#vos-droits"
                    role="menuitem"
                    onClick={(event) => handleNavigation(event, "vos-droits")}
                    className={dropdownLinkClasses}
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
                className={`${linkClasses} flex items-center gap-1`}
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
                  className="absolute top-full left-0 mt-2 w-56 backdrop-blur-xl bg-secondary/90 rounded-xl border border-accent/25 shadow-[0_18px_40px_rgba(8,12,20,0.45)] overflow-hidden animate-fade-in z-[60]"
                >
                  <a
                    href="#temoignages"
                    role="menuitem"
                    onClick={(event) => handleNavigation(event, "temoignages")}
                    className={dropdownLinkClasses}
                  >
                    Voir les témoignages
                  </a>
                  <a
                    href="#agir"
                    role="menuitem"
                    onClick={(event) => handleNavigation(event, "agir")}
                    className={dropdownLinkClasses}
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
              className="ml-2 px-5 py-2 text-[15px] font-semibold rounded-lg bg-gradient-to-r from-primary/20 via-primary/15 to-primary/10 text-primary border border-primary/40 transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={cycleMotionPreference}
              className="ml-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground/60 border border-accent/20 rounded-lg transition-colors duration-200 hover:text-foreground hover:border-accent/40 hover:bg-secondary/40"
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
            <div className="backdrop-blur-xl bg-secondary/80 rounded-2xl border border-accent/25 p-2 shadow-[0_18px_40px_rgba(8,12,20,0.45)]">
              <a
                href="#accueil"
                onClick={(event) => handleNavigation(event, "accueil")}
                className={mobileLinkClasses}
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
                className={mobileLinkClasses}
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
                className={`${mobileLinkClasses} flex items-center justify-between`}
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
                    className={mobileSubLinkClasses}
                  >
                    → Le piège
                  </a>
                  <a
                    href="#vos-droits"
                    onClick={(event) => handleNavigation(event, "vos-droits")}
                    className={mobileSubLinkClasses}
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
                className={`${mobileLinkClasses} flex items-center justify-between`}
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
                    className={mobileSubLinkClasses}
                  >
                    → Voir les témoignages
                  </a>
                  <a
                    href="#agir"
                    onClick={(event) => handleNavigation(event, "agir")}
                    className={mobileSubLinkClasses}
                  >
                    → Agir
                  </a>
                </div>
              )}
              <a
                href="#contact"
                onClick={(event) => handleNavigation(event, "contact")}
                className={`${mobileLinkClasses} font-semibold bg-gradient-to-r from-primary/20 via-primary/15 to-primary/10 text-primary hover:bg-primary hover:text-primary-foreground mt-2`}
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
                className="w-full px-4 py-3 rounded-xl text-[14px] font-semibold text-foreground/70 border border-accent/20 hover:border-accent/40 hover:text-foreground hover:bg-secondary/40 transition-colors duration-200"
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
