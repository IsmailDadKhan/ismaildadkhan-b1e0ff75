import { Code, TrendingUp, ShoppingCart, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Tech",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "Pandas & NumPy", level: 85 },
        { name: "Matplotlib & Seaborn", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Power BI", level: 88 },
        { name: "Excel", level: 92 },
      ]
    },
    {
      title: "Marketing & Content",
      icon: TrendingUp,
      color: "success",
      skills: [
        { name: "Social Media Management", level: 95 },
        { name: "Campaign Optimization", level: 85 },
        { name: "SEO", level: 80 },
        { name: "Copywriting", level: 90 },
        { name: "SRS Documentation", level: 88 },
        { name: "Content Strategy", level: 85 },
      ]
    },
    {
      title: "E-commerce",
      icon: ShoppingCart,
      color: "accent",
      skills: [
        { name: "Product Listings", level: 92 },
        { name: "Inventory Management", level: 88 },
        { name: "Order Management", level: 90 },
        { name: "Marketplace Optimization", level: 85 },
        { name: "Sales Analysis", level: 87 },
        { name: "Customer Support", level: 90 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "primary",
      skills: [
        { name: "Analytical Thinking", level: 95 },
        { name: "Communication", level: 92 },
        { name: "Creativity", level: 88 },
        { name: "Team Collaboration", level: 90 },
        { name: "Problem Solving", level: 93 },
        { name: "Project Management", level: 85 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          progressBg: 'bg-primary/20',
          progressFill: 'bg-primary'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          progressBg: 'bg-success/20',
          progressFill: 'bg-success'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          progressBg: 'bg-accent/20',
          progressFill: 'bg-accent'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          progressBg: 'bg-primary/20',
          progressFill: 'bg-primary'
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

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className={`w-full h-2 ${colors.progressBg} rounded-full overflow-hidden`}>
                          <div 
                            className={`h-full ${colors.progressFill} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
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