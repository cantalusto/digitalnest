import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Users,
  Award,
  Globe,
  Code,
  Palette,
  Megaphone,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import emailjs from '@emailjs/browser';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if EmailJS is configured
      if (!serviceId || !templateId || !publicKey) {
        console.warn('EmailJS not configured. Please set up environment variables.');
        // For demo purposes, show success message
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
        return;
      }

      // Template parameters - adjust these names to match your EmailJS template
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        to_email: 'contato@digitalnest.app.br', // Your company email
        reply_to: formData.email,
      };

      console.log('Sending email with params:', {
        serviceId,
        templateId,
        publicKey: publicKey.substring(0, 5) + '...',
      });

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      console.log('Email sent successfully!');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {/* Main Title - Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex justify-center mb-6"
            >
              <img
                src="/DigitalNest - logo.svg"
                alt="DigitalNest"
                className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
                style={{
                  filter:
                    'drop-shadow(0 0 30px rgba(16, 240, 128, 0.5)) drop-shadow(0 2px 10px rgba(0,0,0,0.8))',
                }}
              />
            </motion.div>

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
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    const navbarHeight = 80;
                    const targetPosition =
                      element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1200;
                    let start: number | null = null;

                    const easeInOutCubic = (t: number): number => {
                      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                    };

                    const animation = (currentTime: number) => {
                      if (start === null) start = currentTime;
                      const timeElapsed = currentTime - start;
                      const progress = Math.min(timeElapsed / duration, 1);
                      const ease = easeInOutCubic(progress);

                      window.scrollTo(0, startPosition + distance * ease);

                      if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                      }
                    };

                    requestAnimationFrame(animation);
                  }
                }}
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
        className="py-20 bg-dark/50 backdrop-blur-md border-y border-primary-500/20"
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
      <Section
        id="about"
        className="py-32 bg-dark/30 backdrop-blur-md border-y border-primary-500/10"
      >
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

      {/* Features Section - Why Choose Us */}
      <Section
        id="why-us"
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

      {/* Detailed Services Section */}
      <Section id="services" className="py-32 bg-dark/20 backdrop-blur-sm">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {t('services.title')}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: t('services.webDev.title'),
                description: t('services.webDev.description'),
                features: t('services.webDev.features', { returnObjects: true }) as string[],
              },
              {
                icon: Palette,
                title: t('services.design.title'),
                description: t('services.design.description'),
                features: t('services.design.features', { returnObjects: true }) as string[],
              },
              {
                icon: TrendingUp,
                title: t('services.branding.title'),
                description: t('services.branding.description'),
                features: t('services.branding.features', { returnObjects: true }) as string[],
              },
              {
                icon: Megaphone,
                title: t('services.marketing.title'),
                description: t('services.marketing.description'),
                features: t('services.marketing.features', { returnObjects: true }) as string[],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-dark/60 backdrop-blur-md border border-primary-500/20 hover:border-primary-500/40 transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6 shadow-lg shadow-primary-500/30">
                  <service.icon className="w-8 h-8 text-dark" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-primary-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio Section */}
      <Section
        id="portfolio"
        className="py-32 bg-dark/30 backdrop-blur-md border-y border-primary-500/10"
      >
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
                title: t('portfolio.projects.ecommerce.title'),
                description: t('portfolio.projects.ecommerce.description'),
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
              },
              {
                title: t('portfolio.projects.corporate.title'),
                description: t('portfolio.projects.corporate.description'),
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
              },
              {
                title: t('portfolio.projects.app.title'),
                description: t('portfolio.projects.app.description'),
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
              },
              {
                title: t('portfolio.projects.dashboard.title'),
                description: t('portfolio.projects.dashboard.description'),
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
      <Section
        id="contact"
        className="py-32 bg-dark/40 backdrop-blur-md border-y border-primary-500/10"
      >
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.name')}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-dark/40 border border-primary-500/20 rounded-xl text-white placeholder-white/50 focus:border-primary-500/50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.email')}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-dark/40 border border-primary-500/20 rounded-xl text-white placeholder-white/50 focus:border-primary-500/50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder={t('contact.message')}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-dark/40 border border-primary-500/20 rounded-xl text-white placeholder-white/50 focus:border-primary-500/50 focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-primary-500/20 border border-primary-500/40 rounded-xl text-primary-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-400"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Erro ao enviar mensagem. Por favor, tente novamente.</span>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-full bg-primary-500 text-dark font-bold text-lg shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : t('contact.send')}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
