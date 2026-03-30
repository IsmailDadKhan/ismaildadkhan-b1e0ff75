import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import profileImage from "@/assets/ismail-profile-professional.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
              Hello There!
            </div>
            
            <div className="space-y-3">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl text-foreground leading-tight">
                I'm <span className="text-primary">Ismail Dad Khan</span>,<br />
                Data Science & Digital Marketing<br />
                <span className="text-accent">Enthusiast</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Computer Science Student (Data Science) | Aspiring Data Analyst | Social Media Marketing Consultant
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="rounded-full px-8 group"
                asChild
              >
                <a href="https://drive.google.com/uc?export=download&id=1_PLACEHOLDER_CV_ID" className="inline-flex items-center justify-center" download>
                  Download CV
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="rounded-full px-8 group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Let's Connect
              </Button>
            </div>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Computer Science Student
              </span>
              <span className="px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
                Data Analyst
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Social Media Consultant
              </span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up mt-6 lg:mt-0">
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6 animate-float"></div>
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={profileImage}
                  alt="Ismail Dad Khan - Data Science & Digital Marketing Professional"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-float">
                Data Analyst
              </div>
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                Marketing Consultant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;