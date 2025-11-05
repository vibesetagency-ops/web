import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Home, Layers, DollarSign, FileText, Users, BookOpen, Mail, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { name: "Home", url: "/", icon: Home },
  { name: "Solutions", url: "/solutions", icon: Layers },
  { name: "Pricing", url: "/pricing", icon: DollarSign },
  { name: "Case Studies", url: "/case-studies", icon: FileText },
  { name: "Blog", url: "/blog", icon: BookOpen },
  { name: "About", url: "/about", icon: Users },
  { name: "Contact", url: "/contact", icon: Mail },
];

const solutionItems = [
  { label: 'AI Receptionist', path: '/solutions/ai-receptionist' },
  { label: 'Lead Generation', path: '/solutions/lead-generation' },
  { label: 'Content Writing', path: '/solutions/content-writing' },
  { label: 'Email Outreach', path: '/solutions/email-outreach' },
];

export function AnimatedNavBar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Determine active tab based on current route
  const getActiveTab = () => {
    const currentPath = location.pathname;
    if (currentPath === "/") return "Home";
    if (currentPath.startsWith("/solutions")) return "Solutions";
    if (currentPath.startsWith("/pricing")) return "Pricing";
    if (currentPath.startsWith("/case-studies")) return "Case Studies";
    if (currentPath.startsWith("/about")) return "About";
    if (currentPath.startsWith("/blog")) return "Blog";
    if (currentPath.startsWith("/contact")) return "Contact";
    return "Home";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab());

  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <div className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-6 flex justify-center px-2 md:px-0">
        <div className="flex items-center gap-0.5 md:gap-1 bg-[var(--surface)]/90 md:bg-[var(--surface)]/80 border border-[var(--lines)] backdrop-blur-lg py-1.5 px-1 md:px-1.5 rounded-full shadow-lg max-w-full">
          {/* Logo on desktop */}
          <Link
            to="/"
            className="hidden lg:flex items-center px-4 py-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
          >
            <span className="font-semibold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>
              VibeSet
            </span>
          </Link>

          {/* Nav Items */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            // Special handling for Solutions dropdown
            if (item.name === "Solutions") {
              return (
                <div key={item.name} className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className="relative cursor-pointer text-xs md:text-sm px-2 sm:px-3 lg:px-6 py-2 rounded-full transition-colors text-[var(--text-secondary)] hover:text-[var(--accent-primary)] flex items-center gap-1"
                      style={{
                        color: isActive ? "var(--accent-primary)" : undefined,
                        fontWeight: isActive ? 600 : 500,
                      }}
                    >
                      <span className="hidden md:inline relative z-10 whitespace-nowrap">{item.name}</span>
                      <span className="md:hidden relative z-10">
                        <Icon size={16} strokeWidth={2.5} />
                      </span>
                      <ChevronDown className="w-3 h-3 hidden md:inline relative z-10" />
                      {isActive && (
                        <motion.div
                          layoutId="lamp"
                          className="absolute inset-0 w-full rounded-full -z-10"
                          style={{ backgroundColor: "var(--lines)" }}
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        >
                          <div
                            className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full"
                            style={{ backgroundColor: "var(--accent-primary)" }}
                          >
                            <div
                              className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2 opacity-30"
                              style={{ backgroundColor: "var(--accent-primary)" }}
                            />
                            <div
                              className="absolute w-8 h-6 rounded-full blur-md -top-1 opacity-30"
                              style={{ backgroundColor: "var(--accent-primary)" }}
                            />
                            <div
                              className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2 opacity-40"
                              style={{ backgroundColor: "var(--accent-primary)" }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 mt-2">
                      {solutionItems.map((solution) => (
                        <DropdownMenuItem key={solution.path} asChild>
                          <Link 
                            to={solution.path}
                            className="cursor-pointer"
                          >
                            {solution.label}
                          </Link>
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
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.url}
                onClick={() => setActiveTab(item.name)}
                className="relative cursor-pointer text-xs md:text-sm px-2 sm:px-3 lg:px-6 py-2 rounded-full transition-colors text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                style={{
                  color: isActive ? "var(--accent-primary)" : undefined,
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                <span className="hidden md:inline relative z-10 whitespace-nowrap">{item.name}</span>
                <span className="md:hidden relative z-10">
                  <Icon size={16} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full rounded-full -z-10"
                    style={{ backgroundColor: "var(--lines)" }}
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full"
                      style={{ backgroundColor: "var(--accent-primary)" }}
                    >
                      <div
                        className="absolute w-12 h-6 rounded-full blur-md -top-2 -left-2 opacity-30"
                        style={{ backgroundColor: "var(--accent-primary)" }}
                      />
                      <div
                        className="absolute w-8 h-6 rounded-full blur-md -top-1 opacity-30"
                        style={{ backgroundColor: "var(--accent-primary)" }}
                      />
                      <div
                        className="absolute w-4 h-4 rounded-full blur-sm top-0 left-2 opacity-40"
                        style={{ backgroundColor: "var(--accent-primary)" }}
                      />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <div className="hidden lg:flex items-center px-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}