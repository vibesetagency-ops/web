import { Card, CardContent } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const automations = [
  {
    icon: "🔎",
    title: "Lead Generation",
    hook: "Fill your pipeline—without busywork",
    bullets: [
      "Capture from forms, chat, and calls",
      "Enrich + score leads, route instantly",
      "Block duplicates & spam, log to CRM"
    ],
    cta: "See playbook →",
    href: "/playbooks/lead-generation"
  },
  {
    icon: "✉️",
    title: "Email Outreach",
    hook: "1:1 at scale—without sounding robotic",
    bullets: [
      "AI-personalized sequences + warm follow-ups",
      "Best-time send, deliverability guardrails",
      "Reply parsing: interested / not now / unsubscribe"
    ],
    cta: "See playbook →",
    href: "/playbooks/email-outreach"
  },
  {
    icon: "📞",
    title: "AI Receptionist",
    hook: "Never miss a call or chat again",
    bullets: [
      "24/7 phone & web chat; books meetings",
      "Qualifies, creates tickets, updates CRM",
      "Live handoff + full transcript"
    ],
    cta: "See recipe →",
    href: "/recipes/ai-receptionist"
  },
  {
    icon: "🤝",
    title: "AI Sales Rep",
    hook: "Qualify fast, advance deals faster",
    bullets: [
      "Discovery, objection handling, next-step nudges",
      "Calendar, proposal, and payment links",
      "Pipeline notes + alerts to Slack/Email"
    ],
    cta: "See flow →",
    href: "/flows/ai-sales-rep"
  },
  {
    icon: "📝",
    title: "AI Content Writer",
    hook: "On-brand content in minutes",
    bullets: [
      "Posts, captions, blogs, ad variants",
      "SEO briefs + repurpose long-form to shorts",
      "Human approvals + brand guardrails"
    ],
    cta: "See templates →",
    href: "/templates/content-writer"
  },
  {
    icon: "⚡",
    title: "Marketing Automation",
    hook: "From publish to performance",
    bullets: [
      "Auto-schedule per channel, per audience",
      "Always-on A/B tests; boost winners",
      "Cross-channel analytics in one view"
    ],
    cta: "See dashboard →",
    href: "/dashboards/marketing-automation"
  }
];

export function FeatureCards() {
  return null;
}