
import { useTranslations } from 'next-intl';
export default function Home() {
  const t = useTranslations('HomePage'); // hook de traduction
  return <h1 className="font-bold ">{t('title')}</h1>;
}
