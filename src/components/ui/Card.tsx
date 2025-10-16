import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  image,
  className = '',
  hoverable = false,
  onClick,
}) => {
  const cardContent = (
    <>
      {image && (
        <div className="w-full h-48 overflow-hidden rounded-t-2xl">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-2xl font-heading font-semibold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
        )}
        {description && <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>}
        {children}
      </div>
    </>
  );

  const baseStyles = `bg-dark-100 rounded-2xl shadow-xl border border-primary-500/20 overflow-hidden ${className}`;

  if (hoverable) {
    return (
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
        className={`${baseStyles} cursor-pointer hover:shadow-2xl hover:shadow-primary-500/30 hover:border-primary-500/50`}
        onClick={onClick}
      >
        {cardContent}
      </motion.div>
    );
  }

  return <div className={baseStyles}>{cardContent}</div>;
};
