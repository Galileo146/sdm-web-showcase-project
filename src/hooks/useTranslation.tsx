
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
        // If translation is missing, use the other language as fallback
        const fallbackTranslation = getFallbackTranslation(key);
        if (fallbackTranslation !== key) {
          return fallbackTranslation;
        }
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }

    return result;
  };

  // Fallback to other language if translation is missing
  const getFallbackTranslation = (key: string) => {
    const fallbackLang = language === 'EN' ? it : en;
    const keys = key.split('.');
    let result: any = fallbackLang;
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key;
      }
    }
    
    return result;
  };

  return { t, currentLocale: language };
};

export default useTranslation;
