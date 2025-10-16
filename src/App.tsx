import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';

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
            </Routes>
          </main>
          <Footer />
        </div>

        {/* WhatsApp Floating Button */}
        <WhatsAppButton 
          phoneNumber={import.meta.env.VITE_WHATSAPP_NUMBER || "5511999999999"} 
          message="Olá! Gostaria de saber mais sobre os serviços da DigitalNest."
        />
      </div>
    </Router>
  );
}

export default App;
