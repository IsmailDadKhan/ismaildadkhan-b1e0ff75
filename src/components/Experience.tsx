import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Social Media Marketing Consultant",
      company: "Artech Xperts",
      location: "Pakistan",
      period: "Oct 2022 - Sep 2023 · 1 yr",
      type: "Full-time",
      description: "Developed and maintained brand identity across multiple social media platforms.",
      responsibilities: [
        "Developed and maintained brand identity across multiple social media platforms",
        "Created engaging content strategies tailored to target audiences",
        "Managed end-to-end content creation, scheduling, and posting",
        "Monitored performance metrics to track growth and engagement",
        "Implemented techniques to increase followers, reach, and brand visibility",
        "Collaborated on ideas for campaigns and promotions to strengthen digital presence"
      ],
      color: "primary"
    },
    {
      title: "Social Media Marketing Intern",
      company: "Artech Xperts",
      location: "Pakistan",
      period: "Oct 2021 - Dec 2022 · 1 yr 3 mos",
      type: "Part-time",
      description: "Assisted in content creation and scheduling for social media platforms.",
      responsibilities: [
        "Assisted in content creation and scheduling for social media platforms",
        "Supported the team in maintaining brand identity and consistency",
        "Helped monitor engagement metrics and audience feedback",
        "Researched social media trends and competitor strategies to suggest improvements",
        "Contributed to brainstorming sessions for campaign ideas and promotions"
      ],
      color: "success"
    },
    {
      title: "Freelancer – E-commerce Support",
      company: "Indeed",
      location: "Karachi, Sindh, Pakistan · Remote",
      period: "Dec 2024 - Feb 2025 · 3 mos",
      type: "Contract",
      description: "Provided e-commerce support and product management services.",
      responsibilities: [
        "Managed product listings and inventory",
        "Optimized product descriptions for better visibility",
        "Handled order processing and customer inquiries",
        "Improved product presentation and sales conversion"
      ],
      color: "accent"
    },
    {
      title: "Freelancer – Content Writing & Documentation",
      company: "Local Clients",
      location: "Karachi, Sindh, Pakistan · Hybrid",
      period: "Jan 2023 - May 2023 · 5 mos",
      type: "Freelance",
      description: "Provided content writing and technical documentation services.",
      responsibilities: [
        "Created comprehensive SRS documentation",
        "Developed engaging copy for various marketing materials",
        "Optimized content for target audiences",
        "Delivered high-quality documentation on schedule"
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
                          <div>
                            <p className={`font-medium ${colors.text}`}>{exp.company}</p>
                            <p className="text-xs text-muted-foreground">{exp.type}</p>
                          </div>
                          <div className="flex flex-col sm:items-end text-sm text-muted-foreground gap-1">
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