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
  const { reducedMotion } = useMotionPreferences();

  const closeMenus = () => {
    setIsOpen(false);
    setIsInformerDropdownOpen(false);
    setIsTemoignagesDropdownOpen(false);
    setIsMobileInformerOpen(false);
    setIsMobileTemoignagesOpen(false);
  };

  const navigateTo = (id: string) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const navElement = document.querySelector(
      'nav[aria-label="Navigation principale"]'
    ) as HTMLElement | null;
    const navHeight = navElement?.offsetHeight ?? 0;
    const offset = 24;
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - navHeight - offset;

    window.scrollTo({
      top: targetPosition > 0 ? targetPosition : 0,
      behavior: reducedMotion ? "auto" : "smooth"
    });

    if (window.location.hash !== `#${id}`) {
      window.history.replaceState(null, "", `#${id}`);
    }

    closeMenus();
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    navigateTo(id);
  };

  const linkClasses =
    "group relative px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.32em] text-white/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09080b] hover:text-white after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/80 after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-focus-visible:after:scale-x-100";
  const dropdownLinkClasses =
    "block w-full text-left px-4 py-3 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white hover:bg-white/5";
  const mobileLinkClasses =
    "block w-full text-left px-4 py-3 rounded-xl text-[13px] font-semibold uppercase tracking-[0.28em] text-white/60 transition-all duration-300 border border-white/5 bg-white/0 hover:text-white hover:border-white/20 hover:bg-white/5";
  const mobileSubLinkClasses =
    "block w-full text-left px-4 py-2 rounded-lg text-[13px] font-medium text-white/70 transition-colors duration-200 hover:text-white hover:bg-white/5";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? "backdrop-blur-2xl bg-[#0D0D0F]/95 border-b border-white/5 shadow-[0_18px_44px_rgba(5,4,6,0.55)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 py-4 md:py-5 transition-all">
        <div className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-[#151114]/90 via-[#111113]/88 to-[#0B0B0D]/90 px-4 sm:px-6 py-3 shadow-[0_32px_70px_rgba(4,4,6,0.55)] backdrop-blur-2xl overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-40 transition-opacity duration-700 [mask-image:radial-gradient(circle_at_top,_white,transparent_70%)] bg-[radial-gradient(circle_at_top,_rgba(198,37,46,0.32),_transparent_65%)]" />
          <div className="pointer-events-none absolute inset-px z-0 rounded-[18px] border border-white/10" />
          <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl mix-blend-screen opacity-0 transition-opacity duration-700 group-hover:opacity-40" />

          {/* Logo - Modern Design avec effet premium */}
          <a
            href="#accueil"
            onClick={(event) => handleNavigation(event, "accueil")}
            className="relative z-10 flex items-center gap-3 rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09080b]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-[#171316] via-[#111113] to-[#0D0D0F] shadow-[0_12px_30px_rgba(7,6,8,0.55)]">
              <Scale className="h-6 w-6 text-[#C6252E]" strokeWidth={2.4} />
            </div>

            <div className="relative flex items-baseline gap-1">
              <span className="text-[1.55rem] font-black tracking-tight text-white">LemaClinic</span>
              <span className="text-[1.55rem] font-black tracking-tight bg-gradient-to-r from-[#C6252E] via-[#8F1A23] to-[#4E0C13] bg-clip-text text-transparent">
                Truth
              </span>
            </div>
          </a>

          {/* Desktop Menu - Ultra premium */}
          <div className="relative z-10 hidden items-center gap-1 md:flex">
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
              className="relative"
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
                className={`${linkClasses} flex items-center gap-2`}
              >
                S'informer
                <ChevronDown
                  className={`h-4 w-4 text-white/50 transition-transform duration-300 ${isInformerDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Zone invisible pour garder le dropdown ouvert */}
              <div className="absolute top-full left-0 right-0 h-2"></div>

              {/* Dropdown menu */}
              {isInformerDropdownOpen && (
                <div
                  id={informerMenuId}
                  role="menu"
                  className="absolute top-full left-0 z-[60] mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0F]/95 shadow-[0_28px_60px_rgba(6,5,8,0.55)] backdrop-blur-2xl transition duration-200"
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
              className="relative"
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
                className={`${linkClasses} flex items-center gap-2`}
              >
                Témoignages
                <ChevronDown
                  className={`h-4 w-4 text-white/50 transition-transform duration-300 ${isTemoignagesDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Zone invisible pour garder le dropdown ouvert */}
              <div className="absolute top-full left-0 right-0 h-2"></div>

              {/* Dropdown menu */}
              {isTemoignagesDropdownOpen && (
                <div
                  id={temoignagesMenuId}
                  role="menu"
                  className="absolute top-full left-0 z-[60] mt-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0D0D0F]/95 shadow-[0_28px_60px_rgba(6,5,8,0.55)] backdrop-blur-2xl transition duration-200"
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

          </div>

          {/* Mobile Menu Button - Raffiné */}
          <Button
            variant="ghost"
            size="icon"
            className="relative z-10 md:hidden rounded-xl border border-white/10 bg-white/0 text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/5"
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
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#121113]/95 via-[#0D0D0F]/94 to-[#121113]/92 p-3 shadow-[0_28px_60px_rgba(6,5,8,0.55)] backdrop-blur-2xl">
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
