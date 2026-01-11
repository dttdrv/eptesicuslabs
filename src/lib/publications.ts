import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import readingTime from 'reading-time';

// Types
export type PublicationCategory = 'research' | 'case-study' | 'news' | 'announcement';
export type Language = 'en' | 'de' | 'bg' | 'el' | 'it';

export interface PublicationFrontmatter {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    category: PublicationCategory;
    tags: string[];
    featured: boolean;
    coverImage?: string;
    published: boolean;
}

export interface Publication extends PublicationFrontmatter {
    content: string;
    htmlContent: string;
    readingTime: number;
    language: Language;
}

export interface PublicationSummary extends PublicationFrontmatter {
    readingTime: number;
    language: Language;
}

// Constants
const CONTENT_DIR = path.join(process.cwd(), 'content', 'publications');
const DEFAULT_LANGUAGE: Language = 'en';

// Get all publication slugs (for generateStaticParams)
export function getAllPublicationSlugs(): string[] {
    const enDir = path.join(CONTENT_DIR, 'en');
    if (!fs.existsSync(enDir)) return [];

    return fs.readdirSync(enDir)
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const content = fs.readFileSync(path.join(enDir, file), 'utf8');
            const { data } = matter(content);
            return data.slug as string;
        })
        .filter(Boolean);
}

// Get publication by slug and language
export async function getPublication(
    slug: string,
    language: Language = DEFAULT_LANGUAGE
): Promise<Publication | null> {
    const langDir = path.join(CONTENT_DIR, language);
    const enDir = path.join(CONTENT_DIR, 'en');

    let filePath: string | null = null;
    let actualLanguage = language;

    // Find file in language directory
    if (fs.existsSync(langDir)) {
        const files = fs.readdirSync(langDir);
        const file = files.find(f => {
            if (!f.endsWith('.md')) return false;
            const content = fs.readFileSync(path.join(langDir, f), 'utf8');
            const { data } = matter(content);
            return data.slug === slug;
        });
        if (file) filePath = path.join(langDir, file);
    }

    // Fallback to English
    if (!filePath && language !== 'en' && fs.existsSync(enDir)) {
        const files = fs.readdirSync(enDir);
        const file = files.find(f => {
            if (!f.endsWith('.md')) return false;
            const content = fs.readFileSync(path.join(enDir, f), 'utf8');
            const { data } = matter(content);
            return data.slug === slug;
        });
        if (file) {
            filePath = path.join(enDir, file);
            actualLanguage = 'en';
        }
    }

    if (!filePath) return null;

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // Process markdown to HTML
    const processedContent = await remark()
        .use(gfm)
        .use(html)
        .process(content);

    const stats = readingTime(content);

    return {
        ...(data as PublicationFrontmatter),
        content,
        htmlContent: processedContent.toString(),
        readingTime: Math.ceil(stats.minutes),
        language: actualLanguage,
    };
}

// Get all publications (summaries only, for listing)
export function getAllPublications(
    language: Language = DEFAULT_LANGUAGE,
    options: {
        category?: PublicationCategory;
        featured?: boolean;
        limit?: number;
    } = {}
): PublicationSummary[] {
    const langDir = path.join(CONTENT_DIR, language);
    const enDir = path.join(CONTENT_DIR, 'en');

    const targetDir = fs.existsSync(langDir) ? langDir : enDir;
    if (!fs.existsSync(targetDir)) return [];

    let publications = fs.readdirSync(targetDir)
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const content = fs.readFileSync(path.join(targetDir, file), 'utf8');
            const { data, content: markdown } = matter(content);
            const stats = readingTime(markdown);

            return {
                ...(data as PublicationFrontmatter),
                readingTime: Math.ceil(stats.minutes),
                language: fs.existsSync(langDir) ? language : 'en',
            } as PublicationSummary;
        })
        .filter(pub => pub.published);

    // Apply filters
    if (options.category) {
        publications = publications.filter(p => p.category === options.category);
    }
    if (options.featured !== undefined) {
        publications = publications.filter(p => p.featured === options.featured);
    }

    // Sort by date (newest first)
    publications.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Apply limit
    if (options.limit) {
        publications = publications.slice(0, options.limit);
    }

    return publications;
}

// Get all categories with counts
export function getCategories(language: Language = DEFAULT_LANGUAGE):
    { category: PublicationCategory; count: number }[] {
    const all = getAllPublications(language);
    const counts = new Map<PublicationCategory, number>();

    all.forEach(pub => {
        counts.set(pub.category, (counts.get(pub.category) || 0) + 1);
    });

    return Array.from(counts.entries())
        .map(([category, count]) => ({ category, count }))
        .sort((a, b) => b.count - a.count);
}
