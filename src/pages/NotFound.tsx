import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Section background="gradient">
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Heading title={t('notFound.title')} subtitle={t('notFound.subtitle')} />
      </div>
    </Section>
  );
}
