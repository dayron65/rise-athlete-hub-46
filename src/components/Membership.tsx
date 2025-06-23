
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Medal, Trophy, ShoppingBag, Coffee, Star } from "lucide-react";

export const Membership = () => {
  const plans = [
    {
      name: "Bronze",
      icon: Medal,
      color: "from-amber-600 to-yellow-700",
      borderColor: "border-amber-500",
      price: "R$ 29,90",
      benefits: [
        "5% desconto loja oficial Gorila Rise",
        "Cartão de sócio bronze",
        "20% desconto em uma camisa oficial da temporada",
        "Desconto em bebidas na Gorilla Kitchen"
      ]
    },
    {
      name: "Prata",
      icon: Trophy,
      color: "from-gray-400 to-gray-600",
      borderColor: "border-gray-400",
      price: "R$ 49,90",
      popular: true,
      benefits: [
        "15% desconto loja oficial Gorila Rise",
        "Cartão de sócio prata",
        "50% desconto em uma camisa oficial da temporada",
        "Desconto em bebidas na Gorilla Kitchen"
      ]
    },
    {
      name: "Ouro",
      icon: Crown,
      color: "from-yellow-400 to-yellow-600",
      borderColor: "border-yellow-400",
      price: "R$ 79,90",
      benefits: [
        "20% desconto loja oficial Gorila Rise",
        "Cartão de sócio ouro",
        "1 camisa oficial por temporada",
        "Desconto em bebidas na Gorilla Kitchen",
        "Acesso prioritário a eventos"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sócio <span className="text-yellow-400">Torcedor</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Seja um sócio torcedor e obtenha descontos e brindes exclusivos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-gray-900 ${plan.borderColor}/30 hover:${plan.borderColor}/50 transition-all duration-300 relative ${
                plan.popular ? 'transform scale-105 border-2' : 'border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-400 text-black">
                    <Star className="mr-1 h-3 w-3" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-yellow-400 mb-4">
                  {plan.price}
                  <span className="text-sm text-gray-400 font-normal">/mês</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-500' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  Assinar {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-yellow-400/10 to-orange-600/10 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5 text-yellow-400" />
                Benefícios da Loja
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Descontos exclusivos em todos os produtos oficiais Gorila Rise, 
                incluindo roupas, acessórios e suplementos.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="border-yellow-400/50 text-yellow-400">
                  Roupas Oficiais
                </Badge>
                <Badge variant="outline" className="border-yellow-400/50 text-yellow-400">
                  Acessórios
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-400/10 to-teal-600/10 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Coffee className="mr-2 h-5 w-5 text-yellow-400" />
                Gorilla Kitchen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Descontos especiais em bebidas e lanches na nossa área de convivência 
                Gorilla Kitchen, o local perfeito para relaxar após o treino.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="border-yellow-400/50 text-yellow-400">
                  Bebidas
                </Badge>
                <Badge variant="outline" className="border-yellow-400/50 text-yellow-400">
                  Lanches
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Valores mensais com renovação automática. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};
