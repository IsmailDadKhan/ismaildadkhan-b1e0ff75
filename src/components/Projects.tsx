import { ExternalLink, Github, BarChart3, ShoppingBag, Brain, Shield, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import dakhlaImage from "@/assets/dakhla-project.png.asset.json";
import bakhabaraiImage from "@/assets/bakhabarai-project.jpg.asset.json";
import musafirImage from "@/assets/musafir-project.png.asset.json";

const Projects = () => {
  const projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    icon: any;
    color: string;
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    badge?: string;
  }> = [
    {
      title: "FYP – Dakhla (AI-Assisted University Admissions Platform)",
      description: "An AI-powered academic platform that assists students with smart search, recommendations, and automated content generation using RAG and chatbot functionality — now live at dakhla.pk.",
      technologies: ["Python", "AI/ML", "RAG", "NLP", "Flask", "React.js", "Tailwind CSS", "Snowflake", "PostgreSQL", "Chatbot", "Data Extraction"],
      features: [
        "AI-powered smart search & recommendations",
        "Data extraction & knowledge retrieval (RAG)",
        "AI-based chatbot for student assistance",
        "Personalized learning insights from structured & unstructured data",
        "System design, workflows & database architecture"
      ],
      icon: Brain,
      color: "primary",
      image: dakhlaImage.url,
      liveUrl: "https://dakhla.pk",
      githubUrl: "https://github.com/dakhla-pk",
      badge: "Live"
    },
    {
      title: "BakhabarAI - Agentic Crisis Intelligence & Response System",
      description: "BakhabarAI is a multi-agent crisis detection and response system for Pakistani cities. It fuses signals from social media, weather APIs, traffic data, and citizen reports to detect urban emergencies in real time, then autonomously allocates resources and coordinates response actions.",
      technologies: ["Python", "Google ADK", "Flutter", "Firebase", "Google Maps API", "Weather API", "Geocoding API", "Places API", "Firestore", "FCM", "Multi-Agent AI"],
      features: [
        "5 AI agents orchestrated via Google Antigravity (ADK)",
        "Compound crisis reasoning for cascading events",
        "Flutter mobile app with Expert View toggle",
        "Real Google Maps, Weather, Geocoding, and Places APIs",
        "Firebase Auth (phone OTP), Firestore, and FCM push notifications",
        "False alarm detection and automatic alert retraction",
        "12x faster response time vs rule-based system"
      ],
      icon: Shield,
      color: "accent",
      image: bakhabaraiImage.url,
      githubUrl: "https://github.com/naumanaarif/BakhabarAI"
    },
    {
      title: "Musafir - Journey Planner for Karachi's Public Transit",
      description: "Musafir is an AI-powered journey planning application designed specifically for Karachi's public transport ecosystem. It utilizes real-world local data of BRTs, Buses, and Chinchis to provide accurate, context-aware bus routes and transit advice.",
      technologies: ["Python", "AI/ML", "NLP", "Google Maps API", "Voice Input", "Route Optimization", "Public Transit Data"],
      features: [
        "AI-powered journey planning for Karachi's public transport",
        "Real-world local data of BRTs, Buses, and Chinchis",
        "Text and voice input for destination queries",
        "Context-aware bus routes and transit advice",
        "Built for National AI Hackathon 2026 Karachi",
        "Finished in Top 5 among 60+ teams across Karachi"
      ],
      icon: Map,
      color: "primary",
      image: musafirImage.url,
      githubUrl: "https://github.com/naumanaarif/musafir"
    },
    {
      title: "Sales Analysis & Customer Insights Project",
      description: "Designed and implemented a comprehensive ETL pipeline with star schema architecture for sales data analysis. Created interactive dashboards and performed customer clustering to identify key insights and trends.",
      technologies: ["Excel", "Python", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Power BI", "Jupyter Notebook"],
      features: [
        "ETL Pipeline Development",
        "Star Schema Design",
        "Customer Clustering Analysis",
        "Interactive Visualizations",
        "Sales Performance Metrics"
      ],
      icon: BarChart3,
      color: "primary",
      image: "https://i.postimg.cc/zBRqgpfp/Gemini-Generated-Image-2v9hvd2v9hvd2v9h.png",
      liveUrl: "https://docs.google.com/presentation/d/1qs5GjJr8RJDf0IjBssrQyF7fRDMJxN_iuMTeIL1Vgwk/edit?usp=sharing"
    },
    {
      title: "Freelance E-Commerce & SMM Portfolio",
      description: "Managed comprehensive social media marketing campaigns and e-commerce operations for multiple clients. Optimized product listings, created brand-focused content, and significantly improved engagement rates.",
      technologies: ["Meta Business Suite", "Google Analytics", "WooCommerce", "Shopify", "Google Sheets", "Excel", "Social Media Strategy", "Content Planning", "Listings", "Product Optimization", "Storytelling", "Canva", "Adobe Photoshop"],
      features: [
        "Brand Identity Management",
        "Content Strategy & Creation",
        "Product Listing Optimization",
        "Engagement Growth Campaigns",
        "Performance Analytics"
      ],
      icon: ShoppingBag,
      color: "success",
      image: "https://i.postimg.cc/T3g7p4g0/Gemini-Generated-Image-4aryk24aryk24ary.png"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' };
      case 'success':
        return { bg: 'bg-success/10', text: 'text-success', border: 'border-success/20' };
      case 'accent':
        return { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' };
      default:
        return { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' };
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
              A showcase of my work in data science, machine learning, and digital marketing
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
                  {/* Project Image */}
                  {project.image && (
                    <div className="mb-4 rounded-lg overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      {project.badge && (
                        <span className="absolute top-2 right-2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          {project.badge}
                        </span>
                      )}
                    </div>
                  )}
                  
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
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex flex-col sm:flex-row gap-3">
                      {project.liveUrl && (
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
                      )}
                      
                      {project.githubUrl && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="rounded-full group/btn"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            GitHub
                            <Github className="ml-2 w-3 h-3 group-hover/btn:scale-110 transition-transform" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
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
