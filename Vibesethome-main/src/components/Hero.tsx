import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
// using public/hero.png (served as a static file by Vite/Vercel)


export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="main-content"
      className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30 rounded-full blur-3xl"
          style={{ 
            background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
            transform: 'translate(30%, -30%)'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="leading-tight text-center text-4xl md:text-5xl lg:text-6xl">
                Automate the busywork.{' '}
                <span className="gradient-text">Scale the work that wins.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed text-center mt-2">
                VibeSet designs, deploys, and maintains agent workflows across sales, marketing, support, ops, and finance—tailored to your stack.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 px-[60px] py-[0px]">
              <Button
                onClick={() => scrollToSection('calendly')}
                size="lg"
                className="gradient-primary text-white transform hover:scale-105 transition-all duration-200 px-8"
              >
                Book a Build Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('recipes')}
                className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)] px-8"
              >
                See Recipes
              </Button>
            </div>

            {/* Micro-trust */}
            <div className="flex items-center gap-6 p-[0px] mx-[50px] my-[0px]">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                BC-based
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                Privacy-first
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                Works with your tools
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Cut Costs With an AI Agent - VibeSet connected ecosystem"
                className="w-full h-auto aspect-square object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
            
            {/* Floating sparkles */}
            <div className="absolute -top-4 -right-4 animate-pulse">
              <Sparkles className="w-8 h-8 text-[var(--accent-primary)]" />
            </div>
            <div className="absolute top-1/3 -left-6 animate-pulse delay-500">
              <Sparkles className="w-6 h-6 text-[var(--accent-secondary)]" />
            </div>
            <div className="absolute bottom-8 right-8 animate-pulse delay-1000">
              <Sparkles className="w-5 h-5 text-[var(--accent-primary)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
