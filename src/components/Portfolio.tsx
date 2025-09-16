import { ExternalLink, Github, BarChart, ShoppingCart, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Sales Analysis & Customer Insights",
      category: "Data Analysis",
      description: "Developed comprehensive ETL pipeline with star schema design, created interactive dashboards, and delivered customer segmentation recommendations that improved targeting by 35%.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Pandas", "Power BI", "SQL", "Matplotlib"],
      features: [
        "ETL Pipeline Development",
        "Star Schema Design",
        "Interactive Dashboards",
        "Customer Segmentation",
        "Sales Performance Analysis"
      ],
      icon: BarChart,
      color: "primary",
      type: "Academic Project"
    },
    {
      title: "E-commerce Store Management",
      category: "E-commerce",
      description: "Managed complete e-commerce operations including product listings, inventory tracking, and sales analysis for multiple online stores, increasing efficiency by 40%.",
      image: "/api/placeholder/400/250",
      technologies: ["Excel", "Shopify", "WooCommerce", "Google Analytics"],
      features: [
        "Product Listing Optimization",
        "Inventory Management System",
        "Sales Tracking & Analysis",
        "Order Processing Automation",
        "Performance Reporting"
      ],
      icon: ShoppingCart,
      color: "accent",
      type: "Freelance Project"
    },
    {
      title: "Social Media Growth Campaign",
      category: "Digital Marketing",
      description: "Created and executed comprehensive social media strategy that increased brand engagement by 150% and follower growth by 80% across multiple platforms.",
      image: "/api/placeholder/400/250",
      technologies: ["Canva", "Buffer", "Google Analytics", "Facebook Ads"],
      features: [
        "Brand Identity Development",
        "Content Calendar Creation",
        "Engagement Strategy",
        "Performance Analytics",
        "Campaign Optimization"
      ],
      icon: Users,
      color: "success",
      type: "Client Project"
    },
    {
      title: "Technical Documentation Suite",
      category: "Content Writing",
      description: "Authored comprehensive SRS documentation, user manuals, and technical guides for software projects, improving team efficiency and project clarity.",
      image: "/api/placeholder/400/250",
      technologies: ["Microsoft Word", "Confluence", "Figma", "Markdown"],
      features: [
        "SRS Documentation",
        "User Manual Creation",
        "API Documentation",
        "Process Documentation",
        "Content Strategy"
      ],
      icon: FileText,
      color: "primary",
      type: "Professional Work"
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
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Portfolio & Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my work in data analysis, digital marketing, and e-commerce solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const colors = getColorClasses(project.color);
              const Icon = project.icon;
              
              return (
                <div 
                  key={index} 
                  className="bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image/Visual */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`${colors.bg} p-6 rounded-2xl`}>
                        <Icon className={`w-16 h-16 ${colors.text}`} />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm font-medium rounded-full`}>
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground font-medium">{project.category}</span>
                      </div>
                      <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <div className={`w-1 h-1 ${colors.text.replace('text-', 'bg-')} rounded-full`}></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 group/btn"
                      >
                        View Details
                        <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className={`${colors.text}`}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a project?
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg" 
              className="rounded-full px-8"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;