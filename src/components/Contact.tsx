import { useState } from "react";
import { Mail } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { submitContact } from "@/lib/api";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dès que possible.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setConsent(false);
    },
    onError: () => {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Veuillez réessayer dans quelques instants ou nous contacter par téléphone.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, email, message, consent });
  };

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Nous Contacter</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des questions ou vous souhaitez contribuer ? Contactez-nous en toute sécurité.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto glass-card" data-aos="fade-up" data-aos-delay="200">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Votre nom"
                    className="mt-2"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="mt-2"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="contactMessage">Message</Label>
                <Textarea
                  id="contactMessage"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="min-h-[150px] mt-2"
                  required
                />
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-muted/30 p-4">
                <Checkbox
                  id="contact-consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(Boolean(checked))}
                  required
                  aria-describedby="contact-consent-hint"
                />
                <div className="space-y-1 text-sm text-muted-foreground">
                  <label htmlFor="contact-consent" className="font-medium text-foreground">
                    J'accepte que mes informations soient traitées pour répondre à ma demande.
                  </label>
                  <p id="contact-consent-hint">
                    Vos données sont stockées pendant 90 jours maximum et jamais partagées sans votre accord explicite.
                  </p>
                </div>
              </div>
              <div className="sr-only" aria-live="polite">
                {mutation.isError && "Une erreur est survenue lors de l'envoi du message."}
              </div>
              <PremiumButton
                type="submit"
                variant="primary"
                size="default"
                loading={mutation.isPending}
                icon={<Mail className="h-5 w-5" />}
                className="w-full"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
              </PremiumButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
