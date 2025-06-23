
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Heart, CreditCard, Users, Trophy, Play } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const SupportAngel = () => {
  const [donationType, setDonationType] = useState("");
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleDonation = () => {
    if (!donationType || !amount) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Obrigado pela sua doação!",
      description: "Sua contribuição fará a diferença na vida de muitos atletas.",
    });
  };

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Anjo do <span className="text-yellow-400">Esporte</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Seja um anjo e ajude a transformar vidas através do esporte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Doação */}
          <div className="space-y-8">
            <Card className="bg-gray-900 border-yellow-400/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-yellow-400" />
                  Faça sua Doação
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300">Tipo de Contribuição</Label>
                  <Select onValueChange={setDonationType}>
                    <SelectTrigger className="bg-black border-yellow-400/30 text-white">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="donation">Doação</SelectItem>
                      <SelectItem value="sponsorship">Patrocínio</SelectItem>
                      <SelectItem value="equipment">Equipamentos</SelectItem>
                      <SelectItem value="monthly">Contribuição Mensal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-300">Valor (R$)</Label>
                  <Input
                    type="number"
                    placeholder="Digite o valor"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-black border-yellow-400/30 text-white"
                  />
                </div>

                <div>
                  <Label className="text-gray-300">Nome (opcional)</Label>
                  <Input
                    placeholder="Seu nome"
                    className="bg-black border-yellow-400/30 text-white"
                  />
                </div>

                <div>
                  <Label className="text-gray-300">Mensagem (opcional)</Label>
                  <Textarea
                    placeholder="Deixe uma mensagem de apoio"
                    className="bg-black border-yellow-400/30 text-white"
                  />
                </div>

                <Button 
                  onClick={handleDonation}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Fazer Doação
                </Button>
              </CardContent>
            </Card>

            {/* Vídeo Tutorial */}
            <Card className="bg-gray-900 border-yellow-400/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Play className="mr-2 h-5 w-5 text-yellow-400" />
                  Como Fazer sua Doação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-yellow-400 mx-auto mb-2" />
                    <p className="text-gray-300">Vídeo Tutorial</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Assista ao vídeo e aprenda o passo a passo para fazer sua doação 
                  e como ela impacta diretamente na vida dos nossos atletas.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Informações sobre Doações */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-red-400/10 to-pink-600/10 border-yellow-400/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="mr-2 h-5 w-5 text-yellow-400" />
                  Impacto das Doações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <p className="text-gray-300">Equipamentos esportivos para treinos</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <p className="text-gray-300">Uniforms e materiais para competições</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <p className="text-gray-300">Transporte para eventos esportivos</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <p className="text-gray-300">Bolsas de estudo para atletas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-yellow-400/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
                  Regras de Doação 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-300 text-sm space-y-2">
                  <h4 className="text-white font-semibold mb-2">Incentivos Fiscais:</h4>
                  <p>• Pessoas físicas: dedução de até 6% da renda bruta</p>
                  <p>• Pessoas jurídicas: dedução de até 1% do lucro operacional</p>
                  <p>• Lei Federal de Incentivo ao Esporte (Lei 11.438/2006)</p>
                  
                  <h4 className="text-white font-semibold mt-4 mb-2">Documentação:</h4>
                  <p>• Certificado de entidade beneficente fornecido</p>
                  <p>• Comprovante de doação para Imposto de Renda</p>
                  <p>• Relatório anual de aplicação dos recursos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-400/10 to-teal-600/10 border-yellow-400/20">
              <CardHeader>
                <CardTitle className="text-white">Transparência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Todos os recursos doados são aplicados diretamente nos projetos esportivos 
                  e sociais. Relatórios trimestrais são enviados aos doadores sobre o uso 
                  dos recursos e resultados alcançados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
