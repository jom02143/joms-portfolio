import { Code2, Palette, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profileImg from "@/assets/DSC_0074AA.jpg";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Crafting beautiful UIs with attention to detail and user experience',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications that users love',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer with a love for creating elegant solutions to complex problems. 
                With expertise spanning front-end and back-end development, I bring ideas to life through 
                clean code and thoughtful design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img
                  src={profileImg}
                  alt="Profile"
                  className="relative rounded-full w-96 h-96 object-cover object-[80%_10%] border-4 border-card"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
              >
                <highlight.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
