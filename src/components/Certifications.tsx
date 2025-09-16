import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Python for Data Science, AI & Development",
      provider: "IBM",
      platform: "Coursera",
      date: "2024",
      description: "Comprehensive course covering Python programming fundamentals, data structures, and applications in data science and AI development.",
      skills: ["Python Programming", "Data Analysis", "NumPy", "Pandas", "API Integration"],
      verified: true,
      color: "primary"
    },
    {
      title: "Foundations of Project Management",
      provider: "Google",
      platform: "Coursera",
      date: "2024",
      description: "Professional certificate covering project management fundamentals, methodologies, and best practices for successful project delivery.",
      skills: ["Project Planning", "Risk Management", "Team Leadership", "Agile Methodology"],
      verified: true,
      color: "success"
    },
    {
      title: "Power BI for Beginners: Build Your First Report",
      provider: "Microsoft Learning",
      platform: "Microsoft Learn",
      date: "2023",
      description: "Hands-on training in Power BI fundamentals, data visualization, and creating interactive business intelligence reports.",
      skills: ["Power BI", "Data Visualization", "DAX", "Business Intelligence", "Report Building"],
      verified: true,
      color: "accent"
    },
    {
      title: "Data Analysis with OpenAI API: Save Time with GenAI",
      provider: "AI Learning Institute",
      platform: "Online Course",
      date: "2024",
      description: "Advanced course on leveraging AI and GPT models for automated data analysis, insights generation, and workflow optimization.",
      skills: ["OpenAI API", "GPT Integration", "Automated Analysis", "AI Workflows", "Data Processing"],
      verified: true,
      color: "primary"
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
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Certifications & Learning
            </h2>
            <p className="text-xl text-muted-foreground">
              Continuous learning and professional development milestones
            </p>
          </div>

          {/* Certifications List */}
          <div className="space-y-8">
            {certifications.map((cert, index) => {
              const colors = getColorClasses(cert.color);
              
              return (
                <div 
                  key={index} 
                  className={`bg-card p-6 lg:p-8 rounded-2xl border-2 ${colors.border} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                    {/* Certification Badge */}
                    <div className="flex-shrink-0 mb-4 lg:mb-0">
                      <div className={`${colors.bg} p-4 rounded-xl group-hover:scale-105 transition-transform duration-300`}>
                        <Award className={`w-8 h-8 ${colors.text}`} />
                      </div>
                    </div>

                    {/* Certification Details */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="font-display font-semibold text-lg text-foreground">
                            {cert.title}
                          </h3>
                          {cert.verified && (
                            <div className={`inline-flex items-center px-3 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full`}>
                              <Award className="w-3 h-3 mr-1" />
                              Verified
                            </div>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground space-y-1 sm:space-y-0 sm:space-x-4">
                          <span className="font-medium">{cert.provider}</span>
                          <span className="hidden sm:block">•</span>
                          <span>{cert.platform}</span>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {cert.date}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>

                      {/* Skills Learned */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Skills Acquired:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Certificate Button */}
                      <div className="pt-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className={`${colors.text} group/btn`}
                        >
                          View Certificate
                          <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Learning */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-border">
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