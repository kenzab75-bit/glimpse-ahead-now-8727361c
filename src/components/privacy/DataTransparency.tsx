import { ShieldCheck, FileText, Lock, Info } from "lucide-react";

const checklist = [
  {
    icon: ShieldCheck,
    title: "Chiffrement de bout en bout",
    description: "Toutes les données envoyées via nos formulaires transitent par une API HTTPS et sont chiffrées au repos.",
  },
  {
    icon: FileText,
    title: "Consentement explicite",
    description: "Nous recueillons uniquement les informations nécessaires à votre demande et vous pouvez retirer votre consentement à tout moment.",
  },
  {
    icon: Lock,
    title: "Conservation limitée",
    description: "Les messages sont automatiquement purgés au-delà de 90 jours, sauf obligation légale contraire.",
  },
];

export const DataTransparency = () => {
  return (
    <section className="py-16 bg-card/30" id="protections">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Info className="h-4 w-4" aria-hidden="true" /> Transparence RGPD
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">Vos données, vos droits</h2>
          <p className="mt-4 text-muted-foreground">
            Nous respectons le Règlement Général sur la Protection des Données (RGPD) et détaillons clairement la finalité de chaque collecte.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3" role="list">
          {checklist.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glass-card h-full rounded-2xl border border-white/10 p-6 text-left"
              role="listitem"
            >
              <Icon className="h-10 w-10 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 grid gap-6 md:grid-cols-2" data-aos="fade-up" data-aos-delay="150">
          <div className="glass-card rounded-2xl border border-white/10 p-6">
            <h3 className="text-xl font-semibold mb-3">Vos droits à tout moment</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                • Accéder à vos données : écrivez-nous via le formulaire de contact en précisant l'email utilisé.
              </li>
              <li>
                • Rectifier ou supprimer : nous traitons les demandes sous 72h ouvrées, hors cas de conservation légale.
              </li>
              <li>
                • Obtenir une copie : les exports sont fournis dans un format ouvert (.json) signé pour garantir leur intégrité.
              </li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl border border-primary/40 p-6 bg-primary/5">
            <h3 className="text-xl font-semibold mb-3">Notre API sécurisée</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Les formulaires sont connectés à l'API sécurisée <strong>TruthShield</strong>, protégée par des jetons d'accès rotatifs
              et un pare-feu applicatif. Chaque requête est journalisée (horodatage, empreinte SHA-256) afin d'assurer la traçabilité
              tout en respectant l'anonymat des témoins.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              Base API configurée via <code className="rounded bg-black/30 px-1">VITE_API_BASE_URL</code> • Clé d'authentification optionnelle <code className="rounded bg-black/30 px-1">VITE_API_TOKEN</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
