'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import { Mail, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer
            id="contact"
            className="relative py-16 px-6 border-t border-gray-100"
            style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Big Brand Name - TOP */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 select-none tracking-tight">
                        Eptesicus Laboratories
                    </h2>
                </div>

                {/* Links and Social - BELOW brand */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-10">
                    {/* Quick Links */}
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#about" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                            {t.nav?.about || 'About'}
                        </a>
                        <a href="#products" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                            {t.nav?.products || 'Products'}
                        </a>
                        <a href="#team" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                            {t.nav?.team || 'Team'}
                        </a>
                        <a
                            href="/documents/Lumis-1_Pitch_Pack.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                            {t.footer?.pitchDeck || 'Pitch Deck'}
                        </a>
                    </div>

                    {/* Separator */}
                    <span className="hidden sm:block w-px h-4 bg-gray-300" />

                    {/* Social Icons */}
                    <div className="flex items-center gap-2">
                        <a
                            href="mailto:eptesicus.labs@gmail.com"
                            className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                        <a
                            href="https://x.com/eptesicuslabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300"
                            aria-label="X (Twitter)"
                        >
                            <Twitter size={18} />
                        </a>
                        <a
                            href="https://www.instagram.com/eptesicuslabs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Legal Text - BOTTOM */}
                <div className="text-center space-y-1">
                    <p className="text-xs text-gray-400">
                        &copy; {new Date().getFullYear()} Eptesicus Laboratories. {t.footer?.rights || 'All rights reserved.'}
                    </p>
                    <p className="text-xs text-gray-400">
                        {t.footer?.legal || 'Not yet incorporated. Operated by Deyan Todorov and Iliyan Bozhanov.'}
                    </p>
                </div>
            </div>
        </footer>
    );
}
