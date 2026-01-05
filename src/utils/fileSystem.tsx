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
                            Focus: Building scalable, high-performance web interfaces.<br />
                            Stack: React, Next.js, TensorFlow, Node.js.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-white/10 rounded text-xs">TypeScript</span>
                            <span className="px-2 py-1 bg-white/10 rounded text-xs">Rust</span>
                            <span className="px-2 py-1 bg-white/10 rounded text-xs">AWS</span>
                        </div>
                    </div>
                )
            },
            "projects": {
                type: "dir",
                children: {
                    "CLI-Portfolio": {
                        type: "file",
                        content: (
                            <div className="mt-4 max-w-2xl">
                                <ProjectCard
                                    title="CLI Portfolio"
                                    year="2025"
                                    description="A high-performance, terminal-emulated portfolio website built with Next.js 14, Framer Motion, and Tailwind CSS."
                                    tech={["React", "Next.js", "TypeScript", "Tailwind"]}
                                    link="https://github.com/balodi/portfolio-latest"
                                    image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                                />
                            </div>
                        )
                    },
                    "Neural-Net-Viz": {
                        type: "file",
                        content: (
                            <div className="mt-4 max-w-2xl">
                                <ProjectCard
                                    title="Neural Net Viz"
                                    year="2024"
                                    description="Interactive 3D visualization of neural network training processes."
                                    tech={["D3.js", "Three.js", "Python", "TensorFlow"]}
                                    link="https://github.com/balodi"
                                    image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
                                />
                            </div>
                        )
                    },
                    "E-Commerce-Engine": {
                        type: "file",
                        content: (
                            <div className="mt-4 max-w-2xl">
                                <ProjectCard
                                    title="E-Commerce Engine"
                                    year="2023"
                                    description="Headless e-commerce backend built with Rust and Rocket."
                                    tech={["Rust", "PostgreSQL", "Redis", "Docker"]}
                                    link="https://github.com/balodi"
                                    image="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop"
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
                        <p>Email: <a href="mailto:hello@example.com" className="text-ide-white hover:underline">hello@example.com</a></p>
                        <p>GitHub: <a href="https://github.com" target="_blank" className="text-ide-white hover:underline">@balodi</a></p>
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
