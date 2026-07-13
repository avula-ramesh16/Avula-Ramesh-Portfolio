import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const items = [
    { icon: Mail, title: "Email", value: "avularamesh600@gmail.com", href: "mailto:avularamesh600@gmail.com" },
    { icon: Phone, title: "Phone", value: "+91 8919824269", href: "tel:+918919824269" },
    { icon: MapPin, title: "Location", value: "Bangalore, India", href: null },
    { icon: Linkedin, title: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/avula-ramesh-817211363/" },
    { icon: Github, title: "GitHub", value: "Check out my code", href: "https://github.com/avula-ramesh16" },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new DevOps opportunities, exciting projects, or
            collaboration. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {items.map((item, i) => {
              const Wrapper: any = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
                : {};
              return (
                <Wrapper key={i} {...wrapperProps}
                  className="bg-card border border-primary/20 rounded-xl p-6 card-hover group block">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-bg mb-4 glow-effect">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground break-words">{item.value}</p>
                </Wrapper>
              );
            })}
          </div>

          <Button size="lg" className="gradient-bg text-white font-semibold glow-effect"
            onClick={() => (window.location.href = "mailto:avularamesh600@gmail.com")}>
            <Mail className="mr-2 h-5 w-5" />
            Send Me a Message
          </Button>
        </div>

        <footer className="mt-20 pt-8 border-t border-primary/20">
          <p className="text-muted-foreground text-sm">
            © 2026 Avula Ramesh. Built with passion for DevOps excellence.
          </p>
        </footer>
      </div>
    </section>
  );
};
