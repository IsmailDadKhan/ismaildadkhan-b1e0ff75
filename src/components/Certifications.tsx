import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "IBM Python for Data Science, AI & Development",
      provider: "IBM",
      date: "2024",
      skills: ["Python", "Data Analysis", "NumPy", "Pandas"],
      color: "primary",
      url: "https://www.credly.com/badges/ec3fc6cc-705a-4b4c-81ad-930ca421c3c1/public_url"
    },
    {
      title: "IBM Data Science Orientation",
      provider: "IBM",
      date: "2024",
      skills: ["Data Science", "Analytics", "Research Methods"],
      color: "success",
      url: "#"
    },
    {
      title: "Power BI for Beginners",
      provider: "Microsoft Learning",
      date: "2023",
      skills: ["Power BI", "Data Visualization", "Business Intelligence"],
      color: "accent",
      url: "https://coursera.org/share/916082d70f6a37e4800c6b24df33becc"
    },
    {
      title: "Data Analysis with OpenAI API",
      provider: "AI Learning Institute",
      date: "2024",
      skills: ["OpenAI API", "Automated Analysis", "AI Workflows"],
      color: "primary",
      url: "https://coursera.org/share/18b24aa4dc7885d02073f5f12d9e3a94"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          border: 'border-success/20'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20'
        };
    }
  };

  return (
    <section id="certifications" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Certifications & Learning
            </h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning and professional development milestones
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {certifications.map((cert, index) => {
              const colors = getColorClasses(cert.color);
              
              return (
                <div 
                  key={index} 
                  className={`bg-card p-4 rounded-2xl border-2 ${colors.border} hover:shadow-lg transition-all duration-300 group`}
                >
                  {/* Certification Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`${colors.bg} p-3 rounded-lg group-hover:scale-105 transition-transform duration-300`}>
                      <Award className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-lg text-foreground leading-tight">
                        {cert.title}
                      </h3>
                      <p className={`text-sm ${colors.text} font-medium mt-1`}>
                        {cert.provider}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className={`${colors.text} group/btn w-full`}
                    asChild
                  >
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Additional Learning */}
          <div className="mt-8 text-center bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-2xl border border-border">
            <h3 className="font-display font-semibold text-xl text-foreground mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always expanding my knowledge in data science, digital marketing, and emerging technologies. 
              Currently pursuing additional certifications in machine learning and advanced analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium">
                Advanced Analytics
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Cloud Computing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;