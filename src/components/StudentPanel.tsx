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
  Upload
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
      description: "Você será direcionado para a ficha de anamnese de EDF.",
    });
    // Aqui seria implementado o redirecionamento para a ficha
  };

  const handleContractClick = () => {
    toast({
      title: "Contrato",
      description: "Abrindo contrato para assinatura digital.",
    });
    // Aqui seria implementado o sistema de contrato
  };

  const scheduleSlots = [
    "05:30", "06:30", "07:30", "08:30", "09:00", 
    "15:00", "17:00", "18:00", "19:00", "20:00", "21:00"
  ];

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Painel do <span className="text-yellow-400">Aluno</span>
          </h2>
          <p className="text-gray-300">Gerencie seu progresso e atividades</p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Fotos de Progresso */}
          <Card className="bg-gray-900 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Camera className="mr-2 h-5 w-5 text-yellow-400" />
                Fotos de Progresso
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-gray-300">Foto Inicial</Label>
                <div className="mt-2">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(e, 'before')}
                    className="bg-black border-yellow-400/30 text-white"
                  />
                  {beforePhoto && (
                    <p className="text-yellow-400 text-sm mt-1">
                      ✓ {beforePhoto.name}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label className="text-gray-300">Foto após 6 meses</Label>
                <div className="mt-2">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handlePhotoUpload(e, 'after')}
                    className="bg-black border-yellow-400/30 text-white"
                  />
                  {afterPhoto && (
                    <p className="text-yellow-400 text-sm mt-1">
                      ✓ {afterPhoto.name}
                    </p>
                  )}
                </div>
              </div>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                <Upload className="mr-2 h-4 w-4" />
                Salvar Fotos
              </Button>
            </CardContent>
          </Card>

          {/* Anamnese */}
          <Card className="bg-gray-900 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="mr-2 h-5 w-5 text-yellow-400" />
                Ficha de Anamnese
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Preencha sua ficha de anamnese de Educação Física para personalizar seu treino.
              </p>
              <Button 
                onClick={handleAnamneseClick}
                className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
              >
                Criar Ficha de Anamnese
              </Button>
            </CardContent>
          </Card>

          {/* Contrato */}
          <Card className="bg-gray-900 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Contact className="mr-2 h-5 w-5 text-yellow-400" />
                Contrato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Acesse e assine digitalmente seu contrato de associação.
              </p>
              <Button 
                onClick={handleContractClick}
                className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
              >
                Acessar Contrato
              </Button>
            </CardContent>
          </Card>

          {/* Recordes Pessoais */}
          <Card className="bg-gray-900 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Trophy className="mr-2 h-5 w-5 text-yellow-400" />
                Recordes Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Adicione e acompanhe seus recordes pessoais em diferentes modalidades.
              </p>
              <div className="space-y-2 text-sm text-gray-400 mb-4">
                <p>• Teste de 1RM</p>
                <p>• VO2 Max</p>
                <p>• Benchmarks CrossFit</p>
                <p>• Saltos vertical/horizontal</p>
              </div>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Gerenciar Recordes
              </Button>
            </CardContent>
          </Card>

          {/* Cartão de Associado */}
          <Card className="bg-gray-900 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-yellow-400" />
                Cartão de Associado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Seu cartão virtual para descontos exclusivos em lojas parceiras.
              </p>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Gerar Cartão Virtual
              </Button>
            </CardContent>
          </Card>

          {/* Agendamento de Horários */}
          <Card className="bg-gray-900 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-yellow-400" />
                Confirmar Horário
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">Confirme seu horário de treino (6 vagas por modalidade)</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {scheduleSlots.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    size="sm"
                    className="border-yellow-400/30 text-white hover:bg-yellow-400 hover:text-black"
                  >
                    {time}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-gray-400">
                Sábado: 16h às 19h | Domingo: Fechado
              </p>
            </CardContent>
          </Card>

          {/* Ficha de Treino */}
          <Card className="bg-gray-900 border-yellow-400/20 lg:col-span-2 xl:col-span-1">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Dumbbell className="mr-2 h-5 w-5 text-yellow-400" />
                Ficha de Treino
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Visualize sua ficha de treino personalizada com exercícios e vídeos explicativos.
              </p>
              <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                Visualizar Ficha
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
