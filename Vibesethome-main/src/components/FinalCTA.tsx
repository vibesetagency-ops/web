import { Button } from './ui/button';

export function FinalCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[400px] opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))'
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2>Ready to ship your first agent?</h2>
            <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Book a free consult—we'll map 1–3 automations with clear ROI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('calendly')}
              size="lg"
              className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white transform hover:scale-105 transition-all duration-200 px-8"
            >
              Book Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-200 px-8"
            >
              Email us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}