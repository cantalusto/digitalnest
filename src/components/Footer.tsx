import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin, Github, Heart } from 'lucide-react';
import { Container } from './ui/Container';
import { scrollTo } from '@/utils/scroll';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const navLinks = [
    { path: 'home', label: t('navbar.home') },
    { path: 'about', label: t('navbar.about') },
    { path: 'services', label: t('navbar.services') },
    { path: 'portfolio', label: t('navbar.portfolio') },
    { path: 'contact', label: t('navbar.contact') },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">DigitalNest</h3>
              <p className="text-gray-400 mb-4">{t('home.subtitle')}</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => scrollTo(link.path)}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold text-white mb-4">
                {t('footer.contactInfo')}
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contato@digitalnest.app.br</li>
                <li>Recife, PE - Brasil</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              © {currentYear} DigitalNest. {t('footer.rights')}
            </p>
            <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
              {t('footer.madeWith')} <Heart size={14} className="text-red-500 fill-current" />{' '}
              {t('footer.by')} DigitalNest Team
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
