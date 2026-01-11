'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { PublicationCategory } from '@/lib/publications';

interface CategoryFilterProps {
    categories: { category: PublicationCategory; count: number }[];
    activeCategory: PublicationCategory | null;
    onCategoryChange: (category: PublicationCategory | null) => void;
}

export default function CategoryFilter({
    categories,
    activeCategory,
    onCategoryChange
}: CategoryFilterProps) {
    const { t } = useLanguage();

    const categoryLabels: Record<string, string> = {
        all: t.publications?.categories?.all || 'All',
        research: t.publications?.categories?.research || 'Research',
        'case-study': t.publications?.categories?.caseStudy || 'Case Study',
        news: t.publications?.categories?.news || 'News',
        announcement: t.publications?.categories?.announcement || 'Announcement',
    };

    const totalCount = categories.reduce((sum, c) => sum + c.count, 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="tabs"
        >
            {/* All */}
            <button
                onClick={() => onCategoryChange(null)}
                className={`tab ${activeCategory === null ? 'tab-active' : ''}`}
            >
                {categoryLabels.all} ({totalCount})
            </button>

            {/* Individual categories */}
            {categories.map(({ category, count }) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`tab ${activeCategory === category ? 'tab-active' : ''}`}
                >
                    {categoryLabels[category]} ({count})
                </button>
            ))}
        </motion.div>
    );
}
