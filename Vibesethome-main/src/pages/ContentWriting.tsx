import { SolutionTemplate } from './SolutionTemplate';
import { Edit3, Sparkles, BookOpen, FileText, Image, Calendar } from 'lucide-react';

export function ContentWriting() {
  return (
    <SolutionTemplate
      title="AI Content Writing Engine"
      subtitle="Scale Your Content Production"
      description="Create high-quality, on-brand content at scale. Our AI writing agent produces blog posts, social media content, email copy, and marketing materials that resonate with your audience and drive results."
      heroIcon={<Edit3 className="w-24 h-24" />}
      stats={[
        { value: '10x', label: 'Content Output' },
        { value: '70%', label: 'Time Savings' },
        { value: '1-2 Days', label: 'Setup Time' },
        { value: '98%', label: 'Brand Consistency' },
      ]}
      features={[
        {
          title: 'Blog Post Generation',
          description: 'Create SEO-optimized blog articles with proper structure, keywords, and engaging narratives',
          icon: <BookOpen className="w-6 h-6" />,
        },
        {
          title: 'Social Media Content',
          description: 'Generate platform-specific posts, captions, and threads that drive engagement',
          icon: <Sparkles className="w-6 h-6" />,
        },
        {
          title: 'Email Campaigns',
          description: 'Craft compelling email sequences, newsletters, and promotional content',
          icon: <FileText className="w-6 h-6" />,
        },
        {
          title: 'Brand Voice Training',
          description: 'Train the AI on your brand guidelines to ensure consistent tone and messaging',
          icon: <Edit3 className="w-6 h-6" />,
        },
        {
          title: 'Multi-Format Support',
          description: 'Create content for any channel: web, email, social, ads, and more',
          icon: <Image className="w-6 h-6" />,
        },
        {
          title: 'Content Calendar',
          description: 'Plan, schedule, and publish content automatically across all channels',
          icon: <Calendar className="w-6 h-6" />,
        },
      ]}
      howItWorks={[
        {
          title: 'Upload Brand Assets',
          description: 'Provide your brand guidelines, style examples, and voice preferences',
        },
        {
          title: 'Define Topics',
          description: 'Tell the AI what topics, keywords, or themes you want to cover',
        },
        {
          title: 'AI Creates Content',
          description: 'The AI generates original, on-brand content optimized for your goals',
        },
        {
          title: 'Review & Publish',
          description: 'Quickly review, edit if needed, and publish across your channels',
        },
      ]}
      useCases={[
        { title: 'Marketing Teams', description: 'Scale content production' },
        { title: 'Agencies', description: 'Serve more clients efficiently' },
        { title: 'E-commerce', description: 'Create product descriptions' },
        { title: 'Publishers', description: 'Increase article output' },
        { title: 'Social Media', description: 'Maintain posting consistency' },
      ]}
      integrations={[
        { 
          name: 'WordPress', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><BookOpen className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Medium', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><FileText className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'LinkedIn', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Sparkles className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Twitter', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Sparkles className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Mailchimp', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><FileText className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Shopify', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Image className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
      ]}
      caseStudy={{
        company: 'ContentFlow Marketing',
        result: 'Increased content output from 8 to 80+ pieces per month',
        quote: "We were struggling to keep up with content demands from our clients. VibeSet's AI writing agent has allowed us to 10x our output while maintaining quality and staying on brand.",
        author: 'Jessica Thompson',
        role: 'Content Director',
      }}
      faqs={[
        {
          question: 'How does the AI learn my brand voice?',
          answer: 'You provide examples of your best content, brand guidelines, and voice preferences. The AI analyzes these to understand your unique style, tone, and messaging patterns.',
        },
        {
          question: 'Can the AI write SEO-optimized content?',
          answer: 'Yes! The AI understands SEO best practices and can optimize content for target keywords, proper heading structure, meta descriptions, and readability.',
        },
        {
          question: 'Does it work for different content types?',
          answer: 'Absolutely. The AI can create blog posts, social media content, email campaigns, landing pages, product descriptions, ad copy, and more.',
        },
        {
          question: 'How do I ensure quality?',
          answer: 'All content goes through a review workflow where you can edit, approve, or request revisions. The AI learns from your feedback to improve over time.',
        },
        {
          question: 'Can I use it for multiple brands?',
          answer: 'Yes! You can create separate brand profiles, each with its own voice, style, and guidelines.',
        },
        {
          question: 'What languages are supported?',
          answer: 'The AI supports content creation in over 25 languages, with the ability to maintain brand voice across all of them.',
        },
        {
          question: 'Is the content plagiarism-free?',
          answer: 'Yes, all content is 100% original and created from scratch. We also provide plagiarism checking tools to verify uniqueness.',
        },
      ]}
    />
  );
}
