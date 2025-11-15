import { BadgeCheck, FileSearch, Handshake, ExternalLink } from "lucide-react";

const trustMetrics = [
  {
    label: "Témoignages vérifiés",
    value: "+120",
    detail: "collectés depuis 2022 via notre protocole anonyme",
  },
  {
    label: "Signalements transmis",
    value: "87",
    detail: "dossiers remis aux autorités sanitaires européennes",
  },
  {
    label: "Actions en cours",
    value: "12",
    detail: "procédures collectives accompagnées par des juristes partenaires",
  },
];

const proofLinks = [
  {
    title: "Lettre recommandée à la DGCCRF",
    description: "Accusé de réception daté du 4 janvier 2025 confirmant l'ouverture d'une enquête préliminaire.",
    href: "https://example.org/preuve-dgccrf.pdf",
  },
  {
    title: "Rapport d'expert indépendant",
    description: "Analyse d'un chirurgien-dentiste agréé détaillant les malfaçons constatées (septembre 2024).",
    href: "https://example.org/rapport-expert.pdf",
  },
  {
    title: "Déclaration CNIL",
    description: "Numéro de récépissé 2548795 confirmant la conformité du traitement de données sensibles.",
    href: "https://example.org/recipisse-cnil.pdf",
  },
];

export const TrustSignals = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background" id="preuves">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-2/5 space-y-6" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" /> Réassurance
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Des preuves concrètes et des appels à l'action clairs
            </h2>
            <p className="text-muted-foreground text-base">
              Notre mission se construit avec vous : chaque témoignage permet de documenter les abus et d'accompagner de nouvelles victimes. Découvrez nos preuves et rejoignez le mouvement.
            </p>
            <div className="grid gap-4" role="list">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="glass-card rounded-2xl border border-primary/20 p-4" role="listitem">
                  <p className="text-xs uppercase tracking-widest text-primary/70">{metric.label}</p>
                  <p className="text-3xl font-black mt-1">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-3/5 w-full grid gap-6" data-aos="fade-up" data-aos-delay="150">
            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Handshake className="h-5 w-5 text-primary" aria-hidden="true" />
                Micro-conversions pour agir dès maintenant
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Recevez nos alertes en avant-première et accédez au kit d'actions immédiates (modèles de lettres, conseils juridiques, soutien psychologique).
              </p>
              <form
                className="mt-6 grid gap-4 md:grid-cols-[2fr_1fr]"
                action="https://example.org/api/newsletter"
                method="post"
              >
                <label className="flex flex-col text-left text-sm font-medium text-muted-foreground">
                  Adresse email
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="vous@exemple.com"
                    className="mt-1 rounded-lg border border-border bg-background px-4 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    aria-describedby="newsletter-consent"
                  />
                </label>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-4 py-3 text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Rejoindre les alertes
                </button>
                <p id="newsletter-consent" className="text-xs text-muted-foreground md:col-span-2">
                  En validant, vous acceptez de recevoir des communications ponctuelles. Désinscription en un clic.
                </p>
              </form>
            </div>

            <div className="glass-card rounded-2xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FileSearch className="h-5 w-5 text-primary" aria-hidden="true" />
                Pièces justificatives vérifiées
              </h3>
              <ul className="mt-4 space-y-4">
                {proofLinks.map((proof) => (
                  <li key={proof.title} className="flex items-start gap-3">
                    <ExternalLink className="h-4 w-4 mt-1 text-primary" aria-hidden="true" />
                    <div>
                      <a
                        href={proof.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {proof.title}
                      </a>
                      <p className="text-sm text-muted-foreground">{proof.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
