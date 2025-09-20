import { Code, TrendingUp, ShoppingCart, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Tech",
      icon: Code,
      color: "primary",
      skills: [
        "Python",
        "Pandas & NumPy", 
        "Matplotlib & Seaborn",
        "SQL", 
        "Power BI",
        "Excel"
      ]
    },
    {
      title: "Marketing & Content",
      icon: TrendingUp,
      color: "success",
      skills: [
        "Social Media Management",
        "Campaign Optimization",
        "SEO", 
        "Copywriting",
        "SRS Documentation",
        "Content Strategy"
      ]
    },
    {
      title: "E-commerce",
      icon: ShoppingCart,
      color: "accent",
      skills: [
        "Product Listings",
        "Inventory Management",
        "Order Management",
        "Marketplace Optimization",
        "Sales Analysis", 
        "Customer Support"
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "primary",
      skills: [
        "Analytical Thinking",
        "Communication",
        "Creativity",
        "Team Collaboration", 
        "Problem Solving",
        "Project Management"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          badge: 'bg-primary/10 text-primary border-primary/20'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          border: 'border-success/20',
          badge: 'bg-success/10 text-success border-success/20'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          border: 'border-accent/20',
          badge: 'bg-accent/10 text-accent border-accent/20'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          border: 'border-primary/20',
          badge: 'bg-primary/10 text-primary border-primary/20'
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              My technical and professional capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              const Icon = category.icon;
              
              return (
                <div key={index} className="bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`${colors.bg} p-3 rounded-lg`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 ${colors.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;