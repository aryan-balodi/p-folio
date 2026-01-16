import { ReactNode, Dispatch, SetStateAction } from "react";
import { TerminalTypewriter } from "@/components/Terminal/TerminalTypewriter";
import { ProjectCard } from "@/components/Terminal/ProjectCard";
import { FILE_SYSTEM, FileSystemNode } from "./fileSystem";

export type CommandResponse = {
    output: ReactNode;
    action?: "CLEAR" | "THEME" | "EXIT";
};

export type CommandContext = {
    cwd: string;
    setCwd: Dispatch<SetStateAction<string>>;
    onExit?: () => void;
};

// ... (imports and helper functions remain, but we need to import TerminalTypewriter at the top)

const resolvePath = (cwd: string, target: string): string => {
    if (target === "~" || target === "") return "~";
    if (target === "..") {
        if (cwd === "~") return "~";
        return cwd.substring(0, cwd.lastIndexOf("/"));
    }
    if (target.startsWith("/")) return target; // Absolute (mock)

    // Relative
    return cwd === "~" ? `~/${target}` : `${cwd}/${target}`;
};

// Helper to get node at path
const getNode = (path: string): FileSystemNode | null => {
    if (path === "~") return FILE_SYSTEM["~"];

    // remove leading ~/ and split
    const parts = path.replace(/^~\/?/, "").split("/").filter(Boolean);
    let current: FileSystemNode = FILE_SYSTEM["~"];

    for (const part of parts) {
        if (current.type !== "dir" || !current.children[part]) {
            return null;
        }
        current = current.children[part];
    }
    return current;
};

export const COMMANDS: Record<string, (args: string[], context: CommandContext) => CommandResponse> = {
    help: () => ({
        output: (
            <div className="space-y-2 text-sm mt-2">
                <p className="text-ide-gray w-full border-b border-white/10 pb-2">Available capabilities:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full md:w-fit">
                    <span className="text-ide-accent font-bold">ls</span>
                    <span className="text-ide-accent font-bold">cd</span>
                    <span className="text-ide-accent font-bold">cat</span>
                    <span className="text-ide-accent font-bold">projects</span>
                    <span className="text-ide-accent font-bold">exit</span>
                    <span className="text-ide-accent font-bold">clear</span>
                </div>
            </div>
        ),
    }),
    ls: (_args, { cwd }) => {
        const node = getNode(cwd);
        if (!node || node.type !== "dir") {
            return { output: <span className="text-red-400">Error: Not a directory</span> };
        }

        const items = Object.entries(node.children).map(([name, child]) => ({
            name,
            type: child.type
        }));

        if (items.length === 0) {
            return { output: <span className="text-ide-gray italic">Empty directory</span> };
        }

        return {
            output: (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {items.map((item) => (
                        <span key={item.name} className={item.type === "dir" ? "text-blue-400 font-bold" : "text-ide-white"}>
                            {item.name}{item.type === "dir" ? "/" : ""}
                        </span>
                    ))}
                </div>
            )
        };
    },
    cd: (args, { cwd, setCwd }) => {
        const target = args[0] || "~";
        const newPath = resolvePath(cwd, target);
        const node = getNode(newPath);

        if (!node) {
            return { output: <span className="text-red-400">cd: {target}: No such file or directory</span> };
        }
        if (node.type !== "dir") {
            return { output: <span className="text-red-400">cd: {target}: Not a directory</span> };
        }

        setCwd(newPath);
        return { output: null };
    },
    cat: (args, { cwd }) => {
        if (!args[0]) return { output: <span className="text-red-400">Usage: cat &lt;filename&gt;</span> };

        const target = args[0];

        // Special handling for resume download
        if (target.toLowerCase() === "resume.pdf") {
            // Trigger download
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Aryan_Balodi_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            return {
                output: (
                    <span className="text-green-400">
                        Downloading resume...
                        <br />
                        <span className="text-ide-gray text-xs">If download doesn't start, check pop-up blocker.</span>
                    </span>
                )
            };
        }

        const node = getNode(cwd);

        if (!node || node.type !== "dir") return { output: <span className="text-red-400">Error reading directory</span> };

        const fileNode = node.children[target];

        if (!fileNode) {
            return { output: <span className="text-red-400">cat: {target}: No such file or directory</span> };
        }
        if (fileNode.type === "dir") {
            return { output: <span className="text-red-400">cat: {target}: Is a directory</span> };
        }

        return { output: fileNode.content };
    },

    projects: () => COMMANDS.ls([], { cwd: "~/projects", setCwd: () => { } }),

    exit: (_args, { onExit }) => ({
        output: (
            <div className="text-green-500 dark:text-green-400">
                <TerminalTypewriter
                    text="Ending terminal session..."
                    onComplete={onExit}
                />
            </div>
        ),
    }),

    clear: () => ({
        output: null,
        action: "CLEAR",
    }),
    sudo: () => ({
        output: (
            <span className="text-red-400">
                nice try, but you don’t need root to view projects.
            </span>
        ),
    }),
    rm: (args) => {
        const isRf = args.includes("-rf") || (args.includes("-r") && args.includes("-f"));

        if (isRf) {
            return { output: <span className="text-red-400">warning: rm -rf detected. Relax, this isn’t your production server.</span> };
        }

        return { output: <span className="text-red-400">nothing to remove. Your mistakes are safe here :)</span> };
    },
};
