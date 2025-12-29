import { useTranslation } from 'react-i18next';
import { ButtonLangSwitch } from './ButtonLangSwith';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="fixed top-2 right-2 sm:right-4 sm:top-4 flex gap-2 z-50">
      <ButtonLangSwitch
        onChange={(lang) => changeLanguage(lang)}
        isActive={currentLanguage === 'es'}
        languageKey="es"
        ariaLabel="Cambiar a español"
      >
        ES
      </ButtonLangSwitch>
      <ButtonLangSwitch
        onChange={(lang) => changeLanguage(lang)}
        isActive={currentLanguage === 'en'}
        languageKey="en"
        ariaLabel="Change to English"
      >
        EN
      </ButtonLangSwitch>
    </div>
  );
};

