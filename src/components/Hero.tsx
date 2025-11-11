import { Shield, Heart } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [supportCount, setSupportCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [hasScrolled, setHasScrolled] = useState(false);
  const targetCount = 1247; // Nombre de soutiens

  useEffect(() => {
    // Animation du compteur
    const duration = 2000; // 2 secondes
    const steps = 50;
    const increment = targetCount / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setSupportCount(targetCount);
        clearInterval(timer);
      } else {
        setSupportCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Déclencher les particules au premier scroll
      if (currentScrollY > 50 && !hasScrolled) {
        setHasScrolled(true);
        // Générer 20 particules avec positions et délais aléatoires
        const newParticles = Array.from({ length: 20 }, (_, i) => ({
          id: i,
          x: Math.random() * 200 - 100, // -100 à 100
          y: Math.random() * 200 - 100,
          delay: Math.random() * 300,
        }));
        setParticles(newParticles);
        
        // Nettoyer les particules après l'animation
        setTimeout(() => setParticles([]), 2000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  // Calcul des offsets parallaxe
  const titleParallaxY = scrollY * 0.3;
  const titleScale = Math.max(1 - scrollY * 0.0003, 0.85);
  const titleOpacity = Math.max(1 - scrollY * 0.002, 0);

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card relative overflow-hidden pt-20"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Breaking News Banner */}
        <div className="glass-premium backdrop-blur-2xl bg-white/[0.08] border-2 border-white/20 rounded-2xl p-6 mb-8 max-w-4xl mx-auto shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_12px_48px_0_rgba(229,57,53,0.3)] transition-all duration-500" data-aos="fade-down">
          <div className="flex items-center justify-center space-x-3 flex-wrap">
            <span className="bg-gradient-to-r from-[#E53935] to-[#C62828] text-primary-foreground px-4 py-2 rounded-full text-sm font-bold font-mono uppercase tracking-wider shadow-[0_0_20px_rgba(229,57,53,0.5)]">
              ALERTE
            </span>
            <p className="text-primary font-semibold text-lg">
              Révélations exclusives sur les pratiques de la clinique LEMA DENTAL à Istanbul
            </p>
          </div>
        </div>

        {/* Alert Icon */}
        <div className="flex justify-center mb-12" data-aos="zoom-in" data-aos-delay="300">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
            <div className="p-8 bg-gradient-to-br from-primary via-primary to-primary/80 rounded-full relative z-10 glass-strong">
              <svg className="h-20 w-20 text-primary-foreground drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 
          className="text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none relative" 
          data-aos="fade-up" 
          data-aos-delay="600"
          style={{
            transform: `translateY(${titleParallaxY}px) scale(${titleScale})`,
            opacity: titleOpacity,
            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
          }}
        >
          <span className="block text-foreground">LemaClinic</span>
          <span className="block text-primary relative inline-block">
            {['T', 'r', 'u', 't', 'h'].map((letter, index) => (
              <span
                key={index}
                className="inline-block opacity-0"
                style={{
                  animation: 'fadeInScale 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                  animationDelay: `${1200 + index * 150}ms`,
                  textShadow: '0 0 40px rgba(220, 38, 38, 0.6), 0 0 80px rgba(220, 38, 38, 0.3)',
                }}
              >
                {letter}
              </span>
            ))}
            
            {/* Particules lumineuses */}
            {particles.map((particle) => (
              <span
                key={particle.id}
                className="absolute w-2 h-2 rounded-full bg-[#E53935] pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  animation: 'particleDisperse 1.5s ease-out forwards',
                  animationDelay: `${particle.delay}ms`,
                  boxShadow: '0 0 10px rgba(220, 38, 38, 0.8), 0 0 20px rgba(220, 38, 38, 0.6)',
                  '--particle-x': `${particle.x}px`,
                  '--particle-y': `${particle.y}px`,
                } as React.CSSProperties}
              />
            ))}
          </span>
        </h1>

        {/* Slogan */}
        <p 
          className="text-3xl lg:text-4xl xl:text-5xl mb-12 font-light text-primary" 
          data-aos="fade-up" 
          data-aos-delay="900"
          style={{
            transform: `translateY(${titleParallaxY * 0.5}px)`,
            opacity: titleOpacity,
            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
          }}
        >
          La vérité éclaire toujours
        </p>

        {/* Mission Statement */}
        <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="1200">
          <div className="glass-strong rounded-2xl p-8 lg:p-12 hover:scale-105 transition-transform duration-500">
            <p className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-relaxed text-foreground">
              Révéler la vérité, défendre les victimes, face aux abus de Lema Dental Clinic en Turquie.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-6 justify-center items-center" data-aos="fade-up" data-aos-delay="1000">
          {/* Compteur de soutiens */}
          <div className="glass-premium px-8 py-4 rounded-full flex items-center gap-3 mb-2">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-[#E53935] animate-pulse" />
              <span className="text-3xl font-bold text-foreground tabular-nums">
                {supportCount.toLocaleString('fr-FR')}
              </span>
            </div>
            <span className="text-base text-muted-foreground font-medium">
              personnes soutiennent cette cause
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
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
              icon={<Heart className="h-6 w-6" />}
            >
              Soutenir le projet
            </PremiumButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="glass-strong w-8 h-12 border-2 border-border rounded-full flex justify-center p-2">
            <div className="w-2 h-4 bg-primary rounded-full animate-pulse"></div>
          </div>
          <p className="text-muted-foreground text-sm mt-2 font-mono text-center">SCROLL</p>
        </div>
      </div>
    </section>
  );
};
