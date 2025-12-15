import { ImageResponse } from 'next/og';
import { TEAM_MEMBERS } from '@/lib/team-data';

export const dynamic = 'force-static';

export async function generateStaticParams() {
    return Object.keys(TEAM_MEMBERS).map((slug) => ({
        slug: slug,
    }));
}

export const alt = 'Eptesicus Labs Team Profile';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const member = TEAM_MEMBERS[slug];

    if (!member) {
        return new ImageResponse(
            (
                <div
                    style={{
                        fontSize: 48,
                        background: 'white',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    Team Member Not Found
                </div>
            ),
            { ...size }
        );
    }

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#F7F7F7',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    border: '20px solid #E5E5E5',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ fontSize: 80, fontWeight: 'bold', color: '#000000', marginBottom: 20 }}>
                        {member.name}
                    </h1>
                    <h2 style={{ fontSize: 40, color: '#2D6CDF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {member.role}
                    </h2>
                    <div style={{ marginTop: 60, display: 'flex', alignItems: 'center', gap: 20 }}>
                        <div style={{ width: 40, height: 40, background: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>E</div>
                        <div style={{ fontSize: 30, color: '#4B5563' }}>Eptesicus Labs</div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
