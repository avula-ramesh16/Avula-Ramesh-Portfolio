import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Globe, ShoppingCart } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: Plane,
      title: "Global Travel Booking & Reservation Platform",
      client: "Amadeus Software Labs",
      description:
        "Designed, automated, and maintained cloud infrastructure for a global travel booking platform serving airlines, travel agencies, and OTAs. Built highly available AWS + EKS infrastructure with reusable Terraform modules, Jenkins/GitHub Actions CI/CD, Helm-based deployments, and full observability with Prometheus, Grafana, CloudWatch, and ELK.",
      skills: ["AWS", "EKS", "Terraform", "Jenkins", "GitHub Actions", "Docker", "Helm", "Prometheus", "Grafana", "ELK"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Airline API Integration & Developer Platform",
      client: "Amadeus Software Labs",
      description:
        "Built and supported a secure cloud-native platform hosting airline REST APIs consumed by travel agencies, booking platforms, and third parties. Automated multi-environment provisioning with Terraform, delivered API services via EKS + Helm, and integrated SonarQube, Trivy, and dependency scanning into CI/CD for secure releases.",
      skills: ["AWS", "EKS", "Terraform", "GitHub Actions", "SonarQube", "Trivy", "Helm", "Route53", "ACM", "Python"],
      color: "from-sky-500 to-blue-500"
    },
    {
      icon: ShoppingCart,
      title: "Global B2B E-Commerce Platform",
      client: "Schneider Electric",
      description:
        "Supported cloud infrastructure and DevOps operations for Schneider Electric's global B2B e-commerce platform on AWS with microservices on Kubernetes. Built Jenkins pipelines, automated provisioning with Terraform, containerized enterprise apps, and configured centralized monitoring & logging with Prometheus, Grafana, and ELK.",
      skills: ["AWS", "Kubernetes", "Jenkins", "Terraform", "Docker", "Helm", "Linux", "Bash", "Prometheus", "ELK"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise DevOps and cloud infrastructure projects delivered for global clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-primary/20 card-hover group overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color} glow-effect`}>
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-accent/80">Client: {project.client}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-accent border-primary/20 hover:bg-primary/20">
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
