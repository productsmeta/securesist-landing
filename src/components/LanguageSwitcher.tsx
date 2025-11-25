"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../i18n/routing';
import { Button } from '@/components/ui/button';

const LOCALE_STORAGE_KEY = 'preferred-locale';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'ar') => {
    // Save locale to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
    
    // Get the current pathname without locale prefix
    // usePathname from next-intl should return path without locale, but let's be safe
    let targetPath = pathname || '/';
    
    // Remove any locale prefix if it exists (safety check)
    if (targetPath.startsWith('/en/') || targetPath.startsWith('/ar/')) {
      targetPath = targetPath.replace(/^\/(en|ar)/, '') || '/';
    }
    
    // Ensure path starts with /
    if (!targetPath.startsWith('/')) {
      targetPath = '/' + targetPath;
    }
    
    // Navigate to the new locale with the clean pathname
    router.push(targetPath, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale('en')}
        className={`${locale === 'en' ? 'bg-blue-50 text-blue-600' : ''} font-semibold`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale('ar')}
        className={`${locale === 'ar' ? 'bg-blue-50 text-blue-600' : ''} font-semibold`}
      >
        AR
      </Button>
    </div>
  );
}

