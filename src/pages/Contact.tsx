import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.invalidEmail');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('sending');

    try {
      // Configuração do EmailJS (substitua pelos seus IDs)
      await emailjs.send(
        'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
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
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label={t('contact.name')}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <Input
                  label={t('contact.email')}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
                <Input
                  label={t('contact.message')}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  multiline
                  rows={6}
                  required
                />

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-2xl"
                  >
                    {t('contact.success')}
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-2xl"
                  >
                    {t('contact.error')}
                  </motion.div>
                )}

                <Button
                  label={status === 'sending' ? t('contact.sending') : t('contact.send')}
                  icon={Send}
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full"
                />
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">contato@digitalnest.com.br</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-4">
                  {t('contact.followUs')}
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-colors ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white shadow-lg">
                <h3 className="font-heading font-semibold text-2xl mb-4">Pronto para começar?</h3>
                <p className="mb-6">
                  Entre em contato conosco e vamos transformar suas ideias em realidade digital.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
