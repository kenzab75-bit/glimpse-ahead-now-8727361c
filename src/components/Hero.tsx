import { Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card relative overflow-hidden pt-20"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Exposing{" "}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              LemaClinic
            </span>{" "}
            Truth
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Uncovering medical malpractice and fighting for justice
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("whistleblow")}
              className="text-lg animate-glow"
            >
              <Shield className="mr-2 h-5 w-5" />
              Whistleblow Safely
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("stories")}
              className="text-lg border-primary/50 hover:bg-primary/10"
            >
              <AlertCircle className="mr-2 h-5 w-5" />
              Read Stories
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { number: "100%", label: "Anonymous" },
              { number: "256-bit", label: "Encrypted" },
              { number: "24/7", label: "Protected" },
            ].map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {item.number}
                </div>
                <div className="text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
