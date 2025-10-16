import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string; // Format: 5511999999999 (country code + number without spaces)
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = 'Olá! Gostaria de saber mais sobre os serviços da DigitalNest.' 
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 1,
        type: 'spring',
        stiffness: 260,
        damping: 20 
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
      
      {/* Button */}
      <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center transition-colors">
        <MessageCircle className="w-8 h-8 text-white" fill="white" />
      </div>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-green-500"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ 
          scale: [1, 1.3, 1.3, 1],
          opacity: [0.5, 0, 0, 0.5] 
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-dark/90 backdrop-blur-md text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg border border-primary-500/20 pointer-events-none"
      >
        <span className="text-sm font-medium">Fale conosco no WhatsApp</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-dark/90 border-r border-b border-primary-500/20" />
      </motion.div>
    </motion.button>
  );
};
