'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function TeamSection() {
    const { t } = useLanguage();

    return (
        <section id="team" className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
                            {t.team?.label || 'Our Team'}
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
                            {t.team?.headline || 'Leadership'}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                        {/* Deyan Todorov */}
                        <Link
                            href="/team/deyan-todorov"
                            className="group p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(16px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200" />
                                <div>
                                    <h5 className="text-gray-900 font-medium group-hover:text-blue-500 transition-colors">
                                        Deyan Todorov
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {t.about?.roles?.deyan || 'Founder & Operator'}
                                    </p>
                                </div>
                            </div>
                        </Link>

                        {/* Iliyan Bozhanov */}
                        <Link
                            href="/team/iliyan-bozhanov"
                            className="group p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                background: 'rgba(255, 255, 255, 0.7)',
                                backdropFilter: 'blur(16px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                            }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200" />
                                <div>
                                    <h5 className="text-gray-900 font-medium group-hover:text-blue-500 transition-colors">
                                        Iliyan Bozhanov
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {t.about?.roles?.iliyan || 'Co-Founder & CTO'}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
