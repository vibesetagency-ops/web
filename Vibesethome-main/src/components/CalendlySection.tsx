import { useEffect } from 'react';

export function CalendlySection() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount (only if script still exists)
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section 
      id="calendly" 
      className="py-20 lg:py-28 bg-[var(--surface)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <h2 className="mb-4">Book your free consultation</h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Pick a time—meet a solutions architect to identify 1–3 high-ROI automations for your business.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                <span className="text-[var(--text-secondary)]">30-minute strategy session</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                <span className="text-[var(--text-secondary)]">Custom automation roadmap</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                <span className="text-[var(--text-secondary)]">ROI projections for your use case</span>
              </div>
            </div>
          </div>

          {/* Right - Calendly embed */}
          <div className="relative">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/vibesetagency/30min"
              style={{ minWidth: '320px', height: '680px' }}
            />

            {/* Trust indicator */}
            <div className="mt-6 text-center">
              <p className="text-sm text-[var(--text-secondary)]">
                No obligation. We'll only contact you about your booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}