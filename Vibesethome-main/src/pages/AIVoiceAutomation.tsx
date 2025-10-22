import { SolutionTemplate } from './SolutionTemplate';
import { Phone, Mic, MessageSquare, Clock, Zap, BarChart } from 'lucide-react';

export function AIVoiceAutomation() {
  return (
    <SolutionTemplate
      title="AI Voice Automation"
      subtitle="Intelligent Call Handling"
      description="Deploy natural-sounding AI voice agents that handle inbound and outbound calls 24/7. From customer support to sales calls, our voice automation scales your operations without compromising quality."
      heroIcon={<Phone className="w-24 h-24" />}
      stats={[
        { value: '60%', label: 'Cost Reduction' },
        { value: '24/7', label: 'Availability' },
        { value: '3-5 Days', label: 'Setup Time' },
        { value: '92%', label: 'Customer Satisfaction' },
      ]}
      features={[
        {
          title: 'Natural Conversations',
          description: 'Voice agents that understand context, handle interruptions, and speak naturally',
          icon: <MessageSquare className="w-6 h-6" />,
        },
        {
          title: 'Inbound Call Handling',
          description: 'Automate customer support, appointment scheduling, and information requests',
          icon: <Phone className="w-6 h-6" />,
        },
        {
          title: 'Outbound Campaigns',
          description: 'Make hundreds of personalized sales or follow-up calls simultaneously',
          icon: <Zap className="w-6 h-6" />,
        },
        {
          title: 'Multi-Language Support',
          description: 'Serve customers in their preferred language with native-sounding voices',
          icon: <Mic className="w-6 h-6" />,
        },
        {
          title: '24/7 Availability',
          description: 'Never miss a call with AI agents available around the clock',
          icon: <Clock className="w-6 h-6" />,
        },
        {
          title: 'Call Analytics',
          description: 'Track call outcomes, sentiment, and conversation insights',
          icon: <BarChart className="w-6 h-6" />,
        },
      ]}
      howItWorks={[
        {
          title: 'Define Use Case',
          description: 'Tell us your call objectives and desired outcomes',
        },
        {
          title: 'Train Voice Agent',
          description: 'AI learns your scripts, FAQs, and conversation flows',
        },
        {
          title: 'Connect Phone System',
          description: 'Integrate with your existing phone infrastructure',
        },
        {
          title: 'Go Live',
          description: 'AI starts handling calls and routing when needed',
        },
      ]}
      useCases={[
        { title: 'Sales Teams', description: 'Qualify leads by phone' },
        { title: 'Support Centers', description: 'Handle common inquiries' },
        { title: 'Appointment Booking', description: 'Schedule automatically' },
        { title: 'Surveys', description: 'Conduct phone research' },
        { title: 'Reminders', description: 'Send appointment confirmations' },
      ]}
      integrations={[
        { 
          name: 'Twilio', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Phone className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'RingCentral', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Phone className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Aircall', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Mic className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Zendesk', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><MessageSquare className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'Salesforce', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><BarChart className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
        { 
          name: 'HubSpot', 
          logo: <div className="w-12 h-12 bg-[var(--accent-primary)]/10 rounded-lg flex items-center justify-center"><Zap className="w-6 h-6 text-[var(--accent-primary)]" /></div> 
        },
      ]}
      caseStudy={{
        company: 'HealthFirst Medical',
        result: 'Automated 75% of appointment scheduling calls',
        quote: 'Our staff was spending 20+ hours per week on scheduling calls. Now our AI voice agent handles most calls flawlessly, and our team focuses on patient care. Patient satisfaction has actually increased.',
        author: 'Dr. Amanda Foster',
        role: 'Practice Manager',
      }}
      faqs={[
        {
          question: 'How natural do the AI voices sound?',
          answer: 'Our AI uses state-of-the-art text-to-speech technology that produces natural, human-like voices with appropriate intonation, pacing, and emotion. Most callers cannot tell they are speaking with an AI.',
        },
        {
          question: 'Can the AI handle complex conversations?',
          answer: 'Yes! The AI understands context, can handle interruptions, answer follow-up questions, and navigate complex conversation flows. For situations beyond its capability, it smoothly transfers to a human.',
        },
        {
          question: 'What happens if the AI does not understand?',
          answer: 'The AI will politely ask for clarification. If it still cannot help, it can collect information and schedule a callback or transfer to a live agent based on your preferences.',
        },
        {
          question: 'Can I customize the voice and script?',
          answer: 'Absolutely! You can choose from multiple voices, adjust speaking speed, customize scripts, and define conversation flows to match your brand.',
        },
        {
          question: 'How do you ensure call quality?',
          answer: 'All calls are recorded and analyzed for quality. You can review conversations, provide feedback, and the AI continuously learns to improve its performance.',
        },
        {
          question: 'Is it compliant with regulations?',
          answer: 'Yes, our platform is TCPA compliant and includes features for consent management, do-not-call list handling, and recording disclosures as required by law.',
        },
        {
          question: 'What is the capacity for concurrent calls?',
          answer: 'The AI can handle unlimited concurrent calls, making it perfect for high-volume scenarios like flash sales, emergency notifications, or large outbound campaigns.',
        },
      ]}
    />
  );
}
