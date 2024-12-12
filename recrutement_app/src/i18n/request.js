import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from '@/app/services/locale';

// export async function setLocale(local){
    
//     router.push(router.pathname, router.asPath, { locale });
// }
// export async function getLocale(){
//     if(locale==""){
//         return 'fr';
        
//     }else{
//         return locale;
//     }
// }
export default getRequestConfig(async () => {
   var locale = await getUserLocale();
    
 
    console.log(locale);
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});