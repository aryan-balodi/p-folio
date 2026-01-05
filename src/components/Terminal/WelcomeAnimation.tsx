import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WelcomeAnimationProps {
    onComplete: () => void;
}

export const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
    const [text, setText] = useState("");
    const baseText = "Welcome";

    useEffect(() => {
        let currentIndex = 0;

        // Typing "Welcome"
        const typeInterval = setInterval(() => {
            if (currentIndex < baseText.length) {
                setText(baseText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typeInterval);

                // Start adding dots after a brief pause
                setTimeout(() => {
                    let dotCount = 0;
                    const dotInterval = setInterval(() => {
                        if (dotCount < 3) {
                            setText((prev) => prev + " .");
                            dotCount++;
                        } else {
                            clearInterval(dotInterval);
                            // Wait a moment after the last dot before finishing
                            setTimeout(onComplete, 200);
                        }
                    }, 200); // Faster loading dots
                }, 100);
            }
        }, 85); // Typing speed for letters

        return () => clearInterval(typeInterval);
    }, [onComplete]);

    return (
        <div className="flex flex-col items-center justify-center h-full w-full font-sans">
            <div className="flex items-center">
                <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                    {text}
                </span>
                <motion.div
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                        times: [0, 0.5, 0.5, 1],
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="ml-2 w-3 h-10 md:h-14 bg-white"
                />
            </div>
        </div>
    );
};
