'use client';

import { useEffect, useState, useLayoutEffect, useRef } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface GradientBackgroundProps {
    initialBloom?: number;
}

export default function GradientBackground({ initialBloom }: GradientBackgroundProps = {}) {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const animationRef = useRef<number | null>(null);
    const scrollProgressRef = useRef(0);
    const smoothScrollRef = useRef(0); // Smoothed scroll value
    const timeRef = useRef(0);
    const primaryGlowRef = useRef<HTMLDivElement>(null);
    const ambientGlowRef = useRef<HTMLDivElement>(null);
    const highlightGlowRef = useRef<HTMLDivElement>(null);
    const tertiaryGlowRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        setMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (initialBloom !== undefined) {
            scrollProgressRef.current = initialBloom;
            smoothScrollRef.current = initialBloom;
            return;
        }

        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            scrollProgressRef.current = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [initialBloom]);

    useEffect(() => {
        const animate = () => {
            timeRef.current += 0.004; // Slower for more fluid feel

            // Smooth interpolation of scroll - creates fluid, lag-free movement
            const targetScroll = initialBloom !== undefined ? initialBloom : scrollProgressRef.current;
            smoothScrollRef.current += (targetScroll - smoothScrollRef.current) * 0.03; // Very smooth easing

            const s = smoothScrollRef.current;
            const time = timeRef.current;

            // Much larger sizes for immersive atmospheric effect
            const primarySize = isMobile ? 900 : 1600;
            const ambientSize = isMobile ? 800 : 1400;
            const highlightSize = isMobile ? 700 : 1200;
            const tertiarySize = isMobile ? 600 : 1000;

            // Slower, more organic movement patterns
            const slowWave1 = Math.sin(time * 0.15) * 0.5 + Math.sin(time * 0.08) * 0.5;
            const slowWave2 = Math.cos(time * 0.12) * 0.5 + Math.cos(time * 0.06) * 0.5;
            const slowWave3 = Math.sin(time * 0.1 + 1) * 0.5 + Math.cos(time * 0.07 + 2) * 0.5;

            // Primary glow - large, slow-moving main light
            const glowX = 60 + slowWave1 * 15 - s * 25;
            const glowY = 70 - s * 50 + slowWave2 * 10;
            const breathe1 = 1 + Math.sin(time * 0.2) * 0.03;

            // Secondary ambient - moves opposite, creates depth
            const ambientX = 35 + slowWave2 * 12 + s * 20;
            const ambientY = 45 + s * 30 + slowWave1 * 8;
            const breathe2 = 1 + Math.sin(time * 0.18 + 1) * 0.025;

            // Highlight - subtle accent movement
            const highlightX = 50 + slowWave3 * 18;
            const highlightY = 30 + s * 40 + slowWave2 * 12;
            const breathe3 = 1 + Math.sin(time * 0.22 + 2) * 0.02;

            // Tertiary - very subtle, adds atmosphere
            const tertiaryX = 75 + slowWave1 * 10 - s * 15;
            const tertiaryY = 60 + s * 25 + slowWave3 * 8;
            const breathe4 = 1 + Math.sin(time * 0.25 + 3) * 0.015;

            const primaryGlow = primaryGlowRef.current;
            if (primaryGlow) {
                primaryGlow.style.width = `${primarySize}px`;
                primaryGlow.style.height = `${primarySize}px`;
                primaryGlow.style.left = `${glowX}%`;
                primaryGlow.style.top = `${glowY}%`;
                primaryGlow.style.transform = `translate(-50%, -50%) scale(${breathe1})`;
            }

            const ambientGlow = ambientGlowRef.current;
            if (ambientGlow) {
                ambientGlow.style.width = `${ambientSize}px`;
                ambientGlow.style.height = `${ambientSize}px`;
                ambientGlow.style.left = `${ambientX}%`;
                ambientGlow.style.top = `${ambientY}%`;
                ambientGlow.style.transform = `translate(-50%, -50%) scale(${breathe2})`;
            }

            const highlightGlow = highlightGlowRef.current;
            if (highlightGlow) {
                highlightGlow.style.width = `${highlightSize}px`;
                highlightGlow.style.height = `${highlightSize}px`;
                highlightGlow.style.left = `${highlightX}%`;
                highlightGlow.style.top = `${highlightY}%`;
                highlightGlow.style.transform = `translate(-50%, -50%) scale(${breathe3})`;
            }

            const tertiaryGlow = tertiaryGlowRef.current;
            if (tertiaryGlow) {
                tertiaryGlow.style.width = `${tertiarySize}px`;
                tertiaryGlow.style.height = `${tertiarySize}px`;
                tertiaryGlow.style.left = `${tertiaryX}%`;
                tertiaryGlow.style.top = `${tertiaryY}%`;
                tertiaryGlow.style.transform = `translate(-50%, -50%) scale(${breathe4})`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };
        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
        };
    }, [initialBloom, isMobile]);

    // Initial values
    const initialScroll = initialBloom !== undefined ? initialBloom : 0;
    const initialPrimarySize = isMobile ? 900 : 1600;
    const initialAmbientSize = isMobile ? 800 : 1400;
    const initialHighlightSize = isMobile ? 700 : 1200;
    const initialTertiarySize = isMobile ? 600 : 1000;
    const blurPrimary = isMobile ? 100 : 150;
    const blurSecondary = isMobile ? 90 : 130;
    const blurHighlight = isMobile ? 80 : 120;
    const blurTertiary = isMobile ? 70 : 100;

    return (
        <div
            className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
            style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 1.2s ease-out',
            }}
        >
            {/* Base - adapts to dark mode */}
            <div className="absolute inset-0 bg-[var(--bg-primary)] transition-colors duration-500" />

            {/* Primary glow - the main atmospheric light */}
            <div
                className="absolute rounded-full"
                ref={primaryGlowRef}
                style={{
                    width: initialPrimarySize,
                    height: initialPrimarySize,
                    background: `radial-gradient(circle at 50% 50%,
                        rgba(59, 130, 246, 0.28) 0%,
                        rgba(59, 130, 246, 0.15) 25%,
                        rgba(59, 130, 246, 0.06) 50%,
                        transparent 70%)`,
                    left: `${60 - initialScroll * 25}%`,
                    top: `${70 - initialScroll * 50}%`,
                    transform: 'translate(-50%, -50%)',
                    filter: `blur(${blurPrimary}px)`,
                    willChange: 'transform, left, top',
                }}
            />

            {/* Secondary ambient - adds depth and movement */}
            <div
                className="absolute rounded-full"
                ref={ambientGlowRef}
                style={{
                    width: initialAmbientSize,
                    height: initialAmbientSize,
                    background: `radial-gradient(circle at 50% 50%,
                        rgba(59, 130, 246, 0.2) 0%,
                        rgba(59, 130, 246, 0.1) 30%,
                        rgba(59, 130, 246, 0.03) 55%,
                        transparent 75%)`,
                    left: `${35 + initialScroll * 20}%`,
                    top: `${45 + initialScroll * 30}%`,
                    transform: 'translate(-50%, -50%)',
                    filter: `blur(${blurSecondary}px)`,
                    willChange: 'transform, left, top',
                }}
            />

            {/* Highlight - accent movement */}
            <div
                className="absolute rounded-full"
                ref={highlightGlowRef}
                style={{
                    width: initialHighlightSize,
                    height: initialHighlightSize,
                    background: `radial-gradient(circle at 50% 50%,
                        rgba(59, 130, 246, 0.12) 0%,
                        rgba(59, 130, 246, 0.05) 35%,
                        transparent 65%)`,
                    left: '50%',
                    top: `${30 + initialScroll * 40}%`,
                    transform: 'translate(-50%, -50%)',
                    filter: `blur(${blurHighlight}px)`,
                    willChange: 'transform, left, top',
                }}
            />

            {/* Tertiary - subtle atmosphere layer */}
            <div
                className="absolute rounded-full"
                ref={tertiaryGlowRef}
                style={{
                    width: initialTertiarySize,
                    height: initialTertiarySize,
                    background: `radial-gradient(circle at 50% 50%,
                        rgba(59, 130, 246, 0.08) 0%,
                        rgba(59, 130, 246, 0.03) 40%,
                        transparent 70%)`,
                    left: `${75 - initialScroll * 15}%`,
                    top: `${60 + initialScroll * 25}%`,
                    transform: 'translate(-50%, -50%)',
                    filter: `blur(${blurTertiary}px)`,
                    willChange: 'transform, left, top',
                }}
            />
        </div>
    );
}
