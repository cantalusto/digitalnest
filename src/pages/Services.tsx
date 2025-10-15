import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Palette, TrendingUp, Megaphone, ArrowRight } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      color: 'primary',
    },
    {
      icon: Palette,
      title: t('services.design.title'),
      description: t('services.design.description'),
      color: 'secondary',
    },
    {
      icon: TrendingUp,
      title: t('services.branding.title'),
      description: t('services.branding.description'),
      color: 'accent',
    },
    {
      icon: Megaphone,
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      color: 'primary',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <Section background="gradient">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hoverable className="h-full">
                  <div className="flex flex-col h-full">
                    <div
                      className={`w-16 h-16 rounded-full bg-${service.color}/10 flex items-center justify-center mb-4`}
                    >
                      <service.icon size={32} className={`text-${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Button
                      label={t('services.learnMore')}
                      icon={ArrowRight}
                      variant="outline"
                      className="w-full"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
