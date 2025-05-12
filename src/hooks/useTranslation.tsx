
import { useLanguage } from '../contexts/LanguageContext';
import { it } from '../locales/it';
import { en } from '../locales/en';
import { pl } from '../locales/pl';

export const useTranslation = () => {
  const { language } = useLanguage();

  // Make sure translations are defined and have the expected structure
  const translations = {
    EN: en || {},
    IT: it || {},
    PL: pl || {}
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
      // Use English as first fallback, then Italian
      let fallbackLangs = [];
      
      if (language === 'EN') fallbackLangs = ['IT', 'PL'];
      else if (language === 'IT') fallbackLangs = ['EN', 'PL'];
      else fallbackLangs = ['EN', 'IT'];
      
      for (const fallbackLang of fallbackLangs) {
        const fallbackTranslation = translations[fallbackLang];
        const keys = key.split('.');
        let result: any = fallbackTranslation;
        
        let validTranslation = true;
        for (const k of keys) {
          if (result && result[k] !== undefined) {
            result = result[k];
          } else {
            validTranslation = false;
            break;
          }
        }
        
        // Check if we found a valid translation
        if (validTranslation) {
          // Check if the result is a primitive value that can be displayed
          if (result === null || result === undefined || typeof result === 'object') {
            continue; // Try next language
          }
          return result;
        }
      }
      
      return null;
    } catch (error) {
      console.error(`Fallback translation error for key "${key}":`, error);
      return null;
    }
  };

  return { t, currentLocale: language };
};

export default useTranslation;
