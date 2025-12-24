'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Hero() {
    const { t } = useLanguage();

    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6">
            <div className="relative z-10 flex flex-col items-center text-center mt-16">
                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-gray-900 mb-4 md:mb-6 px-2"
                >
                    {t.hero.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500 font-normal tracking-wide mb-8 md:mb-12 px-4 max-w-3xl"
                >
                    {t.hero.subtitle}
                </motion.p>

                {/* CTA Button */}
                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    href="/documents/Lumis-1_Pitch_Pack.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                >
                    View Pitch Deck
                </motion.a>
            </div>

            {/* Scroll Indicator - Professional, fluid animation */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                onClick={handleScrollDown}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 hover:text-gray-500 transition-colors duration-500 cursor-pointer"
                aria-label="Scroll down"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: [0.45, 0, 0.55, 1]
                    }}
                >
                    <ChevronDown size={28} strokeWidth={1} />
                </motion.div>
            </motion.button>
        </section>
    );
}
