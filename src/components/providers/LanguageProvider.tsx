'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '@/lib/translations';

type Language = 'en' | 'de' | 'bg' | 'el' | 'it';

const LanguageContext = createContext<{
    language: Language;
    t: typeof translations.en;
}>({
    language: 'en',
    t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        // Basic detection
        const browserLang = navigator.language.split('-')[0];
        if (['de', 'bg', 'el', 'it'].includes(browserLang)) {
            setLanguage(browserLang as Language);
        }
    }, []);

    const value = {
        language,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
