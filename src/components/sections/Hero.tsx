'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-24 pb-12 overflow-hidden text-center border-b border-[var(--color-eptesicus-border)] transition-colors">
            <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
            <div className="fluid-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'circOut' }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-balance mb-6 text-black transition-colors">
                        {t.hero.title}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light text-[var(--color-eptesicus-gray)] tracking-wide mb-8 max-w-4xl mx-auto transition-colors">
                        {t.hero.subtitle}
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl mx-auto flex flex-col items-center space-y-8"
                >
                    <div className="p-6 md:p-8 border border-[var(--color-eptesicus-border)] bg-white/50 backdrop-blur-sm rounded-sm max-w-2xl transition-colors">
                        <p className="text-balance font-mono text-sm md:text-base leading-relaxed text-[var(--color-eptesicus-black)] transition-colors">
                            {t.hero.body}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 pt-4 font-mono text-xs">
                        {t.hero.pills.map((pill, i) => (
                            <div key={i} className="px-4 py-2 border border-[var(--color-eptesicus-border)] bg-white text-[var(--color-eptesicus-black)] uppercase tracking-wider rounded-sm transition-colors">
                                {pill}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
