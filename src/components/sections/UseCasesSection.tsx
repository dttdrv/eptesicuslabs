'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Scale, Heart, Wrench } from 'lucide-react';

export default function UseCasesSection() {
    const { t } = useLanguage();

    const caseConfig = {
        legal: { icon: Scale, color: '#3B82F6', bgColor: 'rgba(59, 130, 246, 0.1)' },
        health: { icon: Heart, color: '#EF4444', bgColor: 'rgba(239, 68, 68, 0.1)' },
        industrial: { icon: Wrench, color: '#F59E0B', bgColor: 'rgba(245, 158, 11, 0.1)' }
    };

    const cases = t.useCases?.cases || [];

    return (
        <section id="use-cases" className="py-24 px-6 relative border-b border-[var(--border-default)] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

            <div className="fluid-container max-w-6xl mx-auto space-y-16 relative z-10">

                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)]"
                    >
                        {t.useCases?.label}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]"
                    >
                        {t.useCases?.headline}
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cases.map((useCase: { icon: string; title: string; desc: string }, index: number) => {
                        const config = caseConfig[useCase.icon as keyof typeof caseConfig] || caseConfig.legal;
                        const IconComponent = config.icon;

                        return (
                            <motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                                className="glass-card card-hover p-6 md:p-8 space-y-5 group"
                            >
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: config.bgColor }}
                                >
                                    <IconComponent
                                        size={24}
                                        style={{ color: config.color }}
                                        className="transition-transform duration-300"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h4
                                        className="text-lg font-semibold text-[var(--text-primary)] transition-colors duration-300"
                                        style={{ '--hover-color': config.color } as React.CSSProperties}
                                    >
                                        {useCase.title}
                                    </h4>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                        {useCase.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
