import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    quote: "VibeSet automated our entire lead qualification process. We're now responding to hot leads in minutes instead of hours.",
    author: "Sarah Chen",
    title: "VP of Sales",
    company: "TechFlow Inc",
    avatar: "SC"
  },
  {
    quote: "The customer support automation has been a game-changer. 70% of our tickets are now resolved automatically.",
    author: "Mike Rodriguez", 
    title: "Head of Support",
    company: "CloudScale",
    avatar: "MR"
  },
  {
    quote: "Our finance team saves 15 hours per week on invoice processing. ROI was clear within the first month.",
    author: "Emily Watson",
    title: "CFO", 
    company: "GrowthLabs",
    avatar: "EW"
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <></>
  );
}