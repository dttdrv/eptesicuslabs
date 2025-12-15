'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Navbar() {
    const { t } = useLanguage();

    return (
        <nav className="fixed top-6 left-4 right-4 md:left-8 md:right-8 max-w-7xl mx-auto z-50 bg-white/60 backdrop-blur-[24px] border border-black/5 transition-all shadow-sm">
            <div className="flex items-center justify-between h-16 px-6">

                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 rounded-none overflow-hidden group-hover:opacity-80 transition-opacity duration-300">
                        <Image
                            src="/images/logo.png"
                            alt="Eptesicus Labs"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-bold text-lg tracking-tight hidden md:block text-black">{t.hero.title}</span>
                </Link>

                {/* Desktop Nav - Monospace Industrial Style */}
                <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-mono text-black">
                    <Link href="#about" className="hover:text-[#2D6CDF] transition-colors uppercase tracking-wider">
                        {t.nav.about}
                    </Link>
                    <Link href="#work" className="hover:text-[#2D6CDF] transition-colors uppercase tracking-wider">
                        {t.nav.work}
                    </Link>
                    <Link href="#contact" className="px-3 py-1.5 md:px-5 md:py-2 bg-black text-white hover:bg-[#2D6CDF] transition-colors uppercase tracking-wider rounded-none">
                        {t.nav.contact}
                    </Link>
                </div>

            </div>
        </nav>
    );
}
