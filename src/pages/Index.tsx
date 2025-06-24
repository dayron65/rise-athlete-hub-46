
import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { StudentPanel } from "@/components/StudentPanel";
import { SportsProjects } from "@/components/SportsProjects";
import { CulturalProjects } from "@/components/CulturalProjects";
import { Classes } from "@/components/Classes";
import { Events } from "@/components/Events";
import { Store } from "@/components/Store";
import { Membership } from "@/components/Membership";
import { SupportAngel } from "@/components/SupportAngel";
import { Login } from "@/components/Login";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return (
          <>
            <Hero />
            <About />
          </>
        );
      case "student":
        return <StudentPanel />;
      case "sports":
        return <SportsProjects />;
      case "cultural":
        return <CulturalProjects />;
      case "classes":
        return <Classes />;
      case "events":
        return <Events />;
      case "store":
        return <Store />;
      case "membership":
        return <Membership />;
      case "support":
        return <SupportAngel />;
      case "login":
        return <Login />;
      default:
        return (
          <>
            <Hero />
            <About />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderSection()}
      <Footer />
    </div>
  );
};

export default Index;
