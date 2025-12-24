'use client';

import { TEAM_MEMBERS } from '@/lib/team-data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, Instagram, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';
import GradientBackground from '@/components/ui/GradientBackground';

export default function TeamMemberContent({ slug }: { slug: string }) {
    const member = TEAM_MEMBERS[slug];
    const { t } = useLanguage();

    if (!member) {
        return null;
    }

    const role = slug === 'deyan-todorov' ? t.about?.roles?.deyan : (slug === 'iliyan-bozhanov' ? t.about?.roles?.iliyan : member.role);

    return (
        <div className="min-h-screen relative">
            {/* Gradient Background */}
            <GradientBackground />

            {/* Content */}
            <div className="relative z-10">
                {/* Hero Section */}
                <div className="pt-24 pb-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* Back Link - Glassmorphism pill */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <Link
                                href="/#team"
                                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-gray-500 hover:text-gray-900 transition-all duration-300 group"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(16px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                }}
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                                <span className="text-xs font-mono uppercase tracking-[0.15em]">{t.team?.back || 'Back to Team'}</span>
                            </Link>
                        </motion.div>

                        {/* Profile Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            className="mt-12 flex flex-col md:flex-row items-center md:items-start gap-8"
                        >
                            {/* Avatar - Glassmorphism */}
                            <motion.div
                                layoutId={`image-${slug}`}
                                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl flex-shrink-0"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.15) 100%)',
                                    backdropFilter: 'blur(8px)',
                                    WebkitBackdropFilter: 'blur(8px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                }}
                            />

                            {/* Name & Role */}
                            <div className="text-center md:text-left flex-1">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-3 tracking-tight">
                                    {member.name}
                                </h1>
                                <p className="text-base md:text-lg text-blue-500 font-medium mb-6">{role}</p>

                                {/* Social Links - Glassmorphism pills */}
                                <div className="flex items-center justify-center md:justify-start gap-2">
                                    {member.socials.github && (
                                        <a
                                            href={member.socials.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 transition-all duration-300"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.6)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                            }}
                                        >
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a
                                            href={member.socials.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 transition-all duration-300"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.6)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                            }}
                                        >
                                            <Twitter size={18} />
                                        </a>
                                    )}
                                    {member.socials.instagram && (
                                        <a
                                            href={member.socials.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 transition-all duration-300"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.6)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                            }}
                                        >
                                            <Instagram size={18} />
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a
                                            href={member.socials.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 transition-all duration-300"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.6)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                            }}
                                        >
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                    {member.socials.email && (
                                        <a
                                            href={member.socials.email}
                                            className="p-2.5 rounded-full text-gray-400 hover:text-gray-700 transition-all duration-300"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.6)',
                                                backdropFilter: 'blur(12px)',
                                                WebkitBackdropFilter: 'blur(12px)',
                                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                            }}
                                        >
                                            <Mail size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="px-6 pb-24">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                            className="rounded-2xl overflow-hidden"
                            style={{
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            {/* Quote Card */}
                            <div className="p-8 md:p-12 border-b border-gray-100/50">
                                <p className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed">
                                    "{member.narrative}"
                                </p>
                            </div>

                            {/* Bio Section */}
                            <div className="p-8 md:p-12">
                                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-4">
                                    About
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
