import { Link } from 'react-router-dom';
import { ArrowRight, Check, TrendingUp, Clock, Zap, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { FAQ } from '../components/FAQ';

export function Solutions() {
  const solutions = [
    {
      title: 'Lead Generation',
      path: '/solutions/lead-generation',
      description: 'Automate prospect discovery and qualification to fill your pipeline with high-quality leads',
      icon: TrendingUp,
      outcome: 'Fill pipeline with qualified leads',
      setupTime: '2-3 days',
      integrations: 'CRM, LinkedIn, Sales tools',
      roi: '3-5x pipeline growth',
      bestFor: 'B2B sales teams, agencies',
    },
    {
      title: 'Content Writing',
      path: '/solutions/content-writing',
      description: 'Generate engaging, on-brand content at scale for blogs, social media, and marketing campaigns',
      icon: () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      outcome: 'Publish 10x more content',
      setupTime: '1-2 days',
      integrations: 'CMS, Social media, SEO tools',
      roi: '70% time savings',
      bestFor: 'Content teams, marketers',
    },
    {
      title: 'Email Outreach',
      path: '/solutions/email-outreach',
      description: 'Personalize and automate email campaigns that drive responses and conversions',
      icon: () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      outcome: 'Boost email response rates',
      setupTime: '2-4 days',
      integrations: 'Email platforms, CRM',
      roi: '4x response rate increase',
      bestFor: 'Sales, marketing teams',
    },
    {
      title: 'AI Voice Automation',
      path: '/solutions/ai-voice-automation',
      description: 'Handle calls with intelligent voice agents that sound natural and convert effectively',
      icon: () => (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      outcome: 'Automate customer calls',
      setupTime: '3-5 days',
      integrations: 'Phone systems, CRM',
      roi: '60% cost reduction',
      bestFor: 'Support, sales teams',
    },
  ];

  const industries = [
    'SaaS', 'E-commerce', 'Professional Services', 'Healthcare', 
    'Real Estate', 'Finance', 'Education', 'Manufacturing'
  ];

  return (
    <main id="main-content" className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[var(--canvas)] to-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--lines)] mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="text-sm text-[var(--text-secondary)]">AI-Powered Business Solutions</span>
            </div>
            <h1 className="mb-6">
              The Complete AI Agent Suite for Modern Teams
            </h1>
            <p className="text-[var(--text-secondary)] mb-8">
              From lead generation to customer service, our AI agents work together to automate your entire workflow. Choose individual solutions or combine them for maximum impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Choose Your Solution</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each AI agent is purpose-built to excel at a specific task, yet they all work seamlessly together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={solution.path}
                  className="bg-[var(--surface)] border border-[var(--lines)] rounded-xl p-8 card-lift"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white">
                      <Icon className="w-7 h-7" />
                    </div>
                    <Link to={solution.path}>
                      <Button variant="ghost" size="sm" className="text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <h3 className="mb-3">{solution.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-6">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-[var(--text-secondary)]">Typical ROI</span>
                      <p className="text-[var(--text-primary)] mt-1">{solution.roi}</p>
                    </div>
                    <div>
                      <span className="text-[var(--text-secondary)]">Setup Time</span>
                      <p className="text-[var(--text-primary)] mt-1">{solution.setupTime}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Compare Solutions</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Find the perfect fit for your business needs
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[var(--lines)]">
                  <th className="text-left p-4 text-[var(--text-secondary)]">Feature</th>
                  {solutions.map((solution) => (
                    <th key={solution.path} className="text-left p-4 text-[var(--text-primary)]">
                      {solution.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--lines)]">
                  <td className="p-4 text-[var(--text-secondary)]">Primary Outcome</td>
                  {solutions.map((solution) => (
                    <td key={solution.path} className="p-4">{solution.outcome}</td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--lines)]">
                  <td className="p-4 text-[var(--text-secondary)]">Setup Time</td>
                  {solutions.map((solution) => (
                    <td key={solution.path} className="p-4">{solution.setupTime}</td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--lines)]">
                  <td className="p-4 text-[var(--text-secondary)]">Integrations</td>
                  {solutions.map((solution) => (
                    <td key={solution.path} className="p-4">{solution.integrations}</td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--lines)]">
                  <td className="p-4 text-[var(--text-secondary)]">Typical ROI</td>
                  {solutions.map((solution) => (
                    <td key={solution.path} className="p-4 text-[var(--accent-primary)]">{solution.roi}</td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--lines)]">
                  <td className="p-4 text-[var(--text-secondary)]">Best For</td>
                  {solutions.map((solution) => (
                    <td key={solution.path} className="p-4">{solution.bestFor}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4"></td>
                  {solutions.map((solution) => (
                    <td key={solution.path} className="p-4">
                      <Link to={solution.path}>
                        <Button size="sm" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white">
                          Get Started
                        </Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">How the Suite Works Together</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our AI agents are designed to work as a unified system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[var(--accent-primary)]" />
              </div>
              <h4 className="mb-2">1. Generate Leads</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                AI finds and qualifies prospects automatically
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h4 className="mb-2">2. Create Content</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Generate personalized messages and marketing materials
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="mb-2">3. Send Outreach</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Automate personalized email campaigns at scale
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[var(--accent-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h4 className="mb-2">4. Follow Up</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                AI voice agents handle calls and book meetings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Trusted Across Industries</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our AI solutions adapt to your industry's unique needs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <div 
                key={industry}
                className="px-6 py-3 rounded-full bg-[var(--canvas)] border border-[var(--lines)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-colors duration-200"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof/Testimonial */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl p-12 text-white text-center">
            <div className="mb-6">
              <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl mb-6">
              "The VibeSet AI suite has completely transformed how we operate. We've automated 80% of our manual processes and seen a 5x increase in qualified leads."
            </p>
            <div>
              <p>Sarah Chen</p>
              <p className="text-white/70 text-sm">VP of Sales, TechCorp</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our AI agents can work together to automate your entire workflow
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white">
                Get a Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--canvas)]">
        <FAQ />
      </section>
    </main>
  );
}
