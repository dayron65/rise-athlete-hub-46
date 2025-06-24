
import { Instagram, Youtube, Facebook, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-yellow-400/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/1c15bf64-0ed9-42d9-bfca-f61b70a28d8a.png" 
                alt="Gorila Rise" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-yellow-400 font-bold text-xl">GORILA RISE</h3>
                <p className="text-white text-sm">ASSOCIAÇÃO ESPORTIVA E CULTURAL</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 max-w-md">
              Nossa história começa em 2018 com o Estudo Gorila Rise. Hoje somos uma Associação 
              que une esporte, cultura e educação para promover inclusão, cidadania e desenvolvimento humano.
            </p>
            <p className="text-yellow-400 text-sm font-medium">
              Fundador e Responsável Legal: Prof. Thiago Alexandre Oliveira Silva
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <p className="text-gray-300 text-sm">
                  Rua Bambuí nº 12<br />
                  Jardim União<br />
                  Várzea Grande - MT
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <p className="text-gray-300 text-sm">(65) 99914-3831</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 text-yellow-400">@</div>
                <p className="text-gray-300 text-sm">gorilarise@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/gorilarise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com/@gorilarise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/gorilarise" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Associação Esportiva e Cultural Gorila Rise. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
