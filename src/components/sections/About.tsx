'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 px-6 relative border-b border-[var(--color-eptesicus-border)] transition-colors">
            <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />
            <div className="fluid-container max-w-5xl mx-auto space-y-24">

                {/* Intro */}
                <div className="text-center space-y-8 max-w-3xl mx-auto">
                    <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[var(--color-eptesicus-blue)] transition-colors">
                        {t.about.label}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-balance text-black transition-colors">
                        {t.about.headline}
                    </h3>
                    <div className="space-y-6 text-lg text-[var(--color-eptesicus-gray)] leading-relaxed text-balance transition-colors">
                        <p>
                            {t.about.intro1}
                        </p>
                        <p>
                            {t.about.intro2}
                        </p>
                    </div>
                </div>

                {/* The Problem */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[var(--color-eptesicus-border)] pt-12 transition-colors">
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-[var(--color-eptesicus-black)] transition-colors">
                            {t.about.problemLabel}
                        </h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-xl md:text-2xl font-light text-[var(--color-eptesicus-black)] leading-relaxed transition-colors">
                            {t.about.problemBody}
                        </p>
                    </div>
                </div>

                {/* Our Approach */}
                <div className="border-t border-[var(--color-eptesicus-border)] pt-12 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12">
                        <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-[var(--color-eptesicus-black)] mb-4 md:mb-0 transition-colors">
                            {t.about.approachLabel}
                        </h4>
                        <p className="text-xl font-bold text-[var(--color-eptesicus-black)] transition-colors">
                            {t.about.approachTagline}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.about.grid.map((item, i) => (
                            <div key={i} className="glass-card p-6 space-y-4">
                                <div className="font-mono text-xs text-[var(--color-eptesicus-blue)] uppercase tracking-wide transition-colors">
                                    {`0${i + 1} // ${item.title}`}
                                </div>
                                <p className="text-sm text-[var(--color-eptesicus-black)] leading-relaxed transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vision */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[var(--color-eptesicus-border)] pt-12 transition-colors">
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-[var(--color-eptesicus-black)] transition-colors">
                            {t.about.visionLabel}
                        </h4>
                    </div>
                    <div className="md:col-span-9">
                        <p className="text-lg text-[var(--color-eptesicus-gray)] leading-relaxed transition-colors">
                            {t.about.visionBody}
                        </p>
                    </div>
                </div>

                {/* Leadership */}
                <div className="border-t border-[var(--color-eptesicus-border)] pt-12 space-y-12 transition-colors">
                    <blockquote className="max-w-4xl mx-auto text-center text-xl md:text-2xl font-medium italic text-[var(--color-eptesicus-black)] transition-colors">
                        {t.about.leadershipQuote}
                    </blockquote>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {/* Deyan Todorov */}
                        <Link href="/team/deyan-todorov" className="glass-card card-hover group p-6 relative block">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-eptesicus-blue)]">
                                <ArrowUpRight size={20} />
                            </div>
                            <motion.div layoutId="image-deyan-todorov" className="w-12 h-12 bg-gray-200 rounded-full mb-4 group-hover:scale-105 transition-transform" />
                            <h5 className="text-[var(--color-eptesicus-black)] font-bold group-hover:text-[var(--color-eptesicus-blue)] transition-colors">
                                Deyan Todorov
                            </h5>
                            <p className="text-xs font-mono text-[var(--color-eptesicus-gray)] uppercase tracking-wide mt-1">
                                {t.about.roles.deyan}
                            </p>
                        </Link>

                        {/* Iliyan Bozhanov */}
                        <Link href="/team/iliyan-bozhanov" className="glass-card card-hover group p-6 relative block">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-eptesicus-blue)]">
                                <ArrowUpRight size={20} />
                            </div>
                            <motion.div layoutId="image-iliyan-bozhanov" className="w-12 h-12 bg-gray-200 rounded-full mb-4 group-hover:scale-105 transition-transform" />
                            <h5 className="text-[var(--color-eptesicus-black)] font-bold group-hover:text-[var(--color-eptesicus-blue)] transition-colors">
                                Iliyan Bozhanov
                            </h5>
                            <p className="text-xs font-mono text-[var(--color-eptesicus-gray)] uppercase tracking-wide mt-1">
                                {t.about.roles.iliyan}
                            </p>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
