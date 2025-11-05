import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  TrendingUp, 
  Clock, 
  Zap, 
  Users,
  Edit3,
  Mail,
  Phone,
  Sparkles,
  Target,
  Send,
  ChevronDown
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

export function Solutions() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const solutions = [
    {
      title: 'AI Voice Receptionist',
      path: '/solutions/ai-receptionist',
      description: 'Answer, route, and book 24/7 with intelligent voice agents that never miss a call',
      icon: Phone,
      category: 'customer-service',
      outcome: 'Never miss a call',
      setupTime: '10 min',
      roi: '27% more bookings',
      bestFor: 'Support teams',
      gradient: 'from-purple-500 to-blue-500',
      stats: { value: '2,847', label: 'Calls handled' }
    },
    {
      title: 'Lead Generation',
      path: '/solutions/lead-generation',
      description: 'Automate prospect discovery and qualification to fill your pipeline with high-quality leads',
      icon: TrendingUp,
      category: 'sales',
      outcome: 'Fill pipeline with qualified leads',
      setupTime: '2-3 days',
      roi: '5x pipeline growth',
      bestFor: 'B2B sales teams',
      gradient: 'from-blue-500 to-cyan-500',
      stats: { value: '1,247', label: 'Leads found' }
    },
    {
      title: 'Content Writing',
      path: '/solutions/content-writing',
      description: 'Generate engaging, on-brand content at scale for blogs, social media, and marketing campaigns',
      icon: Edit3,
      category: 'marketing',
      outcome: 'Publish 10x more content',
      setupTime: '1-2 days',
      roi: '70% time savings',
      bestFor: 'Content teams',
      gradient: 'from-cyan-500 to-teal-500',
      stats: { value: '847', label: 'Articles created' }
    },
    {
      title: 'Email Outreach',
      path: '/solutions/email-outreach',
      description: 'Personalize and automate email campaigns that drive responses and conversions',
      icon: Mail,
      category: 'sales',
      outcome: 'Boost email response rates',
      setupTime: '2-4 days',
      roi: '4x response increase',
      bestFor: 'Sales teams',
      gradient: 'from-teal-500 to-green-500',
      stats: { value: '3,847', label: 'Emails sent' }
    },
  ];

  const categories = [
    { id: 'all', label: 'All Solutions', icon: Sparkles },
    { id: 'sales', label: 'Sales', icon: Target },
    { id: 'marketing', label: 'Marketing', icon: Send },
    { id: 'customer-service', label: 'Customer Service', icon: Phone },
  ];

  const faqs = [
    {
      question: 'Can I use multiple AI solutions together?',
      answer: 'Absolutely! Our AI solutions are designed to work seamlessly together. For example, you can use Lead Generation to find prospects, Content Writing to create personalized messaging, and Email Outreach to reach them at scale. Many customers combine 2-3 solutions for maximum impact.'
    },
    {
      question: 'How long does it take to set up a solution?',
      answer: 'Setup times vary by solution: AI Voice Receptionist takes just 10 minutes, Content Writing 1-2 days, Email Outreach 2-4 days, and Lead Generation 2-3 days. Most of this time is spent connecting your existing tools and training the AI on your specific needs.'
    },
    {
      question: 'What kind of ROI can I expect?',
      answer: 'Results vary by solution and use case, but our customers typically see: 5x pipeline growth with Lead Generation, 70% time savings with Content Writing, 4x response rates with Email Outreach, and 27% more bookings with AI Voice Receptionist. Most customers achieve positive ROI within the first 30-60 days.'
    },
    {
      question: 'Do I need technical expertise to use these solutions?',
      answer: 'No technical expertise required! Our solutions are designed for business users, not developers. Setup is guided and intuitive, and our team provides hands-on support to ensure you\'re successful from day one.'
    },
    {
      question: 'Can the AI learn my specific business needs?',
      answer: 'Yes! Each solution can be trained on your unique business context, brand voice, ideal customer profile, and workflows. The AI continuously learns and improves based on your feedback and usage patterns.'
    },
    {
      question: 'What integrations are available?',
      answer: 'We integrate with 100+ popular business tools including Salesforce, HubSpot, Gmail, Outlook, Slack, LinkedIn, WordPress, Shopify, and many more. Custom integrations are also available for enterprise customers.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all solutions. No credit card required to start. You can test the full functionality and see real results before committing.'
    },
    {
      question: 'How is pricing structured?',
      answer: 'We offer flexible pricing based on your needs - from individual solutions to bundled packages. Plans start at $99/month per solution, with discounts for annual commitments and multiple solutions. Enterprise plans are available for larger teams.'
    }
  ];

  const filteredSolutions = activeFilter === 'all' 
    ? solutions 
    : solutions.filter(s => s.category === activeFilter);

  return (
    <main id="main-content" className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-[var(--background)]">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--lines)_1px,transparent_1px),linear-gradient(to_bottom,var(--lines)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--canvas)] border border-[var(--lines)] mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="text-sm text-[var(--text-secondary)]">AI-Powered Business Solutions</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl lg:text-7xl mb-6 leading-tight text-[var(--text-primary)]"
            >
              The Complete{' '}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                AI Agent Suite
              </span>
              {' '}for Modern Teams
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed"
            >
              From lead generation to customer service, our AI agents work together to automate your entire workflow. Choose individual solutions or combine them for maximum impact.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/contact">
                <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white px-8 py-6 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)] px-8 py-6 text-lg">
                  View Pricing
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-[var(--canvas)] border-y border-[var(--lines)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg'
                      : 'bg-[var(--background)] border border-[var(--lines)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 text-[var(--text-primary)]">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Solution
              </span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each AI agent is purpose-built to excel at a specific task, yet they all work seamlessly together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={solution.path} className="block group">
                    <div className="relative bg-[var(--canvas)] border border-[var(--lines)] rounded-2xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 card-lift h-full">
                      {/* Gradient glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 to-[var(--accent-secondary)]/0 group-hover:from-[var(--accent-primary)]/5 group-hover:to-[var(--accent-secondary)]/5 rounded-2xl transition-all duration-300" />
                      
                      <div className="relative">
                        <div className="flex items-start justify-between mb-6">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-white shadow-lg`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl text-[var(--accent-primary)]">{solution.stats.value}</div>
                            <div className="text-xs text-[var(--text-secondary)]">{solution.stats.label}</div>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl mb-3 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                          {solution.title}
                        </h3>
                        
                        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                          {solution.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-[var(--background)] rounded-lg p-3">
                            <div className="text-xs text-[var(--text-secondary)] mb-1">Typical ROI</div>
                            <div className="text-[var(--accent-primary)]">{solution.roi}</div>
                          </div>
                          <div className="bg-[var(--background)] rounded-lg p-3">
                            <div className="text-xs text-[var(--text-secondary)] mb-1">Setup Time</div>
                            <div className="text-[var(--text-primary)]">{solution.setupTime}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-[var(--background)] text-[var(--text-secondary)] border-0">
                            {solution.bestFor}
                          </Badge>
                          <div className="flex items-center gap-2 text-[var(--accent-primary)] group-hover:gap-3 transition-all">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Together */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 text-[var(--text-primary)]">
              How the Suite Works{' '}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our AI agents are designed to work as a unified system, creating a seamless automation pipeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: TrendingUp, 
                title: '1. Generate Leads', 
                description: 'AI finds and qualifies prospects automatically',
                gradient: 'from-blue-500 to-cyan-500'
              },
              { 
                icon: Edit3, 
                title: '2. Create Content', 
                description: 'Generate personalized messages and marketing materials',
                gradient: 'from-cyan-500 to-teal-500'
              },
              { 
                icon: Mail, 
                title: '3. Send Outreach', 
                description: 'Automate personalized email campaigns at scale',
                gradient: 'from-teal-500 to-green-500'
              },
              { 
                icon: Phone, 
                title: '4. Follow Up', 
                description: 'AI voice agents handle calls and book meetings',
                gradient: 'from-purple-500 to-blue-500'
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="mb-2 text-[var(--text-primary)]">{step.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10,000+', label: 'Businesses Automated' },
              { value: '5M+', label: 'Tasks Completed' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '24/7', label: 'AI Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-2 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[var(--text-secondary)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl p-12 text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="mb-6">
                <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-2xl mb-6 leading-relaxed">
                "The VibeSet AI suite has completely transformed how we operate. We've automated 80% of our manual processes and seen a 5x increase in qualified leads."
              </p>
              <div>
                <p className="text-lg">Sarah Chen</p>
                <p className="text-white/70">VP of Sales, TechCorp</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 text-[var(--text-primary)]">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Everything you need to know about our AI solutions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-[var(--canvas)] border border-[var(--lines)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-[var(--canvas-secondary)] transition-colors"
                >
                  <span className="text-lg text-[var(--text-primary)] pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--accent-primary)] transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl mb-6 text-[var(--text-primary)]">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Business?
            </span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our AI agents can work together to automate your entire workflow
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white px-8 py-6 text-lg">
                Get a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)] px-8 py-6 text-lg">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}