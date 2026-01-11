'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="section px-[var(--space-5)] relative">
            <div className="container-wide stack-xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center stack-sm"
                >
                    <h2 className="text-label">
                        {t.about.label}
                    </h2>
                    <h3 className="text-h1">
                        {t.about.headline}
                    </h3>
                </motion.div>

                {/* The Problem */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center stack-sm"
                >
                    <h4 className="text-label-accent">
                        {t.about.problemLabel}
                    </h4>
                    <p className="text-body max-w-[var(--container-content)] mx-auto">
                        {t.about.problemBody}
                    </p>
                </motion.div>

                {/* Our Solution */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center stack-sm"
                >
                    <h4 className="text-label-accent">
                        {t.about.solutionLabel}
                    </h4>
                    <p className="text-body max-w-[var(--container-content)] mx-auto">
                        {t.about.visionBody}
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
