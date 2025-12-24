'use client';

import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function CurrentWork() {
    const { t } = useLanguage();

    // Use technology translations
    const tech = t.technology;

    return (
        <section id="technology" className="py-24 px-6 relative border-b border-[var(--border-default)] text-center">
            <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
            <div className="fluid-container max-w-5xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 space-y-6 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)]"
                    >
                        {tech.header}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-[var(--text-primary)] font-light leading-relaxed"
                    >
                        {tech.subheader}
                    </motion.p>
                </div>

                {/* Lumis-1 Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-8 md:p-12 max-w-4xl mx-auto text-left"
                >
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Product Info */}
                        <div className="flex-1 space-y-6">
                            <div className="flex items-baseline gap-4 flex-wrap">
                                <h3 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">{tech.lumis.name}</h3>
                                <span className="font-mono text-xs text-[var(--accent-blue)] uppercase tracking-wide font-bold">{tech.lumis.status}</span>
                            </div>
                            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                                {tech.lumis.desc}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="mailto:eptesicus.labs@gmail.com?subject=Requesting%20Pitch%20Deck"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-blue)] text-white font-semibold rounded-md hover:bg-[var(--accent-blue)]/90 transition-colors"
                                >
                                    <FileText size={18} />
                                    {tech.lumis.pitchDeck}
                                    <ArrowRight size={16} />
                                </a>
                                <a
                                    href="/documents/Eptesicus_Labs_Long_Term_Business_Plan.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-default)] text-[var(--text-primary)] font-semibold rounded-md hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-colors"
                                >
                                    <FileText size={18} />
                                    {tech.lumis.businessPlan}
                                </a>
                            </div>
                        </div>

                        {/* Technical Specs Card - Enhanced */}
                        <div className="w-full md:w-72 terminal-card-enhanced">
                            {/* Terminal Header */}
                            <div className="terminal-card-header">
                                <div className="terminal-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider ml-2">
                                    {tech.lumis.specsLabel}
                                </span>
                            </div>
                            {/* Terminal Body */}
                            <div className="p-5 font-mono text-sm space-y-3">
                                {tech.lumis.specs.map((spec: string, i: number) => (
                                    <div key={i} className="flex items-center gap-3 group/item">
                                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${i === 0 ? 'bg-[var(--color-success)] animate-pulse' : i === 1 ? 'bg-[var(--accent-teal)]' : 'bg-[var(--accent-blue)]'}`}></span>
                                        <span className="text-[var(--text-primary)] group-hover/item:text-[var(--accent-teal)] transition-colors duration-200">
                                            {spec}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
