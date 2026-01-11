'use client';

import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useContactModal } from '@/components/providers/ContactModalProvider';

export default function CurrentWork() {
    const { t } = useLanguage();
    const { open } = useContactModal();
    const tech = t.technology;

    return (
        <section id="technology" className="section px-[var(--space-5)] relative border-b border-[var(--border-default)]">
            <div className="container-wide relative z-10">

                {/* Section Header */}
                <div className="text-center mb-[var(--space-9)] stack-sm">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="text-label-accent"
                    >
                        {tech.header}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
                        className="text-h2 max-w-[var(--container-content)] mx-auto"
                    >
                        {tech.subheader}
                    </motion.p>
                </div>

                {/* Lumis-1 Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                    className="card-glass"
                >
                    <div className="flex flex-col md:flex-row gap-[var(--space-9)] items-start">
                        {/* Product Info */}
                        <div className="flex-1 stack-md text-center md:text-left">
                            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-[var(--space-4)]">
                                <h3 className="text-h1">{tech.lumis.name}</h3>
                                <span className="text-label-accent">{tech.lumis.status}</span>
                            </div>
                            <p className="text-body">
                                {tech.lumis.desc}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-[var(--space-4)] pt-[var(--space-4)]">
                                <button
                                    type="button"
                                    onClick={() => open('Request Pitch Deck')}
                                    className="btn btn-primary"
                                >
                                    <FileText size={18} />
                                    {tech.lumis.pitchDeck}
                                    <ArrowRight size={16} />
                                </button>
                                <a
                                    href="/documents/Eptesicus_Labs_Long_Term_Business_Plan.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    <FileText size={18} />
                                    {tech.lumis.businessPlan}
                                </a>
                            </div>
                        </div>

                        {/* Technical Specs Card */}
                        <div className="w-full md:w-72 card-terminal">
                            <div className="card-terminal-header">
                                <div className="card-terminal-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="text-label ml-[var(--space-2)]">
                                    {tech.lumis.specsLabel}
                                </span>
                            </div>
                            <div className="card-terminal-body stack-sm">
                                {tech.lumis.specs.map((spec: string, i: number) => (
                                    <div key={i} className="flex items-center gap-[var(--space-3)]">
                                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${i === 0 ? 'bg-[var(--success)]' : 'bg-[var(--accent)]'}`}></span>
                                        <span className="text-[var(--text-primary)]">{spec}</span>
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
