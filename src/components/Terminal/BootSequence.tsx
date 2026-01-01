import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BootSequenceProps {
    onComplete: () => void;
}

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const cores = navigator.hardwareConcurrency || "Unknown";
        // @ts-ignore
        const memory = (navigator as any).deviceMemory || "Unknown";

        const dynamicLines = [
            "Initializing environment...",
            `System: ${platform} (${userAgent.includes("Mac") ? "Darwin" : "Windows/Linux"})`,
            `Core Architecture: ${cores} Threads detected`,
            `Memory Allocation: ${memory !== "Unknown" ? `${memory}GB` : "Optimal"}`,
            "Loading modules...",
            "Hydrating components...",
            "Done.",
        ];

        let delay = 0;

        dynamicLines.forEach((line, index) => {
            delay += Math.random() * 300 + 100;
            setTimeout(() => {
                setLines((prev) => [...prev, line]);
                if (index === dynamicLines.length - 1) {
                    setTimeout(onComplete, 800);
                }
            }, delay);
        });

        return () => { };
    }, [onComplete]);

    return (
        <div className="h-full w-full flex flex-col items-center justify-center font-mono text-sm md:text-base cursor-wait p-4 text-center">
            <div className="max-w-2xl w-full space-y-1">
                {lines.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={index === lines.length - 1 ? "text-ide-white font-bold" : "text-ide-gray"}
                    >
                        <span className="opacity-50 mr-2">[{new Date().toLocaleTimeString()}]</span>
                        {line}
                    </motion.div>
                ))}
            </div>

            <div className="mt-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5, repeat: Infinity }}
                    className="w-3 h-5 bg-ide-white inline-block"
                />
            </div>
        </div>
    );
};
