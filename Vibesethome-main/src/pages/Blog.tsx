import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Blog() {
  const posts = [
    {
      title: '10 Ways AI is Transforming B2B Lead Generation in 2025',
      excerpt: 'Discover how leading companies are using AI to 5x their qualified lead pipeline while reducing costs.',
      category: 'Lead Generation',
      author: 'Sarah Chen',
      date: 'Oct 15, 2025',
      readTime: '5 min read',
      image: '📊',
    },
    {
      title: 'The Complete Guide to AI-Powered Content Marketing',
      excerpt: 'Learn how to scale your content production 10x without sacrificing quality or brand voice.',
      category: 'Content Marketing',
      author: 'Jessica Park',
      date: 'Oct 12, 2025',
      readTime: '8 min read',
      image: '✍️',
    },
    {
      title: 'Email Personalization at Scale: Best Practices for 2025',
      excerpt: 'Stop sending generic emails. Here\'s how to personalize every message using AI.',
      category: 'Email Marketing',
      author: 'David Rodriguez',
      date: 'Oct 10, 2025',
      readTime: '6 min read',
      image: '📧',
    },
    {
      title: 'AI Voice Agents: The Future of Customer Service',
      excerpt: 'How AI voice automation is revolutionizing customer support and sales calls.',
      category: 'AI Technology',
      author: 'Michael Foster',
      date: 'Oct 8, 2025',
      readTime: '7 min read',
      image: '🎙️',
    },
    {
      title: 'Case Study: How TechVentures Scaled to 200+ Leads Daily',
      excerpt: 'Inside look at how one company transformed their entire sales pipeline with AI.',
      category: 'Case Study',
      author: 'Sarah Chen',
      date: 'Oct 5, 2025',
      readTime: '4 min read',
      image: '📈',
    },
    {
      title: 'Building a Content Engine: From 8 to 80 Articles per Month',
      excerpt: 'The exact framework one agency used to 10x their content output.',
      category: 'Content Marketing',
      author: 'Jessica Park',
      date: 'Oct 3, 2025',
      readTime: '9 min read',
      image: '🚀',
    },
    {
      title: 'The ROI of AI Automation: What to Expect in Your First 90 Days',
      excerpt: 'Real numbers and realistic expectations for implementing AI in your business.',
      category: 'Strategy',
      author: 'David Rodriguez',
      date: 'Sep 28, 2025',
      readTime: '6 min read',
      image: '💰',
    },
    {
      title: 'Integrating AI Agents into Your Existing Tech Stack',
      excerpt: 'A technical guide to seamlessly connecting AI automation with your current tools.',
      category: 'Technical',
      author: 'Michael Foster',
      date: 'Sep 25, 2025',
      readTime: '10 min read',
      image: '⚙️',
    },
  ];

  const categories = ['All Posts', 'Lead Generation', 'Content Marketing', 'Email Marketing', 'AI Technology', 'Case Study', 'Strategy'];

  return (
    <main id="main-content" className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-[var(--canvas)] to-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--lines)] mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            <span className="text-sm text-[var(--text-secondary)]">VibeSet Blog</span>
          </div>
          <h1 className="mb-6">Insights & Resources</h1>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Expert guides, case studies, and best practices for getting the most out of AI automation
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--lines)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[var(--surface)] to-[var(--canvas)] border border-[var(--lines)] rounded-2xl p-12 card-lift">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm mb-4">
                  Featured
                </div>
                <h2 className="mb-4">{posts[0].title}</h2>
                <p className="text-[var(--text-secondary)] mb-6">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {posts[0].readTime}
                  </div>
                </div>
                <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-xl p-24 flex items-center justify-center text-8xl">
                {posts[0].image}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-[var(--canvas)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <div
                key={index}
                className="bg-[var(--surface)] border border-[var(--lines)] rounded-xl overflow-hidden card-lift group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] h-48 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs">
                      {post.category}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)]">{post.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-lg group-hover:text-[var(--accent-primary)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="text-[var(--text-primary)]">{post.author}</p>
                      <p className="text-xs text-[var(--text-secondary)]">{post.date}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[var(--accent-primary)] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-4">Stay Updated</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Get the latest insights on AI automation delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-[var(--canvas)] border border-[var(--lines)] focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)]"
            />
            <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
