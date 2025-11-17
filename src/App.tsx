import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');

    // Remove default smooth scroll to allow custom animation
    document.documentElement.style.scrollBehavior = 'auto';
  }, []);

  // Show loading screen on first visit only
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  return (
    <Router>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} minDuration={2500} />}
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Animated Network Background */}
        <AnimatedBackground />

        {/* Content */}
        <div className="relative z-10 w-full">
          <Navbar />
          <main className="flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>

        {/* WhatsApp Floating Button */}
        <WhatsAppButton
          phoneNumber={import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'}
          message="Olá! Gostaria de saber mais sobre os serviços da DigitalNest."
        />
      </div>
    </Router>
  );
}

export default App;
