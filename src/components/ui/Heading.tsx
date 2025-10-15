import React from 'react';
import { motion } from 'framer-motion';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center = false,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${center ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
