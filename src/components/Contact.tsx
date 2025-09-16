import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ismaildadkhan@gmail.com",
      href: "mailto:ismaildadkhan@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 320 2095258",
      href: "tel:+923202095258",
      color: "success"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Sindh, Pakistan",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          hover: 'hover:bg-primary/20'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          text: 'text-success',
          hover: 'hover:bg-success/20'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          hover: 'hover:bg-accent/20'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          hover: 'hover:bg-primary/20'
        };
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your data into insights or grow your digital presence? 
              Let's discuss your project and make it happen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project and how I can help..."
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full rounded-full group"
                  size="lg"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const colors = getColorClasses(info.color);
                    const Icon = info.icon;
                    
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className={`${colors.bg} p-3 rounded-lg`}>
                          <Icon className={`w-5 h-5 ${colors.text}`} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <a 
                            href={info.href}
                            className={`font-medium ${colors.text} ${colors.hover} transition-colors`}
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                  Connect With Me
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const colors = getColorClasses(social.color);
                    const Icon = social.icon;
                    
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`${colors.bg} ${colors.hover} p-4 rounded-lg transition-all duration-300 group`}
                        aria-label={social.label}
                      >
                        <Icon className={`w-6 h-6 ${colors.text} group-hover:scale-110 transition-transform`} />
                      </a>
                    );
                  })}
                </div>

                <p className="text-muted-foreground text-sm mt-6">
                  Follow me for updates on my latest projects, data insights, and digital marketing tips.
                </p>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-2xl border border-border">
                <h4 className="font-semibold text-foreground mb-2">
                  Current Availability
                </h4>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-success font-medium">Available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'm currently accepting new freelance and full-time opportunities. 
                  Let's discuss how I can help bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;