"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type ProjectData = {
    id: string;
    title: string;
    year: string;
    description: string;
    tech: string[];
    link: string;
    image?: string;
};

type TerminalInteractiveContextType = {
    activeCard: ProjectData | null;
    setActiveCard: (card: ProjectData | null) => void;
};

const TerminalInteractiveContext = createContext<TerminalInteractiveContextType | undefined>(undefined);

export const TerminalInteractiveProvider = ({ children }: { children: ReactNode }) => {
    const [activeCard, setActiveCard] = useState<ProjectData | null>(null);

    return (
        <TerminalInteractiveContext.Provider value={{ activeCard, setActiveCard }}>
            {children}
        </TerminalInteractiveContext.Provider>
    );
};

export const useTerminalInteractive = () => {
    const context = useContext(TerminalInteractiveContext);
    if (!context) {
        throw new Error("useTerminalInteractive must be used within a TerminalInteractiveProvider");
    }
    return context;
};
