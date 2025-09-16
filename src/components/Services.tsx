import { BarChart3, Share2, ShoppingBag, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Data Analysis & Reporting",
      description: "Transform raw data into actionable insights with comprehensive analytics, dashboard creation, and visual storytelling.",
      features: [
        "ETL Pipeline Development",
        "Interactive Dashboard Design",
        "Statistical Analysis",
        "Data Visualization",
        "Performance Reporting",
        "Business Intelligence"
      ],
      color: "primary"
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Build and grow your brand presence across social platforms with strategic content and engagement optimization.",
      features: [
        "Brand Identity Development",
        "Content Creation & Curation",
        "Social Media Strategy",
        "Engagement Tracking",
        "Campaign Management",
        "Analytics & Reporting"
      ],
      color: "success"
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Support",
      description: "Optimize your online store operations with comprehensive e-commerce management and sales analysis.",
      features: [
        "Product Listing Optimization",
        "Inventory Management",
        "Order Processing",
        "Sales Data Analysis",
        "Marketplace Integration",
        "Customer Support"
      ],
      color: "accent"
    },
    {
      icon: FileText,
      title: "Content Writing & Documentation",
      description: "Create compelling content and comprehensive documentation that drives results and clarity.",
      features: [
        "Technical Documentation",
        "SRS Documentation",
        "SEO-Optimized Content",
        "Product Descriptions",
        "Blog Writing",
        "Copywriting"
      ],
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          hover: 'hover:border-primary/40'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          border: 'border-success/20',
          hover: 'hover:border-success/40'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20',
          hover: 'hover:border-accent/40'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          hover: 'hover:border-primary/40'
        };
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Services I Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to help your business grow through data insights and digital excellence
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => {
              const colors = getColorClasses(service.color);
              const Icon = service.icon;
              
              return (
                <div 
                  key={index} 
                  className={`bg-card p-8 rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg group`}
                >
                  {/* Service Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`${colors.bg} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-1.5 h-1.5 ${colors.text.replace('text-', 'bg-')} rounded-full`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    onClick={scrollToContact}
                    className={`${colors.text} hover:${colors.bg} group/btn w-full justify-between`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-border">
            <h3 className="font-display font-semibold text-2xl text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help transform your data into insights and grow your digital presence.
            </p>
            <Button onClick={scrollToContact} size="lg" className="rounded-full px-8">
              Start a Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;