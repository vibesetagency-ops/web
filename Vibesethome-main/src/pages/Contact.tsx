import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
      <section className="py-24 bg-gradient-to-b from-[var(--canvas)] to-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--lines)] mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="text-sm text-[var(--text-secondary)]">Get in Touch</span>
            </div>
            <h1 className="mb-6">Let's Talk About Your Goals</h1>
            <p className="text-[var(--text-secondary)]">
              Whether you have questions, need a demo, or want to discuss a custom solution, we're here to help. Our team typically responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[var(--surface)] border border-[var(--lines)] rounded-2xl p-8">
              <h2 className="mb-6">Send Us a Message</h2>
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
                    className="w-full px-4 py-3 rounded-lg bg-[var(--canvas)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]"
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
                    className="w-full px-4 py-3 rounded-lg bg-[var(--canvas)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]"
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
                    className="w-full px-4 py-3 rounded-lg bg-[var(--canvas)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]"
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
                    className="w-full px-4 py-3 rounded-lg bg-[var(--canvas)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]"
                  >
                    <option value="">Select an option</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="content-writing">Content Writing</option>
                    <option value="email-outreach">Email Outreach</option>
                    <option value="voice-automation">AI Voice Automation</option>
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
                    className="w-full px-4 py-3 rounded-lg bg-[var(--canvas)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] resize-none"
                    placeholder="Tell us about your goals and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <h2 className="mb-6">Other Ways to Reach Us</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h4 className="mb-1">Email Us</h4>
                      <p className="text-[var(--text-secondary)]">hello@vibeset.ai</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h4 className="mb-1">Schedule a Call</h4>
                      <Link to="/" className="text-[var(--accent-primary)] hover:underline">
                        Book a consultation
                      </Link>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">30-minute personalized demo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h4 className="mb-1">Visit Us</h4>
                      <p className="text-[var(--text-secondary)]">San Francisco, CA</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">Remote-first, global team</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl p-8 text-white">
                <h3 className="mb-4">Quick Start</h3>
                <p className="mb-6 text-white/90">
                  Ready to get started right away? Try VibeSet free for 14 days.
                </p>
                <div className="space-y-3">
                  <Link to="/pricing">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                      View Pricing
                    </Button>
                  </Link>
                  <Link to="/solutions">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                      Explore Solutions
                    </Button>
                  </Link>
                  <Link to="/case-studies">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                      Read Case Studies
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4">Need Quick Answers?</h2>
            <p className="text-[var(--text-secondary)]">
              Check out our FAQ or explore our resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/"
              className="bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-6 text-center hover:border-[var(--accent-primary)] transition-colors duration-200 card-lift"
            >
              <h4 className="mb-2">FAQ</h4>
              <p className="text-sm text-[var(--text-secondary)]">Common questions answered</p>
            </Link>
            <Link 
              to="/blog"
              className="bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-6 text-center hover:border-[var(--accent-primary)] transition-colors duration-200 card-lift"
            >
              <h4 className="mb-2">Blog</h4>
              <p className="text-sm text-[var(--text-secondary)]">Guides and best practices</p>
            </Link>
            <Link 
              to="/case-studies"
              className="bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-6 text-center hover:border-[var(--accent-primary)] transition-colors duration-200 card-lift"
            >
              <h4 className="mb-2">Case Studies</h4>
              <p className="text-sm text-[var(--text-secondary)]">See real results</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
