import { Hero } from '../components/Hero';
import { ProofBand } from '../components/ProofBand';
import { FeatureCards } from '../components/FeatureCards';
import { TimelineHowItWorks } from '../components/TimelineHowItWorks';
import { RecipesIntegrations } from '../components/RecipesIntegrations';
import { Pricing } from '../components/Pricing';
import { Security } from '../components/Security';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { CalendlySection } from '../components/CalendlySection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ProofBand />
      <FeatureCards />
      <TimelineHowItWorks />
      
      {/* Mini Solutions Grid */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-[48px] font-bold">Powerful AI Agents for Every Need</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Explore our specialized solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/solutions/lead-generation"
              className="group bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 card-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="mb-2">Lead Generation</h3>
              <p className="text-[var(--text-secondary)]">
                Automate prospect discovery and qualification to fill your pipeline with high-quality leads
              </p>
            </Link>

            <Link 
              to="/solutions/content-writing"
              className="group bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 card-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="mb-2">Content Writing</h3>
              <p className="text-[var(--text-secondary)]">
                Generate engaging, on-brand content at scale for blogs, social media, and marketing campaigns
              </p>
            </Link>

            <Link 
              to="/solutions/email-outreach"
              className="group bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 card-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="mb-2">Email Outreach</h3>
              <p className="text-[var(--text-secondary)]">
                Personalize and automate email campaigns that drive responses and conversions
              </p>
            </Link>

            <Link 
              to="/solutions/ai-voice-automation"
              className="group bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-8 hover:border-[var(--accent-primary)] transition-all duration-300 card-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="mb-2">AI Voice Automation</h3>
              <p className="text-[var(--text-secondary)]">
                Handle calls with intelligent voice agents that sound natural and convert effectively
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]">
                Explore All Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <RecipesIntegrations />
      <Pricing />
      <Security />
      <TestimonialsCarousel />
      <FAQ />
      <CalendlySection />
      <FinalCTA />
    </main>
  );
}
