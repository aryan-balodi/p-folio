import { useEffect, useRef } from "react";
import { useTerminal } from "@/hooks/useTerminal";
import { History } from "./History";
import { Input } from "./Input";
import { CursorOrb } from "./CursorOrb";
import { TerminalInteractiveProvider } from "@/context/TerminalInteractiveContext";
import { ActiveProjectCard } from "./ActiveProjectCard";
import { AnimatePresence } from "framer-motion";

interface TerminalContentProps {
    onExit?: () => void;
}

const TerminalContent = ({ onExit }: TerminalContentProps) => {
    const { history, executeCommand, cwd } = useTerminal(onExit);
    const bottomRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-[52rem] h-[70vh] md:h-[550px] flex flex-col rounded-3xl overflow-visible shadow-2xl bg-black/40 backdrop-blur-3xl backdrop-saturate-150 ring-1 ring-white/10 group/terminal cursor-none"
        >
            <CursorOrb containerRef={containerRef} />

            {/* The Active Card Overlay - Sits on top of everything */}
            <AnimatePresence>
                <ActiveProjectCard />
            </AnimatePresence>

            {/* Subtle Noise Texture for Realism */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100" />

            {/* Top Highlight (Specular Reflection) */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

            {/* Window Header */}
            <div className="relative flex items-center px-5 py-4 shrink-0 z-10">
                <div className="flex space-x-2 mr-4 group">
                    {/* Close (Red) */}
                    <div
                        onClick={() => executeCommand("exit")}
                        className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10 flex items-center justify-center cursor-pointer transition-transform active:scale-95"
                    >
                        <svg className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </div>
                    {/* Minimize (Yellow) */}
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10 flex items-center justify-center cursor-pointer transition-transform active:scale-95">
                        <svg className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                            <path d="M5 12h14" />
                        </svg>
                    </div>
                    {/* Maximize (Green) */}
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10 flex items-center justify-center cursor-pointer transition-transform active:scale-95">
                        <svg className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                            <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
                        </svg>
                    </div>
                </div>

                {/* Tab Bar */}
                <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/20 rounded-md ring-1 ring-white/5 text-xs text-ide-gray font-mono">
                        <span>balodi@portfolio</span>
                    </div>
                </div>
                <div className="w-12" />
            </div>

            {/* Terminal Content */}
            <div className="flex-1 p-6 overflow-y-auto font-mono text-xs md:text-sm cursor-text scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <div className="mb-6 opacity-70">
                    <p>Last login: {new Date().toDateString()} on ttys001</p>
                    <p className="mt-2 text-xs">
                        Enter <span className="text-ide-accent font-bold">help</span> to view available commands
                        <span className="text-ide-accent font-bold"> OR </span>
                        Enter <span className="text-ide-accent font-bold">exit</span> to view webpage.
                    </p>
                </div>

                <History history={history} />
                <Input onSubmit={executeCommand} cwd={cwd} history={history.map(h => h.command)} />

                <div ref={bottomRef} />
            </div>
        </div>
    );
};


export const Terminal = ({ onExit }: { onExit?: () => void }) => {
    return (
        <TerminalInteractiveProvider>
            <TerminalContent onExit={onExit} />
        </TerminalInteractiveProvider>
    );
};
