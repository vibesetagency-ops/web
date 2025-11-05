import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { AnimatedNavBar } from "./components/AnimatedNavBar";
import { Footer } from "./components/Footer";
import { FloatingConsultationButton } from "./components/FloatingConsultationButton";

// Pages
import { Home } from "./pages/Home";
import { Solutions } from "./pages/Solutions";
import { LeadGeneration } from "./pages/LeadGeneration";
import { ContentWriting } from "./pages/ContentWriting";
import { EmailOutreach } from "./pages/EmailOutreach";
import { AIVoiceAutomation } from "./pages/AIVoiceAutomation";
import { AIReceptionist } from "./pages/AIReceptionist";
import { PricingPage } from "./pages/PricingPage";
import { CaseStudies } from "./pages/CaseStudies";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vibeset-ui-theme"
    >
      <Router>
        <div className="min-h-screen">
          <AnimatedNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route
              path="/solutions/lead-generation"
              element={<LeadGeneration />}
            />
            <Route
              path="/solutions/content-writing"
              element={<ContentWriting />}
            />
            <Route
              path="/solutions/email-outreach"
              element={<EmailOutreach />}
            />
            <Route
              path="/solutions/ai-voice-automation"
              element={<AIVoiceAutomation />}
            />
            <Route
              path="/solutions/ai-receptionist"
              element={<AIReceptionist />}
            />
            <Route path="/pricing" element={<PricingPage />} />
            <Route
              path="/case-studies"
              element={<CaseStudies />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Catch-all route - redirects to home */}
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
          <Footer />
          <FloatingConsultationButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}