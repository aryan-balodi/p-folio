import React from "react";
import { motion } from "framer-motion";
import { useTerminalInteractive } from "@/context/TerminalInteractiveContext";

export const ActiveProjectCard = () => {
    const { activeCard, setActiveCard } = useTerminalInteractive();

    if (!activeCard) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
        >
            {/* Click outside to dismiss - Lighter background to show terminal */}
            <div
                className="absolute inset-0 bg-black/20 pointer-events-auto"
                onMouseEnter={() => setActiveCard(null)}
            />

            <motion.div
                layoutId={`card-${activeCard.id}`}
                className="relative w-[95vw] md:w-[730px] h-[92vh] max-h-[746px] rounded-xl border border-blue-500/50 shadow-2xl overflow-hidden cursor-default pointer-events-auto flex flex-col"
                // FORCE SOLID BLACK BACKGROUND
                style={{ backgroundColor: "#050505" }}
                initial={{ backgroundColor: "#050505" }}
                animate={{ backgroundColor: "#050505" }}

                onMouseLeave={() => setActiveCard(null)}
                onClick={() => window.open(activeCard.link, "_blank")}
                transition={{
                    layout: { type: "spring", stiffness: 380, damping: 30 },
                    backgroundColor: { duration: 0 } // INSTANT SOLID COLOR
                }}
            >
                {/* Header - Shared Layout Transition active again */}
                <div className="shrink-0 relative top-0 left-0 right-0 p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/80 to-transparent">
                    <motion.h3
                        layoutId={`title-${activeCard.id}`}
                        className="font-mono text-xl text-white font-bold tracking-tight"
                    >
                        {activeCard.title}
                    </motion.h3>
                    <motion.span
                        layoutId={`year-${activeCard.id}`}
                        className="text-sm text-ide-gray font-mono"
                    >
                        {activeCard.year}
                    </motion.span>
                </div>

                {/* Content Container - Delayed Fade In to prevent layout thrashing during expansion */}
                <motion.div
                    className="flex-1 flex flex-col p-6 pt-0 gap-6 min-h-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <p className="text-base text-ide-gray leading-relaxed shrink-0">
                        {activeCard.description}
                    </p>

                    {/* Prominent Media Section - fills remaining space */}
                    <div className="flex-1 w-full bg-black/50 rounded-lg overflow-hidden border border-white/10 relative group min-h-0">
                        {activeCard.image ? (
                            <img
                                src={activeCard.image}
                                alt={activeCard.title}
                                className="w-full h-full object-cover opacity-100 hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/20 font-mono text-sm">
                                [NO SIGNAL]
                            </div>
                        )}
                    </div>

                    {/* Footer: Tech & Link */}
                    <div className="flex justify-between items-center shrink-0 pt-2">
                        <div className="flex flex-wrap gap-2">
                            {activeCard.tech.map((t) => (
                                <React.Fragment key={t}>
                                    {/* Mobile-only break for Sync-Space tailwindcss tag */}
                                    {activeCard.title === "Sync-Space" && t === "tailwindcss" && (
                                        <div className="basis-full h-0 md:hidden" />
                                    )}
                                    <span className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-medium rounded-full border border-blue-500/20">
                                        {t}
                                    </span>
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-blue-400 font-bold uppercase tracking-wider hover:text-blue-300 transition-colors cursor-pointer">
                            <span>Open Repo</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
