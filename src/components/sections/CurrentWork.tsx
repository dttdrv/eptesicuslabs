'use client';

import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function CurrentWork() {
    const { t } = useLanguage();

    return (
        <section id="work" className="py-24 px-6 relative border-t border-[var(--color-eptesicus-border)] text-center transition-colors">
            <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
            <div className="fluid-container max-w-5xl mx-auto">

                {/* Active Directives */}
                <div className="flex flex-col items-center mb-24 space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[var(--color-eptesicus-blue)] transition-colors">
                        {t.work.header}
                    </h2>
                    <p className="text-xl md:text-2xl text-[var(--color-eptesicus-black)] font-light leading-relaxed transition-colors">
                        {t.work.subheader}
                    </p>
                </div>

                {/* Lumis-1 Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-sm mb-16 max-w-4xl mx-auto text-left"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Product Info */}
                        <div className="flex-1 space-y-6">
                            <div className="flex items-baseline gap-4">
                                <h3 className="text-3xl font-bold tracking-tight text-[var(--color-eptesicus-black)] transition-colors">{t.work.lumis.name}</h3>
                                <span className="font-mono text-xs text-[var(--color-eptesicus-blue)] uppercase tracking-wide font-bold transition-colors">{t.work.lumis.status}</span>
                            </div>
                            <p className="text-[var(--color-eptesicus-gray)] leading-relaxed text-lg transition-colors">
                                {t.work.lumis.desc}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href="/documents/Lumis-1_Pitch_Pack.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-eptesicus-black)] hover:text-[var(--color-eptesicus-blue)] transition-colors border-b border-transparent hover:border-[var(--color-eptesicus-blue)]">
                                    <FileText size={16} /> {t.work.lumis.pitchDeck}
                                </a>
                                <a href="/documents/Eptesicus_Labs_Long_Term_Business_Plan.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-[var(--color-eptesicus-black)] hover:text-[var(--color-eptesicus-blue)] transition-colors border-b border-transparent hover:border-[var(--color-eptesicus-blue)]">
                                    <FileText size={16} /> {t.work.lumis.businessPlan}
                                </a>
                            </div>
                        </div>

                        {/* Technical Specs Card */}
                        <div className="w-full md:w-64 bg-gray-900 rounded-sm p-6 text-white font-mono text-sm space-y-4 shadow-inner">
                            <div className="border-b border-gray-700 pb-2 mb-4 text-xs tracking-widest text-gray-400 uppercase">
                                {t.work.lumis.specsLabel}
                            </div>
                            <ul className="space-y-3">
                                {t.work.lumis.specs.map((spec, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full ${i === 2 ? 'bg-[var(--color-eptesicus-blue)]' : 'bg-green-500'} ${i === 0 ? 'animate-pulse' : ''}`}></span>
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
