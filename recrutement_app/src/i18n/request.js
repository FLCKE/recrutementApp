import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from '@/app/services/locale';

// fonction pour récupérer la langue selectionne et son dictionnaire 
export default getRequestConfig(async () => {
   var locale = await getUserLocale();
    
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});