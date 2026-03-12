import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'; // Import individually now
import { About } from './components/About'; // Import individually now
import { ProductShowcase } from './components/ProductShowcase';
import { FeatureGrid } from './components/FeatureGrid';
import { TechnicalRequirements } from './components/TechnicalRequirements';
import { HowItWorks } from './components/HowItWorks';
import { ProductConfigurator } from './components/ProductConfigurator';
import { Privacy } from './components/Privacy';
import { Footer } from './components/Footer';

export default function App() {
  return (
    // Wrap everything in the Router
    <Router>
      {/* Background stays the same to keep your design unified */}
      <div className="min-h-screen bg-[#001a14] flex flex-col">
        <Navbar />
        
        {/* flex-grow ensures the footer stays at the bottom even on short pages */}
        <main className="flex-grow">
          <Routes>
            {/* Merged About Page */}
            <Route path="/" element={
              <div className="flex flex-col">
                <Hero />
                <About />
              </div>
            } />
            
            {/* NEW MERGED PRODUCT PAGE: Showcase, Features, and Privacy stacked */}
            <Route path="/product" element={
              <div className="flex flex-col">
                <ProductShowcase />
                <FeatureGrid />
                <Privacy />
              </div>
            } />
            
            <Route path="/how-it-works" element={<HowItWorks />} />
            
            {/* RENAMED ROUTE: Connects the Configurator to the "Inquiry" Navbar link */}
            <Route path="/inquiry" element={<ProductConfigurator />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}