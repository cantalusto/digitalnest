import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, DollarSign } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  plans: PricingPlan[];
  title: string;
  subtitle: string;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  plans,
  title,
  subtitle,
}) => {
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-dark/95 backdrop-blur-xl border border-primary-500/20 rounded-3xl max-w-6xl w-full max-h-[85vh] overflow-hidden pointer-events-auto shadow-2xl shadow-primary-500/10"
            >
              {/* Header */}
              <div className="relative p-6 md:p-8 border-b border-primary-500/20">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-primary-500/10 transition-colors group"
                >
                  <X className="w-6 h-6 text-white/60 group-hover:text-primary-500 transition-colors" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                    <DollarSign className="w-6 h-6 text-dark" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                    {title}
                  </h2>
                </div>
                <p className="text-white/70 text-lg mt-2">{subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(85vh-180px)] custom-scrollbar">
                <div className="grid md:grid-cols-3 gap-6">
                  {plans.map((plan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`relative rounded-2xl p-6 border-2 transition-all ${
                        plan.highlighted
                          ? 'border-primary-500 bg-primary-500/5 shadow-lg shadow-primary-500/20'
                          : 'border-primary-500/20 bg-dark/40'
                      }`}
                    >
                      {plan.highlighted && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-dark text-xs font-bold px-4 py-1 rounded-full">
                            POPULAR
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-4xl font-bold text-primary-500">
                            {plan.price}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm">{plan.description}</p>
                      </div>

                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span className="text-white/80 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={onClose}
                        className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all ${
                          plan.highlighted
                            ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-dark hover:shadow-lg hover:shadow-primary-500/50'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        Solicitar Orçamento
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Note */}
                <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-primary-500/20">
                  <p className="text-white/70 text-center">
                    <span className="text-primary-500 font-semibold">💡 Nota:</span> Todos os
                    valores são estimativas. O preço final pode variar de acordo com os requisitos
                    específicos do seu projeto. Entre em contato para um orçamento personalizado.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
