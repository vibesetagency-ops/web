import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Send, 
  Target, 
  TrendingUp, 
  Zap, 
  BarChart2,
  Clock,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function EmailOutreach() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToCalendly = () => {
    const element = document.getElementById('calendly');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="lg:text-6xl mb-6 leading-tight text-[var(--text-primary)]">
                AI Email Outreach{' '}
                <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>
              
              <p className="text-lg mb-8 leading-relaxed text-[var(--text-secondary)]">
                Transform your email campaigns with AI-powered personalization. Our intelligent outreach agent crafts tailored messages, optimizes send times, and follows up automatically to maximize response rates and conversions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToCalendly}
                  className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white px-8 py-6 text-lg transition-all"
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="border-[var(--lines)] text-[var(--text-primary)] px-8 py-6 text-lg"
                >
                  See It In Action
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { icon: TrendingUp, label: "4x responses" },
                  { icon: Target, label: "Hyper-personal" },
                  { icon: Zap, label: "Auto follow-up" },
                  { icon: CheckCircle, label: "99% delivery" }
                ].map((item, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="px-3 py-2 flex items-center gap-2 bg-[var(--canvas)] hover:bg-[var(--canvas-secondary)] transition-colors text-[var(--text-primary)] border-0"
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    <span className="text-xs">{item.label}</span>
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Right Dashboard Mockup */}
            <div className="relative">
              <div className="relative bg-[var(--canvas)] border border-[var(--lines)] rounded-3xl p-8 overflow-hidden">
                {/* Background gradient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-primary)]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--accent-secondary)]/5 rounded-full blur-3xl" />
                
                <div className="relative space-y-8">
                  {/* Emails Sent - Top Right */}
                  <div className="flex justify-end">
                    <div className="bg-[var(--canvas-secondary)] border border-[var(--lines)] rounded-2xl px-6 py-5 text-right">
                      <p className="text-sm mb-1 text-[var(--text-secondary)]">Emails Sent</p>
                      <p className="text-4xl text-[var(--accent-primary)]">3,847</p>
                    </div>
                  </div>
                  
                  {/* Center Icon */}
                  <div className="flex justify-center pt-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Status Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl text-[var(--text-primary)]">Campaign Active</h3>
                    <p className="text-xl text-[var(--text-secondary)]">Q1 Sales Outreach</p>
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-6 py-2 rounded-full text-sm text-white">
                        Sending...
                      </div>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-3 text-center">
                      <p className="text-2xl text-[var(--accent-primary)]">47%</p>
                      <p className="text-xs text-[var(--text-secondary)]">Open Rate</p>
                    </div>
                    <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-3 text-center">
                      <p className="text-2xl text-[var(--accent-secondary)]">12%</p>
                      <p className="text-xs text-[var(--text-secondary)]">Reply Rate</p>
                    </div>
                    <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-3 text-center">
                      <p className="text-2xl text-[var(--accent-primary)]">99%</p>
                      <p className="text-xs text-[var(--text-secondary)]">Delivered</p>
                    </div>
                  </div>
                  
                  {/* Response Count - Bottom Left */}
                  <div className="flex justify-start">
                    <div className="bg-[var(--canvas-secondary)] border border-[var(--lines)] rounded-2xl px-6 py-5">
                      <p className="text-sm mb-1 text-[var(--text-secondary)]">Replies</p>
                      <p className="text-3xl text-[var(--accent-secondary)]">+467</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 text-[var(--text-primary)]">
              Everything you need to{' '}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                maximize responses
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              AI-powered email tools that personalize at scale and convert prospects into customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Hyper-Personalization</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                AI analyzes each prospect to create truly personalized messages that feel hand-written.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Smart Sequencing</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Automatically create and execute multi-touch email sequences with intelligent timing.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">A/B Testing</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Continuously test subject lines, copy, and CTAs to optimize campaign performance.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 4 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Auto Follow-ups</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Intelligent follow-up sequences that adapt based on recipient behavior.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 5 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Deliverability Optimization</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                AI ensures emails land in inbox with spam score checking and reputation management.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 6 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Performance Analytics</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Track opens, clicks, replies, and conversions with detailed campaign insights.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Steps Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 text-[var(--text-primary)]">
              Up and running in{' '}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                2-4 days
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              Simple setup to start sending personalized, high-converting email campaigns.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 1</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">Import Prospects</h4>
                <p className="text-[var(--text-secondary)]">
                  Upload your contact list or connect your CRM to import leads automatically.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 2</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">AI Personalization</h4>
                <p className="text-[var(--text-secondary)]">
                  The AI researches each prospect and crafts personalized messages.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Send className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 3</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">Send & Optimize</h4>
                <p className="text-[var(--text-secondary)]">
                  Emails are sent at optimal times with continuous A/B testing.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 4</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">Smart Follow-ups</h4>
                <p className="text-[var(--text-secondary)]">
                  Automated sequences adapt based on opens, clicks, and replies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">4x</div>
              <div className="text-[var(--text-secondary)]">Higher Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">85%</div>
              <div className="text-[var(--text-secondary)]">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">2-4</div>
              <div className="text-[var(--text-secondary)]">Days Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">99%</div>
              <div className="text-[var(--text-secondary)]">Deliverability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="calendly" className="py-20 bg-[var(--background)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl mb-6 text-[var(--text-primary)]">
            Ready to{' '}
            <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              boost your response rates?
            </span>
          </h2>
          <p className="text-lg mb-8 text-[var(--text-secondary)]">
            Start sending personalized email campaigns that convert with AI-powered outreach.
          </p>
          <Button
            onClick={scrollToCalendly}
            className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white px-12 py-6 text-lg"
          >
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}