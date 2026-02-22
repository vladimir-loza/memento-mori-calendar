import { useTranslation } from 'react-i18next';

export const GithubLink = () => {
  const { t } = useTranslation();
  return (
    <a
      href="https://github.com/vladimir-loza/memento-mori-calendar"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-2 left-2 sm:left-4 sm:top-4 z-50 inline-block transition-opacity hover:opacity-80"
      aria-label={t('githubLink.ariaLabel')}
    >
      <img src="/github-mark.svg" alt="GitHub" className="size-6" />
    </a>
  );
};
