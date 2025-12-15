'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppleSpotlight } from '@/components/ui/apple-spotlight';

interface SpotlightContextType {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
}

const SpotlightContext = createContext<SpotlightContextType | undefined>(undefined);

export function SpotlightProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((prev) => !prev);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                toggle();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <SpotlightContext.Provider value={{ isOpen, toggle, open, close }}>
            {children}
            <AppleSpotlight isOpen={isOpen} handleClose={close} />
        </SpotlightContext.Provider>
    );
}

export function useSpotlight() {
    const context = useContext(SpotlightContext);
    if (context === undefined) {
        throw new Error('useSpotlight must be used within a SpotlightProvider');
    }
    return context;
}
