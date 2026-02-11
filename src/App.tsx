import Header from './components/Header';
import Hero from './components/Hero';
import ServiceFilter from './components/ServiceFilter';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* MAIN LANDMARK FOR ACCESSIBILITY */}
      <main>
        <Hero />
        <ServiceFilter />
        <CaseStudies />
        <Process />
        <SocialProof />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
