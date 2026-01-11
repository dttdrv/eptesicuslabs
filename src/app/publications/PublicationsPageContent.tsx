'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GradientBackground from '@/components/ui/GradientBackground';
import PublicationCard from '@/components/publications/PublicationCard';
import CategoryFilter from '@/components/publications/CategoryFilter';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { PublicationSummary, PublicationCategory } from '@/lib/publications';

interface PublicationsPageContentProps {
    initialPublications: PublicationSummary[];
    categories: { category: PublicationCategory; count: number }[];
}

export default function PublicationsPageContent({
    initialPublications,
    categories
}: PublicationsPageContentProps) {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<PublicationCategory | null>(null);

    const filteredPublications = useMemo(() => {
        if (!activeCategory) return initialPublications;
        return initialPublications.filter(p => p.category === activeCategory);
    }, [initialPublications, activeCategory]);

    return (
        <div className="min-h-screen relative overflow-x-hidden">
            <GradientBackground />

            <main id="main-content" className="relative z-10">
                <Navbar />

                {/* Back to Home */}
                <div className="pt-[calc(var(--space-10)+var(--space-6))] pb-[var(--space-4)] px-[var(--space-5)]">
                    <div className="container-wide">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <Link
                                href="/"
                                className="inline-flex items-center gap-[var(--space-2)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">{t.publications?.backToHome || 'Back to Home'}</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Hero Header */}
                <section className="pb-[var(--space-8)] px-[var(--space-5)]">
                    <div className="container-wide">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="text-center"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                                className="text-label-accent mb-[var(--space-4)] block"
                            >
                                {t.publications?.label || 'PUBLICATIONS'}
                            </motion.span>
                            <h1 className="text-display mb-[var(--space-5)]">
                                {t.publications?.pageTitle || 'Publications'}
                            </h1>
                            <p className="text-body max-w-[600px] mx-auto text-[var(--text-secondary)]">
                                {t.publications?.pageDescription || 'Research, case studies, and insights on on-device AI and reliability engineering.'}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Filter */}
                {categories.length > 0 && (
                    <section className="pb-[var(--space-8)] px-[var(--space-5)]">
                        <div className="container-wide">
                            <CategoryFilter
                                categories={categories}
                                activeCategory={activeCategory}
                                onCategoryChange={setActiveCategory}
                            />
                        </div>
                    </section>
                )}

                {/* Publications Grid */}
                <section className="pb-[var(--space-10)] px-[var(--space-5)]">
                    <div className="container-wide">
                        <AnimatePresence mode="wait">
                            {filteredPublications.length > 0 ? (
                                <motion.div
                                    key={activeCategory || 'all'}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-6)]"
                                >
                                    {filteredPublications.map((pub, index) => (
                                        <PublicationCard
                                            key={pub.slug}
                                            publication={pub}
                                            index={index}
                                        />
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-[var(--space-10)]"
                                >
                                    <p className="text-body text-[var(--text-secondary)]">
                                        {t.publications?.noResults || 'No publications found in this category.'}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}
