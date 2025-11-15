import { Shield, Heart, AlertCircle } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";

export const Hero = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
      style={{
        background: "linear-gradient(180deg, #0D0D0F 0%, #1A0E11 40%, #0D0D0F 100%)",
      }}
    >
      {/* Ambient vignette */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(198, 37, 46, 0.14), transparent 52%), radial-gradient(circle at 80% 65%, rgba(78, 12, 19, 0.25), transparent 58%)",
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Breaking News Banner */}
        <div className="max-w-4xl mx-auto mb-8 mt-4" data-aos="fade-down">
          <div className="bg-[#8F1A23] text-white px-5 py-3 rounded-md shadow-[0_12px_28px_rgba(14,10,12,0.45)] flex items-center justify-center gap-3 flex-wrap tracking-wide uppercase text-sm font-semibold">
            <span className="font-mono">
              ALERTE
            </span>
            <p className="text-white font-medium normal-case tracking-normal">
              Révélations exclusives sur les pratiques de la clinique LEMA DENTAL à Istanbul
            </p>
          </div>
        </div>

        {/* Alert Icon */}
        <div className="flex justify-center mb-12" data-aos="zoom-in" data-aos-delay="300">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-[-28%] rounded-full bg-[rgba(143,26,35,0.18)] opacity-80 animate-hero-halo" aria-hidden="true" />
            <div className="rounded-full bg-[#1A0E11] p-8 border border-white/10 shadow-[0_18px_42px_rgba(0,0,0,0.45)]">
              <AlertCircle className="h-20 w-20 text-white" strokeWidth={2.2} />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none relative" data-aos="fade-up" data-aos-delay="600">
          <span className="block text-white">LemaClinic</span>
          <span className="block text-[#C6252E]">Truth</span>
        </h1>

        {/* Slogan */}
        <p className="text-2xl lg:text-3xl xl:text-4xl mb-12 font-medium text-[#E5E7EB] font-playfair" data-aos="fade-up" data-aos-delay="900">
          La vérité éclaire toujours
        </p>

        {/* Mission Statement */}
        <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="1200">
          <div className="rounded-2xl p-8 lg:p-12 bg-[rgba(17,17,19,0.7)] border border-[#1F1F1F]">
            <p className="text-xl lg:text-2xl xl:text-3xl font-semibold leading-relaxed text-white">
              Révéler la vérité, défendre les victimes, face aux abus de Lema Dental Clinic en Turquie.
            </p>
            <p className="mt-4 text-lg text-[#D1D5DB] max-w-3xl mx-auto">
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
            icon={<Heart className="h-6 w-6 text-[#C6252E]" />}
          >
            Soutenir le projet
          </PremiumButton>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="glass-strong w-8 h-12 border border-[#302226] rounded-full flex justify-center p-2">
            <div className="w-2 h-4 rounded-full bg-gradient-to-b from-[#C6252E] to-[#4E0C13]" />
          </div>
          <p className="text-muted-foreground text-sm mt-2 font-mono text-center tracking-[0.3em]">SCROLL</p>
        </div>
      </div>
    </section>
  );
};
