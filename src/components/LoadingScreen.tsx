import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minDuration?: number; // Tempo mínimo em ms (padrão: 2000ms)
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
  minDuration = 2000,
}) => {
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Garantir tempo mínimo de exibição
    const minTimer = setTimeout(() => {
      setFadeOut(true);
      
      // Aguardar animação de fade out antes de completar
      setTimeout(() => {
        setIsComplete(true);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 500); // Duração do fade out
    }, minDuration);

    return () => clearTimeout(minTimer);
  }, [minDuration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-black via-dark to-black"
        >
          {/* Background animated gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 animate-pulse" />
            
            {/* Animated circles */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl"
            />
          </div>

          {/* Loading Content */}
          <div className="relative z-10 w-full max-w-md px-8">
            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                <span className="font-brand">
                  Digital<span style={{ color: '#00ff00' }}>Nest</span>
                </span>
              </h2>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white/60 text-sm"
              >
                Carregando...
              </motion.div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: minDuration / 1000, ease: 'easeInOut' }}
              className="mt-8 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
