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
      <Section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-transparent pt-20"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/50 pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title - DigitalNest */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 leading-tight"
            >
              <span
                className="text-white drop-shadow-lg"
                style={{
                  textShadow: '0 0 30px rgba(16, 240, 128, 0.5), 0 2px 10px rgba(0,0,0,0.8)',
                }}
              >
                DigitalNest
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-3xl text-white/90 mb-8 drop-shadow-lg"
            >
              {t('home.hero')}
            </motion.p>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/60 backdrop-blur-md border border-primary-500/40 mb-12 shadow-lg shadow-primary-500/20"
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-white">{t('home.subtitle')}</span>
            </motion.div>

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
      <Section
        id="stats"
        className="py-20 bg-dark/30 backdrop-blur-sm border-y border-primary-500/20"
      >
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
                <div className="text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-accent-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section id="about" className="py-32 bg-dark/20 backdrop-blur-sm">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">{t('about.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: t('about.mission'), text: t('about.missionText'), icon: '🎯' },
              { title: t('about.vision'), text: t('about.visionText'), icon: '🚀' },
              { title: t('about.values'), text: t('about.valuesText'), icon: '💎' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-dark/60 backdrop-blur-md border border-primary-500/20 hover:border-primary-500/40 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              Somos uma equipe apaixonada por tecnologia e design, comprometida em entregar soluções
              digitais de excelência. Com anos de experiência no mercado, já ajudamos dezenas de
              empresas a alcançarem seus objetivos através de estratégias digitais eficazes e
              inovadoras. Nossa abordagem combina criatividade, técnica e foco em resultados
              mensuráveis para garantir o sucesso dos nossos clientes.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section
        id="services"
        className="py-32 bg-dark/40 backdrop-blur-sm border-y border-primary-500/10"
      >
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

                <h3 className="text-2xl font-display font-bold text-white mb-4">{feature.title}</h3>

                <p className="text-accent-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio Section */}
      <Section id="portfolio" className="py-32 bg-dark/20 backdrop-blur-sm">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {t('portfolio.title')}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{t('portfolio.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'Plataforma completa de vendas online com dashboard administrativo',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
              },
              {
                title: 'Corporate Website',
                description: 'Site institucional moderno e responsivo para empresa multinacional',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
              },
              {
                title: 'Mobile App',
                description: 'Aplicativo mobile com interface intuitiva e performática',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
              },
              {
                title: 'Dashboard Analytics',
                description: 'Painel de analytics com visualização de dados em tempo real',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-dark/60 backdrop-blur-md border border-primary-500/20 hover:border-primary-500/40 transition-all cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-32 bg-transparent">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark/60 backdrop-blur-md border border-primary-500/20 rounded-3xl p-8"
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={t('contact.name')}
                    className="w-full px-4 py-3 bg-dark/40 border border-primary-500/20 rounded-xl text-white placeholder-white/50 focus:border-primary-500/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t('contact.email')}
                    className="w-full px-4 py-3 bg-dark/40 border border-primary-500/20 rounded-xl text-white placeholder-white/50 focus:border-primary-500/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder={t('contact.message')}
                    className="w-full px-4 py-3 bg-dark/40 border border-primary-500/20 rounded-xl text-white placeholder-white/50 focus:border-primary-500/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 rounded-full bg-primary-500 text-dark font-bold text-lg shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 transition-all"
                >
                  {t('contact.send')}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
