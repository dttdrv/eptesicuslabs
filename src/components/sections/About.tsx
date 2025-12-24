'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
                        {t.about.label}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        {t.about.headline}
                    </h3>
                </motion.div>

                {/* The Problem */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500">
                        {t.about.problemLabel}
                    </h4>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        {t.about.problemBody}
                    </p>
                </motion.div>

                {/* Our Solution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5"
                >
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-blue-500">
                        {t.about.solutionLabel}
                    </h4>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        {t.about.visionBody}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
