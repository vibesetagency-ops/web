import { Card, CardContent } from './ui/card';
import { ArrowRight, MessageSquare, Users, BarChart3, DollarSign, Mail, Zap } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Smart Support",
    bullets: [
      "Auto-route tickets by sentiment, urgency, product",
      "Generate responses from your knowledge base"
    ]
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Sales Acceleration", 
    bullets: [
      "Lead scoring and auto-qualification",
      "Personalized outreach at scale"
    ]
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Insights",
    bullets: [
      "Cross-platform analytics and reporting",
      "Automated data cleanup and enrichment"
    ]
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Finance Automation",
    bullets: [
      "Invoice processing and expense categorization",
      "Payment reconciliation and reporting"
    ]
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Marketing Operations",
    bullets: [
      "Content generation and social scheduling",
      "Campaign optimization and A/B testing"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Process Optimization",
    bullets: [
      "Workflow analysis and bottleneck detection",
      "Automated handoffs between systems"
    ]
  }
];

export function FeatureCards() {
  return (
    <section id="features" className="py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-[48px] font-bold">What VibeSet automates</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From customer inquiries to financial reports, we automate the repetitive work 
            that's eating up your team's time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="card-lift bg-surface border-lines hover:border-accent-primary/30 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-primary text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold">{feature.title}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <p key={bulletIndex} className="text-sm text-text-secondary leading-relaxed">
                      • {bullet}
                    </p>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-sm text-accent-primary hover:text-accent-secondary transition-colors group-hover:gap-3">
                  See recipe
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button className="text-accent-primary hover:text-accent-secondary font-medium inline-flex items-center gap-2 group">
            View all automations
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}