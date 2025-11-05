import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Clock, Sparkles, Settings } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

const pricingFaqs = [
  {
    question: "What's included in each plan?",
    answer: "Every plan includes core agents, prebuilt flows, approvals, and analytics. The main differences are monthly usage (minutes/tokens/emails), number of workflows, and seats. AI Receptionist minutes, Email Outreach sends, and Content Writer generations have included bundles per plan; you can add more as needed."
  },
  {
    question: "How do usage and overages work?",
    answer: "Usage covers things like telephony minutes, LLM tokens, and email sends. If you bring your own keys (BYO), usage bills to your accounts directly and we don't up-charge. If you choose Managed Keys, we meter usage and bill at cost + a small ops fee after you approve thresholds in settings."
  },
  {
    question: "Do I need my own API keys and tools?",
    answer: "Optional. BYO keys (OpenAI/Anthropic, Twilio, Retell/ElevenLabs, email provider) keeps costs predictable and data in your accounts. Or select Managed and we provision keys for you—ideal if you want one invoice."
  },
  {
    question: "Can I change or cancel anytime?",
    answer: "Yes. Plans are month-to-month by default. You can upgrade/downgrade instantly; unused time is pro-rated. Annual billing is available if you want a discount and a locked-in rate."
  },
  {
    question: "What's the onboarding timeline & fee?",
    answer: "Typical setup is 1–3 business days: connect tools, import contacts, verify domains, test flows. Self-serve is included; guided onboarding (mapping, deliverability checks, call flows) is an optional one-time add-on."
  },
  {
    question: "How do you handle data privacy & storage?",
    answer: "By default we don't store your content; logs are ephemeral and redacted. With BYO keys, data goes straight between your tools. Choose data region (CA/US) at setup. You control retention and deletion in Settings."
  }
];

export function PricingPage() {
  const [starterSolution, setStarterSolution] = useState('lead-generation');
  const [proSolutions, setProSolutions] = useState<string[]>(['lead-generation']);

  const solutions = [
    { value: 'ai-receptionist', label: 'AI Voice Receptionist' },
    { value: 'lead-generation', label: 'Lead Generation' },
    { value: 'content-writing', label: 'Content Writing' },
    { value: 'email-outreach', label: 'Email Outreach' },
  ];

  const tiers = [
    {
      name: 'Starter',
      price: '$499',
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
      price: '$999',
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
      <section className="relative py-12 md:py-20 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-4">
            <h1 className="mb-0 leading-none text-[48px] sm:text-[72px] md:text-[96px]">
              <span className="text-[var(--text-primary)]">Plans and </span>
              <span style={{ color: 'var(--accent-primary)' }}>Pricing</span>
            </h1>
          </div>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 md:mb-16 text-base md:text-lg px-4">
            Choose the perfect plan for your team. All plans include a 14-day free trial with no credit card required.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 lg:gap-20">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-[var(--text-primary)] text-sm">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-[var(--text-primary)] text-sm">No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-[var(--text-primary)] text-sm">Cancel anytime</span>
            </div>
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

                {/* Solution Selector for Starter */}
                {tier.name === 'Starter' && (
                  <div className="mb-4">
                    <label className="block text-sm mb-2 text-[var(--text-primary)]">
                      Choose Your Solution:
                    </label>
                    <Select value={starterSolution} onValueChange={setStarterSolution}>
                      <SelectTrigger className="w-full bg-[var(--canvas)] border-[var(--lines)]">
                        <SelectValue placeholder="Select a solution" />
                      </SelectTrigger>
                      <SelectContent>
                        {solutions.map((solution) => (
                          <SelectItem key={solution.value} value={solution.value}>
                            {solution.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Solution Selector for Pro */}
                {tier.name === 'Pro' && (
                  <div className="mb-4 space-y-2">
                    <label className="block text-sm text-[var(--text-primary)]">
                      Choose Up to 3 Solutions:
                    </label>
                    <div className="space-y-2">
                      {[0, 1, 2].map((index) => (
                        <Select
                          key={index}
                          value={proSolutions[index] || ''}
                          onValueChange={(value) => {
                            const newSolutions = [...proSolutions];
                            newSolutions[index] = value;
                            setProSolutions(newSolutions.filter(s => s));
                          }}
                        >
                          <SelectTrigger className="w-full bg-[var(--canvas)] border-[var(--lines)]">
                            <SelectValue placeholder={`Solution ${index + 1}${index === 0 ? ' (Required)' : ' (Optional)'}`} />
                          </SelectTrigger>
                          <SelectContent>
                            {solutions
                              .filter(s => !proSolutions.includes(s.value) || proSolutions[index] === s.value)
                              .map((solution) => (
                                <SelectItem key={solution.value} value={solution.value}>
                                  {solution.label}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      ))}
                    </div>
                  </div>
                )}

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

      {/* FAQ */}
      <section className="py-24 bg-[var(--canvas)]">
        <FAQ faqs={pricingFaqs} />
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