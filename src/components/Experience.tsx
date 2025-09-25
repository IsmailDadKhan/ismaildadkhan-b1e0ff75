import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Social Media Marketing Consultant",
      company: "Freelance",
      location: "Remote",
      period: "2023 - Present",
      description: "Managed brand identity, content creation, and growth strategies for multiple clients across various industries.",
      responsibilities: [
        "Developed and executed social media strategies",
        "Created engaging content and visual assets",
        "Managed posting schedules and community engagement",
        "Analyzed performance metrics and optimized campaigns",
        "Increased follower engagement by average of 45%"
      ],
      color: "primary"
    },
    {
      title: "Social Media Marketing Intern",
      company: "Digital Marketing Agency",
      location: "Karachi, Pakistan",
      period: "2022 - 2023",
      description: "Assisted with social media campaigns, engagement tracking, and performance reporting for agency clients.",
      responsibilities: [
        "Supported campaign development and execution",
        "Monitored social media engagement and interactions",
        "Created performance reports and analytics dashboards",
        "Collaborated with design team on visual content",
        "Gained experience with multiple social media platforms"
      ],
      color: "success"
    },
    {
      title: "Freelancer (E-Commerce & Copywriting)",
      company: "Various Clients",
      location: "Remote",
      period: "2022 - Present",
      description: "Provided e-commerce support and technical documentation services for online businesses and software projects.",
      responsibilities: [
        "Optimized product listings and descriptions",
        "Created comprehensive SRS documentation",
        "Developed engaging copy for marketing materials",
        "Managed inventory and order processing systems",
        "Improved product visibility and sales conversion"
      ],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          accent: 'bg-primary'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          accent: 'bg-success'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          accent: 'bg-accent'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          accent: 'bg-primary'
        };
    }
  };

  return (
    <section id="experience" className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey in marketing and data analysis
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const colors = getColorClasses(exp.color);
                
                return (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className={`relative z-10 ${colors.bg} p-3 rounded-full`}>
                      <Briefcase className={`w-5 h-5 ${colors.text}`} />
                    </div>

                    {/* Experience Card */}
                    <div className="flex-1 bg-card p-4 lg:p-6 rounded-2xl border border-border hover:shadow-md transition-shadow">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <p className={`font-medium ${colors.text}`}>{exp.company}</p>
                          <div className="flex items-center text-sm text-muted-foreground space-x-4">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Key Responsibilities & Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start text-sm text-muted-foreground">
                              <div className={`w-1.5 h-1.5 ${colors.accent} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Current Focus */}
          <div className="mt-8 text-center bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-2xl border border-border">
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">
              Current Focus
            </h3>
            <p className="text-muted-foreground">
              Combining my marketing experience with data science skills to help businesses make 
              data-driven decisions while maintaining strong brand presence and customer engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;