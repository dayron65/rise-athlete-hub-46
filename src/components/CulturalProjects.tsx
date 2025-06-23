
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Users, MapPin } from "lucide-react";

export const CulturalProjects = () => {
  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Projetos <span className="text-yellow-400">Culturais</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Arte e cultura transformando vidas
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="bg-gray-900 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105 max-w-md">
            <CardHeader className="text-center">
              <Palette className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <CardTitle className="text-white text-2xl">Quadros de Rua</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <p className="text-gray-300">Estúdio Gorila Rise</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5 text-yellow-400" />
                <p className="text-gray-300">Idade livre</p>
              </div>
              <p className="text-gray-300">
                Expressão artística através da arte urbana, desenvolvendo criatividade e 
                senso estético enquanto valoriza a cultura local.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-400/10 to-pink-600/10 p-8 rounded-lg border border-yellow-400/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Arte Como Transformação Social
            </h3>
            <p className="text-gray-300 text-lg">
              Através da arte promovemos inclusão, expressão individual e valorização da cultura local
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
