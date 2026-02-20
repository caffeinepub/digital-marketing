import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/90 via-brand-amber/80 to-brand-teal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/assets/generated/ab-digital-logo.dim_800x600.png"
              alt="A B Digital Craft"
              className="w-64 md:w-80 h-auto"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
            A B Digital Craft
            <span className="block text-brand-light mt-2 text-3xl md:text-4xl font-light">Your Success Digital Partner</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            We craft compelling digital experiences that drive growth, engage audiences, and deliver measurable results for your business.
          </p>

          <div className="pt-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-brand-coral hover:bg-brand-light hover:text-brand-coral transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-brand-coral/50 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
