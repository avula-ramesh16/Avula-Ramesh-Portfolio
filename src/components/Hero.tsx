import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-accent text-sm font-medium mb-4">
            Available for DevOps Opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Avula Ramesh
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
          DevOps Engineer
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transforming infrastructure with automation and scalable cloud solutions. 
          <span className="text-accent font-semibold"> 4 years</span> of experience in CI/CD, Kubernetes, and DevSecOps.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="gradient-bg text-white font-semibold glow-effect"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/30 hover:bg-primary/10 transition-all hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/30 hover:bg-primary/10 transition-all hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:avularamesh@example.com"
            className="p-3 rounded-full border border-primary/30 hover:bg-primary/10 transition-all hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-accent" />
      </button>
    </section>
  );
};
