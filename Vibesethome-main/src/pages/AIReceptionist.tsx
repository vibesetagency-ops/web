import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  Users, 
  Brain, 
  RefreshCw, 
  BarChart3,
  PhoneCall,
  BookOpen,
  Power,
  TrendingUp,
  ArrowRight,
  Clock,
  Globe,
  Calendar,
  Shield,
  Mic,
  FileText,
  Send,
  Database,
  Zap,
  Target,
  Mail,
  FileSpreadsheet,
  Repeat
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { motion } from 'motion/react';

export function AIReceptionist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToCalendly = () => {
    const element = document.getElementById('calendly');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Pipeline data
  const mainNodes = [
    { icon: Phone, label: 'Inbound Call', color: 'from-[#8b5cf6] to-[#6D28D9]' },
    { icon: Mic, label: 'Speech-to-Intent', color: 'from-[#8b5cf6] to-[#2563EB]' }
  ];

  const branchNodes = [
    { icon: MessageSquare, label: 'Send SMS/Email', color: 'from-[#06b6d4] to-[#0891b2]' },
    { icon: Calendar, label: 'Book Appointment', color: 'from-[#8b5cf6] to-[#06b6d4]' },
    { icon: Users, label: 'Route to Agent', color: 'from-[#6366f1] to-[#8b5cf6]' }
  ];

  const syncNodes = [
    { icon: Database, label: 'Log to CRM', color: 'from-[#0891b2] to-[#06b6d4]', badges: ['SF', 'HubSpot'] },
    { icon: FileText, label: 'Transcript', color: 'from-[#6366f1] to-[#8b5cf6]' },
    { icon: Send, label: 'Notify Team', color: 'from-[#8b5cf6] to-[#a78bfa]' }
  ];

  const vibesetNodes = [
    { icon: Zap, label: 'Auto-Follow-Up', description: 'Email drip' },
    { icon: Target, label: 'Lead Scoring', description: 'AI qualification' },
    { icon: Mail, label: 'Email Outreach', description: 'Personalized' },
    { icon: FileSpreadsheet, label: 'Data Enrichment', description: 'Contact info' },
    { icon: Repeat, label: 'Re-engagement', description: 'Win-back' },
    { icon: TrendingUp, label: 'Analytics', description: 'Performance' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0e27]">
      <style>{`
        .ai-text-primary {
          color: #0f172a;
        }
        .dark .ai-text-primary {
          color: #ffffff;
        }
        .ai-text-secondary {
          color: #64748b;
        }
        .dark .ai-text-secondary {
          color: #94a3b8;
        }
        .ai-text-purple {
          color: #8b5cf6;
        }
        .ai-text-gradient {
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ai-text-cyan {
          color: #06b6d4;
        }
        .ai-bg-card {
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
        }
        .dark .ai-bg-card {
          background-color: #1e2849;
          border: 1px solid #334155;
        }
        .ai-bg-purple {
          background-color: #8b5cf6;
        }
        .ai-bg-purple:hover {
          background-color: #7c3aed;
        }
        .ai-border {
          border-color: #cbd5e1;
        }
        .dark .ai-border {
          border-color: #334155;
        }
        .ai-dashboard-bg {
          background: linear-gradient(135deg, #ede9fe 0%, #dbeafe 100%);
          border: 1px solid #cbd5e1;
        }
        .dark .ai-dashboard-bg {
          background: linear-gradient(135deg, #2a2f4f 0%, #1a3a52 50%, #1f2937 100%);
          border: 1px solid #334155;
        }
        .ai-glow {
          background: rgba(139, 92, 246, 0.05);
        }
        .dark .ai-glow {
          background: rgba(139, 92, 246, 0.1);
        }
        .ai-gradient-icon {
          background: linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%);
        }
        .ai-gradient-badge {
          background: linear-gradient(90deg, #06b6d4 0%, #0891b2 100%);
        }
        .ai-gradient-wave {
          background: linear-gradient(to top, #8b5cf6 0%, #06b6d4 50%, #0891b2 100%);
        }
        .ai-gradient-feature {
          background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
        }
        .ai-stat-card {
          background-color: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(71, 85, 105, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .dark .ai-stat-card {
          background-color: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(71, 85, 105, 0.4);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }
        @keyframes waveFlow {
          0%, 100% {
            transform: scaleY(0.3);
            opacity: 0.5;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="lg:text-6xl mb-6 leading-tight ai-text-primary font-bold text-[64px]">
                An AI Voice Receptionist{' '}
                <span className="ai-text-gradient font-bold">that never misses a call</span>
              </h1>
              
              <p className="text-lg mb-8 leading-relaxed ai-text-secondary">
                Answer, route, and book 24/7 in any language—so customers get help instantly and your team stays focused.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={scrollToCalendly}
                  className="ai-bg-purple text-white px-8 py-6 text-lg transition-all"
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  className="ai-border ai-text-primary px-8 py-6 text-lg"
                >
                  See It In Action
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { icon: Clock, label: "24/7 coverage" },
                  { icon: Globe, label: "Multilingual" },
                  { icon: Calendar, label: "Smart bookings" },
                  { icon: Phone, label: "CRM ready" },
                  { icon: Shield, label: "Secure by design" }
                ].map((item, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="px-3 py-2 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ai-text-primary border-0"
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    <span className="text-xs">{item.label}</span>
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Right Dashboard Mockup */}
            <div className="relative">
              <div className="relative ai-dashboard-bg rounded-3xl p-8 overflow-hidden">
                {/* Background gradient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 ai-glow rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 ai-glow rounded-full blur-3xl" />
                
                <div className="relative space-y-8">
                  {/* Calls Handled - Top Right */}
                  <div className="flex justify-end">
                    <div className="ai-stat-card rounded-2xl px-6 py-5 text-right">
                      <p className="text-sm mb-1 ai-text-secondary">Calls Handled</p>
                      <p className="text-4xl ai-text-purple">2,847</p>
                    </div>
                  </div>
                  
                  {/* Center Phone Icon */}
                  <div className="flex justify-center pt-4">
                    <div className="w-24 h-24 ai-gradient-icon rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Phone className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Incoming Call Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-2xl ai-text-primary">Incoming Call</h3>
                    <p className="text-xl ai-text-secondary">Sarah Johnson</p>
                    <div className="flex justify-center">
                      <div className="ai-gradient-badge px-6 py-2 rounded-full text-sm text-white">
                        AI Answering...
                      </div>
                    </div>
                  </div>
                  
                  {/* Wave visualization - Animated */}
                  <div className="flex items-end justify-center gap-1 h-20 px-8">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 ai-gradient-wave rounded-full"
                        style={{
                          height: '100%',
                          animation: `waveFlow 1.2s ease-in-out infinite`,
                          animationDelay: `${i * 0.05}s`,
                          transformOrigin: 'bottom',
                          maxWidth: '6px'
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Bookings - Bottom Left */}
                  <div className="flex justify-start">
                    <div className="ai-stat-card rounded-2xl px-6 py-5">
                      <p className="text-sm mb-1 ai-text-secondary">Bookings</p>
                      <p className="text-3xl ai-text-cyan">+27%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 ai-text-primary font-bold text-[64px]">
              Everything you need to{' '}
              <span className="ai-text-gradient">delight callers</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto ai-text-secondary">
              Powerful features that work together to transform your phone system into a 24/7 revenue engine.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="ai-bg-card rounded-xl p-6 transition-all duration-300">
              <div className="w-12 h-12 ai-gradient-feature rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 ai-text-primary">Always-On Answering</h3>
              <p className="mb-4 ai-text-secondary">
                Every call gets a fast, friendly response—no voicemail, no missed leads.
              </p>
              <a href="#" className="inline-flex items-center gap-2 ai-text-purple">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 2 */}
            <div className="ai-bg-card rounded-xl p-6 transition-all duration-300">
              <div className="w-12 h-12 ai-gradient-feature rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 ai-text-primary">Smart Routing & Replies</h3>
              <p className="mb-4 ai-text-secondary">
                Identify caller needs for fast SMS, email, or book-in real time with calendar sync.
              </p>
              <a href="#" className="inline-flex items-center gap-2 ai-text-purple">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 3 */}
            <div className="ai-bg-card rounded-xl p-6 transition-all duration-300">
              <div className="w-12 h-12 ai-gradient-feature rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 ai-text-primary">100+ languages supported</h3>
              <p className="mb-4 ai-text-secondary">
                Route customers to third-party agents with natural sounding voices.
              </p>
              <a href="#" className="inline-flex items-center gap-2 ai-text-purple">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 4 */}
            <div className="ai-bg-card rounded-xl p-6 transition-all duration-300">
              <div className="w-12 h-12 ai-gradient-feature rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 ai-text-primary">Knowledge-Backed Replies</h3>
              <p className="mb-4 ai-text-secondary">
                Upload FAQs, policies, and pricing to deliver consistent, accurate answers.
              </p>
              <a href="#" className="inline-flex items-center gap-2 ai-text-purple">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 5 */}
            <div className="ai-bg-card rounded-xl p-6 transition-all duration-300">
              <div className="w-12 h-12 ai-gradient-feature rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 ai-text-primary">CRM & Apps Sync</h3>
              <p className="mb-4 ai-text-secondary">
                Create leads, attach call notes, and send transcripts to Salesforce/HubSpot.
              </p>
              <a href="#" className="inline-flex items-center gap-2 ai-text-purple">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Feature Card 6 */}
            <div className="ai-bg-card rounded-xl p-6 transition-all duration-300">
              <div className="w-12 h-12 ai-gradient-feature rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl mb-2 ai-text-primary">Insights that Matter</h3>
              <p className="mb-4 ai-text-secondary">
                Track volume, conversion, CSAT, and missed-call recovery in one dashboard.
              </p>
              <a href="#" className="inline-flex items-center gap-2 ai-text-purple">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4 ai-text-primary">
              Up and running in{' '}
              <span className="ai-text-gradient">under 10 minutes</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto ai-text-secondary">
              No complex setup, no coding required. Just connect, configure, and go live.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 ai-gradient-feature rounded-lg flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 ai-text-primary">Step 1</h3>
                <h4 className="text-2xl mb-2 ai-text-primary">Connect your number and calendars</h4>
                <p className="ai-text-secondary">
                  Link your phone system and scheduling tools in minutes.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 ai-gradient-feature rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 ai-text-primary">Step 2</h3>
                <h4 className="text-2xl mb-2 ai-text-primary">Add Fobo's guardrails</h4>
                <p className="ai-text-secondary">
                  Upload your knowledge base or paste your site link for instant training.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 ai-gradient-feature rounded-lg flex items-center justify-center flex-shrink-0">
                <Power className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 ai-text-primary">Step 3</h3>
                <h4 className="text-2xl mb-2 ai-text-primary">Flip the switch to go live 24/7</h4>
                <p className="ai-text-secondary">
                  Your AI receptionist starts answering calls immediately.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 ai-gradient-feature rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2 ai-text-primary">Step 4</h3>
                <h4 className="text-2xl mb-2 ai-text-primary">Track bookings, transcripts, and outcomes</h4>
                <p className="ai-text-secondary">
                  Monitor performance and optimize with real-time insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section id="pipeline" className="py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight ai-text-primary">
              From first ring to{" "}
              <span className="ai-text-gradient">
                repeat customer
              </span>
            </h2>
            <p className="text-lg ai-text-secondary max-w-2xl mx-auto">
              Fully automated pipeline powered by VibeSet—every call becomes an opportunity for growth.
            </p>
          </div>

          {/* Desktop Pipeline Diagram */}
          <div className="hidden lg:block">
            <div className="relative bg-gradient-to-br from-gray-100/50 to-transparent dark:from-gray-900/30 rounded-3xl p-12 border ai-border">
              {/* Main Flow */}
              <div className="flex items-center gap-8 mb-16">
                {/* Inbound Call */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-[#8b5cf6] to-[#6D28D9] border-0 shadow-xl min-w-[180px]">
                    <div className="flex flex-col items-center gap-3 text-white">
                      <Phone className="h-8 w-8" />
                      <span className="font-semibold text-center">Inbound Call</span>
                    </div>
                  </Card>
                </motion.div>

                {/* Arrow */}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] relative">
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#06b6d4] rounded-full"
                    animate={{ x: [0, 30, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Speech-to-Intent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-[#8b5cf6] to-[#2563EB] border-0 shadow-xl min-w-[180px]">
                    <div className="flex flex-col items-center gap-3 text-white">
                      <Mic className="h-8 w-8" />
                      <span className="font-semibold text-center">Speech-to-Intent</span>
                    </div>
                  </Card>
                </motion.div>

                {/* Arrow to branches */}
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]" />
              </div>

              {/* Branch Nodes */}
              <div className="grid grid-cols-3 gap-6 mb-16">
                {branchNodes.map((node, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className={`p-6 bg-gradient-to-br ${node.color} border-0 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className="flex flex-col items-center gap-3 text-white">
                        <node.icon className="h-7 w-7" />
                        <span className="font-semibold text-center text-sm">{node.label}</span>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Sync Flow */}
              <div className="flex items-center gap-6 mb-16">
                {syncNodes.map((node, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex-1"
                  >
                    <Card className={`p-4 bg-gradient-to-br ${node.color} border-0 shadow-lg`}>
                      <div className="flex flex-col items-center gap-2 text-white">
                        <node.icon className="h-6 w-6" />
                        <span className="font-semibold text-center text-sm">{node.label}</span>
                        {node.badges && (
                          <div className="flex gap-1">
                            {node.badges.map((badge, i) => (
                              <span key={i} className="text-xs bg-white/20 px-2 py-0.5 rounded">
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* VibeSet Integration Rail */}
              <div className="relative border-t-2 border-dashed border-[#8b5cf6]/50 pt-12">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#8b5cf6] to-[#EC4899] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  VibeSet Automation Hooks
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {vibesetNodes.map((node, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    >
                      <Card className="p-4 ai-bg-card border-[#8b5cf6]/30 hover:border-[#8b5cf6] transition-colors h-full">
                        <div className="flex flex-col items-center gap-2 text-center">
                          <node.icon className="h-5 w-5 text-[#8b5cf6]" />
                          <span className="font-semibold text-xs ai-text-primary">{node.label}</span>
                          <span className="text-xs ai-text-secondary">{node.description}</span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Pipeline - Simplified Vertical Flow */}
          <div className="lg:hidden space-y-4">
            {[...mainNodes, ...branchNodes, ...syncNodes].map((node, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`p-4 bg-gradient-to-br ${node.color} border-0 shadow-lg`}>
                  <div className="flex items-center gap-3 text-white">
                    <node.icon className="h-6 w-6" />
                    <span className="font-semibold">{node.label}</span>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* VibeSet Section */}
            <div className="border-t-2 border-dashed border-[#8b5cf6]/50 pt-8 mt-8">
              <div className="text-center mb-4">
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#EC4899] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  VibeSet Automation
                </span>
              </div>
              <div className="space-y-3">
                {vibesetNodes.map((node, index) => (
                  <Card key={index} className="p-3 ai-bg-card border-[#8b5cf6]/30">
                    <div className="flex items-center gap-3">
                      <node.icon className="h-5 w-5 text-[#8b5cf6]" />
                      <div>
                        <div className="font-semibold text-sm ai-text-primary">{node.label}</div>
                        <div className="text-xs ai-text-secondary">{node.description}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-[#1a1f3a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl mb-6 ai-text-primary">
            Ready to never miss a call again?
          </h2>
          <p className="text-lg mb-8 ai-text-secondary">
            Join hundreds of businesses using AI to deliver exceptional customer service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToCalendly}
              className="ai-bg-purple text-white px-8 py-6 text-lg"
            >
              Start Free Trial
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                className="ai-border ai-text-primary px-8 py-6 text-lg"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
          
          <p className="text-sm mt-6 ai-text-secondary opacity-70">
            30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}