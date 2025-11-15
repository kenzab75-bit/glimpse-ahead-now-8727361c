import { useState } from "react";
import { Shield, Lock } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { submitWhistleblow } from "@/lib/api";

export const WhistleblowForm = () => {
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: submitWhistleblow,
    onSuccess: () => {
      toast({
        title: "Témoignage envoyé",
        description: "Votre témoignage a été envoyé de manière anonyme et sécurisée.",
      });
      setMessage("");
      setConsent(false);
    },
    onError: () => {
      toast({
        title: "Erreur lors de l'envoi",
        description: "La transmission sécurisée n'a pas abouti. Merci de réessayer ou de nous contacter.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ message, consent });
  };

  return (
    <section className="py-20 bg-muted/50" id="agir">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Témoignage Anonyme</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partagez votre expérience de manière anonyme et sécurisée. Votre identité est protégée.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto glass-card" data-aos="fade-up" data-aos-delay="200">
          <CardContent className="p-8">
            <div className="flex items-center space-x-3 mb-6 p-4 bg-accent/50 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">
                Tous les témoignages sont cryptés et stockés en toute sécurité. Nous ne collectons jamais d'adresses IP ou d'informations identifiantes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="message">Votre témoignage</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Partagez votre histoire... (Tous les témoignages sont entièrement anonymes)"
                  className="min-h-[200px] mt-2"
                  required
                />
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <Checkbox
                  id="whistle-consent"
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(Boolean(checked))}
                  required
                  aria-describedby="whistle-consent-hint"
                />
                <div className="space-y-1 text-sm text-muted-foreground">
                  <label htmlFor="whistle-consent" className="font-medium text-foreground">
                    Je comprends que mon témoignage sera anonymisé et stocké de façon chiffrée.
                  </label>
                  <p id="whistle-consent-hint">
                    Nous supprimons tout identifiant technique (IP, agent utilisateur) et appliquons un hachage salé avant archivage.
                  </p>
                </div>
              </div>
              <div className="sr-only" aria-live="polite">
                {mutation.isError && "Une erreur est survenue lors de l'envoi du témoignage."}
              </div>
              <PremiumButton
                type="submit"
                variant="primary"
                size="default"
                loading={mutation.isPending}
                icon={<Lock className="h-5 w-5" />}
                className="w-full"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? "Envoi en cours..." : "Envoyer anonymement"}
              </PremiumButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
