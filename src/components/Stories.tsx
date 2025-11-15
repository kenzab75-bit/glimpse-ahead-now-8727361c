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
    <section className="py-20 bg-muted/50" id="temoignages">
      <div className="container mx-auto px-6">
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
                border transition-all duration-300 ease-out
                ${activeCategory === category
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
                  : 'bg-background/60 text-foreground border-border hover:bg-accent hover:border-primary/50 hover:scale-105'
                }
              `}
              disabled={isLoading && category !== "Tous"}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-center text-sm text-muted-foreground" aria-live="polite">
          {isLoading
            ? "Chargement des témoignages vérifiés…"
            : `${filteredStories.length} témoignage${filteredStories.length > 1 ? 's' : ''} disponibles.`}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8" aria-live="polite">
          {hasTestimonials ? filteredStories.map((story, index) => (
            <Card
              key={`${story.author}-${index}`}
              className="glass-card border rounded-2xl hover:shadow-xl hover:scale-[1.02] hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex-grow space-y-4">
                  <div className="text-6xl text-primary opacity-30" aria-hidden="true">"</div>
                  <p className="text-base italic leading-relaxed text-foreground">{story.quote}</p>
                </div>
                <div className="mt-6 pt-4 border-t flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{story.author}</p>
                    <p className="text-sm text-muted-foreground">{story.location}</p>
                  </div>
                  <Badge variant="destructive">
                    {story.category}
                  </Badge>
                </div>
                {story.evidenceUrl && (
                  <a
                    href={story.evidenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Consulter la preuve
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </a>
                )}
              </CardContent>
            </Card>
          )) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              {isLoading ? "Chargement en cours…" : "Aucun témoignage disponible pour cette catégorie."}
            </div>
          )}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12" data-aos="fade-up">
          Tous les témoignages sont anonymisés et vérifiés avant publication
        </p>
        <p className="text-center text-xs text-muted-foreground/60 mt-2" data-aos="fade-up" data-aos-delay="100">
          {filteredStories.length} témoignages • Toutes catégories
        </p>
      </div>
    </section>
  );
};
