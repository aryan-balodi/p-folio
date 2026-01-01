import { useState, useRef, useEffect, FormEvent } from "react";

interface InputProps {
    onSubmit: (cmd: string) => void;
}

export const Input = ({ onSubmit }: InputProps) => {
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

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="text-ide-accent">❯</span>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 font-mono text-ide-white caret-ide-accent pl-1 placeholder-ide-gray/30"
                autoFocus
                spellCheck={false}
                autoComplete="off"
                placeholder="Type a command..."
            />
        </form>
    );
};
