
import { Button } from "@/components/ui/button";
import { Play, Trophy, Users, Calendar, ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,215,0,0.02)_50%,transparent_75%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-8">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img 
                  src="/lovable-uploads/1c15bf64-0ed9-42d9-bfca-f61b70a28d8a.png" 
                  alt="Gorila Rise" 
                  className="h-20 w-20 mr-4 drop-shadow-lg"
                />
                <div>
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                    GORILA <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">RISE</span>
                  </h1>
                  <div className="flex items-center justify-center lg:justify-start mt-2">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <p className="text-xl text-yellow-400 font-semibold">
                      ASSOCIAÇÃO ESPORTIVA E CULTURAL
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-400/20 to-transparent p-4 rounded-lg border-l-4 border-yellow-400 mb-6">
                <p className="text-lg text-gray-100 font-medium">
                  Mantenha-se forte e alcance seu objetivo
                </p>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Nossa história começa em <span className="text-yellow-400 font-semibold">2018</span> com o Estudo Gorila Rise e seu coração social: 
                o <span className="text-yellow-400 font-semibold">Projeto Rise Kids</span>. Hoje, essa semente transformou-se na 
                <span className="text-white font-semibold"> Associação Esportiva e Cultural Gorila Rise</span> — 
                uma evolução que amplia nosso compromisso com a comunidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-bold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-200 group">
                <Users className="mr-2 h-5 w-5" />
                Seja um Sócio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg px-8 py-4 bg-transparent backdrop-blur-sm transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                Conheça Nossa História
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Ativo desde 2018</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Várzea Grande - MT</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
              <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Desde 2018</h3>
              <p className="text-gray-300 text-sm">Transformando vidas através do esporte e cultura</p>
              <div className="mt-3 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
              <Users className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Comunidade</h3>
              <p className="text-gray-300 text-sm">Inclusão, cidadania e desenvolvimento humano</p>
              <div className="mt-3 bg-gradient-to-r from-yellow-400/20 to-transparent h-1 rounded-full"></div>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
              <Calendar className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Modalidades</h3>
              <p className="text-gray-300 text-sm">Esporte, cultura e educação integrados</p>
              <div className="mt-3 flex space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400/60 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400/30 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
              <div className="h-12 w-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl mb-4 shadow-lg">
                MT
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Várzea Grande</h3>
              <p className="text-gray-300 text-sm">Rua Bambuí nº 12, Jardim União</p>
              <div className="mt-3">
                <span className="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                  📍 Localização
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-yellow-400/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-10 w-3 h-3 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};
