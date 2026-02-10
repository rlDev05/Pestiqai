import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { FeatureGrid } from './components/FeatureGrid';
import { TechnicalRequirements } from './components/TechnicalRequirements';
import { HowItWorks } from './components/HowItWorks';
import { ProductConfigurator } from './components/ProductConfigurator';
import { Privacy } from './components/Privacy';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAF9]">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <FeatureGrid />
        <TechnicalRequirements />
        <HowItWorks />
        <ProductConfigurator />
        <Privacy />
      </main>
      <Footer />
    </div>
  );
}
