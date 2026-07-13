import { Briefcase } from "lucide-react";

export const Experience = () => {
  const roles = [
    {
      title: "DevOps Engineer",
      company: "Peritus Technologies India Pvt. Ltd.",
      client: "Amadeus Software Labs",
      period: "Sep 2023 – Present",
      points: [
        "Designed reusable Terraform modules for AWS (VPC, IAM, EC2, ASG, EKS, Route53, ALB, RDS, S3).",
        "Built CI/CD pipelines with Jenkins & GitHub Actions for build, testing, image scans, and EKS deployments.",
        "Managed Kubernetes workloads with Helm, HPA, Ingress, ConfigMaps, Secrets, and Network Policies.",
        "Executed rolling, blue-green, and canary deployments across production environments.",
        "Configured Prometheus, Grafana, CloudWatch, and ELK for observability and alerting.",
        "Integrated SonarQube, Trivy, and dependency scans into pipelines for secure delivery.",
        "Maintained platform availability above 99.95% for a global travel booking platform."
      ]
    },
    {
      title: "Associate Cloud Engineer",
      company: "Edifixio India Pvt. Ltd.",
      client: "Schneider Electric",
      period: "Jan 2022 – Sep 2023",
      points: [
        "Managed AWS infrastructure — EC2, VPC, IAM, Route53, RDS, S3, ALB, Auto Scaling, CloudWatch.",
        "Built Jenkins pipelines for build, testing, Docker image creation, and Kubernetes deployments.",
        "Automated environment provisioning with Terraform for consistent multi-env infrastructure.",
        "Supported production incidents, log analysis, root cause analysis, and SLA-driven resolutions.",
        "Automated operational tasks using Bash scripting to reduce repetitive manual work."
      ]
    },
    {
      title: "Cloud Trainee",
      company: "TeamLease",
      client: null,
      period: "Aug 2021 – Jan 2022",
      points: [
        "Provisioned AWS resources: EC2, VPC, subnets, IGW, NAT, Route Tables, SGs, IAM, S3, ELB.",
        "Administered Linux servers — users, packages, services, cron, and shell scripting.",
        "Designed multi-tier AWS network architectures with VPC peering, routing, and NACLs.",
        "Managed EBS, AMIs, S3, Elastic IPs, ASGs, and ALBs following AWS best practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            5 years across cloud engineering and DevOps roles delivering production-grade infrastructure.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {roles.map((role, index) => (
            <div key={index} className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"} pl-12 md:pl-0`}>
              <div className="absolute left-2 md:left-auto md:right-[-10px] top-6 w-5 h-5 rounded-full gradient-bg glow-effect border-4 border-background"
                style={index % 2 === 1 ? { left: "-10px", right: "auto" } : {}} />

              <div className="bg-card border border-primary/20 rounded-xl p-6 card-hover">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-4 w-4 text-accent" />
                  <span className="text-sm text-accent font-medium">{role.period}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                <p className="text-muted-foreground mb-1">{role.company}</p>
                {role.client && (
                  <p className="text-sm text-accent/80 mb-4">Client: {role.client}</p>
                )}
                <ul className="space-y-2 mt-4">
                  {role.points.map((point, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex gap-2">
                      <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
