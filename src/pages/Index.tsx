import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { PatientRights } from "@/components/PatientRights";
import { MyStory } from "@/components/MyStory";
import { Stories } from "@/components/Stories";
import { WhistleblowForm } from "@/components/WhistleblowForm";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Breaking News Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-center space-x-3 flex-wrap">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold font-mono uppercase tracking-wider">
              ALERTE
            </span>
            <p className="text-primary font-medium text-base lg:text-lg">
              Révélations exclusives sur les pratiques de la clinique LEMA DENTAL à Istanbul
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <Navigation />
        <Hero />
      <MyStory />
      <Timeline />
      <PatientRights />
      <Stories />
      <WhistleblowForm />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
      </div>
    </div>
  );
};

export default Index;
