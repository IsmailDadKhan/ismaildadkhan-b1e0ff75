import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const [expandedJobs, setExpandedJobs] = useState<number[]>([]);
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

  const toggleJob = (index: number) => {
    setExpandedJobs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

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

          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              const isExpanded = expandedJobs.includes(index);
              
              return (
                <Collapsible
                  key={index}
                  open={isExpanded}
                  onOpenChange={() => toggleJob(index)}
                >
                  <div className={`bg-card rounded-xl border-2 ${colors.border} ${colors.hover} transition-all duration-200`}>
                    {/* Card Header - Always Visible */}
                    <div className="p-4 lg:p-6">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`${colors.bg} p-3 rounded-lg flex-shrink-0`}>
                          <Briefcase className={`w-5 h-5 ${colors.text}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          {/* Title & Company */}
                          <div className="mb-3">
                            <h3 className="font-display font-semibold text-lg lg:text-xl text-foreground mb-1">
                              {exp.title}
                            </h3>
                            <p className={`font-medium ${colors.text} mb-1`}>
                              {exp.company} • {exp.type}
                            </p>
                          </div>

                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      {/* Collapsible Trigger Button */}
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full mt-4 text-muted-foreground hover:text-foreground"
                        >
                          <span className="text-sm font-medium">
                            {isExpanded ? "Show Less" : "Show More"}
                          </span>
                          <ChevronDown 
                            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      </CollapsibleTrigger>
                    </div>

                    {/* Collapsible Content - Responsibilities */}
                    <CollapsibleContent>
                      <div className="px-4 lg:px-6 pb-4 lg:pb-6 border-t border-border/50">
                        <div className="pt-4">
                          <h4 className="font-medium text-foreground mb-3 text-sm">
                            Key Responsibilities & Achievements
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                              <li 
                                key={respIndex} 
                                className="flex items-start text-sm text-muted-foreground leading-relaxed"
                              >
                                <span className={`inline-block w-1.5 h-1.5 ${colors.text} rounded-full mr-3 mt-2 flex-shrink-0`}></span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
            })}
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