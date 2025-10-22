import { Search, PenTool, Wrench, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: '30-min consultation to map goals & systems',
    timeline: 'Week 1: Audit'
  },
  {
    icon: PenTool,
    title: 'Design', 
    description: 'Blueprint agents, data flows, guardrails',
    timeline: 'Weeks 2–3: Build'
  },
  {
    icon: Wrench,
    title: 'Build',
    description: 'Implement, integrate, and QA in a sandbox',
    timeline: 'Weeks 2–3: Build'
  },
  {
    icon: Rocket,
    title: 'Launch & Iterate',
    description: 'Pilot, measure, and expand with monthly sprints',
    timeline: 'Week 4: Pilot'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">How it works</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[var(--lines)] transform -translate-x-8" />
                  )}
                </div>
                
                <h3 className="mb-3 text-xl">{step.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="bg-[var(--canvas)] rounded-xl p-6">
          <div className="text-center mb-4">
            <h4 className="text-lg font-medium mb-2">Typical timeline</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[var(--surface)] px-4 py-2 rounded-full border border-[var(--lines)] text-sm">
              Week 1: Audit
            </div>
            <div className="bg-[var(--surface)] px-4 py-2 rounded-full border border-[var(--lines)] text-sm">
              Weeks 2–3: Build
            </div>
            <div className="bg-[var(--surface)] px-4 py-2 rounded-full border border-[var(--lines)] text-sm">
              Week 4: Pilot
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}