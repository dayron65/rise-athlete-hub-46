
import { useState } from "react";
import { Menu, X, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const Header = ({ currentSection, setCurrentSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "student", label: "Painel do Aluno" },
    { id: "sports", label: "Projetos Esportivos" },
    { id: "cultural", label: "Projetos Culturais" },
    { id: "classes", label: "Aulas" },
    { id: "events", label: "Agenda" },
    { id: "store", label: "Loja" },
    { id: "membership", label: "Sócio Torcedor" },
    { id: "support", label: "Anjo do Esporte" },
  ];

  return (
    <header className="bg-black border-b-2 border-yellow-400 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1c15bf64-0ed9-42d9-bfca-f61b70a28d8a.png" 
              alt="Gorila Rise" 
              className="h-12 w-12"
            />
            <div>
              <h1 className="text-yellow-400 font-bold text-xl">GORILA RISE</h1>
              <p className="text-white text-xs">MANTENHA-SE FORTE E ALCANCE SEU OBJETIVO</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentSection === item.id
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="bg-yellow-400 text-black hover:bg-yellow-500">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Loja
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 px-4 rounded transition-colors ${
                    currentSection === item.id
                      ? "text-yellow-400 bg-gray-900"
                      : "text-white hover:text-yellow-400 hover:bg-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
