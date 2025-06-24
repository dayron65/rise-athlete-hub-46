
import { useState } from "react";
import { Menu, X, User, ShoppingCart, Bell } from "lucide-react";
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
    <header className="bg-black/95 backdrop-blur-md border-b-2 border-yellow-400 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3 py-2">
            <img 
              src="/lovable-uploads/1c15bf64-0ed9-42d9-bfca-f61b70a28d8a.png" 
              alt="Gorila Rise" 
              className="h-12 w-12 drop-shadow-lg hover:scale-110 transition-transform duration-200"
            />
            <div>
              <h1 className="text-yellow-400 font-bold text-xl bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text">
                GORILA RISE
              </h1>
              <p className="text-white text-xs font-medium opacity-90">
                ASSOCIAÇÃO ESPORTIVA E CULTURAL
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 relative group ${
                  currentSection === item.id
                    ? "text-black bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md"
                    : "text-white hover:text-yellow-400 hover:bg-gray-800/50"
                }`}
              >
                {item.label}
                {currentSection !== item.id && (
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Notification Bell */}
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-yellow-400 hover:bg-gray-800/50 relative">
              <Bell className="h-4 w-4" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">3</span>
              </div>
            </Button>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setCurrentSection("login")}
              className={`border-yellow-400/60 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium transition-all duration-200 hidden sm:flex ${
                currentSection === "login" ? "bg-yellow-400 text-black" : ""
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            
            <Button 
              size="sm" 
              onClick={() => setCurrentSection("store")}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600 font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Loja
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-yellow-400 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-800 bg-black/95 backdrop-blur-md">
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                    currentSection === item.id
                      ? "text-black bg-gradient-to-r from-yellow-400 to-yellow-500 font-semibold"
                      : "text-white hover:text-yellow-400 hover:bg-gray-800/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Login Button */}
              <div className="pt-4 border-t border-gray-800 mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => {
                    setCurrentSection("login");
                    setIsMenuOpen(false);
                  }}
                  className="w-full border-yellow-400/60 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium"
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
