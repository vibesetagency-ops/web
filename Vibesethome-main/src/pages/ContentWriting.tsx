import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Edit3, 
  Sparkles, 
  BookOpen, 
  FileText, 
  Image, 
  Calendar,
  Clock,
  Globe,
  Shield,
  ArrowRight,
  Zap
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function ContentWriting() {
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
                AI Content Writing{' '}
                <span className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                  Engine
                </span>
              </h1>
              
              <p className="text-lg mb-8 leading-relaxed text-[var(--text-secondary)]">
                Create high-quality, on-brand content at scale. Our AI writing agent produces blog posts, social media content, email copy, and marketing materials that resonate with your audience and drive results.
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
                  { icon: Zap, label: "10x output" },
                  { icon: Sparkles, label: "On-brand" },
                  { icon: Globe, label: "25+ languages" },
                  { icon: Shield, label: "Plagiarism-free" }
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
                  {/* Articles Created - Top Right */}
                  <div className="flex justify-end">
                    <div className="bg-[var(--canvas-secondary)] border border-[var(--lines)] rounded-2xl px-6 py-5 text-right">
                      <p className="text-sm mb-1 text-[var(--text-secondary)]">Articles Created</p>
                      <p className="text-4xl text-[var(--accent-primary)]">847</p>
                    </div>
                  </div>
                  
                  {/* Center Icon */}
                  <div className="flex justify-center pt-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full flex items-center justify-center shadow-lg">
                      <Edit3 className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Status Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl text-[var(--text-primary)]">Writing Content</h3>
                    <p className="text-xl text-[var(--text-secondary)]">AI Marketing Trends</p>
                    <div className="flex justify-center">
                      <div className="bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] px-6 py-2 rounded-full text-sm text-white">
                        Generating...
                      </div>
                    </div>
                  </div>
                  
                  {/* Writing progress */}
                  <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-4 space-y-2">
                    <div className="h-2 bg-[var(--canvas-secondary)] rounded-full w-full" />
                    <div className="h-2 bg-[var(--canvas-secondary)] rounded-full w-5/6" />
                    <div className="h-2 bg-[var(--canvas-secondary)] rounded-full w-4/6" />
                    <div className="h-2 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full w-1/3 animate-pulse" />
                  </div>
                  
                  {/* Word Count - Bottom Left */}
                  <div className="flex justify-start">
                    <div className="bg-[var(--canvas-secondary)] border border-[var(--lines)] rounded-2xl px-6 py-5">
                      <p className="text-sm mb-1 text-[var(--text-secondary)]">Words Written</p>
                      <p className="text-3xl text-[var(--accent-secondary)]">2,847</p>
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
                scale content creation
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              AI-powered writing tools that maintain your brand voice and deliver engaging content.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Blog Post Generation</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Create SEO-optimized blog articles with proper structure, keywords, and engaging narratives.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Social Media Content</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Generate platform-specific posts, captions, and threads that drive engagement.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Email Campaigns</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Craft compelling email sequences, newsletters, and promotional content.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 4 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Edit3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Brand Voice Training</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Train the AI on your brand guidelines to ensure consistent tone and messaging.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 5 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Image className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Multi-Format Support</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Create content for any channel: web, email, social, ads, and more.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 6 */}
            <div className="bg-[var(--background)] border border-[var(--lines)] rounded-xl p-6 hover:border-[var(--accent-primary)] transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-[var(--text-primary)]">Content Calendar</h3>
              <p className="mb-4 text-[var(--text-secondary)]">
                Plan, schedule, and publish content automatically across all channels.
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
                1-2 days
              </span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              Quick setup to start producing high-quality content at scale.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 1</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">Upload Brand Assets</h4>
                <p className="text-[var(--text-secondary)]">
                  Provide your brand guidelines, style examples, and voice preferences.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 2</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">Define Topics</h4>
                <p className="text-[var(--text-secondary)]">
                  Tell the AI what topics, keywords, or themes you want to cover.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 3</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">AI Creates Content</h4>
                <p className="text-[var(--text-secondary)]">
                  The AI generates original, on-brand content optimized for your goals.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-[var(--text-primary)]">Step 4</h3>
                <h4 className="text-2xl mb-2 text-[var(--text-primary)]">Review & Publish</h4>
                <p className="text-[var(--text-secondary)]">
                  Quickly review, edit if needed, and publish across your channels.
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
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">10x</div>
              <div className="text-[var(--text-secondary)]">Content Output</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">70%</div>
              <div className="text-[var(--text-secondary)]">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">1-2</div>
              <div className="text-[var(--text-secondary)]">Days Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2 text-[var(--accent-primary)]">98%</div>
              <div className="text-[var(--text-secondary)]">Brand Consistency</div>
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
              scale your content?
            </span>
          </h2>
          <p className="text-lg mb-8 text-[var(--text-secondary)]">
            Start creating high-quality, on-brand content at 10x the speed.
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