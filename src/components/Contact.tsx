import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have questions or want to share information? Contact us securely
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="bg-background/50"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
