import { useState } from "react";
import { Shield, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const WhistleblowForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    alias: "",
    incident: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Report Submitted Securely",
      description: "Your whistleblower report has been encrypted and submitted anonymously.",
    });
    setFormData({ alias: "", incident: "", details: "" });
  };

  return (
    <section id="whistleblow" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Speak Up Safely
            </h2>
            <p className="text-xl text-muted-foreground">
              Your identity is protected with end-to-end encryption
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-2xl space-y-6">
            <div>
              <label htmlFor="alias" className="block text-sm font-medium mb-2">
                Anonymous Alias (Optional)
              </label>
              <Input
                id="alias"
                placeholder="e.g., Concerned Healthcare Worker"
                value={formData.alias}
                onChange={(e) =>
                  setFormData({ ...formData, alias: e.target.value })
                }
                className="bg-background/50"
              />
            </div>

            <div>
              <label htmlFor="incident" className="block text-sm font-medium mb-2">
                Incident Type *
              </label>
              <Input
                id="incident"
                placeholder="e.g., Medical Malpractice, Falsified Records"
                value={formData.incident}
                onChange={(e) =>
                  setFormData({ ...formData, incident: e.target.value })
                }
                required
                className="bg-background/50"
              />
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium mb-2">
                Detailed Report *
              </label>
              <Textarea
                id="details"
                placeholder="Provide as much detail as possible. All submissions are anonymous and encrypted."
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
                required
                rows={8}
                className="bg-background/50"
              />
            </div>

            <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <Shield className="h-5 w-5 text-primary flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Your submission is completely anonymous and encrypted. We never track IP addresses or store identifying information.
              </p>
            </div>

            <Button type="submit" size="lg" className="w-full">
              <Send className="mr-2 h-5 w-5" />
              Submit Securely
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
