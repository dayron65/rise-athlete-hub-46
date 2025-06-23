
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, CreditCard, Truck, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Store = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const { toast } = useToast();

  const products = [
    {
      id: "1",
      name: "Camiseta Gorila Rise",
      price: 45.90,
      category: "Roupas",
      image: "/placeholder.svg",
      description: "Camiseta oficial 100% algodão"
    },
    {
      id: "2", 
      name: "Munhequeira Oficial",
      price: 25.90,
      category: "Acessórios",
      image: "/placeholder.svg",
      description: "Munhequeira para treinos intensos"
    },
    {
      id: "3",
      name: "Cinturão Gorila Rise",
      price: 120.00,
      category: "Acessórios",
      image: "/placeholder.svg",
      description: "Cinturão de couro para levantamento"
    },
    {
      id: "4",
      name: "Boné Gorila Rise",
      price: 35.90,
      category: "Acessórios",
      image: "/placeholder.svg",
      description: "Boné snapback oficial"
    },
    {
      id: "5",
      name: "Caneca Termica",
      price: 28.90,
      category: "Utensílios",
      image: "/placeholder.svg",
      description: "Caneca térmica 500ml"
    },
    {
      id: "6",
      name: "Whey Protein",
      price: 89.90,
      category: "Suplementos",
      image: "/placeholder.svg",
      description: "Whey protein 900g"
    }
  ];

  const addToCart = (productId: string) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
    toast({
      title: "Produto adicionado!",
      description: "Item adicionado ao carrinho com sucesso.",
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === productId);
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Loja <span className="text-yellow-400">Oficial</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Produtos oficiais Gorila Rise - Esporte & Streetwear
          </p>
        </div>

        {/* Carrinho Summary */}
        {getCartItemCount() > 0 && (
          <div className="mb-8">
            <Card className="bg-yellow-400/10 border-yellow-400/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="h-5 w-5 text-yellow-400" />
                    <span className="text-white font-medium">
                      {getCartItemCount()} itens no carrinho
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-400 font-bold text-lg">
                      R$ {getCartTotal().toFixed(2)}
                    </p>
                    <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500">
                      Finalizar Compra
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Produtos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="bg-gray-900 border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="aspect-square bg-gray-800 rounded-lg mb-3 flex items-center justify-center">
                  <Package className="h-16 w-16 text-yellow-400" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-yellow-400/50 text-yellow-400">
                    {product.category}
                  </Badge>
                  <span className="text-yellow-400 font-bold text-lg">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
                <CardTitle className="text-white text-lg">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                <Button 
                  onClick={() => addToCart(product.id)}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Adicionar ao Carrinho
                  {cart[product.id] && (
                    <Badge className="ml-2 bg-black text-yellow-400">
                      {cart[product.id]}
                    </Badge>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Informações de Pagamento e Entrega */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gray-900 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="mr-2 h-5 w-5 text-yellow-400" />
                Formas de Pagamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-gray-300">
                <p>• Cartão de Crédito/Débito</p>
                <p>• PIX (5% de desconto)</p>
                <p>• Boleto Bancário</p>
                <p>• QR Code</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Truck className="mr-2 h-5 w-5 text-yellow-400" />
                Entrega e Frete
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-gray-300">Calcule o frete para sua região:</p>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Digite seu CEP"
                    className="bg-black border-yellow-400/30 text-white"
                  />
                  <Button variant="outline" className="border-yellow-400/50 text-yellow-400">
                    Calcular
                  </Button>
                </div>
                <p className="text-sm text-gray-400">
                  Política de troca: 30 dias para trocas e devoluções
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
