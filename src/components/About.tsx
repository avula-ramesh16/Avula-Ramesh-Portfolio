import { Clock, Cloud, Rocket, TrendingUp } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: Clock, title: "5 Years", description: "DevOps Experience" },
    { icon: Cloud, title: "AWS & EKS", description: "Cloud Infrastructure" },
    { icon: Rocket, title: "99.95%", description: "Production Uptime" },
    { icon: TrendingUp, title: "80% Faster", description: "Infra Provisioning" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            DevOps Engineer with 5 years of experience designing, automating, and supporting AWS-based
            cloud infrastructure for enterprise applications. Skilled in CI/CD automation, Kubernetes
            (Amazon EKS), Terraform, Docker, Jenkins, GitHub Actions, monitoring, production support,
            and platform engineering. Proven ability to improve deployment reliability, automate
            infrastructure provisioning, optimize cloud costs, and maintain highly available production
            environments while collaborating with development, QA, and security teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="bg-card border border-primary/20 rounded-xl p-6 text-center card-hover">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg mb-4 glow-effect">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-accent">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
