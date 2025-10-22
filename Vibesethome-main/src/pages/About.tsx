import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Zap, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';

export function About() {
  const timeline = [
    { year: '2022', event: 'Founded', description: 'VibeSet was born from a vision to make AI accessible to every business' },
    { year: '2023', event: 'First Product Launch', description: 'Released our AI Lead Generation agent to early customers' },
    { year: '2023', event: '1,000 Customers', description: 'Reached our first thousand teams using VibeSet' },
    { year: '2024', event: 'Full Suite Launch', description: 'Expanded to complete AI agent suite with 4 specialized solutions' },
    { year: '2024', event: '10,000+ Teams', description: 'Scaled to serve over 10,000 businesses worldwide' },
    { year: '2025', event: 'Today', description: 'Continuing to innovate and expand our AI capabilities' },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Customer-First',
      description: 'Every decision we make starts with how it benefits our customers',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI technology',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Transparency',
      description: 'We believe in honest, clear communication with our customers and team',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'We work together with customers to build solutions that truly work',
    },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Co-Founder & CEO',
      bio: 'Former VP of Sales at leading SaaS company. Passionate about helping teams work smarter.',
    },
    {
      name: 'David Rodriguez',
      role: 'Co-Founder & CTO',
      bio: 'AI researcher with 10+ years experience building machine learning systems.',
    },
    {
      name: 'Jessica Park',
      role: 'Head of Product',
      bio: 'Product leader focused on creating intuitive AI solutions for everyday users.',
    },
    {
      name: 'Michael Foster',
      role: 'Head of Customer Success',
      bio: 'Dedicated to ensuring every customer achieves their goals with VibeSet.',
    },
  ];

  return (
    <main id="main-content" className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[var(--canvas)] to-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--lines)] mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="text-sm text-[var(--text-secondary)]">About VibeSet</span>
            </div>
            <h1 className="mb-6">Making AI Work for Everyone</h1>
            <p className="text-[var(--text-secondary)]">
              We're on a mission to democratize AI automation, helping teams of all sizes achieve more with intelligent agents that handle the repetitive work, so humans can focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                We believe that AI should empower people, not replace them. Our mission is to build intelligent automation that augments human capabilities, eliminates tedious tasks, and unlocks new levels of productivity.
              </p>
              <p className="text-[var(--text-secondary)] mb-6">
                Every day, talented people waste hours on repetitive work — manually finding leads, writing routine content, crafting emails, and handling phone calls. We're changing that by creating AI agents that handle these tasks with precision and scale, freeing teams to focus on strategy, creativity, and growth.
              </p>
              <p className="text-[var(--text-secondary)]">
                Since our founding in 2022, we've helped over 10,000 teams automate 15+ million tasks, saving countless hours and enabling businesses to achieve results they never thought possible.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl p-12 text-white">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl mb-2">10,000+</div>
                  <div className="text-white/80">Teams Served</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">15M+</div>
                  <div className="text-white/80">Tasks Automated</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">385%</div>
                  <div className="text-white/80">Avg ROI</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">98%</div>
                  <div className="text-white/80">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-[var(--accent-primary)]">
                    {value.icon}
                  </div>
                </div>
                <h4 className="mb-2">{value.title}</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From startup to serving thousands of teams worldwide
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white flex-shrink-0">
                    {item.year === 'Today' ? (
                      <Zap className="w-6 h-6" />
                    ) : (
                      <span className="text-sm">{item.year.slice(2)}</span>
                    )}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-[var(--lines)] mt-2" />
                  )}
                </div>
                <div className="pb-12">
                  <div className="text-sm text-[var(--text-secondary)] mb-1">{item.year}</div>
                  <h4 className="mb-2">{item.event}</h4>
                  <p className="text-[var(--text-secondary)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet the Team</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The people behind VibeSet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-[var(--canvas)] border border-[var(--lines)] rounded-xl p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="mb-1">{member.name}</h4>
                <p className="text-sm text-[var(--accent-primary)] mb-3">{member.role}</p>
                <p className="text-sm text-[var(--text-secondary)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-6">Join Our Journey</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            We're just getting started. Come build the future of work with us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]">
                Read Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
