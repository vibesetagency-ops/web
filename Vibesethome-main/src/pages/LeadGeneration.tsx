import { SolutionTemplate } from './SolutionTemplate';
import { TrendingUp, Search, Target, Zap, Database, BarChart, Filter, Users } from 'lucide-react';

export function LeadGeneration() {
  return (
    <SolutionTemplate
      title="AI-Powered Lead Generation"
      subtitle="Automated Prospect Discovery"
      description="Stop manually searching for leads. Our AI agent continuously discovers, qualifies, and enriches prospects that match your ideal customer profile, filling your pipeline with ready-to-convert opportunities."
      heroIcon={<TrendingUp className="w-24 h-24" />}
      stats={[
        { value: '5x', label: 'More Qualified Leads' },
        { value: '80%', label: 'Time Saved' },
        { value: '2-3 Days', label: 'Setup Time' },
        { value: '95%', label: 'Accuracy Rate' },
      ]}
      features={[
        {
          title: 'Smart Prospect Discovery',
          description: 'AI searches multiple data sources to find companies and contacts that match your ideal customer profile',
          icon: <Search className="w-6 h-6" />,
        },
        {
          title: 'Automated Qualification',
          description: 'Instantly score and prioritize leads based on fit, intent signals, and buying potential',
          icon: <Target className="w-6 h-6" />,
        },
        {
          title: 'Real-time Enrichment',
          description: 'Automatically gather contact details, company info, and technographic data for each lead',
          icon: <Database className="w-6 h-6" />,
        },
        {
          title: 'CRM Integration',
          description: 'Seamlessly push qualified leads directly into your CRM with all enriched data',
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: 'Advanced Filtering',
          description: 'Define custom criteria including company size, industry, technology stack, and more',
          icon: <Filter className="w-6 h-6" />,
        },
        {
          title: 'Performance Analytics',
          description: 'Track lead quality, conversion rates, and ROI with detailed analytics dashboards',
          icon: <BarChart className="w-6 h-6" />,
        },
      ]}
      howItWorks={[
        {
          title: 'Define Your ICP',
          description: 'Tell us about your ideal customer using natural language or import from your CRM',
        },
        {
          title: 'AI Discovers Leads',
          description: 'Our AI continuously searches and monitors for new prospects matching your criteria',
        },
        {
          title: 'Auto Qualification',
          description: 'Leads are scored, enriched, and prioritized based on buying signals',
        },
        {
          title: 'CRM Delivery',
          description: 'Qualified leads flow directly into your sales pipeline, ready for outreach',
        },
      ]}
      useCases={[
        { title: 'SaaS Sales', description: 'Find companies using competitor tools' },
        { title: 'B2B Services', description: 'Identify growing companies in your niche' },
        { title: 'Agencies', description: 'Discover businesses needing your services' },
        { title: 'Recruiting', description: 'Source qualified candidates automatically' },
        { title: 'Real Estate', description: 'Find property investors and buyers' },
      ]}
      integrations={[
        { 
          name: 'Salesforce', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Database className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'HubSpot', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Users className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'LinkedIn', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Users className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Apollo', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Target className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'ZoomInfo', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Database className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Pipedrive', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><BarChart className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
      ]}
      caseStudy={{
        company: 'TechVentures Inc',
        result: '450% increase in qualified leads within 60 days',
        quote: 'We went from manually researching 20 leads per week to automatically receiving 200+ qualified prospects daily. Our sales team can now focus entirely on closing deals.',
        author: 'Michael Rodriguez',
        role: 'VP of Sales',
      }}
      faqs={[
        {
          question: 'How does the AI find leads?',
          answer: 'Our AI agent uses advanced search algorithms across multiple data sources including public databases, social media, company websites, and business directories to identify prospects matching your ideal customer profile.',
        },
        {
          question: 'How accurate is the lead qualification?',
          answer: 'Our AI maintains a 95%+ accuracy rate by analyzing dozens of data points including firmographics, technographics, intent signals, and buying behavior patterns.',
        },
        {
          question: 'Can I customize the qualification criteria?',
          answer: 'Absolutely! You can define custom scoring rules based on company size, industry, technology stack, growth signals, job titles, and any other criteria important to your business.',
        },
        {
          question: 'How long does setup take?',
          answer: 'Most teams are up and running in 2-3 days. This includes defining your ICP, connecting integrations, and calibrating the AI to your specific needs.',
        },
        {
          question: 'What CRMs do you integrate with?',
          answer: 'We integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and many others. Custom integrations are also available.',
        },
        {
          question: 'Is there a limit on the number of leads?',
          answer: 'No artificial limits. Our pricing is based on your plan tier, and you can generate as many qualified leads as your ICP produces.',
        },
        {
          question: 'Do you provide contact information?',
          answer: 'Yes, our AI automatically enriches leads with verified email addresses, phone numbers, LinkedIn profiles, and other contact details.',
        },
      ]}
    />
  );
}
