
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  MapPin, 
  Clock, 
  Users,
  Target,
  Dumbbell
} from "lucide-react";

export const SportsProjects = () => {
  const sportsProjects = [
    {
      name: "Atletismo",
      location: "Via 31 de Março",
      ageGroup: "15 a 21 anos",
      category: "Adolescentes e Jovens",
      icon: Trophy
    },
    {
      name: "Boxe",
      location: "Estúdio Gorila Rise",
      ageGroup: "15-17 anos: Ter/Qui 9h e 15h | 18-21 anos: Ter/Qui 21h",
      category: "Combate",
      icon: Target
    },
    {
      name: "Basquete",
      location: "A definir",
      ageGroup: "15 a 25 anos",
      category: "Esporte Coletivo",
      icon: Trophy
    },
    {
      name: "Flag Futebol",
      location: "A definir",
      ageGroup: "15 a 21 anos",
      category: "Esporte Coletivo",
      icon: Trophy
    },
    {
      name: "Futebol",
      location: "A definir",
      ageGroup: "15 a 21 anos",
      category: "Esporte Coletivo",
      icon: Trophy
    },
    {
      name: "Levantamento de Peso Olímpico",
      location: "Estúdio Gorila Rise",
      ageGroup: "15-17 anos: Seg/Qua/Sex 9h e 15h | 18-21 anos: Seg/Qua/Sex 21h",
      category: "Força",
      icon: Dumbbell
    },
    {
      name: "Natação",
      location: "A definir",
      ageGroup: "15 a 21 anos",
      category: "Aquático",
      icon: Trophy
    },
    {
      name: "Iniciação Esportiva",
      location: "Estúdio Gorila Rise",
      ageGroup: "6-14 anos | Ter/Qui",
      category: "Base",
      icon: Users
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Combate": return "bg-red-500";
      case "Força": return "bg-orange-500";
      case "Esporte Coletivo": return "bg-blue-500";
      case "Aquático": return "bg-cyan-500";
      case "Base": return "bg-green-500";
      default: return "bg-yellow-500";
    }
  };

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projetos <span className="text-yellow-400">Esportivos</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Modalidades esportivas para todas as idades e níveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sportsProjects.map((project, index) => (
            <Card key={index} className="bg-gray-900 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <project.icon className="h-8 w-8 text-yellow-400" />
                  <Badge className={`${getCategoryColor(project.category)} text-white`}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-white text-lg">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{project.location}</p>
                </div>
                <div className="flex items-start space-x-2">
                  <Users className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{project.ageGroup}</p>
                </div>
                {project.name === "Boxe" || project.name === "Levantamento de Peso Olímpico" ? (
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">Horários específicos por faixa etária</p>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 p-8 rounded-lg border border-yellow-400/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Faça Parte da Nossa Equipe
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Desenvolvimento esportivo, inclusão social e formação de cidadãos através do esporte
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-yellow-400 text-yellow-400 px-4 py-2">
                Treinamento Profissional
              </Badge>
              <Badge variant="outline" className="border-yellow-400 text-yellow-400 px-4 py-2">
                Inclusão Social
              </Badge>
              <Badge variant="outline" className="border-yellow-400 text-yellow-400 px-4 py-2">
                Formação Cidadã
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
