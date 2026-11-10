import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import IntelligenceLoop from './components/IntelligenceLoop';
import Audience from './components/Audience';
import FutureVision from './components/FutureVision';
import Trust from './components/Trust';
import PilotForm from './components/PilotForm';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#101C2C] text-[#F3F8FA] selection:bg-[#3289D6] selection:text-white font-['Inter',sans-serif]">
      {/* 01. Fixed Navigation Header */}
      <Navbar />

      <main id="main-content">
        {/* 02. Hero Section with Geospatial Dashboard Mockup */}
        <Hero />

        {/* 03. The Challenge / Problem */}
        <Problem />

        {/* 04. The Solution / How Aquora Works + Interactive Demonstration */}
        <HowItWorks />

        {/* 05. Platform Capabilities */}
        <Features />

        {/* 06. The Aquora Intelligence Engine / Loop */}
        <IntelligenceLoop />

        {/* 07. Who Aquora Is For / Audience */}
        <Audience />

        {/* 08. Beyond Monitoring — Long-Term Vision & Digital Twin Layers */}
        <FutureVision />

        {/* 09. Trust, Data & Responsible Monitoring */}
        <Trust />

        {/* 10. Pilot Programme & Early Access Application */}
        <PilotForm />

        {/* 11. Frequently Asked Questions */}
        <FAQ />

        {/* 12. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 13. Comprehensive Footer */}
      <Footer />
    </div>
  );
}

export default App;
