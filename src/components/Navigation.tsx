import { useState, useEffect } from "react";
import { Menu, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-3 group"
          >
            <AlertTriangle className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              LemaClinic Truth
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["whistleblow", "stories", "faq", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-primary transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 animate-fade-in">
            {["whistleblow", "stories", "faq", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
