import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    { category: "Cloud (AWS)", skills: ["EC2", "EKS", "ECS", "S3", "IAM", "VPC", "ALB/NLB", "Auto Scaling", "Route53", "RDS", "CloudWatch", "ACM"] },
    { category: "Containers & Orchestration", skills: ["Docker", "Kubernetes", "Helm"] },
    { category: "Infrastructure as Code", skills: ["Terraform", "CloudFormation", "Ansible"] },
    { category: "CI/CD", skills: ["Jenkins", "GitHub Actions"] },
    { category: "Monitoring & Logging", skills: ["Prometheus", "Grafana", "CloudWatch", "ELK Stack", "Datadog", "Centreon"] },
    { category: "Scripting", skills: ["Python", "Bash"] },
    { category: "Version Control", skills: ["Git", "GitHub", "Bitbucket"] },
    { category: "Networking", skills: ["TCP/IP", "DNS", "VPN", "Security Groups", "NACLs", "Load Balancers"] },
    { category: "Methodologies", skills: ["Agile Scrum", "Incident Management", "RCA", "Change & Release Management"] },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining modern cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-primary/20 rounded-xl p-6 card-hover">
              <h3 className="text-xl font-semibold mb-4 text-accent flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent glow-effect" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all">
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
