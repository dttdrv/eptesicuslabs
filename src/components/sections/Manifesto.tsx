'use client';

import { motion } from 'framer-motion';

export default function Manifesto() {
    const sections = [
        {
            title: "The Problem",
            content: "Cloud-first AI pushes products into recurring, unpredictable costs and forces sensitive inputs through third-party servers. Dependencies on massive, general-purpose models create fragile systems that hallucinate confidently."
        },
        {
            title: "Our Doctrine",
            content: "We believe in Local-First Intelligence. Privacy and control are product features, not footnotes. We prioritize measured reliability over marketing hype. If a model cannot be trusted to fail gracefully, it cannot be trusted at all."
        },
        {
            title: "Our Vision",
            content: "We are building the Reliability Layer—a governance system of Validator Models (The Council) designed to critique and steer local models in real-time. This aims to allow small, efficient models to punch above their weight class while remaining entirely offline."
        }
    ];

    return (
        <section id="manifesto" className="py-24 px-6 relative z-10 text-center">
            <div className="fluid-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-24"
                >
                    <div className="flex flex-col items-center">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--color-eptesicus-blue)] mb-4">Manifesto</h2>
                        <div className="w-12 h-0.5 bg-[var(--color-eptesicus-blue)]"></div>
                    </div>

                    <div className="space-y-24">
                        {sections.map((section, idx) => (
                            <div key={idx} className="group flex flex-col items-center space-y-6">
                                <h3 className="text-3xl md:text-4xl font-semibold text-[var(--color-eptesicus-black)]">
                                    {section.title}
                                </h3>
                                <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-eptesicus-gray)] max-w-3xl text-balance group-hover:text-[var(--color-eptesicus-black)] transition-colors duration-500">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
