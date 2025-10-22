import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  MessageSquare, 
  Users, 
  HeadphonesIcon, 
  Calculator, 
  BarChart3,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Marketing & Lead Gen',
    items: [
      'SDR/Outreach agent (prospect, personalize, send, follow-up)',
      'AI receptionist & website chat (qualify, route, schedule)', 
      'Social posting & A/B captions',
      'Ad ops assistant (budget pacing, creative alerts)'
    ]
  },
  {
    icon: Users,
    title: 'Sales & CRM',
    items: [
      'Meeting scheduler + call prep from CRM',
      'Call summary → tasks/opps in CRM',
      'Quote-to-cash handoff to finance',
      'Pipeline hygiene & next-best-action nudges'
    ]
  },
  {
    icon: HeadphonesIcon,
    title: 'Support (L1/L2)',
    items: [
      '24/7 helpdesk triage from email/chat/voice',
      'Knowledge-base answers + safe escalation',
      'RMA/returns, order status, simple refunds',
      'Sentiment alerts & CSAT follow-ups'
    ]
  },
  {
    icon: Calculator,
    title: 'Ops, Finance & Admin',
    items: [
      'AP/AR (invoice ingest, match, reminders)',
      'Inventory sync & low-stock alerts',
      'HR onboarding/offboarding checklists',
      'Document parsing → Sheets/ERP'
    ]
  },
  {
    icon: BarChart3,
    title: 'Data & Reporting',
    items: [
      'ETL from multiple sources, cleanup',
      'Weekly KPI snapshots in Slack/Email',
      'Forecasts & anomaly alerts',
      'Executive dashboards (Looker/Sheets)'
    ]
  }
];

export function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">What we automate</h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Agents that eliminate manual tasks and unlock growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-[var(--surface)] border-[var(--lines)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-[var(--accent-secondary)] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={() => scrollToSection('results')}
            variant="outline"
            size="lg"
            className="border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-200"
          >
            Explore use cases
          </Button>
        </div>
      </div>
    </section>
  );
}