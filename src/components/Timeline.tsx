export const Timeline = () => {
  const timelineSteps = [
    {
      number: 1,
      title: "L'appât commercial",
      description: "Lema Dental Clinic vous appâte avec des devis attractifs et un discours rassurant. Sous couvert de soins \"haut de gamme\", tout est pensé pour instaurer la confiance et provoquer votre départ vers Istanbul."
    },
    {
      number: 2,
      title: "Le piège",
      description: "Une fois sur place, les diagnostics explosent, les traitements s'enchaînent, les prix flambent. Toute contestation se heurte à une pression psychologique et financière."
    },
    {
      number: 3,
      title: "L'impasse",
      description: "Les complications apparaissent, les promesses s'évaporent, et les victimes se retrouvent isolées, sans recours efficace face à une clinique solidement organisée."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden" id="histoire">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-8">
            Une mécanique bien étudiée — Anatomie d'une dérive médicale
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/40 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Découvrez comment un système bien rodé a transformé la confiance des patients en instrument de profit.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary to-transparent transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay="100"
              >
                <div className="lg:w-1/2">
                  <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center mb-4">
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold font-mono">
                        Étape {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground ml-4">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                <div className="hidden lg:flex lg:w-12 justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary shadow-glow animate-pulse"></div>
                </div>
                
                <div className="lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
