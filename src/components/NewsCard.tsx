
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import useTranslation from "../hooks/useTranslation";

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  excerpt: string;
  link: string;
}

const NewsCard = ({ image, date, title, excerpt, link }: NewsCardProps) => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguage();
  
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-2 hover:text-sdm-red transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          to={getLocalizedPath(link)}
          className="inline-flex items-center text-sdm-red font-medium hover:underline"
        >
          {t('blog.readMore') || 'Leggi di più'}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
