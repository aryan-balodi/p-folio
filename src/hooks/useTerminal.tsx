import { useState, useCallback } from "react";
import { COMMANDS } from "@/utils/commands";
import { ReactNode } from "react";

export type HistoryItem = {
    id: string;
    command: string;
    output: ReactNode;
};

export const useTerminal = () => {
    const [history, setHistory] = useState<HistoryItem[]>([]);

    const executeCommand = useCallback((cmd: string) => {
        const trimmedCmd = cmd.trim();
        if (!trimmedCmd) return;

        const [commandName, ...args] = trimmedCmd.split(" ");
        const commandFn = COMMANDS[commandName.toLowerCase()];

        if (commandFn) {
            const response = commandFn(args);
            if (response.action === "CLEAR") {
                setHistory([]);
            } else {
                setHistory((prev) => [
                    ...prev,
                    {
                        id: crypto.randomUUID(),
                        command: trimmedCmd,
                        output: response.output,
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
                        <span className= "text-red-500" >
                        Command not found: { trimmedCmd }.Type 'help' for available commands.
            </span>
          ),
        },
      ]);
    }
  }, []);

return {
    history,
    executeCommand,
};
};
