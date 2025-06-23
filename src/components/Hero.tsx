
import { Button } from "@/components/ui/button";
import { Play, Trophy, Users, Calendar } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/1c15bf64-0ed9-42d9-bfca-f61b70a28d8a.png" 
                alt="Gorila Rise" 
                className="h-24 w-24 mx-auto lg:mx-0 mb-4"
              />
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                GORILA <span className="text-yellow-400">RISE</span>
              </h1>
              <p className="text-xl text-yellow-400 font-semibold mb-2">
                ASSOCIAÇÃO ESPORTIVA E CULTURAL
              </p>
              <p className="text-lg text-gray-300">
                Mantenha-se forte e alcance seu objetivo
              </p>
            </div>

            <div className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Nossa história começa em 2018 com o Estudo Gorila Rise e seu coração social: 
                o Projeto Rise Kids. Hoje, essa semente transformou-se na Associação Esportiva 
                e Cultural Gorila Rise uma evolução que amplia nosso compromisso com a comunidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold">
                <Users className="mr-2 h-5 w-5" />
                Seja um Sócio
              </Button>
              <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                <Play className="mr-2 h-5 w-5" />
                Conheça Nossa História
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Desde 2018</h3>
              <p className="text-gray-300">Transformando vidas através do esporte</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <Users className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Comunidade</h3>
              <p className="text-gray-300">Inclusão, cidadania e desenvolvimento</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <Calendar className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Modalidades</h3>
              <p className="text-gray-300">Esporte, cultura e educação</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-colors">
              <div className="h-12 w-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl mb-4">
                MT
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Várzea Grande</h3>
              <p className="text-gray-300">Rua Bambuí nº 12, Jardim União</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
