import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

type Category = "Tous" | "Complications" | "Négligence" | "Fraude" | "Facturation";

export const Stories = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");

  const stories = [
    {
      quote: "Après mon intervention, j'ai souffert de complications qui n'ont jamais été correctement prises en charge. Je me retrouve avec des dommages permanents.",
      author: "Patient Anonyme",
      location: "France",
      category: "Complications" as Category,
    },
    {
      quote: "Ils ont promis des soins de classe mondiale mais ont fourni des soins médiocres. Mes documents médicaux ont été falsifiés.",
      author: "Jean D.",
      location: "Belgique",
      category: "Fraude" as Category,
    },
    {
      quote: "La clinique a menti sur mon diagnostic pour justifier des procédures inutiles qui m'ont laissé dans un état pire.",
      author: "Marie S.",
      location: "Suisse",
      category: "Fraude" as Category,
    },
    {
      quote: "Personnel non qualifié, suivi post-opératoire inexistant. J'ai dû consulter ailleurs pour réparer leurs erreurs.",
      author: "Thomas L.",
      location: "France",
      category: "Négligence" as Category,
    },
    {
      quote: "Facturations abusives, frais cachés non mentionnés. Le montant final était le double du devis initial.",
      author: "Sophie M.",
      location: "Luxembourg",
      category: "Facturation" as Category,
    },
    {
      quote: "Infections nosocomiales graves suite à l'intervention. Aucune responsabilité assumée par la clinique.",
      author: "Pierre R.",
      location: "Suisse",
      category: "Complications" as Category,
    },
  ];

  const categories: Category[] = ["Tous", "Complications", "Négligence", "Fraude", "Facturation"];

  const filteredStories = activeCategory === "Tous" 
    ? stories 
    : stories.filter(story => story.category === activeCategory);

  return (
    <section 
      className="py-20 relative overflow-hidden" 
      id="temoignages"
      style={{
        background: 'linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(210 40% 96%) 50%, hsl(0 0% 98%) 100%)',
      }}
    >
      {/* Premium light effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Témoignages des Victimes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des histoires réelles de personnes affectées par les pratiques de la clinique
          </p>
        </div>

        {/* Premium Filter System */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-3 rounded-full font-medium text-sm tracking-wide
                transition-all duration-500 ease-out
                ${activeCategory === category
                  ? 'glass-premium text-primary shadow-glow scale-105'
                  : 'glass text-muted-foreground hover:text-foreground hover:scale-105'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredStories.map((story, index) => (
            <Card
              key={`${story.author}-${index}`}
              className="bg-white/90 backdrop-blur-xl border-gray-200/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] hover:shadow-[0_12px_48px_0_rgba(220,38,38,0.15)] hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 italic mb-4 leading-relaxed text-lg">
                    {story.quote}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900">{story.author}</p>
                      <p className="text-sm text-gray-600">{story.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {story.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-2">
          <p className="text-gray-600 italic">
            Tous les témoignages sont anonymisés et vérifiés avant publication
          </p>
          <p className="text-sm text-gray-500">
            {filteredStories.length} témoignage{filteredStories.length > 1 ? 's' : ''} • {activeCategory === "Tous" ? "Toutes catégories" : activeCategory}
          </p>
        </div>
      </div>
    </section>
  );
};
