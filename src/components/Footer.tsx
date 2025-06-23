
import { Instagram, Youtube, Facebook, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-yellow-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/1c15bf64-0ed9-42d9-bfca-f61b70a28d8a.png" 
                alt="Gorila Rise" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-yellow-400 font-bold text-xl">GORILA RISE</h3>
                <p className="text-white text-xs">ASSOCIAÇÃO ESPORTIVA</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Mantenha-se forte e alcance seu objetivo
            </p>
            <p className="text-gray-400 text-xs">
              Prof. Thiago Alexandre Oliveira Silva<br/>
              Fundador e Responsável Legal
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <p className="text-gray-300 text-sm">
                  Rua Bambuí nº 12<br/>
                  Jardim União, Várzea Grande - MT
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <p className="text-gray-300 text-sm">(65) 99914-3831</p>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/gorilarise" target="_blank" rel="noopener noreferrer" 
                 className="text-yellow-400 hover:text-yellow-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/gorilarise" target="_blank" rel="noopener noreferrer"
                 className="text-yellow-400 hover:text-yellow-300 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/gorilarise" target="_blank" rel="noopener noreferrer"
                 className="text-yellow-400 hover:text-yellow-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-white font-semibold mb-4">Horários</h4>
            <div className="text-gray-300 text-sm space-y-1">
              <p><strong>Matutino:</strong> 05:30 - 08:30</p>
              <p><strong>Vespertino:</strong> 17:00 - 18:00</p>
              <p><strong>Noturno:</strong> 19:00 - 21:00</p>
              <p><strong>Sábado:</strong> 16:00 - 19:00</p>
              <p><strong>Domingo:</strong> Fechado</p>
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
