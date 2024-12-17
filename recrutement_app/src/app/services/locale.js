'use server';

import { cookies } from 'next/headers';
import { defaultLocale } from '@/i18n/config';


const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
    return  cookies().get(COOKIE_NAME)?.value || "en";
}

export async function setUserLocale(locale) {
    cookies().set(COOKIE_NAME, locale);
    
}