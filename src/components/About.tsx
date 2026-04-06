import { Clock, Code, Rocket, TrendingUp } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Clock,
      title: "2 Years",
      description: "Associate Cloud Engineer"
    },
    {
      icon: TrendingUp,
      title: "Upskilled",
      description: "Self-taught DevOps"
    },
    {
      icon: Rocket,
      title: "CI/CD Expert",
      description: "Pipeline Automation"
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Terraform & Shell Scripting"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate and self-driven DevOps Engineer with 2 years of professional experience as an 
            Associate Cloud Engineer, where I worked extensively with AWS cloud services, Linux administration, 
            and infrastructure management. After a career gap of 2.5 years, I dedicated that time to upskilling 
            myself in modern DevOps practices — mastering CI/CD pipeline automation with Jenkins, containerization 
            with Docker, Kubernetes orchestration, and Infrastructure as Code using Terraform. During this period, 
            I built multiple hands-on projects to solidify my skills, including end-to-end CI/CD pipelines, 
            infrastructure automation, and monitoring stack implementations. Proficient in GitHub workflows, 
            Shell scripting, and cloud-native technologies. Eager to leverage my combined experience and 
            self-taught expertise to streamline operations, enhance system reliability, and drive continuous improvement.
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
