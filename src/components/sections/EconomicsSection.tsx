'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { TrendingUp, Minus, Cloud, Cpu } from 'lucide-react';

export default function EconomicsSection() {
    const { t } = useLanguage();

    return (
        <section id="economics" className="py-24 px-6 relative border-b border-[var(--border-default)] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none" />

            <div className="fluid-container max-w-6xl mx-auto space-y-16 relative z-10">

                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-mono font-bold uppercase tracking-widest text-[var(--accent-blue)]"
                    >
                        {t.economics?.label}
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]"
                    >
                        {t.economics?.headline}
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Cloud AI Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card p-6 md:p-8 space-y-5 border-[#EF4444]/20 hover:border-[#EF4444]/40 transition-all duration-300 group"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-lg bg-[#EF4444]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <Cloud size={22} className="text-[#EF4444]" />
                                </div>
                                <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                                    {t.economics?.cloudTitle}
                                </h4>
                            </div>
                            <TrendingUp size={20} className="text-[#EF4444]" />
                        </div>

                        {/* Cost Graph Visualization */}
                        <div className="h-28 relative border-l border-b border-[var(--border-default)] ml-1 mr-1">
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 112" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="cloudGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#EF4444" stopOpacity="0.05" />
                                        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M 0 100 Q 75 90, 150 60 T 300 5"
                                    fill="none"
                                    stroke="#EF4444"
                                    strokeWidth="2"
                                    strokeDasharray="6 3"
                                />
                                <path
                                    d="M 0 100 Q 75 90, 150 60 T 300 5 L 300 112 L 0 112 Z"
                                    fill="url(#cloudGradient)"
                                />
                            </svg>
                            <span className="absolute -bottom-5 left-0 text-[10px] text-[var(--text-muted)] font-mono uppercase">Usage</span>
                            <span className="absolute -left-6 top-0 text-[10px] text-[var(--text-muted)] -rotate-90 origin-left font-mono uppercase">Cost</span>
                        </div>

                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {t.economics?.cloudDesc}
                        </p>
                    </motion.div>

                    {/* On-Device Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card p-6 md:p-8 space-y-5 border-[#22C55E]/20 hover:border-[#22C55E]/40 transition-all duration-300 group"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-lg bg-[#22C55E]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                                    <Cpu size={22} className="text-[#22C55E]" />
                                </div>
                                <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                                    {t.economics?.onDeviceTitle}
                                </h4>
                            </div>
                            <Minus size={20} className="text-[#22C55E]" />
                        </div>

                        {/* Cost Graph Visualization */}
                        <div className="h-28 relative border-l border-b border-[var(--border-default)] ml-1 mr-1">
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 112" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#22C55E" stopOpacity="0.15" />
                                        <stop offset="100%" stopColor="#22C55E" stopOpacity="0.02" />
                                    </linearGradient>
                                </defs>
                                <line
                                    x1="0"
                                    y1="70"
                                    x2="300"
                                    y2="70"
                                    stroke="#22C55E"
                                    strokeWidth="2"
                                />
                                <rect
                                    x="0"
                                    y="70"
                                    width="300"
                                    height="42"
                                    fill="url(#deviceGradient)"
                                />
                            </svg>
                            <span className="absolute -bottom-5 left-0 text-[10px] text-[var(--text-muted)] font-mono uppercase">Usage</span>
                            <span className="absolute -left-6 top-0 text-[10px] text-[var(--text-muted)] -rotate-90 origin-left font-mono uppercase">Cost</span>
                        </div>

                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                            {t.economics?.onDeviceDesc}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
