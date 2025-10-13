import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Shield, BarChart3, Cloud } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: GitBranch,
      title: "CI/CD Pipeline for Microservices",
      description: "Designed and implemented a complete CI/CD pipeline using Jenkins, GitHub, Docker, and Kubernetes on AWS. Automated build, test, and deployment processes for microservices architecture.",
      skills: ["Jenkins", "GitHub", "Docker", "Kubernetes", "AWS", "Microservices", "Automation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Infrastructure Automation using Terraform",
      description: "Developed comprehensive Terraform modules to automate the provisioning of complete AWS infrastructure including VPC, subnets, security groups, EC2 instances, and load balancers.",
      skills: ["Terraform", "AWS", "IaC", "VPC", "EC2", "Networking", "Automation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Monitoring Stack Implementation",
      description: "Configured and deployed a complete observability stack using Prometheus and Grafana to monitor EKS workloads. Created custom dashboards and alerting rules for proactive incident management.",
      skills: ["Prometheus", "Grafana", "EKS", "Monitoring", "Alerting", "Kubernetes", "Observability"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "DevSecOps Integration",
      description: "Integrated security scanning tools including SonarQube for code quality analysis and Trivy for container vulnerability scanning into Jenkins CI/CD pipeline. Implemented security gates and compliance checks.",
      skills: ["SonarQube", "Trivy", "Jenkins", "Security", "DevSecOps", "Compliance", "Container Security"],
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my DevOps implementations and infrastructure automation projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-primary/20 card-hover group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} glow-effect`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-accent border-primary/20 hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
