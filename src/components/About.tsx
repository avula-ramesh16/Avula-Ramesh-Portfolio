import { Award, Clock, Code, Rocket } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Clock,
      title: "4 Years",
      description: "Professional Experience"
    },
    {
      icon: Rocket,
      title: "CI/CD Expert",
      description: "Pipeline Automation"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Terraform & Ansible"
    },
    {
      icon: Award,
      title: "DevSecOps",
      description: "Security Integration"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate DevOps Engineer with expertise in building robust CI/CD pipelines, 
            automating infrastructure, and implementing DevSecOps practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-primary/20 rounded-xl p-6 text-center card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-4 glow-effect">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
