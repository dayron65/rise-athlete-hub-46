
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { User, Mail, Lock, UserPlus, KeyRound, Calendar, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = async () => {
    setIsLoading(true);
    // Simular processo de login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login realizado!",
        description: "Bem-vindo de volta ao Gorila Rise.",
      });
    }, 1500);
  };

  const handleRegister = async () => {
    setIsLoading(true);
    // Simular processo de cadastro
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Cadastro realizado!",
        description: "Sua conta foi criada com sucesso. Bem-vindo ao Gorila Rise!",
      });
    }, 2000);
  };

  const handlePasswordRecovery = async () => {
    toast({
      title: "Email enviado!",
      description: "Instruções para recuperação de senha foram enviadas para seu email.",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Acesse sua <span className="text-yellow-400">Conta</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Entre na sua conta ou crie uma nova para acessar todos os recursos
          </p>
        </div>

        <Tabs defaultValue="login" className="w-full max-w-2xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900 border border-yellow-400/30">
            <TabsTrigger value="login" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
              Login
            </TabsTrigger>
            <TabsTrigger value="register" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
              Cadastro
            </TabsTrigger>
            <TabsTrigger value="recovery" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
              Recuperar Senha
            </TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card className="bg-gray-900/90 border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="mr-2 h-5 w-5 text-yellow-400" />
                  Entrar na Conta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300">Email</Label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-black/50 border-yellow-400/40 text-white"
                  />
                </div>
                <div>
                  <Label className="text-gray-300">Senha</Label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-black/50 border-yellow-400/40 text-white"
                  />
                </div>
                <Button 
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold py-3"
                >
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <Card className="bg-gray-900/90 border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <UserPlus className="mr-2 h-5 w-5 text-yellow-400" />
                  Criar Nova Conta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">Nome Completo *</Label>
                    <Input
                      placeholder="Seu nome completo"
                      className="bg-black/50 border-yellow-400/40 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">CPF *</Label>
                    <Input
                      placeholder="000.000.000-00"
                      className="bg-black/50 border-yellow-400/40 text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">Email *</Label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-black/50 border-yellow-400/40 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Telefone *</Label>
                    <Input
                      placeholder="(65) 99999-9999"
                      className="bg-black/50 border-yellow-400/40 text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">Data de Nascimento *</Label>
                    <Input
                      type="date"
                      className="bg-black/50 border-yellow-400/40 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Sexo *</Label>
                    <Select>
                      <SelectTrigger className="bg-black/50 border-yellow-400/40 text-white">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300">Endereço Completo *</Label>
                  <Textarea
                    placeholder="Rua, número, bairro, cidade, CEP"
                    className="bg-black/50 border-yellow-400/40 text-white"
                  />
                </div>

                <div>
                  <Label className="text-gray-300">Modalidade de Interesse</Label>
                  <Select>
                    <SelectTrigger className="bg-black/50 border-yellow-400/40 text-white">
                      <SelectValue placeholder="Selecione uma modalidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="musculacao">Musculação</SelectItem>
                      <SelectItem value="crossfit">CrossFit</SelectItem>
                      <SelectItem value="boxe">Boxe</SelectItem>
                      <SelectItem value="atletismo">Atletismo</SelectItem>
                      <SelectItem value="bas "/>
                      <SelectItem value="natacao">Natação</SelectItem>
                      <SelectItem value="levantamento">Levantamento Olímpico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-300">Senha *</Label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="bg-black/50 border-yellow-400/40 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Confirmar Senha *</Label>
                    <Input
                      type="password"
                      placeholder="••••••••"
                      className="bg-black/50 border-yellow-400/40 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-gray-300">Contato de Emergência</Label>
                  <Input
                    placeholder="Nome e telefone para emergência"
                    className="bg-black/50 border-yellow-400/40 text-white"
                  />
                </div>

                <div>
                  <Label className="text-gray-300">Como conheceu o Gorila Rise?</Label>
                  <Select>
                    <SelectTrigger className="bg-black/50 border-yellow-400/40 text-white">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="indicacao">Indicação</SelectItem>
                      <SelectItem value="passando">Passando na frente</SelectItem>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleRegister}
                  disabled={isLoading}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold py-3"
                >
                  {isLoading ? "Criando conta..." : "Criar Conta"}
                </Button>
                
                <p className="text-xs text-gray-400 text-center">
                  Ao criar uma conta, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Password Recovery Tab */}
          <TabsContent value="recovery">
            <Card className="bg-gray-900/90 border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <KeyRound className="mr-2 h-5 w-5 text-yellow-400" />
                  Recuperar Senha
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">
                  Digite seu email para receber instruções de recuperação de senha.
                </p>
                <div>
                  <Label className="text-gray-300">Email</Label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-black/50 border-yellow-400/40 text-white"
                  />
                </div>
                <Button 
                  onClick={handlePasswordRecovery}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold py-3"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Email de Recuperação
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
