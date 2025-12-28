import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="text-center text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-thin tracking-wide text-foreground mb-3 sticky top-0">
        {t('header.title')}
      </h1>
    </header>
  );
};
