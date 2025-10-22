import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Users, Headphones, Settings, DollarSign, Mail } from 'lucide-react';

const useCases = {
  sales: {
    icon: <Users className="w-5 h-5" />,
    cases: [
      {
        title: "Lead Qualification",
        description: "Auto-score and route high-value leads to the right sales rep",
        outcome: "40% faster response times"
      },
      {
        title: "Quote Generation",
        description: "Generate personalized proposals from CRM data and pricing rules",
        outcome: "60% reduction in quote turnaround"
      },
      {
        title: "Follow-up Automation",
        description: "Nurture prospects with personalized sequences based on engagement",
        outcome: "25% increase in conversion rates"
      },
      {
        title: "Deal Intelligence",
        description: "Surface insights and next-best-actions for each opportunity",
        outcome: "15% larger average deal size"
      }
    ]
  },
  support: {
    icon: <Headphones className="w-5 h-5" />,
    cases: [
      {
        title: "Ticket Routing",
        description: "Intelligently categorize and route tickets to the right specialist",
        outcome: "50% faster resolution times"
      },
      {
        title: "Knowledge Base",
        description: "Auto-generate responses from your documentation and past tickets", 
        outcome: "70% of tickets auto-resolved"
      },
      {
        title: "Escalation Management",
        description: "Automatically escalate urgent issues and notify stakeholders",
        outcome: "90% SLA compliance"
      },
      {
        title: "Customer Health",
        description: "Monitor support patterns to identify at-risk accounts",
        outcome: "30% reduction in churn"
      }
    ]
  },
  ops: {
    icon: <Settings className="w-5 h-5" />,
    cases: [
      {
        title: "Data Integration",
        description: "Sync data between systems and maintain single source of truth",
        outcome: "95% data accuracy"
      },
      {
        title: "Process Monitoring", 
        description: "Track KPIs and alert teams when metrics go off-target",
        outcome: "80% faster issue detection"
      },
      {
        title: "Report Generation",
        description: "Auto-generate and distribute performance reports to stakeholders",
        outcome: "10 hours saved per week"
      },
      {
        title: "Compliance Tracking",
        description: "Monitor and document compliance activities across departments",
        outcome: "100% audit readiness"
      }
    ]
  },
  finance: {
    icon: <DollarSign className="w-5 h-5" />,
    cases: [
      {
        title: "Invoice Processing",
        description: "Extract data from invoices and route for approval automatically",
        outcome: "5x faster processing"
      },
      {
        title: "Expense Management",
        description: "Categorize expenses and flag policy violations automatically",
        outcome: "90% reduction in manual review"
      },
      {
        title: "Cash Flow Forecasting",
        description: "Generate weekly cash flow predictions based on AR/AP data",
        outcome: "Improved planning accuracy"
      },
      {
        title: "Financial Reporting",
        description: "Auto-generate monthly reports with variance analysis",
        outcome: "3 days faster month-end close"
      }
    ]
  },
  marketing: {
    icon: <Mail className="w-5 h-5" />,
    cases: [
      {
        title: "Content Creation",
        description: "Generate social posts, blogs, and email campaigns from prompts",
        outcome: "3x more content output"
      },
      {
        title: "Campaign Optimization",
        description: "A/B test and optimize campaigns based on performance data",
        outcome: "40% better conversion rates"
      },
      {
        title: "Lead Nurturing",
        description: "Personalize email sequences based on user behavior and interests",
        outcome: "65% higher engagement"
      },
      {
        title: "Social Listening",
        description: "Monitor mentions and automatically respond to customer inquiries",
        outcome: "24/7 brand monitoring"
      }
    ]
  }
};

export function UseCasesTabs() {
  const [activeTab, setActiveTab] = useState('sales');

  return (
    <></>
  );
}