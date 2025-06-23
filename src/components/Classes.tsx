
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Calendar, Users } from "lucide-react";

export const Classes = () => {
  const schedules = {
    matutino: ["05:30", "06:30", "07:30", "08:30"],
    vespertino: ["17:00", "18:00"],
    noturno: ["19:00", "20:00", "21:00"]
  };

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Aulas <span className="text-yellow-400">Presenciais</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Treinamento personalizado e planilhas online
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Informações das Aulas */}
          <div>
            <Card className="bg-gray-900 border-yellow-400/20 mb-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-yellow-400" />
                  Local das Aulas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Estúdio Gorila Rise<br/>
                  Rua Bambuí nº 12, Jardim União<br/>
                  Várzea Grande - MT
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-yellow-400/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="mr-2 h-5 w-5 text-yellow-400" />
                  Modalidades Oferecidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li>• Aulas Presenciais Personalizadas</li>
                  <li>• Planilhas de Treino Online</li>
                  <li>• Acompanhamento Nutricional</li>
                  <li>• Avaliação Física</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Horários */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Horários Disponíveis
            </h3>
            
            <div className="space-y-6">
              {/* Matutino */}
              <Card className="bg-gradient-to-r from-orange-400/10 to-yellow-600/10 border-yellow-400/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-yellow-400" />
                    Matutino
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {schedules.matutino.map((time) => (
                      <Button
                        key={time}
                        variant="outline"
                        className="border-yellow-400/30 text-white hover:bg-yellow-400 hover:text-black"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Vespertino */}
              <Card className="bg-gradient-to-r from-blue-400/10 to-cyan-600/10 border-yellow-400/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-yellow-400" />
                    Vespertino
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {schedules.vespertino.map((time) => (
                      <Button
                        key={time}
                        variant="outline"
                        className="border-yellow-400/30 text-white hover:bg-yellow-400 hover:text-black"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Noturno */}
              <Card className="bg-gradient-to-r from-purple-400/10 to-indigo-600/10 border-yellow-400/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-yellow-400" />
                    Noturno
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    {schedules.noturno.map((time) => (
                      <Button
                        key={time}
                        variant="outline"
                        className="border-yellow-400/30 text-white hover:bg-yellow-400 hover:text-black"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Fins de Semana */}
              <Card className="bg-gradient-to-r from-green-400/10 to-teal-600/10 border-yellow-400/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-yellow-400" />
                    Fins de Semana
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-2">
                    <strong className="text-yellow-400">Sábado:</strong> 16:00 às 19:00
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-red-400">Domingo:</strong> Fechado
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold">
            Agendar Aula Experimental
          </Button>
        </div>
      </div>
    </section>
  );
};
