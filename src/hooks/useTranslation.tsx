
import { useLanguage } from '../contexts/LanguageContext';
import { it } from '../locales/it';
import { en } from '../locales/en';

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string) => {
    // Split the key by dots to traverse the translations object
    const keys = key.split('.');
    let result: any = language === 'EN' ? en : it;

    // Navigate through the keys
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return result;
  };

  return { t, currentLocale: language };
};

export default useTranslation;
