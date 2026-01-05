import { useState, useCallback } from "react";
import { COMMANDS } from "@/utils/commands";
import { ReactNode } from "react";

export type HistoryItem = {
    id: string;
    command: string;
    output: ReactNode;
    cwd: string;
};

export const useTerminal = (onExit?: () => void) => {
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [cwd, setCwd] = useState("~");

    const executeCommand = useCallback((cmd: string) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        const [commandName, ...args] = trimmedCmd.split(" ");
        const commandFn = COMMANDS[commandName.toLowerCase()];

        // Save current cwd before execution
        const executionCwd = cwd;

        if (commandFn) {
            const response = commandFn(args, { cwd, setCwd });
            if (response.action === "CLEAR") {
                setHistory([]);
            } else if (response.action === "EXIT") {
                // Add exit message to history first
                setHistory((prev) => [
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        command: trimmedCmd,
                        output: response.output,
                        cwd: executionCwd
                    },
                ]);
                // Trigger exit after a brief delay to show the message
                setTimeout(() => {
                    onExit?.();
                }, 1000);
            } else {
                setHistory((prev) => [
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        command: trimmedCmd,
                        output: response.output,
                        cwd: executionCwd // Track where the command ran
                    },
                ]);
            }
        } else {
            setHistory((prev) => [
                ...prev,
                {
                    id: crypto.randomUUID(),
                    command: trimmedCmd,
                    output: (
                        <span className="text-red-500" >
                            Command not found: {trimmedCmd}.Type 'help' for available commands.
                        </span>
                    ),
                    cwd: executionCwd
                },
            ]);
        }
    }, [cwd, onExit]); // dependency on cwd is important now

    return {
        history,
        executeCommand,
        cwd
    };
};
