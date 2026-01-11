'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number | null>(null);
    const pathname = usePathname();

    // Initialize Lenis
    const initLenis = useCallback(() => {
        // Destroy existing instance
        if (lenisRef.current) {
            lenisRef.current.destroy();
        }
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
        }

        // Create new Lenis instance with moderate smooth settings (50% reduced)
        lenisRef.current = new Lenis({
            duration: 0.7,           // Reduced duration for quicker response
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            touchMultiplier: 1.25,
            infinite: false,
        });

        // Animation frame loop
        function raf(time: number) {
            lenisRef.current?.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        }

        rafRef.current = requestAnimationFrame(raf);
    }, []);

    // Initialize on mount
    useEffect(() => {
        initLenis();

        // Cleanup
        return () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
            lenisRef.current?.destroy();
            lenisRef.current = null;
        };
    }, [initLenis]);

    // Reinitialize on route change and scroll to top
    useEffect(() => {
        // Scroll to top on route change
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
        // Small delay to allow DOM to update, then resize Lenis
        const timer = setTimeout(() => {
            lenisRef.current?.resize();
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return <>{children}</>;
}
