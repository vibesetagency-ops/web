import { SolutionTemplate } from './SolutionTemplate';
import { Mail, Send, Target, TrendingUp, Zap, BarChart2 } from 'lucide-react';

export function EmailOutreach() {
  return (
    <SolutionTemplate
      title="AI Email Outreach Platform"
      subtitle="Personalized at Scale"
      description="Transform your email campaigns with AI-powered personalization. Our intelligent outreach agent crafts tailored messages, optimizes send times, and follows up automatically to maximize response rates and conversions."
      heroIcon={<Mail className="w-24 h-24" />}
      stats={[
        { value: '4x', label: 'Higher Response Rate' },
        { value: '85%', label: 'Time Saved' },
        { value: '2-4 Days', label: 'Setup Time' },
        { value: '99%', label: 'Deliverability' },
      ]}
      features={[
        {
          title: 'Hyper-Personalization',
          description: 'AI analyzes each prospect to create truly personalized messages that feel hand-written',
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: 'Smart Sequencing',
          description: 'Automatically create and execute multi-touch email sequences with intelligent timing',
          icon: <Send className="w-6 h-6" />,
        },
        {
          title: 'A/B Testing',
          description: 'Continuously test subject lines, copy, and CTAs to optimize campaign performance',
          icon: <TrendingUp className="w-6 h-6" />,
        },
        {
          title: 'Auto Follow-ups',
          description: 'Intelligent follow-up sequences that adapt based on recipient behavior',
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: 'Deliverability Optimization',
          description: 'AI ensures emails land in inbox with spam score checking and reputation management',
          icon: <Mail className="w-6 h-6" />,
        },
        {
          title: 'Performance Analytics',
          description: 'Track opens, clicks, replies, and conversions with detailed campaign insights',
          icon: <BarChart2 className="w-6 h-6" />,
        },
      ]}
      howItWorks={[
        {
          title: 'Import Prospects',
          description: 'Upload your contact list or connect your CRM to import leads automatically',
        },
        {
          title: 'AI Personalization',
          description: 'The AI researches each prospect and crafts personalized messages',
        },
        {
          title: 'Send & Optimize',
          description: 'Emails are sent at optimal times with continuous A/B testing',
        },
        {
          title: 'Smart Follow-ups',
          description: 'Automated sequences adapt based on opens, clicks, and replies',
        },
      ]}
      useCases={[
        { title: 'Sales Teams', description: 'Book more meetings' },
        { title: 'Recruiters', description: 'Engage passive candidates' },
        { title: 'PR Agencies', description: 'Pitch media contacts' },
        { title: 'Fundraising', description: 'Connect with investors' },
        { title: 'Partnerships', description: 'Build business relationships' },
      ]}
      integrations={[
        { 
          name: 'Gmail', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Mail className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Outlook', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Mail className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Salesforce', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Target className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'HubSpot', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Send className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Lemlist', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Reply.io', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Send className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
      ]}
      caseStudy={{
        company: 'CloudScale Solutions',
        result: '312% increase in email response rates in 90 days',
        quote: 'Our cold email campaigns went from a 2% response rate to consistently achieving 8-12% with VibeSet. The AI personalization is indistinguishable from hand-written emails.',
        author: 'David Park',
        role: 'Head of Sales Development',
      }}
      faqs={[
        {
          question: 'How does the AI personalize each email?',
          answer: 'The AI researches each prospect using publicly available data, analyzes their company, role, recent activity, and pain points, then crafts unique messaging that resonates with their specific situation.',
        },
        {
          question: 'Will my emails go to spam?',
          answer: 'Our platform includes advanced deliverability tools including spam score checking, domain warming, and reputation monitoring to ensure your emails land in the inbox.',
        },
        {
          question: 'Can I use my own email address?',
          answer: 'Yes! You can connect your existing Gmail, Outlook, or any SMTP email address. We recommend using dedicated sending domains for best results.',
        },
        {
          question: 'How many emails can I send per day?',
          answer: 'We recommend 50-200 emails per day per sending account for optimal deliverability. You can connect multiple email addresses to scale your outreach.',
        },
        {
          question: 'Does it handle replies automatically?',
          answer: 'The AI can detect and categorize replies (interested, not interested, out of office, etc.) and can automatically respond to simple queries or flag important replies for your review.',
        },
        {
          question: 'Can I customize the email sequences?',
          answer: 'Absolutely! You have full control over the number of touches, timing, message content, and follow-up logic. Or use our proven templates to get started quickly.',
        },
        {
          question: 'What kind of results can I expect?',
          answer: 'Most clients see 3-5x improvement in response rates within the first month. Typical campaigns achieve 8-15% reply rates compared to industry average of 2-3%.',
        },
      ]}
    />
  );
}
