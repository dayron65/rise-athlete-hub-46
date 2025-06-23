
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, Trophy } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Unir esporte, cultura e educação para promover inclusão, cidadania e desenvolvimento humano."
    },
    {
      icon: Heart,
      title: "Coração Social",
      description: "O Projeto Rise Kids continua sendo o coração social da nossa associação."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Criamos oportunidades que transformam realidades em nossa comunidade."
    },
    {
      icon: Trophy,
      title: "Excelência",
      description: "Mantemos o compromisso com a qualidade e resultados excepcionais."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossa <span className="text-yellow-400">História</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Do sonho inicial à força coletiva de uma associação, seguimos escrevendo histórias de impacto. 
            Conheça nossa jornada e participe desta transformação!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-black border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <CardContent className="p-6 text-center">
                <value.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-black/50 backdrop-blur p-8 rounded-lg border border-yellow-400/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Responsável Legal</h3>
            <p className="text-xl text-yellow-400 font-semibold">Prof. Thiago Alexandre Oliveira Silva</p>
            <p className="text-gray-300 mt-2">Fundador e Responsável Legal</p>
          </div>
        </div>
      </div>
    </section>
  );
};
