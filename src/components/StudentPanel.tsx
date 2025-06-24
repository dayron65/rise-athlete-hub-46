
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Camera, 
  FileText, 
  Contact, 
  Trophy, 
  CreditCard, 
  Calendar,
  Dumbbell,
  Upload,
  Eye,
  Award
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const StudentPanel = () => {
  const [beforePhoto, setBeforePhoto] = useState<File | null>(null);
  const [afterPhoto, setAfterPhoto] = useState<File | null>(null);
  const { toast } = useToast();

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = event.target.files?.[0];
    if (file) {
      if (type === 'before') {
        setBeforePhoto(file);
      } else {
        setAfterPhoto(file);
      }
      toast({
        title: "Foto carregada!",
        description: `Foto ${type === 'before' ? 'inicial' : 'após 6 meses'} carregada com sucesso.`,
      });
    }
  };

  const handleAnamneseClick = () => {
    toast({
      title: "Redirecionando...",
      description: "Você será direcionado para a ficha de anamnese de EDF. Após preenchimento, será enviada para gorilarise@gmail.com",
    });
    // Aqui você implementaria o redirecionamento para o formulário de anamnese
  };

  const handleContractClick = () => {
    toast({
      title: "Contrato Digital",
      description: "Abrindo contrato para assinatura digital. Uma cópia será enviada para gorilarise@gmail.com",
    });
    // Aqui você implementaria a abertura do contrato digital
  };

  const scheduleSlots = [
    "05:30", "06:30", "07:30", "08:30", "09:00", 
    "15:00", "17:00", "18:00", "19:00", "20:00", "21:00"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Painel do <span className="text-yellow-400">Aluno</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Acompanhe seu progresso, gerencie seus treinos e acesse todas as funcionalidades exclusivas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Fotos de Progresso */}
          <Card className="bg-gray-900/80 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-xl">
                <Camera className="mr-3 h-6 w-6 text-yellow-400" />
                Fotos de Progresso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-gray-300 font-medium">Foto Inicial do Treino</Label>
                <div className="mt-3">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(e, 'before')}
                    className="bg-black/50 border-yellow-400/40 text-white file:text-yellow-400 file:bg-transparent hover:border-yellow-400/60 transition-colors"
                  />
                  {beforePhoto && (
                    <p className="text-yellow-400 text-sm mt-2 flex items-center">
                      ✓ {beforePhoto.name}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label className="text-gray-300 font-medium">Foto após 6 meses de treino</Label>
                <div className="mt-3">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(e, 'after')}
                    className="bg-black/50 border-yellow-400/40 text-white file:text-yellow-400 file:bg-transparent hover:border-yellow-400/60 transition-colors"
                  />
                  {afterPhoto && (
                    <p className="text-yellow-400 text-sm mt-2 flex items-center">
                      ✓ {afterPhoto.name}
                    </p>
                  )}
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold py-3 transition-all duration-200">
                <Upload className="mr-2 h-5 w-5" />
                Salvar Fotos
              </Button>
            </CardContent>
          </Card>

          {/* Ficha de Anamnese */}
          <Card className="bg-gray-900/80 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-xl">
                <FileText className="mr-3 h-6 w-6 text-yellow-400" />
                Ficha de Anamnese EDF
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Preencha sua ficha de anamnese de Educação Física. Após preenchimento, será enviada para gorilarise@gmail.com e adicionada ao seu painel.
              </p>
              <Button 
                onClick={handleAnamneseClick}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold py-3 transition-all duration-200"
              >
                Criar Ficha de Anamnese
              </Button>
            </CardContent>
          </Card>

          {/* Contrato Digital */}
          <Card className="bg-gray-900/80 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-xl">
                <Contact className="mr-3 h-6 w-6 text-yellow-400" />
                Contrato Digital
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Acesse e assine digitalmente seu contrato. Uma cópia será enviada para gorilarise@gmail.com após assinatura.
              </p>
              <Button 
                onClick={handleContractClick}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold py-3 transition-all duration-200"
              >
                Acessar Contrato
              </Button>
            </CardContent>
          </Card>

          {/* Recordes Pessoais */}
          <Card className="bg-gray-900/80 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-xl">
                <Trophy className="mr-3 h-6 w-6 text-yellow-400" />
                Recordes Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Adicione e edite seus recordes pessoais em diferentes modalidades.
              </p>
              <div className="space-y-3 text-sm text-gray-400 mb-6 bg-black/30 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p>Teste de 1RM (Repetição Máxima)</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p>VO2 Max e Resistência</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p>Benchmarks CrossFit</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p>Saltos Vertical/Horizontal</p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold py-3 transition-all duration-200">
                <Award className="mr-2 h-5 w-5" />
                Gerenciar Recordes
              </Button>
            </CardContent>
          </Card>

          {/* Cartão de Associado */}
          <Card className="bg-gray-900/80 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-xl">
                <CreditCard className="mr-3 h-6 w-6 text-yellow-400" />
                Cartão de Associado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Gere seu cartão virtual com nome, número de associado e status para descontos exclusivos.
              </p>
              <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 p-4 rounded-lg mb-4 border border-yellow-400/20">
                <p className="text-yellow-400 text-sm font-medium mb-2">Benefícios inclusos:</p>
                <div className="text-xs text-gray-300 space-y-1">
                  <p>• 25% desconto na loja Gorila Rise</p>
                  <p>• Acesso prioritário a eventos</p>
                  <p>• Descontos em lojas parceiras</p>
                  <p>• Descontos na Gorilla Kitchen</p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold py-3 transition-all duration-200">
                Gerar Cartão Virtual
              </Button>
            </CardContent>
          </Card>

          {/* Confirmar Horário */}
          <Card className="bg-gray-900/80 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-xl">
                <Calendar className="mr-3 h-6 w-6 text-yellow-400" />
                Confirmar Horário de Aula
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Confirme seu horário de treino (6 vagas por modalidade)
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {scheduleSlots.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    size="sm"
                    className="border-yellow-400/40 text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-black hover:border-yellow-400 transition-all duration-200 font-medium"
                  >
                    {time}
                  </Button>
                ))}
              </div>
              <div className="bg-gray-800/50 p-3 rounded-lg">
                <p className="text-xs text-gray-400 text-center">
                  <strong className="text-yellow-400">Sábado:</strong> 16h às 19h | <strong className="text-yellow-400">Domingo:</strong> Fechado
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Visualizar Ficha de Treino */}
          <Card className="bg-gray-900/80 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl lg:col-span-2 xl:col-span-1">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-xl">
                <Dumbbell className="mr-3 h-6 w-6 text-yellow-400" />
                Ficha de Treino
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Visualize sua ficha de treino personalizada com exercícios e vídeos explicativos.
              </p>
              <div className="bg-gradient-to-r from-blue-400/10 to-purple-400/10 p-4 rounded-lg mb-6 border border-yellow-400/20">
                <p className="text-yellow-400 text-sm font-medium mb-2">Recursos disponíveis:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  <p>• Exercícios personalizados</p>
                  <p>• Vídeos demonstrativos</p>
                  <p>• Progressão de cargas</p>
                  <p>• Histórico de treinos</p>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold py-3 transition-all duration-200">
                <Eye className="mr-2 h-5 w-5" />
                Visualizar Ficha
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400/10 via-orange-400/10 to-yellow-400/10 p-8 rounded-2xl border border-yellow-400/30 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Maximize Seus <span className="text-yellow-400">Resultados</span>
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
              Utilize todas as ferramentas disponíveis para acompanhar sua evolução e alcançar seus objetivos mais rapidamente
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black/30 px-4 py-2 rounded-full border border-yellow-400/30">
                <span className="text-yellow-400 text-sm font-medium">Acompanhamento Personalizado</span>
              </div>
              <div className="bg-black/30 px-4 py-2 rounded-full border border-yellow-400/30">
                <span className="text-yellow-400 text-sm font-medium">Tecnologia Avançada</span>
              </div>
              <div className="bg-black/30 px-4 py-2 rounded-full border border-yellow-400/30">
                <span className="text-yellow-400 text-sm font-medium">Suporte Profissional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
