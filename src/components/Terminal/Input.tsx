import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from "react";
import { autoComplete } from "@/utils/autoComplete";

interface InputProps {
    onSubmit: (cmd: string) => void;
    cwd: string;
}

export const Input = ({ onSubmit, cwd }: InputProps) => {
    const [value, setValue] = useState("");
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
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const completed = autoComplete(value, cwd);
            setValue(completed);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
            <div className="flex items-center gap-2 shrink-0">
                <span className="text-green-400 font-bold">➜</span>
                <span className="text-blue-400 font-bold">{cwd}</span>
            </div>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
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
