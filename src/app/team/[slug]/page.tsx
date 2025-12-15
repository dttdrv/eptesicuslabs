'use client';

import { notFound } from 'next/navigation';
import { TEAM_MEMBERS } from '@/lib/team-data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import React from 'react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = React.use(params);
    const slug = resolvedParams.slug;
    const member = TEAM_MEMBERS[slug];
    const { t } = useLanguage();

    if (!member) {
        notFound();
    }

    const role = slug === 'deyan-todorov' ? t.about.roles.deyan : (slug === 'iliyan-bozhanov' ? t.about.roles.iliyan : member.role);

    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-[var(--color-eptesicus-white)] transition-colors">
            <div className="fluid-container max-w-4xl mx-auto">

                {/* Back Link */}
                <Link href="/#about" className="inline-flex items-center gap-2 text-[var(--color-eptesicus-gray)] hover:text-[var(--color-eptesicus-blue)] transition-colors mb-12 group">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2D6CDF] transition-colors">← {t.team.back}</span>
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Visual / Sidebar */}
                    <div className="md:col-span-1">
                        {/* Animated Hero Image */}
                        <motion.div
                            layoutId={`image-${slug}`}
                            className="w-48 h-48 md:w-full md:aspect-square bg-gray-200 rounded-full md:rounded-lg mb-8 mx-auto md:mx-0 shadow-lg transition-colors"
                        />

                        <div className="space-y-6 text-center md:text-left">
                            <div>
                                <h1 className="text-2xl font-bold text-[var(--color-eptesicus-black)] transition-colors">{member.name}</h1>
                                <p className="text-[var(--color-eptesicus-blue)] font-medium transition-colors">{role}</p>
                            </div>

                            {/* Social Signals */}
                            <div className="flex items-center justify-center md:justify-start gap-4">
                                {member.socials.github && (
                                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-eptesicus-gray)] hover:text-[var(--color-eptesicus-black)] transition-colors">
                                        <Github size={20} />
                                    </a>
                                )}
                                {member.socials.twitter && (
                                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[var(--color-eptesicus-gray)] hover:text-[var(--color-eptesicus-black)] transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                )}
                                {member.socials.instagram && (
                                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--color-eptesicus-gray)] hover:text-[var(--color-eptesicus-black)] transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                )}
                                {member.socials.linkedin && (
                                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-eptesicus-gray)] hover:text-[var(--color-eptesicus-black)] transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                )}
                                {member.socials.email && (
                                    <a href={member.socials.email} className="text-[var(--color-eptesicus-gray)] hover:text-[var(--color-eptesicus-black)] transition-colors">
                                        <Mail size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 space-y-12">
                        {/* Narrative */}
                        <section className="prose prose-gray max-w-none">
                            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-eptesicus-blue)] mb-4 transition-colors">
                                {t.team.narrative}
                            </h2>
                            <p className="text-xl md:text-2xl text-[var(--color-eptesicus-black)] font-light leading-relaxed transition-colors">
                                "{member.narrative}"
                            </p>
                            <p className="text-[var(--color-eptesicus-gray)] mt-6 text-lg leading-relaxed transition-colors">
                                {member.bio}
                            </p>
                        </section>

                        {/* The Stack */}
                        <section>
                            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-eptesicus-blue)] mb-6 transition-colors">
                                {t.team.stack}
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {member.stack.map((item, i) => (
                                    <span key={i} className="px-3 py-1.5 border border-[var(--color-eptesicus-border)] bg-white text-[var(--color-eptesicus-black)] font-mono text-sm rounded-sm transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    );
}
