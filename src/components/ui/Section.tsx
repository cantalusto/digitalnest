import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'gradient';
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'light',
  id,
}) => {
  const backgroundStyles = {
    light: 'bg-dark-100',
    dark: 'bg-dark',
    gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}>
      {children}
    </section>
  );
};
