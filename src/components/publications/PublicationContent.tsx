'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Publication } from '@/lib/publications';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GradientBackground from '@/components/ui/GradientBackground';

interface PublicationContentProps {
    publication: Publication;
}

export default function PublicationContent({ publication }: PublicationContentProps) {
    const { t } = useLanguage();

    const categoryLabels: Record<string, string> = {
        research: t.publications?.categories?.research || 'Research',
        'case-study': t.publications?.categories?.caseStudy || 'Case Study',
        news: t.publications?.categories?.news || 'News',
        announcement: t.publications?.categories?.announcement || 'Announcement',
    };

    const categoryColors: Record<string, { bg: string; text: string }> = {
        research: { bg: 'bg-blue-50', text: 'text-blue-600' },
        'case-study': { bg: 'bg-emerald-50', text: 'text-emerald-600' },
        news: { bg: 'bg-amber-50', text: 'text-amber-600' },
        announcement: { bg: 'bg-violet-50', text: 'text-violet-600' },
    };

    const colors = categoryColors[publication.category] || categoryColors.research;

    const formattedDate = new Date(publication.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const handleShare = async () => {
        if (typeof window !== 'undefined' && navigator.share) {
            try {
                await navigator.share({
                    title: publication.title,
                    url: window.location.href
                });
            } catch {
                // User cancelled or share failed
            }
        }
    };

    return (
        <div className="min-h-screen relative overflow-x-hidden">
            <GradientBackground />

            <main id="main-content" className="relative z-10">
                <Navbar />

                {/* Back Navigation */}
                <div className="pt-[calc(var(--space-10)+var(--space-6))] pb-[var(--space-5)] px-[var(--space-5)]">
                    <div className="container-content">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <Link
                                href="/publications/"
                                className="inline-flex items-center gap-[var(--space-2)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">{t.publications?.backToList || 'Back to Publications'}</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Article Header */}
                <article className="px-[var(--space-5)] pb-[var(--space-10)]">
                    <div className="container-content">
                        {/* Category */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                            className="mb-[var(--space-5)]"
                        >
                            <span className={`inline-block px-[var(--space-3)] py-[6px] rounded-full ${colors.bg} ${colors.text} text-xs font-semibold uppercase tracking-wider`}>
                                {categoryLabels[publication.category]}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                            className="text-display mb-[var(--space-6)]"
                        >
                            {publication.title}
                        </motion.h1>

                        {/* Description/Lead */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                            className="text-xl leading-relaxed text-[var(--text-secondary)] mb-[var(--space-8)] max-w-[640px]"
                        >
                            {publication.description}
                        </motion.p>

                        {/* Meta bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
                            className="flex flex-wrap items-center justify-between gap-[var(--space-4)] py-[var(--space-5)] border-y border-[var(--border-default)] mb-[var(--space-8)]"
                        >
                            <div className="flex flex-wrap items-center gap-[var(--space-6)]">
                                {/* Company Attribution */}
                                <div className="flex items-center gap-[var(--space-3)]">
                                    <div className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-default)] flex items-center justify-center">
                                        <Image
                                            src="/images/logo.png"
                                            alt="Eptesicus Labs"
                                            width={22}
                                            height={22}
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-[var(--text-primary)]">
                                            Eptesicus Laboratories
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block w-px h-5 bg-[var(--border-default)]" />

                                {/* Date */}
                                <div className="flex items-center gap-[var(--space-2)] text-[var(--text-tertiary)]">
                                    <Calendar size={15} strokeWidth={1.5} />
                                    <span className="text-sm">{formattedDate}</span>
                                </div>

                                {/* Reading Time */}
                                <div className="flex items-center gap-[var(--space-2)] text-[var(--text-tertiary)]">
                                    <Clock size={15} strokeWidth={1.5} />
                                    <span className="text-sm">
                                        {publication.readingTime} {t.publications?.minRead || 'min read'}
                                    </span>
                                </div>
                            </div>

                            {/* Share button */}
                            <button
                                onClick={handleShare}
                                className="btn btn-secondary btn-sm"
                            >
                                <Share2 size={15} />
                                {t.publications?.share || 'Share'}
                            </button>
                        </motion.div>

                        {/* Cover Image */}
                        {publication.coverImage && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                                className="relative aspect-[21/9] rounded-[var(--radius-2xl)] overflow-hidden mb-[var(--space-9)]"
                            >
                                <Image
                                    src={publication.coverImage}
                                    alt={publication.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        )}

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: publication.htmlContent }}
                        />
                    </div>
                </article>

                <Footer />
            </main>
        </div>
    );
}
