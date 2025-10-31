import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Building2 } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    importance: string;
    examples: string[];
    benefits: string[];
  } | null;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-dark/95 backdrop-blur-xl rounded-3xl border border-primary-500/30 shadow-2xl shadow-primary-500/20 overflow-hidden"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-primary-500/20 to-secondary-500/20 p-6 border-b border-primary-500/20">
                <h2 className="text-3xl font-display font-bold text-white pr-10">
                  {service.title}
                </h2>
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {/* Description */}
                <div className="mb-6">
                  <p className="text-white/80 text-lg leading-relaxed">{service.description}</p>
                </div>

                {/* Importance */}
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-primary-500 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Por que é importante?
                  </h3>
                  <p className="text-white/70 leading-relaxed">{service.importance}</p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-primary-500 mb-3">
                    Benefícios
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-white/70"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Examples */}
                <div>
                  <h3 className="text-xl font-display font-bold text-primary-500 mb-3 flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Empresas que investiram nisso
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {service.examples.map((example, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-dark/60 backdrop-blur-md border border-primary-500/20 rounded-xl p-3 text-center hover:border-primary-500/40 transition-all"
                      >
                        <span className="text-white/90 font-medium">{example}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 bg-dark/60 border-t border-primary-500/20">
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-dark font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/50 transition-all"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
