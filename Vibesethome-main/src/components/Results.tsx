import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { TrendingUp, Clock, Zap } from 'lucide-react';

const results = [
  {
    icon: TrendingUp,
    stat: '+38%',
    metric: 'meetings booked',
    title: 'Lead qualification automated',
    description: 'AI agent qualifies inbound leads, scores them by fit, and automatically books meetings with qualified prospects.',
    color: 'var(--accent-primary)'
  },
  {
    icon: Clock,
    stat: '-42%',
    metric: 'first-response time',
    title: 'Ticket triage agent',
    description: 'Smart routing system categorizes support tickets by urgency and complexity, reducing response times significantly.',
    color: 'var(--accent-secondary)'
  },
  {
    icon: Zap,
    stat: '3×',
    metric: 'faster month-end close',
    title: 'Invoice processing bot',
    description: 'Automated invoice matching, approval routing, and payment processing streamlines financial operations.',
    color: 'var(--accent-primary)'
  }
];

export function Results() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="results" 
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Outcomes our clients see</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => {
            const IconComponent = result.icon;
            return (
              <Card 
                key={index} 
                className="bg-[var(--surface)] border-[var(--lines)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <CardHeader className="pb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: result.color }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <div 
                      className="text-4xl font-bold"
                      style={{ color: result.color }}
                    >
                      {result.stat}
                    </div>
                    <div className="text-[var(--text-secondary)] text-sm uppercase tracking-wide">
                      {result.metric}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardTitle className="text-xl">{result.title}</CardTitle>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={() => scrollToSection('calendly')}
            variant="outline"
            size="lg"
            className="border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-200"
          >
            See more examples
          </Button>
        </div>
      </div>
    </section>
  );
}