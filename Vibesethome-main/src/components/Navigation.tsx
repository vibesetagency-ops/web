import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const solutionItems = [
    { label: 'AI Receptionist', path: '/solutions/ai-receptionist', isExternal: false },
    { label: 'Lead Generation', path: '/solutions/lead-generation', isExternal: false },
    { label: 'Content Writing', path: '/solutions/content-writing', isExternal: false },
    { label: 'Email Outreach', path: '/solutions/email-outreach', isExternal: false },
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
            <Link to="/" className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className="font-semibold text-2xl text-[var(--text-primary)] drop-shadow-sm" style={{ fontFamily: 'Sora, sans-serif' }}>
                  VibeSet
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              <Link
                to="/"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                Home
              </Link>
              
              {/* Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200">
                  Solutions
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {solutionItems.map((item) => (
                    <DropdownMenuItem key={item.path} asChild>
                      {item.isExternal ? (
                        <a 
                          href={item.path}
                          className="cursor-pointer"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link 
                          to={item.path}
                          className="cursor-pointer"
                        >
                          {item.label}
                        </Link>
                      )}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem asChild>
                    <Link 
                      to="/solutions"
                      className="cursor-pointer border-t border-[var(--lines)] mt-1 pt-2"
                    >
                      View All Solutions
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/pricing"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link
                to="/case-studies"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                Case Studies
              </Link>
              <Link
                to="/about"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)]"
                >
                  Get a Demo
                </Button>
              </Link>
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
                <Link
                  to="/"
                  className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 py-2"
                >
                  Home
                </Link>
                
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[var(--text-secondary)] px-3 py-1">Solutions</span>
                  {solutionItems.map((item) => (
                    item.isExternal ? (
                      <a
                        key={item.path}
                        href={item.path}
                        className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 py-2 px-6"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 py-2 px-6"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}
                  <Link
                    to="/solutions"
                    className="text-left text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors duration-200 py-2 px-6 border-t border-[var(--lines)] mt-1 pt-3"
                  >
                    View All Solutions
                  </Link>
                </div>
                <Link
                  to="/pricing"
                  className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 py-2"
                >
                  Pricing
                </Link>
                <Link
                  to="/case-studies"
                  className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 py-2"
                >
                  Case Studies
                </Link>
                <Link
                  to="/about"
                  className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 py-2"
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 py-2"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="text-left text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 py-2"
                >
                  Contact
                </Link>
                <div className="flex flex-col gap-3 pt-4 border-t border-[var(--lines)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--text-secondary)]">Theme</span>
                    <ThemeToggle />
                  </div>
                  <Link to="/contact">
                    <Button
                      className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/90 text-white"
                    >
                      Get a Demo
                    </Button>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}