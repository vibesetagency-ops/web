import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';

export function PricingPage() {
  const tiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams getting started with AI automation',
      features: [
        '1 AI Agent (your choice)',
        'Up to 1,000 operations/month',
        'Basic integrations',
        'Email support',
        'Standard analytics',
        '2 team members',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$399',
      period: '/month',
      description: 'For growing teams ready to scale their automation',
      features: [
        '3 AI Agents (mix & match)',
        'Up to 5,000 operations/month',
        'Advanced integrations',
        'Priority support',
        'Advanced analytics & reporting',
        '10 team members',
        'Custom workflows',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Business',
      price: 'Custom',
      period: '',
      description: 'Enterprise-grade solution with unlimited possibilities',
      features: [
        'All 4 AI Agents',
        'Unlimited operations',
        'Custom integrations',
        'Dedicated account manager',
        'Custom analytics dashboards',
        'Unlimited team members',
        'White-label options',
        'SLA guarantee',
        'Custom AI training',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const comparisonFeatures = [
    {
      category: 'AI Agents',
      features: [
        { name: 'Lead Generation', starter: true, pro: true, business: true },
        { name: 'Content Writing', starter: false, pro: true, business: true },
        { name: 'Email Outreach', starter: false, pro: true, business: true },
        { name: 'AI Voice Automation', starter: false, pro: false, business: true },
      ],
    },
    {
      category: 'Usage Limits',
      features: [
        { name: 'Monthly Operations', starter: '1,000', pro: '5,000', business: 'Unlimited' },
        { name: 'Team Members', starter: '2', pro: '10', business: 'Unlimited' },
        { name: 'API Calls', starter: false, pro: '10,000/mo', business: 'Unlimited' },
      ],
    },
    {
      category: 'Integrations',
      features: [
        { name: 'Basic Integrations', starter: true, pro: true, business: true },
        { name: 'Advanced Integrations', starter: false, pro: true, business: true },
        { name: 'Custom Integrations', starter: false, pro: false, business: true },
        { name: 'Webhook Support', starter: false, pro: true, business: true },
      ],
    },
    {
      category: 'Support',
      features: [
        { name: 'Email Support', starter: '48h response', pro: '24h response', business: '4h response' },
        { name: 'Live Chat', starter: false, pro: true, business: true },
        { name: 'Phone Support', starter: false, pro: false, business: true },
        { name: 'Dedicated Account Manager', starter: false, pro: false, business: true },
      ],
    },
  ];

  return (
    <main id="main-content" className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[var(--canvas)] to-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="mb-6">Simple, Transparent Pricing</h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your team. All plans include a 14-day free trial with no credit card required.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--lines)]">
            <Check className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-sm text-[var(--text-secondary)]">14-day free trial • No credit card required • Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-[var(--surface)] border rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'border-[var(--accent-primary)] shadow-xl scale-105'
                    : 'border-[var(--lines)]'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-sm">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2">{tier.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl">{tier.price}</span>
                    <span className="text-[var(--text-secondary)] ml-1">{tier.period}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm">{tier.description}</p>
                </div>
                <Link to="/contact">
                  <Button
                    className={`w-full mb-6 ${
                      tier.highlighted
                        ? 'bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white'
                        : 'border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]'
                    }`}
                    variant={tier.highlighted ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </Link>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Compare Plans</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Detailed breakdown of features across all plans
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-[var(--lines)]">
                <tr>
                  <th className="text-left p-4 text-[var(--text-secondary)]">Features</th>
                  <th className="text-center p-4">Starter</th>
                  <th className="text-center p-4">Pro</th>
                  <th className="text-center p-4">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, categoryIndex) => (
                  <React.Fragment key={category.category}>
                    <tr className="border-t border-[var(--lines)]">
                      <td colSpan={4} className="p-4 bg-[var(--canvas)]">
                        <h4 className="text-sm">{category.category}</h4>
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <tr key={`${category.category}-${feature.name}-${featureIndex}`} className="border-t border-[var(--lines)]">
                        <td className="p-4 text-[var(--text-secondary)]">{feature.name}</td>
                        <td className="p-4 text-center">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <Check className="w-5 h-5 text-[var(--accent-primary)] mx-auto" />
                            ) : (
                              <span className="text-[var(--text-secondary)]">—</span>
                            )
                          ) : (
                            feature.starter
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.pro === 'boolean' ? (
                            feature.pro ? (
                              <Check className="w-5 h-5 text-[var(--accent-primary)] mx-auto" />
                            ) : (
                              <span className="text-[var(--text-secondary)]">—</span>
                            )
                          ) : (
                            feature.pro
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.business === 'boolean' ? (
                            feature.business ? (
                              <Check className="w-5 h-5 text-[var(--accent-primary)] mx-auto" />
                            ) : (
                              <span className="text-[var(--text-secondary)]">—</span>
                            )
                          ) : (
                            feature.business
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--canvas)]">
        <FAQ />
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
