import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  icon: Icon,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseStyles =
    'px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 justify-center';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-orange-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {Icon && <Icon size={20} />}
      {label}
    </motion.button>
  );
};
