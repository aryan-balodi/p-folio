import { useState, useEffect } from "react";

interface TerminalTypewriterProps {
    text: string;
    onComplete?: () => void;
    speed?: number;
}

export const TerminalTypewriter = ({ text, onComplete, speed = 30 }: TerminalTypewriterProps) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 1;
        // setDisplayedText(text.charAt(0)); // Optional: Show first char immediately? 
        // Better to let the interval handle it smoothly

        const timer = setInterval(() => {
            if (index <= text.length) {
                setDisplayedText(text.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
                if (onComplete) {
                    setTimeout(onComplete, 500);
                }
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed, onComplete]);

    return <span>{displayedText}</span>;
};
