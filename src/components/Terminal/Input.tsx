import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from "react";
import { autoComplete } from "@/utils/autoComplete";

interface InputProps {
    onSubmit: (cmd: string) => void;
    cwd: string;
}

export const Input = ({ onSubmit, cwd, history = [] }: { onSubmit: (cmd: string) => void; cwd: string; history?: string[] }) => {
    const [value, setValue] = useState("");
    const [historyIndex, setHistoryIndex] = useState<number | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
        const handleClick = () => inputRef.current?.focus();
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
        setHistoryIndex(null);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const completed = autoComplete(value, cwd);
            setValue(completed);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (history.length === 0) return;

            const newIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
            setHistoryIndex(newIndex);
            setValue(history[newIndex]);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (history.length === 0 || historyIndex === null) return;

            const newIndex = historyIndex + 1;
            if (newIndex >= history.length) {
                setHistoryIndex(null);
                setValue("");
            } else {
                setHistoryIndex(newIndex);
                setValue(history[newIndex]);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
            <div className="flex items-center gap-2 shrink-0">
                <span className="text-green-400 font-bold">balodi@portfolio</span>
                <span className="text-blue-400 font-bold">{cwd}</span>
                <span className="text-ide-white font-bold">%</span>
            </div>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    // Reset history index if user types manually, 
                    // or keep it? behavior varies. Resetting usually safer to avoid confusion.
                    // But standard terminal sometimes preserves it? Let's reset if value changes differently.
                }}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none flex-1 font-mono text-ide-white caret-ide-accent pl-1 placeholder-ide-gray/30"
                autoFocus
                spellCheck={false}
                autoComplete="off"
                placeholder="Type a command..."
            />
        </form>
    );
};
