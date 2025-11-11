import { User, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const stories = [
  {
    alias: "Healthcare Worker #47",
    date: "January 2025",
    excerpt:
      "I witnessed systematic falsification of patient records to hide complications. Multiple patients were put at risk due to cost-cutting measures.",
  },
  {
    alias: "Former Staff Member",
    date: "December 2024",
    excerpt:
      "Unqualified personnel were performing procedures they weren't trained for. When I raised concerns, I was threatened with termination.",
  },
  {
    alias: "Medical Professional",
    date: "November 2024",
    excerpt:
      "Patients were being discharged prematurely despite clear medical risks, all to improve facility metrics and reduce costs.",
  },
];

export const Stories = () => {
  return (
    <section id="stories" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Whistleblower Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real accounts from those who've witnessed malpractice firsthand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="glass hover:glass-strong transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  {story.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{story.alias}</h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "{story.excerpt}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            All stories are anonymized and verified before publication
          </p>
        </div>
      </div>
    </section>
  );
};
