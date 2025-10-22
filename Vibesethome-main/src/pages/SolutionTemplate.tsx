import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ReactNode } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface Step {
  title: string;
  description: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface Stats {
  value: string;
  label: string;
}

interface Integration {
  name: string;
  logo: ReactNode;
}

interface CaseStudy {
  company: string;
  result: string;
  quote: string;
  author: string;
  role: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface SolutionTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  heroIcon: ReactNode;
  stats: Stats[];
  features: Feature[];
  howItWorks: Step[];
  useCases: UseCase[];
  integrations: Integration[];
  caseStudy: CaseStudy;
  faqs: FAQItem[];
}

export function SolutionTemplate({
  title,
  subtitle,
  description,
  heroIcon,
  stats,
  features,
  howItWorks,
  useCases,
  integrations,
  caseStudy,
  faqs,
}: SolutionTemplateProps) {
  return (
    <main id="main-content" className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[var(--canvas)] to-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--lines)] mb-6">
                <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                <span className="text-sm text-[var(--text-secondary)]">{subtitle}</span>
              </div>
              <h1 className="mb-6">{title}</h1>
              <p className="text-[var(--text-secondary)] mb-8">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
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
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white">
                <div className="scale-150">
                  {heroIcon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-[var(--surface)] border-y border-[var(--lines)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2 gradient-text">{stat.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Powerful Features</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to transform your workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[var(--surface)] border border-[var(--lines)] rounded-xl p-6 card-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h4 className="mb-2">{feature.title}</h4>
                <p className="text-[var(--text-secondary)] text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Get started in minutes with our simple setup process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4 border-2 border-[var(--accent-primary)]">
                  <span className="text-2xl text-[var(--accent-primary)]">{index + 1}</span>
                </div>
                <h4 className="mb-2">{step.title}</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Industry Applications</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              See how different industries leverage this solution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-[var(--surface)] border border-[var(--lines)] rounded-xl p-6 text-center hover:border-[var(--accent-primary)] transition-colors duration-200"
              >
                <h4 className="mb-2 text-sm">{useCase.title}</h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Seamless Integrations</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Connect with the tools you already use
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="w-32 h-32 bg-[var(--canvas)] border border-[var(--lines)] rounded-xl flex flex-col items-center justify-center hover:border-[var(--accent-primary)] transition-colors duration-200"
              >
                <div className="mb-2">
                  {integration.logo}
                </div>
                <span className="text-xs text-[var(--text-secondary)]">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[var(--surface)] to-[var(--canvas)] border border-[var(--lines)] rounded-2xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm mb-6">
                  Case Study
                </div>
                <h3 className="mb-4">{caseStudy.company}</h3>
                <div className="text-2xl mb-6 gradient-text">{caseStudy.result}</div>
                <p className="text-[var(--text-secondary)] mb-6">
                  "{caseStudy.quote}"
                </p>
                <div>
                  <p>{caseStudy.author}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{caseStudy.role}</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl p-12 text-white flex items-center justify-center">
                <Check className="w-32 h-32 opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using {title} to transform their workflow
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
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-[var(--surface)] border border-[var(--lines)] rounded-xl p-6"
              >
                <h4 className="mb-3">{faq.question}</h4>
                <p className="text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
