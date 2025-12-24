'use client';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function GradientBackground() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [time, setTime] = useState(0);
    const [bloomPhase, setBloomPhase] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const animationRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number>(0);

    // Detect mobile on mount
    useIsomorphicLayoutEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Bloom animation on mount
    useIsomorphicLayoutEffect(() => {
        startTimeRef.current = performance.now();

        const animateBloom = () => {
            const elapsed = performance.now() - startTimeRef.current;
            const bloomDuration = isMobile ? 1800 : 2400; // Faster on mobile
            const progress = Math.min(elapsed / bloomDuration, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setBloomPhase(eased);

            if (progress < 1) {
                requestAnimationFrame(animateBloom);
            }
        };

        requestAnimationFrame(animateBloom);
    }, [isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Continuous animation - ONLY on desktop, static on mobile for performance
    useEffect(() => {
        if (isMobile) return; // Skip JS animation on mobile

        const animate = () => {
            setTime(prev => prev + 0.002);
            animationRef.current = requestAnimationFrame(animate);
        };
        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [isMobile]);

    const t = scrollProgress;
    const b = bloomPhase;

    // Mobile: Use CSS animations, simpler layout, reduced blur
    if (isMobile) {
        return (
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Clean white base */}
                <div className="absolute inset-0 bg-white" />

                {/* Single optimized gradient blob with CSS animation */}
                <div
                    className="absolute rounded-full animate-gradient-float"
                    style={{
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, #3B82F6 0%, #60A5FA 40%, transparent 70%)',
                        left: '50%',
                        top: `${60 - t * 20}%`,
                        transform: `translate(-50%, -50%) scale(${0.6 + b * 0.4})`,
                        filter: 'blur(30px)', // Reduced blur for mobile
                        opacity: 0.25 + b * 0.1,
                        willChange: 'transform, opacity',
                        contain: 'layout paint',
                    }}
                />

                {/* Secondary subtle gradient */}
                <div
                    className="absolute rounded-full animate-gradient-float-delayed"
                    style={{
                        width: '250px',
                        height: '250px',
                        background: 'radial-gradient(circle, #60A5FA 0%, #93C5FD 50%, transparent 70%)',
                        left: '30%',
                        top: `${45 - t * 15}%`,
                        transform: `translate(-50%, -50%) scale(${0.5 + b * 0.5})`,
                        filter: 'blur(25px)',
                        opacity: 0.18 + b * 0.08,
                        willChange: 'transform, opacity',
                        contain: 'layout paint',
                    }}
                />
            </div>
        );
    }

    // Desktop: Full animation
    const petal1X = 50 + b * (20 + Math.sin(time * 0.6) * 6) - t * 15;
    const petal1Y = 70 - b * (25 + Math.cos(time * 0.5) * 4) - t * 20;
    const petal1Scale = 0.3 + b * 0.7;

    const petal2X = 50 - b * (22 + Math.cos(time * 0.7 + 1) * 5) + t * 10;
    const petal2Y = 70 - b * (28 + Math.sin(time * 0.55 + 2) * 5) - t * 25;
    const petal2Scale = 0.25 + b * 0.75;

    const petal3X = 50 + b * (25 + Math.sin(time * 0.8 + 2) * 7);
    const petal3Y = 70 + b * (15 + Math.cos(time * 0.65) * 4) - t * 10;
    const petal3Scale = 0.2 + b * 0.8;

    const petal4X = 50 - b * (18 + Math.cos(time * 0.75 + 3) * 6);
    const petal4Y = 70 + b * (20 + Math.sin(time * 0.6 + 1) * 5) - t * 8;
    const petal4Scale = 0.35 + b * 0.65;

    const centerX = 50 + Math.sin(time * 0.4) * 3;
    const centerY = 70 - t * 15 + Math.cos(time * 0.35) * 2;
    const centerScale = 0.5 + b * 0.3 + Math.sin(time * 0.8) * 0.05;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-white" />

            {/* Petal 1 - Primary blue */}
            <div
                className="absolute rounded-full will-change-transform"
                style={{
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, #3B82F6 0%, #60A5FA 30%, transparent 60%)',
                    left: `${petal1X}%`,
                    top: `${petal1Y}%`,
                    transform: `translate(-50%, -50%) scale(${petal1Scale})`,
                    filter: 'blur(45px)',
                    opacity: 0.25 + b * 0.08,
                }}
            />

            {/* Petal 2 - Lighter blue */}
            <div
                className="absolute rounded-full will-change-transform"
                style={{
                    width: '480px',
                    height: '480px',
                    background: 'radial-gradient(circle, #60A5FA 0%, #93C5FD 35%, transparent 60%)',
                    left: `${petal2X}%`,
                    top: `${petal2Y}%`,
                    transform: `translate(-50%, -50%) scale(${petal2Scale})`,
                    filter: 'blur(40px)',
                    opacity: 0.22 + b * 0.06,
                }}
            />

            {/* Petal 3 - Deep blue accent */}
            <div
                className="absolute rounded-full will-change-transform"
                style={{
                    width: '420px',
                    height: '420px',
                    background: 'radial-gradient(circle, #2563EB 0%, #3B82F6 30%, transparent 55%)',
                    left: `${petal3X}%`,
                    top: `${petal3Y}%`,
                    transform: `translate(-50%, -50%) scale(${petal3Scale})`,
                    filter: 'blur(35px)',
                    opacity: 0.20 + b * 0.08,
                }}
            />

            {/* Petal 4 - Soft blue */}
            <div
                className="absolute rounded-full will-change-transform"
                style={{
                    width: '450px',
                    height: '450px',
                    background: 'radial-gradient(circle, #93C5FD 0%, #BFDBFE 35%, transparent 60%)',
                    left: `${petal4X}%`,
                    top: `${petal4Y}%`,
                    transform: `translate(-50%, -50%) scale(${petal4Scale})`,
                    filter: 'blur(42px)',
                    opacity: 0.18 + b * 0.07,
                }}
            />

            {/* Center stamen */}
            <div
                className="absolute rounded-full will-change-transform"
                style={{
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, #3B82F6 0%, #60A5FA 40%, transparent 65%)',
                    left: `${centerX}%`,
                    top: `${centerY}%`,
                    transform: `translate(-50%, -50%) scale(${centerScale})`,
                    filter: 'blur(30px)',
                    opacity: 0.30,
                }}
            />
        </div>
    );
}
