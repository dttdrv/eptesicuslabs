'use client';

import { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

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

    // Scroll lock when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Store current scroll position
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflow = 'hidden';
        } else {
            // Restore scroll position
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        }

        return () => {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.left = '';
            document.body.style.right = '';
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // Small delay to allow scroll unlock to process
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 10);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#products', label: 'Products' },
        { href: '#team', label: 'Team' },
    ];

    // Animation variants for mobile menu
    const menuBackdropVariants = {
        hidden: {
            opacity: 0,
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }
        }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: 24, scale: 0.96 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: 0.1 + i * 0.08,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: -12,
            scale: 0.98,
            transition: {
                delay: (navLinks.length - i) * 0.04,
                duration: 0.25,
                ease: [0.4, 0, 1, 1] as const
            }
        })
    };

    const contactButtonVariants = {
        hidden: { opacity: 0, y: 24, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: 0.35,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        },
        exit: {
            opacity: 0,
            y: -12,
            scale: 0.95,
            transition: { duration: 0.2, ease: [0.4, 0, 1, 1] as const }
        }
    };

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50"
                style={{
                    paddingTop: 'env(safe-area-inset-top)',
                }}
                initial={false}
                animate={{
                    paddingTop: isScrolled ? 12 : 0,
                    paddingLeft: isScrolled ? 16 : 0,
                    paddingRight: isScrolled ? 16 : 0,
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
                        maxWidth: isScrolled ? 900 : 1400,
                        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0)',
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
                        className="flex items-center justify-between px-4 sm:px-6"
                        initial={false}
                        animate={{
                            height: isScrolled ? 52 : 64,
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
                                    width: isScrolled ? 22 : 26,
                                    height: isScrolled ? 22 : 26,
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
                                className="font-medium text-gray-900 whitespace-nowrap overflow-hidden hidden sm:block"
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

                        {/* Mobile Menu Button - Animated hamburger */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 relative w-10 h-10 flex items-center justify-center"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <div className="relative w-5 h-4">
                                {/* Top line */}
                                <motion.span
                                    className="absolute left-0 w-5 h-0.5 bg-current rounded-full"
                                    animate={{
                                        top: isMobileMenuOpen ? '50%' : '0%',
                                        rotate: isMobileMenuOpen ? 45 : 0,
                                        translateY: isMobileMenuOpen ? '-50%' : 0,
                                    }}
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                />
                                {/* Middle line */}
                                <motion.span
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-current rounded-full"
                                    animate={{
                                        opacity: isMobileMenuOpen ? 0 : 1,
                                        scaleX: isMobileMenuOpen ? 0 : 1,
                                    }}
                                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                />
                                {/* Bottom line */}
                                <motion.span
                                    className="absolute left-0 w-5 h-0.5 bg-current rounded-full"
                                    animate={{
                                        bottom: isMobileMenuOpen ? '50%' : '0%',
                                        rotate: isMobileMenuOpen ? -45 : 0,
                                        translateY: isMobileMenuOpen ? '50%' : 0,
                                    }}
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                />
                            </div>
                        </button>
                    </motion.div>
                </motion.nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence mode="wait">
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        variants={menuBackdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed inset-0 z-40 md:hidden"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.97)',
                            backdropFilter: 'blur(24px) saturate(180%)',
                            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                            paddingTop: 'env(safe-area-inset-top)',
                            paddingBottom: 'env(safe-area-inset-bottom)',
                        }}
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href.slice(1))}
                                    className="text-3xl font-light text-gray-900 hover:text-blue-600 transition-colors duration-300 mobile-tap-target flex items-center justify-center"
                                    custom={i}
                                    variants={menuItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {link.label}
                                </motion.a>
                            ))}

                            {/* Divider */}
                            <motion.div
                                className="w-16 h-px bg-gray-200"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{
                                    opacity: 1,
                                    scaleX: 1,
                                    transition: { delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                                }}
                                exit={{
                                    opacity: 0,
                                    scaleX: 0,
                                    transition: { duration: 0.2 }
                                }}
                            />

                            <motion.a
                                href="#contact"
                                onClick={(e) => handleSmoothScroll(e, 'contact')}
                                className="px-10 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 rounded-full text-lg font-medium mobile-tap-target"
                                variants={contactButtonVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
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
