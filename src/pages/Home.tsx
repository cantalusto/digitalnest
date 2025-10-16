import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, TrendingUp, Users, Award, Globe } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: '500+', label: t('home.stats.clients') },
    { icon: Award, value: '95%', label: t('home.stats.satisfaction') },
    { icon: Globe, value: '30+', label: t('home.stats.countries') },
    { icon: TrendingUp, value: '2x', label: t('home.stats.roi') },
  ];

  const features = [
    {
      icon: Sparkles,
      title: t('home.features.innovative.title'),
      description: t('home.features.innovative.description'),
      gradient: 'from-primary-500 to-accent-500',
    },
    {
      icon: Zap,
      title: t('home.features.performance.title'),
      description: t('home.features.performance.description'),
      gradient: 'from-accent-500 to-secondary-500',
    },
    {
      icon: TrendingUp,
      title: t('home.features.results.title'),
      description: t('home.features.results.description'),
      gradient: 'from-secondary-500 to-primary-500',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center bg-transparent pt-20">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/50 pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-100/80 backdrop-blur-sm border border-primary-500/30 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-accent-600">
                {t('home.subtitle')}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-400 bg-clip-text text-transparent">
                {t('home.hero')}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-accent-600 mb-12 max-w-2xl mx-auto"
            >
              {t('home.title')}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-dark font-semibold shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 transition-all flex items-center gap-2"
              >
                {t('home.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="py-20 bg-dark/30 backdrop-blur-sm border-y border-primary-500/20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-4 shadow-lg shadow-primary-500/30">
                  <stat.icon className="w-8 h-8 text-dark" />
                </div>
                <div className="text-4xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-accent-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="py-32 bg-transparent">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {t('home.whyChooseUs')}
            </h2>
            <p className="text-xl text-accent-500 max-w-2xl mx-auto">
              {t('home.whyChooseUsSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-dark/60 backdrop-blur-md border border-primary-500/30 shadow-lg hover:shadow-2xl hover:shadow-primary-500/50 hover:border-primary-500/70 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg shadow-primary-500/30`}
                >
                  <feature.icon className="w-8 h-8 text-dark" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-accent-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-32 bg-gradient-to-r from-secondary-600 via-secondary-500 to-secondary-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {t('home.cta2.title')}
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              {t('home.cta2.subtitle')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-12 py-4 rounded-full bg-primary-500 text-dark font-bold text-lg shadow-xl shadow-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/70 transition-all border-2 border-primary-400"
            >
              {t('home.cta2.button')}
            </motion.button>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};
