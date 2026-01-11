'use client';

import React, { createContext, useContext, useState } from 'react';
import ContactModal from '@/components/contact/ContactModal';

interface ContactModalContextValue {
    open: (subject?: string) => void;
    close: () => void;
}

const ContactModalContext = createContext<ContactModalContextValue | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [subject, setSubject] = useState<string | undefined>(undefined);

    const open = (nextSubject?: string) => {
        setSubject(nextSubject);
        setIsOpen(true);
    };

    const close = () => setIsOpen(false);

    return (
        <ContactModalContext.Provider value={{ open, close }}>
            {children}
            <ContactModal isOpen={isOpen} initialSubject={subject} onClose={close} />
        </ContactModalContext.Provider>
    );
}

export function useContactModal() {
    const context = useContext(ContactModalContext);
    if (!context) {
        throw new Error('useContactModal must be used within ContactModalProvider');
    }
    return context;
}
