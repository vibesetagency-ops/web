import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';

export function CaseStudies() {
  const caseStudies = [
    {
      company: 'TechVentures Inc',
      industry: 'SaaS',
      solution: 'Lead Generation',
      challenge: 'Struggling to find and qualify B2B prospects efficiently',
      result: '450% increase in qualified leads within 60 days',
      stats: [
        { label: 'Lead Volume', value: '+450%' },
        { label: 'Qualification Rate', value: '92%' },
        { label: 'Time Saved', value: '25hrs/week' },
      ],
      quote: 'VibeSet transformed our entire sales pipeline. We went from manually researching 20 leads per week to automatically receiving 200+ qualified prospects daily.',
      author: 'Michael Rodriguez',
      role: 'VP of Sales',
      tags: ['Lead Generation', 'B2B', 'SaaS'],
    },
    {
      company: 'ContentFlow Marketing',
      industry: 'Marketing Agency',
      solution: 'Content Writing',
      challenge: 'Unable to scale content production for growing client base',
      result: '10x content output while maintaining quality',
      stats: [
        { label: 'Content Volume', value: '+900%' },
        { label: 'Client Capacity', value: '3x' },
        { label: 'Cost Reduction', value: '65%' },
      ],
      quote: 'We were struggling to keep up with content demands. VibeSet allowed us to 10x our output while staying on brand for each client.',
      author: 'Jessica Thompson',
      role: 'Content Director',
      tags: ['Content Writing', 'Agency', 'Marketing'],
    },
    {
      company: 'CloudScale Solutions',
      industry: 'Cloud Services',
      solution: 'Email Outreach',
      challenge: 'Low email response rates and time-consuming personalization',
      result: '312% increase in email response rates',
      stats: [
        { label: 'Response Rate', value: '+312%' },
        { label: 'Meetings Booked', value: '+180%' },
        { label: 'Pipeline Value', value: '+$2.3M' },
      ],
      quote: 'Our cold email campaigns went from 2% response to consistently achieving 8-12%. The AI personalization is indistinguishable from hand-written emails.',
      author: 'David Park',
      role: 'Head of Sales Development',
      tags: ['Email Outreach', 'Sales', 'B2B'],
    },
    {
      company: 'HealthFirst Medical',
      industry: 'Healthcare',
      solution: 'AI Voice Automation',
      challenge: 'Overwhelmed staff spending excessive time on appointment scheduling',
      result: 'Automated 75% of appointment scheduling calls',
      stats: [
        { label: 'Calls Automated', value: '75%' },
        { label: 'Staff Time Saved', value: '20hrs/week' },
        { label: 'Patient Satisfaction', value: '+15%' },
      ],
      quote: 'Our AI voice agent handles scheduling flawlessly. Staff can focus on patient care, and satisfaction has actually increased.',
      author: 'Dr. Amanda Foster',
      role: 'Practice Manager',
      tags: ['Voice Automation', 'Healthcare', 'Support'],
    },
    {
      company: 'GrowthLabs Ventures',
      industry: 'Investment Firm',
      solution: 'Full Suite',
      challenge: 'Needed to scale deal sourcing and investor relations',
      result: 'Complete automation of sourcing and outreach workflow',
      stats: [
        { label: 'Deal Flow', value: '+520%' },
        { label: 'Investor Engagement', value: '+340%' },
        { label: 'Team Efficiency', value: '+400%' },
      ],
      quote: 'Using all four VibeSet agents together created a completely automated workflow from prospect discovery to investor updates. Game-changing for our firm.',
      author: 'Sarah Chen',
      role: 'Managing Partner',
      tags: ['Full Suite', 'Finance', 'Venture Capital'],
    },
    {
      company: 'E-commerce Masters',
      industry: 'E-commerce',
      solution: 'Content Writing + Email',
      challenge: 'Needed to create product descriptions and customer email campaigns at scale',
      result: 'Launched 500+ products with automated marketing',
      stats: [
        { label: 'Products Launched', value: '500+' },
        { label: 'Email Revenue', value: '+285%' },
        { label: 'Conversion Rate', value: '+45%' },
      ],
      quote: 'We scaled from 20 to 500+ products in 6 months. The AI handles all descriptions and email campaigns perfectly.',
      author: 'Marcus Williams',
      role: 'CEO',
      tags: ['Content', 'Email', 'E-commerce'],
    },
  ];

  const industries = ['All', 'SaaS', 'Agency', 'Healthcare', 'E-commerce', 'Finance'];
  const solutions = ['All Solutions', 'Lead Generation', 'Content Writing', 'Email Outreach', 'Voice Automation'];

  return (
    <main id="main-content" className="pt-20">
      {/* Hero */}
      <section className="relative py-12 md:py-20 bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-4">
            <h1 className="mb-0 leading-none text-[48px] sm:text-[72px] md:text-[96px]">
              <span className="text-[var(--text-primary)]">Success </span>
              <span style={{ color: 'var(--accent-primary)' }}>Stories</span>
            </h1>
          </div>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 md:mb-16 text-base md:text-lg px-4">
            See how leading companies use VibeSet AI to transform their workflows and achieve exceptional results.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 lg:gap-20">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-[var(--text-primary)] text-sm">385% Avg. ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-[var(--text-primary)] text-sm">10,000+ Teams</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-[var(--text-primary)] text-sm">98% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 md:py-8 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry}
                className="px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--lines)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-[var(--surface)] border border-[var(--lines)] rounded-xl p-8 card-lift"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="mb-2">{study.company}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{study.industry}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs">
                    {study.solution}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 text-sm text-[var(--text-secondary)]">Challenge</h4>
                  <p className="text-sm">{study.challenge}</p>
                </div>

                <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--accent-primary)]/20">
                  <h4 className="mb-2 text-sm text-[var(--text-secondary)]">Result</h4>
                  <p className="gradient-text">{study.result}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl gradient-text mb-1">{stat.value}</div>
                      <div className="text-xs text-[var(--text-secondary)]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="mb-6 pl-4 border-l-2 border-[var(--accent-primary)]">
                  <p className="text-sm text-[var(--text-secondary)] italic mb-2">"{study.quote}"</p>
                  <footer>
                    <p className="text-sm">{study.author}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{study.role}</p>
                  </footer>
                </blockquote>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-[var(--canvas)] border border-[var(--lines)] text-xs text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">The Numbers Speak for Themselves</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Aggregate results across all our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[var(--accent-primary)]" />
              </div>
              <div className="text-4xl mb-2 gradient-text">385%</div>
              <p className="text-sm text-[var(--text-secondary)]">Average ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[var(--accent-primary)]" />
              </div>
              <div className="text-4xl mb-2 gradient-text">10,000+</div>
              <p className="text-sm text-[var(--text-secondary)]">Teams Using VibeSet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[var(--accent-primary)]" />
              </div>
              <div className="text-4xl mb-2 gradient-text">15M+</div>
              <p className="text-sm text-[var(--text-secondary)]">Tasks Automated</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[var(--accent-primary)]" />
              </div>
              <div className="text-4xl mb-2 gradient-text">98%</div>
              <p className="text-sm text-[var(--text-secondary)]">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Join thousands of teams already transforming their workflows with VibeSet AI
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white">
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]">
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}