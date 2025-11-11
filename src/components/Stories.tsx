import { Card, CardContent } from "@/components/ui/card";

export const Stories = () => {
  const stories = [
    {
      quote: "Après mon intervention, j'ai souffert de complications qui n'ont jamais été correctement prises en charge. Je me retrouve avec des dommages permanents.",
      author: "Patient Anonyme",
      location: "France",
    },
    {
      quote: "Ils ont promis des soins de classe mondiale mais ont fourni des soins médiocres. Mes documents médicaux ont été falsifiés.",
      author: "Jean D.",
      location: "Belgique",
    },
    {
      quote: "La clinique a menti sur mon diagnostic pour justifier des procédures inutiles qui m'ont laissé dans un état pire.",
      author: "Marie S.",
      location: "Suisse",
    },
  ];

  return (
    <section className="py-20 bg-background" id="s-informer">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Témoignages des Victimes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des histoires réelles de personnes affectées par les pratiques de la clinique
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="glass-card hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed text-lg">
                    {story.quote}
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{story.author}</p>
                  <p className="text-sm text-muted-foreground">{story.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            Tous les témoignages sont anonymisés et vérifiés avant publication
          </p>
        </div>
      </div>
    </section>
  );
};
