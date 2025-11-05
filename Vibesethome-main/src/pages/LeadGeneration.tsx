import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Search, 
  Target, 
  Zap, 
  Database, 
  BarChart,
  Filter,
  Users,
  Clock,
  Globe,
  Shield,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function LeadGeneration() {
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
                AI-Powered{' '}
                <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                  Lead Generation
                </span>
              </h1>
              
              <p className="text-lg mb-8 leading-relaxed text-[var(--text-secondary)]">
                Stop manually searching for leads. Our AI agent continuously discovers, qualifies, and enriches prospects that match your ideal customer profile, filling your pipeline with ready-to-convert opportunities.
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
                  { icon: Clock, label: "24/7 discovery" },
                  { icon: Target, label: "95% accuracy" },
                  { icon: Database, label: "Auto-enrichment" },
                  { icon: Shield, label: "CRM-ready" }
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
                  {/* Leads Found - Top Right */}
                  <div className="flex justify-end">
                    <div className="bg-[var(--canvas-secondary)] border border-[var(--lines)] rounded-2xl px-6 py-5 text-right">
                      <p className="text-sm mb-1 text-[var(--text-secondary)]">Leads Found</p>
                      <p className="text-4xl text-[var(--accent-primary)]">1,247</p>
                    </div>
                  </div>
                  
                  {/* Center Icon */}
                  <div className="flex justify-center pt-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Status Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl text-[var(--text-primary)]">Discovering Leads</h3>
                    <p className="text-xl text-[var(--text-secondary)]">Tech Startups in SF</p>
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-6 py-2 rounded-full text-sm text-white">
                        AI Processing...
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress bars */}
                  <div className="space-y-3 px-8">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-[var(--text-secondary)]">Qualification</span>
                        <span className="text-xs text-[var(--text-secondary)]">87%</span>
                      </div>
                      <div className="h-2 bg-[var(--canvas-secondary)] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full" style={{ width: '87%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-[var(--text-secondary)]">Enrichment</span>
                        <span className="text-xs text-[var(--text-secondary)]">92%</span>
                      </div>
                      <div className="h-2 bg-[var(--canvas-secondary)] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full" style={{ width: '92%' }} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Qualified - Bottom Left */}
                  <div className="flex justify-start">
                    <div className="bg-[var(--canvas-secondary)] border border-[var(--lines)] rounded-2xl px-6 py-5">
                      <p className="text-sm mb-1 text-[var(--text-secondary)]">Qualified</p>
                      <p className="text-3xl text-[var(--accent-secondary)]">+453</p>
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
                fill your pipeline
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              Powerful AI features that work together to deliver qualified leads on autopilot.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Smart Prospect Discovery</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                AI searches multiple data sources to find companies and contacts that match your ideal customer profile.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Automated Qualification</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Instantly score and prioritize leads based on fit, intent signals, and buying potential.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Real-time Enrichment</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Automatically gather contact details, company info, and technographic data for each lead.
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
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">CRM Integration</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Seamlessly push qualified leads directly into your CRM with all enriched data.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 5 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Advanced Filtering</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Define custom criteria including company size, industry, technology stack, and more.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 6 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Performance Analytics</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Track lead quality, conversion rates, and ROI with detailed analytics dashboards.
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
                2-3 days
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              Simple setup process to start generating qualified leads on autopilot.
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
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">Define Your ICP</h4>
                <p className="text-[var(--text-secondary)]">
                  Tell us about your ideal customer using natural language or import from your CRM.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Search className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 2</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">AI Discovers Leads</h4>
                <p className="text-[var(--text-secondary)]">
                  Our AI continuously searches and monitors for new prospects matching your criteria.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Filter className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 3</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">Auto Qualification</h4>
                <p className="text-[var(--text-secondary)]">
                  Leads are scored, enriched, and prioritized based on buying signals.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 4</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">CRM Delivery</h4>
                <p className="text-[var(--text-secondary)]">
                  Qualified leads flow directly into your sales pipeline, ready for outreach.
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
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">5x</div>
              <div className="text-[var(--text-secondary)]">More Qualified Leads</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">80%</div>
              <div className="text-[var(--text-secondary)]">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">2-3</div>
              <div className="text-[var(--text-secondary)]">Days Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">95%</div>
              <div className="text-[var(--text-secondary)]">Accuracy Rate</div>
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
              fill your pipeline?
            </span>
          </h2>
          <p className="text-lg mb-8 text-[var(--text-secondary)]">
            Start generating qualified leads today with AI-powered discovery and enrichment.
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