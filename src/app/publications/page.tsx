import { Metadata } from 'next';
import { getAllPublications, getCategories } from '@/lib/publications';
import PublicationsPageContent from './PublicationsPageContent';

export const metadata: Metadata = {
    title: 'Publications | Eptesicus Laboratories',
    description: 'Research, case studies, and insights on on-device AI and reliability engineering.',
};

export default function PublicationsPage() {
    const publications = getAllPublications('en');
    const categories = getCategories('en');

    return (
        <PublicationsPageContent
            initialPublications={publications}
            categories={categories}
        />
    );
}
