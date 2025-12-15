'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="py-12 px-6 border-t border-gray-200 mt-24 transition-colors">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-xs text-[var(--color-eptesicus-gray)] transition-colors">
                <div className="max-w-md space-y-4">
                    <p>
                        {t.footer.legal}
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} Eptesicus Laboratories. {t.footer.rights}
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <a href="https://x.com/eptesicuslabs" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">{t.footer.x_twitter}</a>
                    <a href="https://www.instagram.com/eptesicuslabs" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">{t.footer.instagram}</a>
                    <a href="mailto:eptesicus.labs@gmail.com" className="hover:text-black transition-colors">{t.footer.contact}</a>
                </div>
            </div>
        </footer>
    );
}
