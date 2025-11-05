import { useState } from 'react';
import { Button } from './ui/button';
import AnimatedGradientBackground from './ui/animated-gradient-background';
import { useTheme } from './ThemeProvider';
import { Phone } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { LiquidButton } from './ui/liquid-glass-button';

export function Hero() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [showCallDialog, setShowCallDialog] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Theme-aware gradient colors
  const gradientColors = isDark 
    ? [
        "#0A0B0E",      // Dark canvas
        "#34447f",      // Navy blue (accent-primary in dark)
        "#d2c49c",      // Beige/gold (accent-secondary in dark)
        "#34447f",      // Navy blue
        "#1E293B",      // Lines color
        "#0A0B0E",      // Back to dark
        "#000000"       // Pure black
      ]
    : [
        "#FFFFFF",      // Light canvas
        "#d2c49c",      // Beige/gold (accent-secondary in light)
        "#34447f",      // Navy blue (accent-primary in light)
        "#94a3b8",      // Lighter blue
        "#E2E8F0",      // Lines color
        "#F8FAFC",      // Surface
        "#FFFFFF"       // White
      ];

  return (
    <section 
      id="main-content"
      className="relative min-h-screen overflow-visible flex items-center justify-center pb-16 md:pb-32 pt-20 md:pt-0"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground
        startingGap={120}
        Breathing={true}
        gradientColors={gradientColors}
        gradientStops={[20, 40, 55, 70, 80, 90, 100]}
        animationSpeed={0.015}
        breathingRange={8}
        topOffset={0}
        containerClassName="pointer-events-none"
      />

      {/* Smooth fade to canvas background at bottom */}
      <div 
        className="absolute inset-x-0 bottom-0 h-96 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, 
            transparent 0%, 
            rgba(${isDark ? '10, 11, 14' : '255, 255, 255'}, 0.3) 40%,
            rgba(${isDark ? '10, 11, 14' : '255, 255, 255'}, 0.7) 70%,
            var(--canvas) 100%)`
        }}
      />

      {/* Content - Centered */}
      <div className="relative z-10 w-full flex justify-center px-4 md:px-6">
        <div className="max-w-5xl w-full space-y-6 md:space-y-8">
          {/* Headline */}
          <div className="space-y-4 md:space-y-6 text-center">
            <h1 
              className="leading-tight mx-auto px-2"
              style={{
                fontSize: 'clamp(1.75rem, 8vw, 4.5rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}
            >
              Automate the busywork.{' '}
              <span className="gradient-text">Scale the work that wins.</span>
            </h1>
            
            <p 
              className="max-w-3xl mx-auto leading-relaxed px-2"
              style={{
                fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                color: 'var(--text-secondary)',
                fontWeight: 500
              }}
            >
              VibeSet designs, deploys, and maintains agent workflows across sales, marketing, support, ops, and finance—tailored to your stack.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 justify-center items-center w-full">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Button
                onClick={() => scrollToSection('calendly')}
                size="lg"
                className="gradient-primary text-white transform hover:scale-105 transition-all duration-200 px-8 shadow-lg w-full sm:w-auto"
              >
                Book a Build Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('recipes')}
                className="border-[var(--lines)] text-[var(--text-primary)] hover:bg-[var(--lines)] px-8 w-full sm:w-auto"
              >
                See Recipes
              </Button>
            </div>
            
            <LiquidButton
              onClick={() => setShowCallDialog(true)}
              size="xl"
              className="w-full sm:w-auto flex items-center gap-2"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>Speak to our live AI receptionist</span>
            </LiquidButton>
          </div>
          
          <AlertDialog open={showCallDialog} onOpenChange={setShowCallDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Call our AI Receptionist</AlertDialogTitle>
              </AlertDialogHeader>
              <div className="space-y-4 text-center py-4">
                <p className="text-sm text-muted-foreground">Our AI receptionist is available 24/7 to answer your questions and help you get started.</p>
                <div className="text-2xl font-semibold text-accent-primary">
                  +1 (236) 304-1605
                </div>
                <p className="text-sm text-muted-foreground">Click the number on mobile to call directly</p>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <a href="tel:+12363041605" className="bg-accent-primary text-white hover:bg-accent-primary/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 w-full">
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
              BC-based
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
              Privacy-first
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <div className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
              Works with your tools
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}