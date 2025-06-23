
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Globe } from "lucide-react";

export const Events = () => {
  const eventCategories = [
    {
      title: "Competições Nacionais",
      icon: Trophy,
      color: "bg-red-500",
      events: [
        { name: "Campeonato Brasileiro de Levantamento de Peso", date: "15-18 Mar", location: "São Paulo - SP" },
        { name: "Copa Brasil de CrossFit", date: "22-25 Mai", location: "Rio de Janeiro - RJ" },
        { name: "Campeonato Nacional de Boxe", date: "10-13 Jul", location: "Brasília - DF" }
      ]
    },
    {
      title: "Competições Internacionais",
      icon: Globe,
      color: "bg-blue-500",
      events: [
        { name: "Sul-Americano de Atletismo", date: "08-12 Abr", location: "Buenos Aires - ARG" },
        { name: "Pan-Americano de Natação", date: "15-20 Jun", location: "Lima - PER" },
        { name: "Mundial de Levantamento", date: "05-10 Set", location: "Bogotá - COL" }
      ]
    },
    {
      title: "Eventos Internos",
      icon: Calendar,
      color: "bg-yellow-500",
      events: [
        { name: "Torneio Interno Gorila Rise", date: "20 Jan", location: "Estúdio Gorila Rise" },
        { name: "Festa Junina Esportiva", date: "25 Jun", location: "Estúdio Gorila Rise" },
        { name: "Campeonato de Fim de Ano", date: "15 Dez", location: "Estúdio Gorila Rise" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Agenda de <span className="text-yellow-400">Eventos</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Competições e eventos que movimentam o esporte
          </p>
        </div>

        <div className="space-y-12">
          {eventCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <category.icon className="h-8 w-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.events.map((event, eventIndex) => (
                  <Card key={eventIndex} className="bg-gray-900 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={`${category.color} text-white`}>
                          {event.date}
                        </Badge>
                        <category.icon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <CardTitle className="text-white text-lg">{event.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-yellow-400" />
                        <p className="text-gray-300 text-sm">{event.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-400/10 to-orange-600/10 p-8 rounded-lg border border-yellow-400/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Participe dos Nossos Eventos
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Acompanhe nossos atletas em competições e participe dos eventos internos da Gorila Rise
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="border-yellow-400 text-yellow-400 px-4 py-2">
                Apoio aos Atletas
              </Badge>
              <Badge variant="outline" className="border-yellow-400 text-yellow-400 px-4 py-2">
                Eventos Comunitários
              </Badge>
              <Badge variant="outline" className="border-yellow-400 text-yellow-400 px-4 py-2">
                Competições Internas
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
