'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { FileText, ShieldCheck, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';

export default function ValidatorSection() {
    const { t } = useLanguage();

    const icons = {
        draft: FileText,
        validate: ShieldCheck,
        correct: RefreshCw,
        output: CheckCircle
    };

    const steps = t.validator?.steps || [];

    return (
        <section id="validator" className="py-24 px-6 relative border-b border-[var(--border-default)] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

            <div className="fluid-container max-w-6xl mx-auto space-y-20 relative z-10">

                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)]"
                    >
                        {t.validator?.label}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
                    >
                        {t.validator?.headline}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-[var(--text-secondary)] leading-relaxed"
                    >
                        {t.validator?.description}
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) - Animated gradient */}
                    <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
                        {steps.map((step: { id: string; title: string; desc: string }, index: number) => {
                            const IconComponent = icons[step.id as keyof typeof icons] || FileText;
                            const isLast = index === steps.length - 1;

                            return (
                                <div key={step.id} className="relative group">
                                    {/* Mobile Connector */}
                                    {!isLast && (
                                        <div className="md:hidden absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 text-[var(--accent-blue)]">
                                            <ArrowRight className="rotate-90" size={18} />
                                        </div>
                                    )}

                                    {/* Desktop Arrow Connector */}
                                    {!isLast && (
                                        <div className="hidden md:flex absolute top-16 -right-2 text-[var(--accent-blue)] z-20 transform translate-x-1/2 -translate-y-1/2 items-center justify-center w-6 h-6 rounded-full bg-[var(--bg-primary)]">
                                            <ArrowRight size={14} />
                                        </div>
                                    )}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        className="h-full flex flex-col items-center text-center relative z-10"
                                    >
                                        {/* Step Number + Icon Card */}
                                        <div className="relative mb-6">
                                            {/* Step Number Badge */}
                                            <div className="step-indicator absolute -top-2 -right-2 z-10 text-xs">
                                                {index + 1}
                                            </div>
                                            {/* Icon Container */}
                                            <div className="icon-container w-20 h-20 rounded-xl group-hover:scale-105 group-hover:border-[var(--accent-blue)]">
                                                <IconComponent
                                                    size={28}
                                                    className="text-[var(--accent-teal)] group-hover:text-[var(--accent-blue)] transition-colors duration-300"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2 px-2">
                                            <h4 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors duration-300">
                                                {step.title}
                                            </h4>
                                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
