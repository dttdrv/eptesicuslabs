'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface AnimatedTextProps {
    text: string;
    className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [charOffsets, setCharOffsets] = useState<number[]>([]);
    const rafRef = useRef<number | null>(null);
    const chars = useMemo(() => text.split(''), [text]);

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current !== null) return;

            rafRef.current = requestAnimationFrame(() => {
                rafRef.current = null;
                if (!containerRef.current) return;

                const rect = containerRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Calculate how far into the viewport the element is
                // 0 = just entered from bottom, 1 = fully above center
                const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));

                // Create staggered offsets for each character
                const totalChars = chars.length || 1;
                const newOffsets = chars.map((_, index) => {
                    // Stagger the animation based on character index
                    const charProgress = Math.max(0, Math.min(1, progress * 2 - (index / totalChars) * 0.5));
                    // Characters rise from 20px below to 0
                    return 20 * (1 - charProgress);
                });

                setCharOffsets(newOffsets);
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [chars]);

    return (
        <div ref={containerRef} className={className}>
            {chars.map((char, index) => (
                <span
                    key={index}
                    style={{
                        display: 'inline-block',
                        transform: `translateY(${charOffsets[index] || 0}px)`,
                        transition: 'transform 0.15s ease-out',
                        whiteSpace: char === ' ' ? 'pre' : 'normal',
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
}
