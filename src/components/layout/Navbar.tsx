'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useIsomorphicLayoutEffect(() => {
        setIsScrolled(window.scrollY > 50);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setMounted(true);
            });
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#products', label: 'Products' },
        { href: '#team', label: 'Team' },
    ];

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50"
                initial={false}
                animate={{
                    paddingTop: isScrolled ? 16 : 0,
                    paddingLeft: isScrolled ? 24 : 0,
                    paddingRight: isScrolled ? 24 : 0,
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                <motion.nav
                    className="mx-auto"
                    initial={false}
                    animate={{
                        maxWidth: isScrolled ? 1000 : 1400,
                        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
                        backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
                        borderRadius: isScrolled ? 9999 : 0,
                        boxShadow: isScrolled
                            ? '0 4px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5) inset'
                            : '0 0px 0px rgba(0, 0, 0, 0)',
                        borderWidth: isScrolled ? 1 : 0,
                        borderColor: isScrolled ? 'rgba(0, 0, 0, 0.04)' : 'rgba(0, 0, 0, 0)',
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{
                        borderStyle: 'solid',
                    }}
                >
                    <motion.div
                        className="flex items-center justify-between px-6"
                        initial={false}
                        animate={{
                            height: isScrolled ? 56 : 72,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                    >
                        {/* Brand */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                className="relative overflow-hidden"
                                initial={false}
                                animate={{
                                    width: isScrolled ? 24 : 28,
                                    height: isScrolled ? 24 : 28,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="Eptesicus Labs"
                                    fill
                                    className="object-contain group-hover:opacity-70 transition-opacity duration-300"
                                />
                            </motion.div>
                            <motion.span
                                className="font-medium text-gray-900 whitespace-nowrap overflow-hidden"
                                initial={false}
                                animate={{
                                    opacity: isScrolled ? 1 : 0,
                                    width: isScrolled ? 'auto' : 0,
                                    marginLeft: isScrolled ? 0 : -8,
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    delay: isScrolled ? 0.1 : 0,
                                }}
                            >
                                Eptesicus Laboratories
                            </motion.span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
                                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, 'contact')}
                                className="px-5 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 rounded-full text-sm font-medium"
                            >
                                Contact
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </motion.div>
                </motion.nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-10">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
                                    className="text-2xl text-gray-900 hover:text-blue-600 transition-colors duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, 'contact')}
                                className="px-10 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 rounded-full text-lg mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                            >
                                Contact
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
