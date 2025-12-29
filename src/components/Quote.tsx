import { useTranslation } from 'react-i18next';

export const Quote = () => {
  const { t } = useTranslation();

  return (
    <blockquote className="w-full px-2 sm:px-0 sm:w-1/3 mx-auto text-white">
      <p className="text-base-content text-lg text-foreground italic text-center">
        <em>
          &quot;{t('quote.text')}&quot;
        </em>
      </p>
      <footer className="text-right w-4/5">
        <div className="text-base font-semibold opacity-70">{t('quote.author')}</div>
      </footer>
    </blockquote>
  )
};
