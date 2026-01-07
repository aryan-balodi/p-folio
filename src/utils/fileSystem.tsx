import { ReactNode } from "react";
import { ProjectCard } from "@/components/Terminal/ProjectCard";

export type FileSystemNode =
    | { type: "file"; content: ReactNode }
    | { type: "dir"; children: Record<string, FileSystemNode> };

export const FILE_SYSTEM: Record<string, FileSystemNode> = {
    "~": {
        type: "dir",
        children: {
            "about.md": {
                type: "file",
                content: (
                    <div className="space-y-4 max-w-2xl border-l-2 border-ide-border pl-4">
                        <div className="text-lg font-bold text-ide-white">Aryan Balodi</div>
                        <p className="text-ide-gray">
                            Focus: Building backend systems and AI-powered products for real-world use.<br />
                            Stack: Python, TypeScript, C++, Node, Next.js, GenAI, Git.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-white/10 rounded text-xs">LLMs</span>
                            <span className="px-2 py-1 bg-white/10 rounded text-xs">RAG</span>
                            <span className="px-2 py-1 bg-white/10 rounded text-xs">VectorDB</span>
                            <span className="px-2 py-1 bg-white/10 rounded text-xs">Prompt Engineering</span>
                        </div>
                    </div>
                )
            },
            "projects": {
                type: "dir",
                children: {
                    "Cold-DM-Agent": {
                        type: "file",
                        content: (
                            <div className="mt-4 max-w-2xl">
                                <ProjectCard
                                    title="Cold-DM-Agent"
                                    year="2025"
                                    description="Generates personalised messages from comments data and automates sending (for Instagram), acting as a lightweight CRM-style tool for top-of-funnel leads."
                                    tech={["python", "instagrapi", "cli-script", "automation"]}
                                    link="https://github.com/aryan-balodi/Cold-DM-Agent"
                                    image="/cold-dm-agent.png"
                                />
                            </div>
                        )
                    },
                    "Sync-Space": {
                        type: "file",
                        content: (
                            <div className="mt-4 max-w-2xl">
                                <ProjectCard
                                    title="Sync-Space"
                                    year="2024"
                                    description="A web app that streamlines campus scheduling and resource management with real-time updates and role-based access control."
                                    tech={["next.js", "supabase", "tailwindcss", "typescript"]}
                                    link="https://github.com/aryan-balodi/sync-space"
                                    image="/sync-space.png"
                                />
                            </div>
                        )
                    },
                    "CLI-Portfolio": {
                        type: "file",
                        content: (
                            <div className="mt-4 max-w-2xl">
                                <ProjectCard
                                    title="CLI-Portfolio"
                                    year="2026"
                                    description="A terminal-style portfolio that lets visitors explore my work and experience through an interactive CLI interface, blending developer tooling aesthetics with a personal site."
                                    tech={["next.js", "typescript", "tailwindcss"]}
                                    link="https://github.com/aryan-balodi/p-folio"
                                    image="/CLI-Portfolio.png"
                                />
                            </div>
                        )
                    }
                }
            },
            "contact.txt": {
                type: "file",
                content: (
                    <div className="space-y-2 text-ide-gray">
                        <p>Email: <a href="mailto:balodiaryan5@gmail.com" className="text-ide-white hover:underline">balodiaryan5@gmail.com</a></p>
                        <p>GitHub: <a href="https://github.com/aryan-balodi" target="_blank" className="text-ide-white hover:underline">@aryan-balodi</a></p>
                    </div>
                )
            },
            "resume.pdf": {
                type: "file",
                content: (
                    <div className="text-ide-gray">
                        <p>Downloading resume...</p>
                        <p className="text-xs text-red-400 mt-2">Error: File not hosted locally. Contact for a copy.</p>
                    </div>
                )
            }
        }
    }
};
