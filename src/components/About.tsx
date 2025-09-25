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
                From Marketing to Data Science
              </h3>
              
              <div className="text-muted-foreground leading-relaxed text-sm sm:text-base space-y-3 lg:space-y-4">
                <p>
                  I started my journey in social media marketing and e-commerce, where I learned to manage brand identity, 
                  create engaging content, and drive growth across platforms. This experience taught me the importance of 
                  understanding audience behavior and market trends.
                </p>
                
                <p>
                  As I delved deeper into analyzing campaign performance and customer data, I developed a passion for 
                  data science. I began learning Python, SQL, Excel, and Power BI to uncover insights and visualize trends 
                  that drive meaningful business decisions.
                </p>
                
                <p>
                  Now, I'm combining both skills to help businesses make smarter, data-driven decisions while maintaining 
                  strong brand presence and customer engagement. My goal is to bridge the gap between creative marketing 
                  and analytical insights.
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