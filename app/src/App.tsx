import { useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Gallery from './sections/Gallery';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="relative min-h-screen bg-[hsl(150,30%,4%)] text-[hsl(60,20%,95%)] overflow-x-hidden">
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
