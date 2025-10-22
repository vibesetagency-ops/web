import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Automations', id: 'recipes' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? 'bg-[var(--surface)]/95 backdrop-blur-md shadow-sm border-b border-[var(--lines)]/50' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 flex items-center justify-center gradient-primary rounded-lg text-white font-bold text-sm">
                  VS
                </div>
                <div className="font-semibold text-xl text-[var(--text-primary)]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  VibeSet
                </div>
              </div>

            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]"
              >
                Contact
              </Button>
              <Button
                onClick={() => scrollToSection('calendly')}
                className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white transform hover:scale-105 transition-all duration-200"
              >
                Book free consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--surface)] border-t border-[var(--lines)] shadow-lg">
              <nav className="flex flex-col p-6 gap-4" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-[var(--lines)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--text-secondary)]">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('contact')}
                    className="border-[var(--lines)] text-[var(--text-primary)]"
                  >
                    Contact
                  </Button>
                  <Button
                    onClick={() => scrollToSection('calendly')}
                    className="bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white"
                  >
                    Book free consultation
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}