import { Card, CardContent } from './ui/card';
import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Discover",
    duration: "Week 1",
    description: "We audit your current workflows and identify automation opportunities",
    deliverables: "Process map, automation roadmap, ROI projections"
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Prototype", 
    duration: "Week 2-3",
    description: "Build and test your first automation with real data",
    deliverables: "Working prototype, integration tests, performance metrics"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Pilot",
    duration: "Week 4-5", 
    description: "Deploy to a subset of users and optimize based on feedback",
    deliverables: "Live automation, user training, monitoring dashboard"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Scale",
    duration: "Week 6+",
    description: "Roll out across your team and add more automations",
    deliverables: "Full deployment, team onboarding, ongoing optimization"
  }
];

export function TimelineHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[48px] font-bold">From idea → live in days</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our proven process gets you from manual busywork to automated workflows 
            in under 6 weeks, with your first automation live in just 3 weeks.
          </p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-lines hidden lg:block">
            <div className="h-full bg-gradient-primary w-0 transition-all duration-1000" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="card-lift bg-canvas border-lines relative">
                <CardContent className="p-6 text-center">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-primary text-white text-sm font-semibold flex items-center justify-center">
                    {index + 1}
                  </div>

                  <div className="flex justify-center mb-4 mt-2">
                    <div className="p-3 rounded-lg bg-gradient-primary/10 text-accent-primary">
                      {step.icon}
                    </div>
                  </div>

                  <div className="mb-2">
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <div className="text-sm text-accent-primary font-medium">{step.duration}</div>
                  </div>

                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="text-xs text-text-secondary bg-surface rounded p-2 border border-lines">
                    <strong>Deliverables:</strong> {step.deliverables}
                  </div>

                  {/* Mini flow diagram */}
                  <div className="flex justify-center items-center gap-1 mt-4 text-xs text-text-secondary">
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                    <div className="w-4 h-px bg-lines"></div>
                    <div className="w-2 h-2 rounded-full bg-accent-secondary"></div>
                    <div className="w-4 h-px bg-lines"></div>
                    <div className="w-2 h-2 rounded-full bg-accent-primary"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}