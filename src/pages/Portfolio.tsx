import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Card } from '../components/ui/Card';

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('portfolio.projects.ecommerce.title'),
      description: t('portfolio.projects.ecommerce.description'),
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      category: 'E-commerce',
    },
    {
      title: t('portfolio.projects.corporate.title'),
      description: t('portfolio.projects.corporate.description'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      category: 'Corporate',
    },
    {
      title: t('portfolio.projects.app.title'),
      description: t('portfolio.projects.app.description'),
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
      category: 'Mobile',
    },
    {
      title: t('portfolio.projects.dashboard.title'),
      description: t('portfolio.projects.dashboard.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      category: 'Dashboard',
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
              {t('portfolio.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hoverable className="group">
                  <div className="relative overflow-hidden rounded-2xl -mt-6 -mx-6 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex items-center gap-2 text-white">
                        <ExternalLink size={20} />
                        <span className="font-medium">{t('portfolio.viewMore')}</span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
