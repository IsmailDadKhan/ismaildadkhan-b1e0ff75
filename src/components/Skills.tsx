import { Code, TrendingUp, ShoppingCart, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        "Python",
        "SQL", 
        "Power BI",
        "Excel (Advanced)",
        "ETL",
        "Data Visualization"
      ]
    },
    {
      title: "Marketing Skills",
      icon: TrendingUp,
      skills: [
        "Social Media Management",
        "Content Creation",
        "E-Commerce Management", 
        "Copywriting",
        "Brand Growth"
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Communication",
        "Collaboration",
        "Analytical Thinking",
        "Problem Solving",
        "Project Management",
        "Creativity"
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              My technical and professional capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              
              return (
                <div key={index} className="bg-card p-4 lg:p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-3 lg:mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg lg:text-xl text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium bg-secondary/50 text-foreground border border-border hover:bg-secondary transition-all hover:scale-105"
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