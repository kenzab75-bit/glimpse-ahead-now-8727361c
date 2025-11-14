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
import { SkipLink } from "@/components/SkipLink";
import { DataTransparency } from "@/components/privacy/DataTransparency";
import { TrustSignals } from "@/components/trust/TrustSignals";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SkipLink />
      <Navigation />
      <main id="main-content" className="flex flex-col" aria-label="Contenu principal">
        <Hero />
        <MyStory />
        <Timeline />
        <PatientRights />
        <Stories />
        <TrustSignals />
        <WhistleblowForm />
        <DataTransparency />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
