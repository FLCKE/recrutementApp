'use server';

import { cookies } from 'next/headers';


const COOKIE_NAME = 'NEXT_LOCALE';
//fonction de recuperation de la valeur du language stocké dans le next_locale au niveau des cookies
//  ou renvoie de "en" si vide
export async function getUserLocale() {
    return  cookies().get(COOKIE_NAME)?.value || "en";
}

//donction d'inserction de la valeur du language dans les cookies 
export async function setUserLocale(locale) {
    cookies().set(COOKIE_NAME, locale);
    
}