
import { useLanguage } from '../contexts/LanguageContext';
import { it } from '../locales/it';
import { en } from '../locales/en';

export const useTranslation = () => {
  const { language } = useLanguage();

  // Make sure translations are defined and have the expected structure
  const translations = {
    EN: en || {},
    IT: it || {}
  };

  const t = (key: string) => {
    if (!key) return '';
    
    try {
      // Split the key by dots to traverse the translations object
      const keys = key.split('.');
      let result: any = translations[language];

      // Navigate through the keys
      for (const k of keys) {
        if (result && result[k] !== undefined) {
          result = result[k];
        } else {
          // If translation is missing, use the other language as fallback
          const fallbackTranslation = getFallbackTranslation(key);
          if (fallbackTranslation && fallbackTranslation !== key) {
            return fallbackTranslation;
          }
          console.warn(`Translation key not found: ${key} in ${language}`);
          return key;
        }
      }

      // Check if the result is a primitive value that can be displayed
      if (result === null || result === undefined || typeof result === 'object') {
        console.warn(`Translation result for key "${key}" is not a displayable value:`, result);
        return key;
      }

      return result;
    } catch (error) {
      console.error(`Translation error for key "${key}":`, error);
      return key;
    }
  };

  // Fallback to other language if translation is missing
  const getFallbackTranslation = (key: string) => {
    if (!key) return '';
    
    try {
      const fallbackLang = language === 'EN' ? 'IT' : 'EN';
      const fallbackTranslation = translations[fallbackLang];
      const keys = key.split('.');
      let result: any = fallbackTranslation;
      
      for (const k of keys) {
        if (result && result[k] !== undefined) {
          result = result[k];
        } else {
          return null;
        }
      }

      // Check if the result is a primitive value that can be displayed
      if (result === null || result === undefined || typeof result === 'object') {
        return null;
      }
      
      return result;
    } catch (error) {
      console.error(`Fallback translation error for key "${key}":`, error);
      return null;
    }
  };

  return { t, currentLocale: language };
};

export default useTranslation;
