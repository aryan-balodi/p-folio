import { COMMANDS } from "./commands";
import { FILE_SYSTEM, FileSystemNode } from "./fileSystem";

// Get node at path (reused from commands.tsx logic)
const getNode = (path: string): FileSystemNode | null => {
    if (path === "~") return FILE_SYSTEM["~"];

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

// Get all items in current directory
const getItemsInDirectory = (cwd: string): string[] => {
    const node = getNode(cwd);
    if (!node || node.type !== "dir") return [];
    return Object.keys(node.children);
};

// Find common prefix among strings
const findCommonPrefix = (strings: string[]): string => {
    if (strings.length === 0) return "";
    if (strings.length === 1) return strings[0];

    let prefix = strings[0];
    for (let i = 1; i < strings.length; i++) {
        while (strings[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
};

export const autoComplete = (input: string, cwd: string): string => {
    if (!input.trim()) return input;

    const parts = input.split(" ");
    const commandName = parts[0];

    // If only typing command (no space yet)
    if (parts.length === 1) {
        const availableCommands = Object.keys(COMMANDS);
        const matches = availableCommands.filter(cmd => cmd.startsWith(commandName));

        if (matches.length === 1) {
            return matches[0];
        } else if (matches.length > 1) {
            // Return common prefix
            return findCommonPrefix(matches);
        }
        return input;
    }

    // If typing arguments (file/directory completion)
    const lastArg = parts[parts.length - 1];
    const itemsInDir = getItemsInDirectory(cwd);
    const matches = itemsInDir.filter(item => item.startsWith(lastArg));

    if (matches.length === 1) {
        // Complete the last argument
        parts[parts.length - 1] = matches[0];
        return parts.join(" ");
    } else if (matches.length > 1) {
        // Return common prefix
        const commonPrefix = findCommonPrefix(matches);
        parts[parts.length - 1] = commonPrefix;
        return parts.join(" ");
    }

    return input;
};
