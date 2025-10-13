import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new DevOps opportunities, exciting projects, 
            or collaboration opportunities. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:avula.ramesh169@gmail.com"
              className="bg-card border border-primary/20 rounded-xl p-6 card-hover group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-bg mb-4 glow-effect">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                Email
              </h3>
              <p className="text-sm text-muted-foreground">
                avula.ramesh169@gmail.com
              </p>
            </a>

            <a 
              href="https://www.linkedin.com/in/avula-ramesh-409161362/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-primary/20 rounded-xl p-6 card-hover group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-bg mb-4 glow-effect">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                LinkedIn
              </h3>
              <p className="text-sm text-muted-foreground">
                Connect with me
              </p>
            </a>

            <a 
              href="https://github.com/avula-ramesh16"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-primary/20 rounded-xl p-6 card-hover group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-bg mb-4 glow-effect">
                <Github className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                GitHub
              </h3>
              <p className="text-sm text-muted-foreground">
                Check out my code
              </p>
            </a>
          </div>

          <Button 
            size="lg"
            className="gradient-bg text-white font-semibold glow-effect"
            onClick={() => window.location.href = 'mailto:avula.ramesh169@gmail.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Send Me a Message
          </Button>
        </div>

        <footer className="mt-20 pt-8 border-t border-primary/20">
          <p className="text-muted-foreground text-sm">
            © 2025 Avula Ramesh. Built with passion for DevOps excellence.
          </p>
        </footer>
      </div>
    </section>
  );
};
