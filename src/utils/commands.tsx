import { ReactNode } from "react";
import { ProjectCard } from "@/components/Terminal/ProjectCard";

export type CommandResponse = {
    output: ReactNode;
    action?: "CLEAR" | "THEME";
};

export const COMMANDS: Record<string, (args: string[]) => CommandResponse> = {
    help: () => ({
        output: (
            <div className="space-y-4 text-sm mt-2">
                <p className="text-ide-gray w-full border-b border-white/10 pb-2">Available capabilities:</p>
                <div className="grid grid-cols-1 gap-y-2">
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                        <span className="text-ide-accent font-bold min-w-[80px]">about</span>
                        <span className="text-ide-gray text-xs md:text-sm">- System identity & background</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                        <span className="text-ide-accent font-bold min-w-[80px]">projects</span>
                        <span className="text-ide-gray text-xs md:text-sm">- View repositories & work</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                        <span className="text-ide-accent font-bold min-w-[80px]">contact</span>
                        <span className="text-ide-gray text-xs md:text-sm">- Establish connection signals</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                        <span className="text-ide-accent font-bold min-w-[80px]">clear</span>
                        <span className="text-ide-gray text-xs md:text-sm">- Clear terminal buffer</span>
                    </div>
                </div>
            </div>
        ),
    }),
    about: () => ({
        output: (
            <div className="space-y-4 max-w-2xl border-l-2 border-ide-border pl-4">
                <div className="text-lg font-bold text-ide-white">Balodi System</div>
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
        ),
    }),
    projects: () => ({
        output: (
            <div className="mt-10 grid grid-cols-1 gap-6 max-w-2xl pb-10">
                <ProjectCard
                    title="CLI Portfolio"
                    year="2025"
                    description="A high-performance, terminal-emulated portfolio website built with Next.js 14, Framer Motion, and Tailwind CSS. Features include a custom command parser, simulated file system, and immersive glassmorphism UI."
                    tech={["React", "Next.js", "TypeScript", "Tailwind"]}
                    link="https://github.com/balodi/portfolio-latest"
                    image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                />
                <ProjectCard
                    title="Neural Net Viz"
                    year="2024"
                    description="Interactive 3D visualization of neural network training processes. Allows users to adjust hyperparameters in real-time and observe gradient descent in action."
                    tech={["D3.js", "Three.js", "Python", "TensorFlow"]}
                    link="https://github.com/balodi"
                    image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
                />
                <ProjectCard
                    title="E-Commerce Engine"
                    year="2023"
                    description="Headless e-commerce backend built with Rust and Rocket. Handles 10k+ concurrent connections with sub-millisecond latency. detailed analytics dashboard included."
                    tech={["Rust", "PostgreSQL", "Redis", "Docker"]}
                    link="https://github.com/balodi"
                    image="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop"
                />
            </div>
        ),
    }),
    contact: () => ({
        output: (
            <div className="space-y-2 text-ide-gray">
                <p>Email: <a href="mailto:hello@example.com" className="text-ide-white hover:underline">hello@example.com</a></p>
                <p>GitHub: <a href="https://github.com" target="_blank" className="text-ide-white hover:underline">@balodi</a></p>
            </div>
        ),
    }),
    clear: () => ({
        output: null,
        action: "CLEAR",
    }),
};
