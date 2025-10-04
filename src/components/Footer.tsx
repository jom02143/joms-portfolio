import { Github, Linkedin, Twitter, Mail, Facebook } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/jom02143',
      ariaLabel: 'Visit my GitHub profile',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/jose-mari-dalugdug/',
      ariaLabel: 'Connect with me on LinkedIn',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/Jomawii/',
      ariaLabel: 'Message me on Facebook',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:jmdalugdug14@gmail.com',
      ariaLabel: 'Send me an email',
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground">
              <p>
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
              <p className="mt-2">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
