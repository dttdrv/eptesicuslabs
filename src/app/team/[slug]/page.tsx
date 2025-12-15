import { notFound } from 'next/navigation';
import { TEAM_MEMBERS } from '@/lib/team-data';
import TeamMemberContent from '@/components/team/TeamMemberContent';

export async function generateStaticParams() {
    return Object.keys(TEAM_MEMBERS).map((slug) => ({
        slug: slug,
    }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Validate slug exists (even though generateStaticParams handles generation, dynamic access needs check)
    if (!TEAM_MEMBERS[slug]) {
        notFound();
    }

    return <TeamMemberContent slug={slug} />;
}
