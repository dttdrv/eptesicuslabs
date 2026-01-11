'use client';

import { TEAM_MEMBERS } from '@/lib/team-data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Github, Mail, ArrowLeft, Globe } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { useContactModal } from '@/components/providers/ContactModalProvider';
import GradientBackground from '@/components/ui/GradientBackground';

export default function TeamMemberContent({ slug }: { slug: string }) {
    const member = TEAM_MEMBERS[slug];
    const { t } = useLanguage();
    const { open: openContact } = useContactModal();

    if (!member) {
        return null;
    }

    const role = slug === 'deyan-todorov'
        ? t.about?.roles?.deyan
        : (slug === 'iliyan-bozhanov' ? t.about?.roles?.iliyan : member.role);

    return (
        <div className="min-h-screen relative">
            <GradientBackground />

            <div className="relative z-10">
                {/* Navigation */}
                <div className="pt-[var(--space-9)] pb-[var(--space-5)] px-[var(--space-5)]">
                    <div className="container-content">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <Link
                                href="/#team"
                                className="inline-flex items-center gap-[var(--space-2)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Back to Team</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="px-[var(--space-5)] pb-[var(--space-10)]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                        className="container-content"
                    >
                        <div className="card-glass p-[var(--space-7)] md:p-[var(--space-8)]">
                            {/* Profile Header */}
                            <div className="flex flex-col md:flex-row md:items-start gap-[var(--space-6)] mb-[var(--space-7)]">
                                {/* Avatar/Image */}
                                <div className="flex-shrink-0 mx-auto md:mx-0">
                                    {member.image ? (
                                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-[var(--border-default)]">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={112}
                                                height={112}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[var(--accent-light)] to-[var(--bg-secondary)] border border-[var(--border-default)] flex items-center justify-center">
                                            <span className="text-2xl md:text-3xl font-medium text-[var(--accent)]">
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Name & Role */}
                                <div className="text-center md:text-left flex-1">
                                    <h1 className="text-h1 mb-[var(--space-2)]">{member.name}</h1>
                                    <p className="text-body-sm text-[var(--text-tertiary)] mb-[var(--space-4)]">{role}</p>

                                    {/* Social Links */}
                                    <div className="flex items-center justify-center md:justify-start gap-[var(--space-2)]">
                                        {member.socials.website && (
                                            <a
                                                href={member.socials.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-link"
                                                title="Website"
                                            >
                                                <Globe size={18} />
                                            </a>
                                        )}
                                        {member.socials.github && (
                                            <a
                                                href={member.socials.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-link"
                                                title="GitHub"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {member.socials.email && (
                                            <button
                                                type="button"
                                                onClick={() => openContact(`Contact - ${member.name}`)}
                                                className="social-link"
                                                title="Email"
                                            >
                                                <Mail size={18} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="divider mb-[var(--space-6)]" />

                            {/* Narrative Quote */}
                            <blockquote className="mb-[var(--space-6)]">
                                <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed italic">
                                    "{member.narrative}"
                                </p>
                            </blockquote>

                            {/* Bio */}
                            <p className="text-body text-[var(--text-secondary)]">
                                {member.bio}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
