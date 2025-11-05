import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { HoverButton } from './ui/hover-button';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export function FloatingConsultationButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you schedule a free consultation with our team. What's your name?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [conversationStep, setConversationStep] = useState<
    'name' | 'email' | 'company' | 'challenge' | 'timeframe' | 'complete'
  >('name');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    timeframe: '',
  });

  const botResponses = {
    name: "Nice to meet you, {name}! What's the best email to reach you at?",
    email: "Great! And what company do you work for?",
    company: "Thanks! What's the main challenge you're looking to solve with AI automation?",
    challenge: "I understand. When are you looking to get started? (e.g., This week, This month, Just exploring)",
    timeframe: "Perfect! I've got all the information. Our team will reach out to {email} within 24 hours to schedule your free consultation. We'll discuss how VibeSet can help {company} with {challenge}. Looking forward to connecting with you, {name}!",
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Update user data based on current step
    const newUserData = { ...userData };
    switch (conversationStep) {
      case 'name':
        newUserData.name = inputValue;
        setUserData(newUserData);
        break;
      case 'email':
        newUserData.email = inputValue;
        setUserData(newUserData);
        break;
      case 'company':
        newUserData.company = inputValue;
        setUserData(newUserData);
        break;
      case 'challenge':
        newUserData.challenge = inputValue;
        setUserData(newUserData);
        break;
      case 'timeframe':
        newUserData.timeframe = inputValue;
        setUserData(newUserData);
        break;
    }

    setInputValue('');

    // Generate bot response after a short delay
    setTimeout(() => {
      let botText = '';
      let nextStep: typeof conversationStep = conversationStep;

      switch (conversationStep) {
        case 'name':
          botText = botResponses.name.replace('{name}', inputValue);
          nextStep = 'email';
          break;
        case 'email':
          botText = botResponses.email;
          nextStep = 'company';
          break;
        case 'company':
          botText = botResponses.company;
          nextStep = 'challenge';
          break;
        case 'challenge':
          botText = botResponses.challenge;
          nextStep = 'timeframe';
          break;
        case 'timeframe':
          botText = botResponses.timeframe
            .replace('{email}', newUserData.email)
            .replace('{company}', newUserData.company)
            .replace('{challenge}', newUserData.challenge)
            .replace('{name}', newUserData.name);
          nextStep = 'complete';
          break;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setConversationStep(nextStep);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        text: "Hi! I'm here to help you schedule a free consultation with our team. What's your name?",
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
    setConversationStep('name');
    setUserData({
      name: '',
      email: '',
      company: '',
      challenge: '',
      timeframe: '',
    });
    setInputValue('');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <HoverButton
          onClick={() => setIsOpen(true)}
          aria-label="Schedule Free Consultation"
          className="flex items-center gap-3 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="whitespace-nowrap">Schedule Free Consultation!</span>
        </HoverButton>
      </div>

      {/* Chatbot Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[600px] flex flex-col p-0 !translate-x-0 !translate-y-0 !top-auto !left-auto bottom-6 right-6 data-[state=open]:slide-in-from-bottom-4 data-[state=open]:slide-in-from-right-4">
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-[var(--lines)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <DialogTitle>VibeSet AI Assistant</DialogTitle>
                  <DialogDescription>
                    Schedule your free consultation
                  </DialogDescription>
                </div>
              </div>
              {conversationStep === 'complete' && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetChat}
                  className="text-xs"
                >
                  Start Over
                </Button>
              )}
            </div>
          </DialogHeader>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-[var(--accent-primary)] text-white'
                      : 'bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--lines)]'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          {conversationStep !== 'complete' && (
            <div className="px-6 py-4 border-t border-[var(--lines)]">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your response..."
                  className="flex-1"
                  autoFocus
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}