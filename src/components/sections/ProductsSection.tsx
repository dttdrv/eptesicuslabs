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

    return (
        <section id="products" className="py-24 px-6 relative">
            <div className="max-w-5xl mx-auto">

                {/* Big Card Container - Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl p-8 md:p-12"
                    style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                >
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-4">
                            {t.products?.label || 'Products'}
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                            Lumis-1
                        </h3>
                        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
                            {t.products?.description || 'An on-device AI assistant with a lightweight Validator Council and bounded steering loop.'}
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                    activeTab === tab.id
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content - Smooth height transitions */}
                    <motion.div
                        layout
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                    <AnimatePresence mode="wait">
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-8"
                            >
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Product Description */}
                                    <div className="space-y-6">
                                        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                                            {t.products?.status || 'In Development'}
                                        </div>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {t.products?.overviewText || 'Our first packaged product: an on-device assistant with a lightweight Validator Council (Safety, Consistency, Accuracy/Support) and a bounded steering loop. Proves the platform thesis and provides a concrete product for early enterprise pilots.'}
                                        </p>
                                    </div>

                                    {/* Specs Card */}
                                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                                        <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-gray-400 mb-6">
                                            {t.products?.specsTitle || 'Technical Specifications'}
                                        </h4>
                                        <ul className="space-y-4">
                                            {(t.products?.specs || ['On-device processing', 'Offline-capable', 'Reliability layer built-in', 'Enterprise-ready']).map((spec: string, i: number) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-900">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                    {spec}
                                                </li>
                                            ))}
                                        </ul>
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
                                className="space-y-12"
                            >
                                <div className="text-center max-w-2xl mx-auto">
                                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                                        {t.validator?.headline}
                                    </h4>
                                    <p className="text-gray-500">
                                        {t.validator?.description}
                                    </p>
                                </div>

                                {/* Process Flow */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {validatorSteps.map((step: { id: string; title: string; desc: string }, index: number) => {
                                        const IconComponent = icons[step.id as keyof typeof icons] || FileText;
                                        return (
                                            <div key={step.id} className="relative">
                                                {index < validatorSteps.length - 1 && (
                                                    <div className="hidden md:block absolute top-8 left-full w-full">
                                                        <ArrowRight size={16} className="text-gray-400 -translate-x-1/2" />
                                                    </div>
                                                )}
                                                <div className="text-center space-y-4">
                                                    <div className="w-16 h-16 mx-auto rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center">
                                                        <IconComponent size={24} className="text-blue-500" />
                                                    </div>
                                                    <div>
                                                        <div className="text-gray-900 font-medium">{step.title}</div>
                                                        <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
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
                                className="space-y-8"
                            >
                                <div className="text-center max-w-2xl mx-auto">
                                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                                        {t.economics?.headline}
                                    </h4>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Cloud AI */}
                                    <div className="p-6 rounded-xl border border-red-200 bg-red-50">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                                                <Cloud size={20} className="text-red-500" />
                                            </div>
                                            <h5 className="text-gray-900 font-medium">{t.economics?.cloudTitle}</h5>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            {t.economics?.cloudDesc}
                                        </p>
                                    </div>

                                    {/* On-Device */}
                                    <div className="p-6 rounded-xl border border-green-200 bg-green-50">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                                <Cpu size={20} className="text-green-500" />
                                            </div>
                                            <h5 className="text-gray-900 font-medium">{t.economics?.onDeviceTitle}</h5>
                                        </div>
                                        <p className="text-gray-600 text-sm">
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
                                className="space-y-8"
                            >
                                <div className="text-center max-w-2xl mx-auto">
                                    <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                                        {t.useCases?.headline}
                                    </h4>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {useCases.map((useCase: { icon: string; title: string; desc: string }) => {
                                        const IconComponent = caseIcons[useCase.icon as keyof typeof caseIcons] || Scale;
                                        return (
                                            <div
                                                key={useCase.title}
                                                className="p-6 rounded-xl border border-gray-200 bg-gray-50 transition-all duration-300 hover:shadow-md"
                                            >
                                                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                                                    <IconComponent size={24} className="text-blue-500" />
                                                </div>
                                                <h5 className="text-gray-900 font-medium mb-2">{useCase.title}</h5>
                                                <p className="text-sm text-gray-600">{useCase.desc}</p>
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
