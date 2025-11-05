import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

// Calendly type declaration
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: Element }) => void;
    };
  }
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
    message: '',
  });
  const [activeTab, setActiveTab] = useState<'form' | 'calendly'>('form');
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if Calendly script is already loaded
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (existingScript) {
      setCalendlyLoaded(true);
    } else {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setCalendlyLoaded(true);
      document.body.appendChild(script);
    }

    return () => {
      // Don't remove the script on unmount as it might be used elsewhere
    };
  }, []);

  // Reinitialize Calendly when tab changes to calendly
  useEffect(() => {
    if (activeTab === 'calendly' && calendlyLoaded && window.Calendly) {
      // Give it a moment to render the div
      setTimeout(() => {
        const calendlyDiv = document.querySelector('.calendly-inline-widget');
        if (calendlyDiv && !calendlyDiv.querySelector('iframe')) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/vibesetagency/30min',
            parentElement: calendlyDiv,
          });
        }
      }, 100);
    }
  }, [activeTab, calendlyLoaded]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main id="main-content" className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-32 overflow-hidden bg-[var(--background)]">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--lines)_1px,transparent_1px),linear-gradient(to_bottom,var(--lines)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--canvas)] border border-[var(--lines)] mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="text-sm text-[var(--text-secondary)]">Get in Touch</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-7xl mb-6 leading-tight text-[var(--text-primary)]"
            >
              Let's Talk About Your{' '}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Goals
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-xl text-[var(--text-secondary)] mb-6 md:mb-8 leading-relaxed"
            >
              Whether you have questions, need a demo, or want to discuss a custom solution, we're here to help. Our team typically responds within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {[
                { icon: Clock, label: "24hr response" },
                { icon: CheckCircle, label: "Free consultation" },
                { icon: Sparkles, label: "Custom solutions" }
              ].map((item, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="px-4 py-2 flex items-center gap-2 bg-[var(--canvas)] hover:bg-[var(--canvas-secondary)] transition-colors text-[var(--text-primary)] border-0"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </Badge>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Toggle */}
      <section className="py-6 md:py-8 bg-[var(--canvas)] border-y border-[var(--lines)] sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-center gap-2 md:gap-3">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-xl flex items-center gap-2 transition-all duration-200 text-sm md:text-base ${
                activeTab === 'form'
                  ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg'
                  : 'bg-[var(--background)] border border-[var(--lines)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              Send a Message
            </button>
            <button
              onClick={() => setActiveTab('calendly')}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-xl flex items-center gap-2 transition-all duration-200 text-sm md:text-base ${
                activeTab === 'calendly'
                  ? 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white shadow-lg'
                  : 'bg-[var(--background)] border border-[var(--lines)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Book a Meeting
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {activeTab === 'form' && (
        <section className="py-24 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[var(--canvas)] border border-[var(--lines)] rounded-2xl p-8 lg:p-10"
              >
                <h2 className="text-3xl mb-6 text-[var(--text-primary)]">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-[var(--text-primary)]">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-[var(--text-primary)]">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm mb-2 text-[var(--text-primary)]">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] transition-colors"
                      placeholder="Acme Inc"
                    />
                  </div>

                  <div>
                    <label htmlFor="useCase" className="block text-sm mb-2 text-[var(--text-primary)]">
                      What are you interested in? *
                    </label>
                    <select
                      id="useCase"
                      name="useCase"
                      required
                      value={formData.useCase}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="ai-receptionist">AI Voice Receptionist</option>
                      <option value="lead-generation">Lead Generation</option>
                      <option value="content-writing">Content Writing</option>
                      <option value="email-outreach">Email Outreach</option>
                      <option value="full-suite">Full Suite</option>
                      <option value="custom">Custom Solution</option>
                      <option value="demo">Schedule a Demo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-[var(--text-primary)]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] resize-none transition-colors"
                      placeholder="Tell us about your goals and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white py-6 text-lg"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl mb-6 text-[var(--text-primary)]">Other Ways to Reach Us</h2>
                  <div className="space-y-6">
                    <div className="bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all card-lift">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="mb-2 text-[var(--text-primary)]">Email Us</h4>
                          <p className="text-[var(--text-secondary)] mb-1">
                            <a href="mailto:info@vibeset.ca" className="hover:text-[var(--accent-primary)] transition-colors">
                              info@vibeset.ca
                            </a>
                          </p>
                          <p className="text-sm text-[var(--text-secondary)]">We'll respond instantly</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all card-lift">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="mb-2 text-[var(--text-primary)]">Schedule a Call</h4>
                          <button
                            onClick={() => setActiveTab('calendly')}
                            className="text-[var(--accent-primary)] hover:underline mb-1"
                          >
                            Book a consultation
                          </button>
                          <p className="text-sm text-[var(--text-secondary)]">30-minute personalized demo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl mb-6">What to Expect</h3>
                  <div className="space-y-4">
                    {[
                      'Personalized demo of our AI solutions',
                      'Custom automation roadmap for your business',
                      'ROI projections and implementation timeline',
                      'Answers to all your technical questions'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Calendly Section */}
      {activeTab === 'calendly' && (
        <section className="py-24 bg-[var(--background)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:sticky lg:top-32 space-y-8"
              >
                <div>
                  <h2 className="text-3xl lg:text-4xl mb-4 text-[var(--text-primary)]">
                    Book Your Free{' '}
                    <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                      Consultation
                    </span>
                  </h2>
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                    Pick a time—meet a solutions architect to identify 1–3 high-ROI automations for your business.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: '30-minute strategy session' },
                    { icon: Sparkles, text: 'Custom automation roadmap' },
                    { icon: CheckCircle, text: 'ROI projections for your use case' },
                    { icon: Calendar, text: 'Flexible scheduling options' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[var(--text-primary)]">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Indicator */}
                <div className="bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-6">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 inline mr-2 text-[var(--accent-primary)]" />
                    No obligation. We'll only contact you about your booking.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">Rather send a message?</p>
                  <Button
                    onClick={() => setActiveTab('form')}
                    variant="outline"
                    className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]"
                  >
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Send us a message instead
                  </Button>
                </div>
              </motion.div>

              {/* Right - Calendly embed */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="bg-[var(--canvas)] border border-[var(--lines)] rounded-2xl p-4 lg:p-6">
                  {calendlyLoaded ? (
                    <div 
                      className="calendly-inline-widget rounded-xl overflow-hidden" 
                      data-url="https://calendly.com/vibesetagency/30min"
                      style={{ minWidth: '320px', height: '700px' }}
                    />
                  ) : (
                    <div 
                      className="rounded-xl overflow-hidden bg-[var(--background)] flex items-center justify-center"
                      style={{ minWidth: '320px', height: '700px' }}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 border-4 border-[var(--accent-primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-[var(--text-secondary)]">Loading calendar...</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4 text-[var(--text-primary)]">
              Need Quick{' '}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                Answers?
              </span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              Check out our FAQ or explore our resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { to: '/#faq', title: 'FAQ', description: 'Common questions answered', gradient: 'from-blue-500 to-cyan-500' },
              { to: '/blog', title: 'Blog', description: 'Guides and best practices', gradient: 'from-cyan-500 to-teal-500' },
              { to: '/case-studies', title: 'Case Studies', description: 'See real results', gradient: 'from-teal-500 to-green-500' }
            ].map((link, idx) => (
              <Link 
                key={idx}
                to={link.to}
                className="group bg-[var(--background)] border border-[var(--lines)] rounded-xl p-8 text-center hover:border-[var(--accent-primary)] transition-all duration-300 card-lift"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">{link.title}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl mb-6 text-[var(--text-primary)]">
            Ready to Get{' '}
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              Started?
            </span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Join thousands of businesses automating their workflows with VibeSet AI
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/solutions">
              <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white px-8 py-6 text-lg">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)] px-8 py-6 text-lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}