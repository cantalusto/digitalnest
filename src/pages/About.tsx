import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Card } from '../components/ui/Card';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t('about.mission'),
      description: t('about.missionText'),
    },
    {
      icon: Eye,
      title: t('about.vision'),
      description: t('about.visionText'),
    },
    {
      icon: Award,
      title: t('about.values'),
      description: t('about.valuesText'),
    },
  ];

  const team = [
    {
      name: 'Pessoa 01',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    },
    {
      name: 'Pessoa 02',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'Pessoa 03',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    },
    {
      name: 'Pessoa 04',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
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
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Values */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                      <value.icon size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-3 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section background="dark">
        <Container>
          <Heading title={t('about.team')} center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hoverable>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-t-2xl -mt-6 -mx-6 mb-4"
                  />
                  <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
