import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';

function App() {
  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Remove default smooth scroll to allow custom animation
    document.documentElement.style.scrollBehavior = 'auto';
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Animated Network Background */}
        <AnimatedBackground />

        {/* Content */}
        <div className="relative z-10 w-full">
          <Navbar />
          <main className="flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
