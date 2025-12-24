'use client';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function GradientBackground() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [time, setTime] = useState(0);
    const [bloomPhase, setBloomPhase] = useState(0); // 0 = closed, 1 = fully bloomed
    const animationRef = useRef<number>();
    const startTimeRef = useRef<number>(0);

    // Bloom animation on mount - flower opens
    useIsomorphicLayoutEffect(() => {
        startTimeRef.current = performance.now();

        const animateBloom = () => {
            const elapsed = performance.now() - startTimeRef.current;
            const bloomDuration = 2400; // 2.4s bloom duration
            const progress = Math.min(elapsed / bloomDuration, 1);

            // Smooth easing for bloom: easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setBloomPhase(eased);

            if (progress < 1) {
                requestAnimationFrame(animateBloom);
            }
        };

        requestAnimationFrame(animateBloom);
    }, []);

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

    // Continuous gentle floating animation
    useEffect(() => {
        const animate = () => {
            setTime(prev => prev + 0.002); // Slower for tranquility
            animationRef.current = requestAnimationFrame(animate);
        };
        animationRef.current = requestAnimationFrame(animate);
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    const t = scrollProgress;
    const b = bloomPhase; // bloom factor 0-1

    // Flower blossom effect:
    // - Start at center (50%, 70%) when closed
    // - Petals spread outward as flower blooms
    // - After bloom, gentle floating + scroll reactivity

    // Petal 1 (top-right) - blooms upward and right
    const petal1X = 50 + b * (20 + Math.sin(time * 0.6) * 6) - t * 15;
    const petal1Y = 70 - b * (25 + Math.cos(time * 0.5) * 4) - t * 20;
    const petal1Scale = 0.3 + b * 0.7;

    // Petal 2 (top-left) - blooms upward and left
    const petal2X = 50 - b * (22 + Math.cos(time * 0.7 + 1) * 5) + t * 10;
    const petal2Y = 70 - b * (28 + Math.sin(time * 0.55 + 2) * 5) - t * 25;
    const petal2Scale = 0.25 + b * 0.75;

    // Petal 3 (bottom-right) - blooms downward and right
    const petal3X = 50 + b * (25 + Math.sin(time * 0.8 + 2) * 7);
    const petal3Y = 70 + b * (15 + Math.cos(time * 0.65) * 4) - t * 10;
    const petal3Scale = 0.2 + b * 0.8;

    // Petal 4 (bottom-left) - blooms downward and left
    const petal4X = 50 - b * (18 + Math.cos(time * 0.75 + 3) * 6);
    const petal4Y = 70 + b * (20 + Math.sin(time * 0.6 + 1) * 5) - t * 8;
    const petal4Scale = 0.35 + b * 0.65;

    // Center stamen - stays mostly centered, pulses gently
    const centerX = 50 + Math.sin(time * 0.4) * 3;
    const centerY = 70 - t * 15 + Math.cos(time * 0.35) * 2;
    const centerScale = 0.5 + b * 0.3 + Math.sin(time * 0.8) * 0.05;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Clean white base */}
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

            {/* Center stamen - warm accent */}
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
