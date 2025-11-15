import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTestimonials, Testimonial } from "@/lib/api";

type Category = "Tous" | string;

export const Stories = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");
  const { data: testimonials = [], isLoading } = useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
    staleTime: 1000 * 60 * 10,
  });

  const categories = useMemo(() => {
    const dynamicCategories = Array.from(new Set(testimonials.map((story) => story.category))) as Category[];
    const ordered = ["Complications", "Négligence", "Fraude", "Facturation"] as Category[];
    const combined = ordered.filter((cat) => dynamicCategories.includes(cat));
    return ["Tous", ...combined, ...dynamicCategories.filter((cat) => !combined.includes(cat))];
  }, [testimonials]);

  const filteredStories = useMemo(() => {
    if (activeCategory === "Tous") {
      return testimonials;
    }
    return testimonials.filter((story) => story.category === activeCategory);
  }, [activeCategory, testimonials]);

  const hasTestimonials = filteredStories.length > 0;

  return (
    <section 
      className="py-20 bg-muted/50 relative overflow-hidden" 
      id="temoignages"
      style={{
        background: 'linear-gradient(135deg, #0D0D0F 0%, #1A0E11 50%, #0D0D0F 100%)',
      }}
    >
      {/* Effets discrets premium */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C6252E]/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8F1A23]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Témoignages des Victimes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des histoires réelles de personnes affectées par les pratiques de la clinique
          </p>
        </div>

        {/* Premium Filter System */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100" role="tablist">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 rounded-full font-medium text-sm tracking-wide
                backdrop-blur-xl border transition-all duration-500 ease-out
                ${activeCategory === category
                  ? 'bg-[#C6252E]/20 text-[#C6252E] border-[#C6252E]/40 shadow-[0_0_20px_rgba(198,37,46,0.25)] scale-105'
                  : 'bg-white/5 text-[#F1F1F1]/60 border-white/10 hover:text-[#F1F1F1] hover:bg-white/10 hover:border-white/20 hover:scale-105'
                }
              `}
              disabled={isLoading && category !== "Tous"}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-center text-sm text-[#F1F1F1]/60" aria-live="polite">
          {isLoading
            ? "Chargement des témoignages vérifiés…"
            : `${filteredStories.length} témoignage${filteredStories.length > 1 ? 's' : ''} disponibles.`}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8" aria-live="polite">
          {hasTestimonials ? filteredStories.map((story, index) => (
            <Card
              key={`${story.author}-${index}`}
              className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_12px_48px_0_rgba(198,37,46,0.25)] hover:scale-[1.02] hover:border-[#C6252E]/30 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-[#C6252E] mb-4 drop-shadow-[0_0_8px_rgba(198,37,46,0.35)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed text-lg">
                    {story.quote}
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">{story.author}</p>
                      <p className="text-sm text-muted-foreground">{story.location}</p>
                    </div>
                    <Badge className="bg-[#C6252E]/15 text-[#C6252E] border border-[#C6252E]/30 shadow-[0_0_12px_rgba(198,37,46,0.2)]">
                      {story.category}
                    </Badge>
                  </div>
                  {story.evidenceUrl && (
                    <a
                      href={story.evidenceUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C6252E] hover:text-[#8F1A23] transition-colors"
                    >
                      Consulter la preuve
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M12.293 2.293a1 1 0 011.414 0L19 7.586l-1.414 1.414L14 5.414V17a1 1 0 11-2 0V5.414l-3.586 3.586L7 7.586l4.293-4.293z" />
                      </svg>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          )) : (
            <div className="md:col-span-3 text-center text-[#F1F1F1]/70 space-y-4">
              <p>Aucun témoignage pour cette catégorie pour le moment.</p>
              <a
                href="#agir"
                className="inline-flex items-center gap-2 rounded-full border border-[#C6252E]/40 px-6 py-3 text-sm font-semibold text-[#C6252E] hover:bg-[#C6252E]/20 transition-colors"
              >
                Partager le vôtre anonymement
              </a>
            </div>
          )}
        </div>

        <div className="text-center mt-12 space-y-2">
          <p className="text-muted-foreground italic">
            Tous les témoignages sont anonymisés et vérifiés avant publication
          </p>
          <p className="text-sm text-muted-foreground/60">
            {filteredStories.length} témoignage{filteredStories.length > 1 ? 's' : ''} • {activeCategory === "Tous" ? "Toutes catégories" : activeCategory}
          </p>
        </div>
      </div>
    </section>
  );
};
