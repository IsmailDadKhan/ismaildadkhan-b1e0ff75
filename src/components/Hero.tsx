import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import profileImage from "@/assets/ismail-profile-new.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
              Hello There!
            </div>
            
            <div className="space-y-4">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl text-foreground leading-tight">
                I'm <span className="text-primary">Ismail Dad Khan</span>,<br />
                Data Science &<br />
                Digital Marketing<br />
                <span className="text-accent">Enthusiast</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Turning Data and Creativity into Impactful Solutions. 
                Specializing in Python, Power BI, Social Media Management, and E-commerce Support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="rounded-full px-8 group"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="rounded-full px-8 group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Hire Me
              </Button>
            </div>

            {/* Role Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Data Analyst
              </span>
              <span className="px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
                Social Media Consultant
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                E-commerce Support
              </span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-slide-up mt-8 lg:mt-0">
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

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg animate-float">
                Data Scientist
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;