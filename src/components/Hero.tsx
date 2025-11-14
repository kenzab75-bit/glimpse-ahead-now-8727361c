import { Shield, Heart } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useMotionPreferences } from "@/context/MotionContext";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const { y } = useScrollPosition();
  const { reducedMotion } = useMotionPreferences();

  const effectiveScrollY = reducedMotion ? 0 : y;

  // Calcul des offsets parallaxe
  const titleParallaxY = reducedMotion ? 0 : effectiveScrollY * 0.3;
  const titleScale = reducedMotion ? 1 : Math.max(1 - effectiveScrollY * 0.0003, 0.85);
  const titleOpacity = reducedMotion ? 1 : Math.max(1 - effectiveScrollY * 0.002, 0);

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/60 to-background relative overflow-hidden pt-24"
    >
      {/* Ambient gradient halo */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(229, 57, 53, 0.18), transparent 55%), radial-gradient(circle at 78% 70%, rgba(56, 140, 255, 0.22), transparent 52%)",
        }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Breaking News Banner */}
        <div className="glass-strong rounded-xl p-3 mb-8 mt-4 max-w-4xl mx-auto border border-accent/30 shadow-lg" data-aos="fade-down">
          <div className="flex items-center justify-center space-x-3 flex-wrap">
            <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm font-bold font-mono uppercase tracking-wider">
              ALERTE
            </span>
            <p className="text-accent font-semibold text-base">
              Révélations exclusives sur les pratiques de la clinique LEMA DENTAL à Istanbul
            </p>
          </div>
        </div>

        {/* Alert Icon */}
        <div className="flex justify-center mb-12" data-aos="zoom-in" data-aos-delay="300">
          <div
            className={cn(
              "relative p-[1px] rounded-full",
              "bg-gradient-to-br from-primary/70 via-primary/60 to-accent/60 shadow-[0_12px_40px_rgba(8,12,20,0.45)]"
            )}
            aria-hidden="true"
          >
            <div className="rounded-full bg-secondary/90 p-8">
              <svg className="h-20 w-20 text-primary-foreground drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1
          className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none relative"
          data-aos="fade-up"
          data-aos-delay="600"
          style={{
            transform: `translateY(${titleParallaxY}px) scale(${titleScale})`,
            opacity: titleOpacity,
            transition: "transform 0.12s ease-out, opacity 0.12s ease-out",
          }}
        >
          <span className="block text-foreground">LemaClinic</span>
          <span className="block relative inline-block">
            <span
              className={cn(
                "bg-gradient-to-br from-primary via-primary/90 to-accent/75 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(45,75,255,0.25)]",
                !reducedMotion && "motion-safe:animate-[fade-in_0.9s_ease-out_forwards]"
              )}
            >
              Truth
            </span>
          </span>
        </h1>

        {/* Slogan */}
        <p
          className="text-2xl lg:text-3xl xl:text-4xl mb-12 font-medium text-accent font-playfair"
          data-aos="fade-up"
          data-aos-delay="900"
          style={{
            transform: `translateY(${titleParallaxY * 0.35}px)`,
            opacity: titleOpacity,
            transition: "transform 0.12s ease-out, opacity 0.12s ease-out",
          }}
        >
          La vérité éclaire toujours
        </p>

        {/* Mission Statement */}
        <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="1200">
          <div className="glass-strong rounded-2xl p-8 lg:p-12 transition-transform duration-500 hover:translate-y-1">
            <p className="text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed text-foreground/95">
              Révéler la vérité, défendre les victimes, face aux abus de Lema Dental Clinic en Turquie.
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Chaque témoignage est vérifié par notre cellule investigation afin de protéger les patients et dénoncer les dérives.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center" data-aos="fade-up" data-aos-delay="1000">
          <PremiumButton
            href="#mon-histoire"
            variant="primary"
            size="lg"
            icon={<Shield className="h-6 w-6" />}
          >
            Découvrir mon histoire
          </PremiumButton>

          <PremiumButton
            variant="secondary"
            size="lg"
            icon={<Heart className="h-6 w-6 text-accent" />}
          >
            Soutenir le projet
          </PremiumButton>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="glass-strong w-8 h-12 border border-accent/30 rounded-full flex justify-center p-2">
            <div
              className={cn(
                "w-2 h-4 rounded-full bg-gradient-to-b from-accent to-primary",
                !reducedMotion && "motion-safe:animate-[pulse_4s_ease-in-out_infinite]"
              )}
            ></div>
          </div>
          <p className="text-muted-foreground text-sm mt-2 font-mono text-center tracking-[0.3em]">SCROLL</p>
        </div>
      </div>
    </section>
  );
};
