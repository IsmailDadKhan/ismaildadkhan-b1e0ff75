import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Get to know me better
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Bio */}
            <div className="space-y-4 lg:space-y-6">
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-foreground">
                Passionate About Data & Digital Innovation
              </h3>
              
              <div className="space-y-3 lg:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  I am a motivated professional with a strong foundation in data analysis, 
                  visualization, and reporting. Skilled in Python (Pandas, NumPy, Matplotlib, Seaborn), 
                  Power BI, SQL, and Excel, I specialize in turning raw data into clear, actionable insights.
                </p>
                
                <p>
                  My experience includes building ETL pipelines, designing star schemas and dashboards, 
                  and delivering customer and sales insights that drive decision-making. Alongside 
                  technical expertise, I bring strengths in documentation, copywriting, and social 
                  media management, which allow me to bridge both data-driven and creative solutions.
                </p>
                
                <p>
                  Passionate about solving problems with data, I thrive on creating visual stories 
                  from numbers that help businesses and teams grow smarter.
                </p>
              </div>
            </div>

            {/* Education & Details */}
            <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-0">
              {/* Education */}
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">Education</h4>
                    <p className="text-primary font-medium">BS Computer Science</p>
                    <p className="text-muted-foreground">Hamdard University, Karachi</p>
                    <p className="text-sm text-muted-foreground flex items-center mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      2022 - Present
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">Location</h4>
                    <p className="text-muted-foreground">Karachi, Sindh, Pakistan</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Available for remote work and local collaborations
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Roles */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-2xl border border-border">
                <h4 className="font-semibold text-lg text-foreground mb-4">Current Roles</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Social Media Marketing Consultant</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-muted-foreground">Freelance E-commerce & Content Writer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Data Analyst (Project-based)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;