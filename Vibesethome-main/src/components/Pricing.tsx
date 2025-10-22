import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: '1–2 agents, integrations to existing tools, basic support',
    price: 'From $X/mo + setup',
    features: [
      '1-2 AI agents',
      'Basic integrations',
      'Email support',
      'Monthly reports',
      'Standard SLAs'
    ],
    popular: false
  },
  {
    name: 'Growth',
    description: '3–5 agents, custom workflows, priority support',
    price: 'From $Y/mo + setup',
    features: [
      '3-5 AI agents',
      'Custom workflows',
      'Priority support',
      'Weekly reports',
      'Advanced integrations',
      'Dedicated success manager'
    ],
    popular: true
  },
  {
    name: 'Scale',
    description: 'Multi-department, SSO/security reviews, SLAs',
    price: 'Custom',
    features: [
      'Unlimited agents',
      'Enterprise security',
      'SSO integration',
      'Custom SLAs',
      'White-glove onboarding',
      'Quarterly business reviews'
    ],
    popular: false
  }
];

export function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return null;
}