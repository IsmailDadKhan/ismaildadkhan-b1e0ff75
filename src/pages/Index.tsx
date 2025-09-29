import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <p className="font-display font-semibold text-lg text-foreground">
              Ismail Dad Khan
            </p>
            <p className="text-muted-foreground">
              Computer Science Student | Aspiring Data Analyst | Social Media Marketing Consultant
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2025 Ismail Dad Khan</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
