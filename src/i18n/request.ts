import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Import messages from the root messages folder
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`[next-intl] Failed to load messages for locale "${locale}":`, error);
    // Fallback to default locale
    if (locale !== routing.defaultLocale) {
      try {
        messages = (await import(`../../messages/${routing.defaultLocale}.json`)).default;
        console.warn(`[next-intl] Falling back to default locale "${routing.defaultLocale}"`);
      } catch (fallbackError) {
        console.error(`[next-intl] Failed to load fallback messages:`, fallbackError);
        messages = {};
      }
    } else {
      messages = {};
    }
  }

  return {
    locale,
    messages
  };
});
