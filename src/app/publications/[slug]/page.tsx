import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllPublicationSlugs, getPublication } from '@/lib/publications';
import PublicationContent from '@/components/publications/PublicationContent';

export async function generateStaticParams() {
    const slugs = getAllPublicationSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const publication = await getPublication(slug);

    if (!publication) {
        return { title: 'Publication Not Found' };
    }

    return {
        title: `${publication.title} | Eptesicus Laboratories`,
        description: publication.description,
        openGraph: {
            title: publication.title,
            description: publication.description,
            type: 'article',
            publishedTime: publication.date,
            authors: [publication.author],
        },
    };
}

export default async function PublicationPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const publication = await getPublication(slug);

    if (!publication) {
        notFound();
    }

    return <PublicationContent publication={publication} />;
}
