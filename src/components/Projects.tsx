import { ExternalLink, Github, BarChart3, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Sales Analysis & Customer Insights Project",
      description: "Designed and implemented a comprehensive ETL pipeline with star schema architecture for sales data analysis. Created interactive dashboards and performed customer clustering to identify key insights and trends.",
      technologies: ["Python", "SQL", "Power BI", "Pandas", "Matplotlib"],
      features: [
        "ETL Pipeline Development",
        "Star Schema Design",
        "Customer Clustering Analysis",
        "Interactive Visualizations",
        "Sales Performance Metrics"
      ],
      icon: BarChart3,
      color: "primary",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Freelance E-Commerce & SMM Portfolio",
      description: "Managed comprehensive social media marketing campaigns and e-commerce operations for multiple clients. Optimized product listings, created brand-focused content, and significantly improved engagement rates.",
      technologies: ["Social Media Tools", "Content Creation", "E-commerce Platforms", "Analytics"],
      features: [
        "Brand Identity Management",
        "Content Strategy & Creation",
        "Product Listing Optimization",
        "Engagement Growth Campaigns",
        "Performance Analytics"
      ],
      icon: ShoppingBag,
      color: "success",
      liveUrl: "#",
      githubUrl: "#"
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
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20'
        };
    }
  };

  return (
    <section id="projects" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work in data analysis and digital marketing
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              const Icon = project.icon;
              
              return (
                <div 
                  key={index}
                  className={`bg-card p-4 lg:p-6 rounded-2xl border-2 ${colors.border} hover:shadow-lg transition-all duration-300 group`}
                >
                  {/* Project Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`${colors.bg} p-3 rounded-lg group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mr-3 flex-shrink-0`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="rounded-full group/btn"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="rounded-full group/btn"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        Source Code
                        <Github className="ml-2 w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More Projects Note */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-2xl border border-border">
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground">
                I'm continuously working on new projects that combine data analysis with marketing insights. 
                Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;