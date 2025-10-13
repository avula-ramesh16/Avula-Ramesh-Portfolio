import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      category: "CI/CD & Automation",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"]
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS"]
    },
    {
      category: "Containers & Orchestration",
      skills: ["Docker", "Kubernetes", "EKS", "Helm", "Docker Compose"]
    },
    {
      category: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "CloudFormation"]
    },
    {
      category: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
    },
    {
      category: "Security & Compliance",
      skills: ["SonarQube", "Trivy", "Vault", "AWS IAM", "Security Scanning"]
    },
    {
      category: "Programming & Scripting",
      skills: ["Python", "Bash", "YAML", "JSON"]
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining modern infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-primary/20 rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent glow-effect" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
