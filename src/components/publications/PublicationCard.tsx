'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { PublicationSummary } from '@/lib/publications';

interface PublicationCardProps {
    publication: PublicationSummary;
    index?: number;
    variant?: 'default' | 'featured';
}

export default function PublicationCard({
    publication,
    index = 0,
    variant = 'default'
}: PublicationCardProps) {
    const { t } = useLanguage();

    const categoryLabels: Record<string, string> = {
        research: t.publications?.categories?.research || 'Research',
        'case-study': t.publications?.categories?.caseStudy || 'Case Study',
        news: t.publications?.categories?.news || 'News',
        announcement: t.publications?.categories?.announcement || 'Announcement',
    };

    const categoryStyles: Record<string, { bg: string; text: string }> = {
        research: { bg: 'var(--category-research-bg)', text: 'var(--category-research-text)' },
        'case-study': { bg: 'var(--category-case-study-bg)', text: 'var(--category-case-study-text)' },
        news: { bg: 'var(--category-news-bg)', text: 'var(--category-news-text)' },
        announcement: { bg: 'var(--category-announcement-bg)', text: 'var(--category-announcement-text)' },
    };

    const colors = categoryStyles[publication.category] || categoryStyles.research;

    const formattedDate = new Date(publication.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    if (variant === 'featured') {
        return (
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
                <Link
                    href={`/publications/${publication.slug}/`}
                    className="group block card-glass overflow-hidden"
                >
                    <div className="md:flex md:gap-[var(--space-7)]">
                        {/* Cover Image */}
                        {publication.coverImage && (
                            <div className="relative w-full md:w-2/5 aspect-[16/10] md:aspect-auto md:min-h-[280px] overflow-hidden">
                                <Image
                                    src={publication.coverImage}
                                    alt={publication.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        )}

                        <div className="flex-1 p-[var(--space-6)] md:py-[var(--space-7)] flex flex-col">
                            {/* Category Badge */}
                            <div className="mb-[var(--space-4)]">
                                <span
                                    className="inline-block px-[var(--space-3)] py-[6px] rounded-full text-xs font-semibold uppercase tracking-wider"
                                    style={{ backgroundColor: colors.bg, color: colors.text }}
                                >
                                    {categoryLabels[publication.category]}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-h1 mb-[var(--space-4)] card-title-hover">
                                {publication.title}
                            </h3>

                            {/* Description */}
                            <p className="text-body mb-[var(--space-5)] line-clamp-2 text-[var(--text-secondary)]">
                                {publication.description}
                            </p>

                            {/* Meta - Spacer to push to bottom */}
                            <div className="mt-auto pt-[var(--space-4)] border-t border-[var(--border-default)]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-[var(--space-4)] text-[var(--text-tertiary)]">
                                        <div className="flex items-center gap-[var(--space-2)]">
                                            <Calendar size={14} strokeWidth={1.5} />
                                            <span className="text-sm">{formattedDate}</span>
                                        </div>
                                        <div className="flex items-center gap-[var(--space-2)]">
                                            <Clock size={14} strokeWidth={1.5} />
                                            <span className="text-sm">
                                                {publication.readingTime} {t.publications?.minRead || 'min'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[var(--space-1)] text-[var(--accent)] font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>{t.publications?.readMore || 'Read'}</span>
                                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.article>
        );
    }

    // Default card variant - Clean glass design
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
            className="h-full"
        >
            <Link
                href={`/publications/${publication.slug}/`}
                className="group block h-full card-glass card-interactive overflow-hidden"
            >
                <div className="p-[var(--space-5)] flex flex-col h-full">
                    {/* Category Badge */}
                    <span
                        className="inline-block self-start px-[var(--space-3)] py-[5px] rounded-full text-xs font-semibold uppercase tracking-wider mb-[var(--space-4)]"
                        style={{ backgroundColor: colors.bg, color: colors.text }}
                    >
                        {categoryLabels[publication.category]}
                    </span>

                    {/* Title */}
                    <h3 className="text-h3 mb-[var(--space-3)] card-title-hover line-clamp-2">
                        {publication.title}
                    </h3>

                    {/* Description */}
                    <p className="text-body-sm text-[var(--text-secondary)] line-clamp-2 flex-grow">
                        {publication.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-[var(--space-3)] text-[var(--text-tertiary)] text-xs mt-[var(--space-4)] pt-[var(--space-4)] border-t border-[var(--border-default)]">
                        <span>{formattedDate}</span>
                        <span className="text-[var(--border-strong)]">·</span>
                        <span>{publication.readingTime} {t.publications?.minRead || 'min'}</span>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
