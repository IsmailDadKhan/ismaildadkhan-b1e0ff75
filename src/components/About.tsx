import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Get to know me better
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Bio */}
            <div className="space-y-3 lg:space-y-4">
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-foreground">
                Data Science & Digital Marketing
              </h3>
              
              <div className="text-muted-foreground leading-relaxed text-sm sm:text-base space-y-3 lg:space-y-4">
                <p>
                  I'm an 8th semester Computer Science student specializing in Data Science at Hamdard University, Karachi. 
                  I bring a strong foundation in Python, SQL, Power BI, and Machine Learning — along with hands-on experience 
                  in data analytics and digital marketing, including Meta Ads and campaign performance analysis.
                </p>
                
                <p>
                  My journey started in social media marketing and e-commerce, where I developed a deep understanding of 
                  audience behavior and market trends. That experience naturally evolved into a passion for data science — 
                  turning raw data into actionable insights that drive smarter business decisions.
                </p>
                
                <p>
                  Today, I combine analytical expertise with marketing know-how to deliver data-driven strategies that 
                  create measurable impact. I'm actively seeking opportunities in data analytics and data science where 
                  I can contribute, grow, and solve real-world problems.
                </p>
              </div>
            </div>

            {/* Education & Details */}
            <div className="space-y-4 lg:space-y-6 mt-6 lg:mt-0">
              {/* Education */}
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">Education</h4>
                    <p className="text-primary font-medium">BS Computer Science (Data Science)</p>
                    <p className="text-muted-foreground">Hamdard University, Karachi</p>
                    <p className="text-sm text-muted-foreground flex items-center mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      2022 - Present (8th Semester)
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
