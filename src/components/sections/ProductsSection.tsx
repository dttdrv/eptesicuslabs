'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/providers/LanguageProvider';
import {
    FileText,
    ShieldCheck,
    RefreshCw,
    CheckCircle,
    Cloud,
    Cpu,
    Scale,
    Heart,
    Wrench,
    ArrowRight
} from 'lucide-react';

type TabId = 'overview' | 'reliability' | 'economics' | 'use-cases';

export default function ProductsSection() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<TabId>('overview');

    const tabs = [
        { id: 'overview' as TabId, label: t.products?.tabs?.overview || 'Overview' },
        { id: 'reliability' as TabId, label: t.products?.tabs?.reliability || 'Reliability Layer' },
        { id: 'economics' as TabId, label: t.products?.tabs?.economics || 'Economics' },
        { id: 'use-cases' as TabId, label: t.products?.tabs?.useCases || 'Use Cases' },
    ];

    const validatorSteps = t.validator?.steps || [];
    const useCases = t.useCases?.cases || [];

    const icons = {
        draft: FileText,
        validate: ShieldCheck,
        correct: RefreshCw,
        output: CheckCircle
    };

    const caseIcons = {
        legal: Scale,
        health: Heart,
        industrial: Wrench
    };

    const easeOut = [0.25, 0.1, 0.25, 1] as const;

    return (
        <section id="products" className="section px-[var(--space-5)] relative">
            <div className="container-wide">

                {/* Glassmorphism Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="card-glass"
                >
                    {/* Section Header */}
                    <div className="text-center mb-[var(--space-9)]">
                        <h2 className="text-label mb-[var(--space-4)]">
                            {t.products?.label || 'Products'}
                        </h2>
                        <h3 className="text-display mb-[var(--space-4)]">
                            Lumis-1
                        </h3>
                        <p className="text-body max-w-[var(--container-content)] mx-auto">
                            {t.products?.description || 'An on-device AI assistant with a lightweight Validator Council and bounded steering loop.'}
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="tabs mb-[var(--space-9)]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <motion.div layout transition={{ duration: 0.3, ease: easeOut }}>
                        <AnimatePresence mode="wait">
                            {/* Overview Tab */}
                            {activeTab === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="stack-lg"
                                >
                                    <div className="grid md:grid-cols-2 gap-[var(--space-7)]">
                                        <div className="stack-md text-center md:text-left">
                                            <div className="inline-block px-[var(--space-3)] py-[var(--space-1)] rounded-full bg-[var(--accent-light)] text-[var(--accent)] text-sm font-medium">
                                                {t.products?.status || 'In Development'}
                                            </div>
                                            <p className="text-body">
                                                {t.products?.overviewText || 'Our first packaged product: an on-device assistant with a lightweight Validator Council (Safety, Consistency, Accuracy/Support) and a bounded steering loop.'}
                                            </p>
                                        </div>

                                        <div className="card-terminal">
                                            <div className="card-terminal-header">
                                                <div className="card-terminal-dots">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                                <span className="text-label ml-[var(--space-2)]">
                                                    {t.products?.specsTitle || 'Technical Specifications'}
                                                </span>
                                            </div>
                                            <div className="card-terminal-body stack-sm">
                                                {(t.products?.specs || ['On-device processing', 'Offline-capable', 'Reliability layer built-in', 'Enterprise-ready']).map((spec: string, i: number) => (
                                                    <div key={i} className="flex items-center gap-[var(--space-3)] text-[var(--text-primary)]">
                                                        <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                                                        {spec}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Reliability Tab */}
                            {activeTab === 'reliability' && (
                                <motion.div
                                    key="reliability"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="stack-xl"
                                >
                                    <div className="text-center max-w-[var(--container-content)] mx-auto stack-sm">
                                        <h4 className="text-h2">
                                            {t.validator?.headline}
                                        </h4>
                                        <p className="text-body">
                                            {t.validator?.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--space-5)]">
                                        {validatorSteps.map((step: { id: string; title: string; desc: string }, index: number) => {
                                            const IconComponent = icons[step.id as keyof typeof icons] || FileText;
                                            return (
                                                <div key={step.id} className="relative">
                                                    {index < validatorSteps.length - 1 && (
                                                        <div className="hidden md:block absolute top-6 left-full w-full">
                                                            <ArrowRight size={16} className="text-[var(--border-strong)] -translate-x-1/2" />
                                                        </div>
                                                    )}
                                                    <div className="text-center stack-sm">
                                                        <div className="icon-box mx-auto">
                                                            <IconComponent size={20} />
                                                        </div>
                                                        <div>
                                                            <div className="text-[var(--text-primary)] font-medium">{step.title}</div>
                                                            <p className="text-body-sm mt-[var(--space-1)]">{step.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}

                            {/* Economics Tab */}
                            {activeTab === 'economics' && (
                                <motion.div
                                    key="economics"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="stack-lg"
                                >
                                    <div className="text-center max-w-[var(--container-content)] mx-auto">
                                        <h4 className="text-h2">
                                            {t.economics?.headline}
                                        </h4>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-[var(--space-5)]">
                                        <div className="card p-[var(--space-5)] border-[var(--error)] bg-red-50 text-center md:text-left">
                                            <div className="flex flex-col md:flex-row items-center md:items-start gap-[var(--space-3)] mb-[var(--space-4)]">
                                                <div className="icon-box icon-box-sm icon-box-error">
                                                    <Cloud size={20} />
                                                </div>
                                                <h5 className="text-[var(--text-primary)] font-medium">{t.economics?.cloudTitle}</h5>
                                            </div>
                                            <p className="text-body-sm">
                                                {t.economics?.cloudDesc}
                                            </p>
                                        </div>

                                        <div className="card p-[var(--space-5)] border-[var(--success)] bg-green-50 text-center md:text-left">
                                            <div className="flex flex-col md:flex-row items-center md:items-start gap-[var(--space-3)] mb-[var(--space-4)]">
                                                <div className="icon-box icon-box-sm icon-box-success">
                                                    <Cpu size={20} />
                                                </div>
                                                <h5 className="text-[var(--text-primary)] font-medium">{t.economics?.onDeviceTitle}</h5>
                                            </div>
                                            <p className="text-body-sm">
                                                {t.economics?.onDeviceDesc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Use Cases Tab */}
                            {activeTab === 'use-cases' && (
                                <motion.div
                                    key="use-cases"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="stack-lg"
                                >
                                    <div className="text-center max-w-[var(--container-content)] mx-auto">
                                        <h4 className="text-h2">
                                            {t.useCases?.headline}
                                        </h4>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-[var(--space-5)]">
                                        {useCases.map((useCase: { icon: string; title: string; desc: string }) => {
                                            const IconComponent = caseIcons[useCase.icon as keyof typeof caseIcons] || Scale;
                                            return (
                                                <div
                                                    key={useCase.title}
                                                    className="card card-interactive text-center"
                                                >
                                                    <div className="icon-box mx-auto mb-[var(--space-4)]">
                                                        <IconComponent size={20} />
                                                    </div>
                                                    <h5 className="text-[var(--text-primary)] font-medium mb-[var(--space-2)]">{useCase.title}</h5>
                                                    <p className="text-body-sm">{useCase.desc}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
