'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import PublicationCard from '@/components/publications/PublicationCard';
import { PublicationSummary } from '@/lib/publications';

interface PublicationsSectionProps {
    publications: PublicationSummary[];
}

export default function PublicationsSection({ publications }: PublicationsSectionProps) {
    const { t } = useLanguage();

    if (publications.length === 0) return null;

    return (
        <section id="publications" className="section px-[var(--space-5)] relative">
            <div className="container-wide">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="stack-lg"
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-[var(--space-4)]">
                        <div className="stack-sm">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
                                className="text-label-accent"
                            >
                                {t.publications?.label || 'PUBLICATIONS'}
                            </motion.span>
                            <h2 className="text-h1">
                                {t.publications?.headline || 'Latest Insights'}
                            </h2>
                        </div>

                        <Link
                            href="/publications/"
                            className="inline-flex items-center gap-[var(--space-2)] text-[var(--accent)] font-medium group self-start sm:self-auto"
                        >
                            <span>{t.publications?.viewAll || 'View all'}</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Publications Grid - Show first 3 in grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-6)]">
                        {publications.slice(0, 3).map((pub, index) => (
                            <PublicationCard
                                key={pub.slug}
                                publication={pub}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
