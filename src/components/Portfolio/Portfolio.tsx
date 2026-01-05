"use client";

import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, Linkedin, Twitter, Home, FolderCode, User, Sun, Moon } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { useState, useEffect } from "react";

const experiences = [
    {
        company: "Quantum Systems",
        role: "Senior Systems Engineer",
        period: "2023 - Present",
        description: "Architecting distributed microservices and optimizing high-throughput data pipelines using Rust and Kubernetes.",
        tech: ["rust", "grpc", "k8s", "redis"]
    },
    {
        company: "Stellar Labs",
        role: "Full Stack Developer",
        period: "2021 - 2023",
        description: "Developed collaborative real-time editing tools and improved frontend performance by 40%.",
        tech: ["next.js", "typescript", "websocket", "postgresql"]
    }
];

const projects = [
    {
        title: "CLI Portfolio",
        description: "A high-performance, terminal-emulated portfolio website built with Next.js 14, Framer Motion, and Tailwind CSS.",
        tech: ["react", "next.js", "typescript", "tailwind"],
        link: "https://github.com/balodi/portfolio-latest",
        date: "jan 2025",
        featured: true
    },
    {
        title: "Neural Net Viz",
        description: "Interactive 3D visualization of neural network training processes.",
        tech: ["d3.js", "three.js", "python", "tensorflow"],
        link: "https://github.com/balodi",
        date: "dec 2024"
    },
    {
        title: "E-Commerce Engine",
        description: "Headless e-commerce backend built with Rust and Rocket.",
        tech: ["rust", "postgresql", "redis", "docker"],
        link: "https://github.com/balodi",
        date: "aug 2023"
    }
];

const BinaryDivider = ({ className = "my-2" }: { className?: string }) => (
    <div className={`relative h-5 overflow-hidden ${className}`}>
        {/* Background line */}
        <div className="absolute inset-0 flex items-center">
            <div className="flex-1 h-px bg-white/5" />
        </div>
        {/* Scrolling Binary Marquee */}
        <div className="absolute inset-0 flex items-center overflow-hidden">
            <div
                className="flex font-mono text-[9px] text-green-600/80 dark:text-green-400/80 whitespace-nowrap animate-marquee tracking-tight"
            >
                {Array.from({ length: 16 }).map((_, blockIdx) => (
                    <span key={blockIdx} className="flex items-center">
                        {Array.from({ length: 8 }).map((_, digitIdx) => (
                            <span
                                key={digitIdx}
                                className="inline-block"
                                style={{
                                    animation: `binaryFlicker ${0.05 + Math.random() * 0.15}s steps(1) infinite`,
                                    animationDelay: `${Math.random() * 0.3}s`
                                }}
                            >
                                {Math.random() > 0.5 ? '1' : '0'}
                            </span>
                        ))}
                        <span className="text-muted-foreground/20 mx-1">/</span>
                    </span>
                ))}
            </div>
            <div
                className="flex font-mono text-[9px] text-green-600/80 dark:text-green-400/80 whitespace-nowrap animate-marquee tracking-tight"
            >
                {Array.from({ length: 16 }).map((_, blockIdx) => (
                    <span key={blockIdx} className="flex items-center">
                        {Array.from({ length: 8 }).map((_, digitIdx) => (
                            <span
                                key={digitIdx}
                                className="inline-block"
                                style={{
                                    animation: `binaryFlicker ${0.05 + Math.random() * 0.15}s steps(1) infinite`,
                                    animationDelay: `${Math.random() * 0.3}s`
                                }}
                            >
                                {Math.random() > 0.5 ? '1' : '0'}
                            </span>
                        ))}
                        <span className="text-muted-foreground/20 mx-1">/</span>
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export const Portfolio = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const tabs: any[] = [
        { title: "Home", icon: Home },
        { title: "Contact", icon: Mail },
        { type: "separator" },
        { title: "Github", icon: Github, link: "https://github.com" },
        { title: "LinkedIn", icon: Linkedin, link: "https://linkedin.com" },
        { type: "separator" },
        { title: isDarkMode ? "Light Mode" : "Dark Mode", icon: isDarkMode ? Sun : Moon, action: "toggleTheme" },
    ];

    const handleTabChange = (index: number | null) => {
        if (index === null) return;

        const tab = tabs[index];
        if (tab.type === "separator") return;

        if (tab.action === "toggleTheme") {
            setIsDarkMode(!isDarkMode);
            return;
        }

        if (tab.link) {
            window.open(tab.link, "_blank", "noopener,noreferrer");
            return;
        }

        const sectionMap: { [key: string]: string } = {
            "Home": "top",
            "Contact": "contact"
        };

        const sectionId = sectionMap[tab.title];

        if (sectionId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (sectionId) {
            const element = document.getElementById(sectionId);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen w-full bg-background text-foreground overflow-y-auto relative font-sans scroll-smooth transition-colors duration-300">
            {/* Noise Texture Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.4] mix-blend-soft-light dark:opacity-[0.3]">
                <svg className="h-full w-full">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.65"
                            numOctaves="3"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />

            {/* Micro-Grid Overlay with Center Mask */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.15] dark:opacity-[0.2]"
                style={{
                    backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
                    backgroundSize: '16px 16px',
                    maskImage: 'radial-gradient(circle at center, transparent 20%, black 80%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, transparent 20%, black 80%)'
                }}
            />

            {/* Navigation Dock */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
                <ExpandableTabs
                    tabs={tabs}
                    onChange={handleTabChange}
                    activeColor="text-green-500 dark:text-green-400"
                    className="bg-background/80 border-border backdrop-blur-xl shadow-2xl shadow-green-500/10 rounded-2xl"
                />
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 pb-32">

                {/* Header Section */}
                <motion.header
                    id="top"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    {/* Profile Row */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-border flex items-center justify-center">
                            <span className="text-2xl font-bold text-green-500 dark:text-green-400">A</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold tracking-tight">Aryan Balodi</h1>
                            <p className="text-sm text-muted-foreground font-mono">[aryan-balodi]</p>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="border-t border-border pt-6">
                        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-3">
                            I build CLI tools and web/backend apps. I like software that's fast, focused, and doesn't waste your time.
                        </p>
                        <p className="text-sm text-muted-foreground/60 mb-4">
                            Currently crafting robust systems in TypeScript and Rust
                        </p>

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-400 bg-green-500/10 border border-green-500/20 rounded">
                            <span className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full animate-pulse" />
                            Open to work
                        </div>
                    </div>
                </motion.header>

                <BinaryDivider />

                {/* Experience Section */}
                <motion.section
                    id="experience"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6"
                >
                    <div className="flex items-baseline gap-2 mb-4">
                        <h2 className="text-lg font-medium">experience</h2>
                        <span className="text-xs text-gray-500 font-mono">({experiences.length})</span>
                    </div>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
                                className="relative pl-4 border-l border-border"
                            >
                                <div className="flex items-start justify-between mb-1">
                                    <div>
                                        <h3 className="text-sm font-medium text-green-600 dark:text-green-400">
                                            {exp.role}
                                        </h3>
                                        <p className="text-xs font-semibold">{exp.company}</p>
                                    </div>
                                    <span className="text-[10px] font-mono text-muted-foreground/50">{exp.period}</span>
                                </div>
                                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground/70 bg-muted/30 border border-border/50 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <BinaryDivider />

                {/* Projects Section */}
                <motion.section
                    id="projects"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6"
                >
                    <div className="flex items-baseline gap-2 mb-4">
                        <h2 className="text-lg font-medium">projects</h2>
                        <span className="text-xs text-gray-500 font-mono">({projects.length})</span>
                    </div>

                    <div className="space-y-4">
                        {projects.map((project, index) => (
                            <motion.a
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                                className="group block"
                            >
                                <div className="p-4 border border-border rounded-lg hover:border-green-500/50 hover:bg-muted/50 transition-all">
                                    {/* Title Row */}
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            {project.featured && (
                                                <span className="px-1.5 py-0.5 text-[10px] font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded">
                                                    featured
                                                </span>
                                            )}
                                        </div>
                                        <ExternalLink size={12} className="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
                                    </div>

                                    {/* Description */}
                                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags and Date */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-muted border border-border rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-mono text-muted-foreground/50">{project.date}</span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.section>

                <BinaryDivider />

                {/* Contact Section */}
                <motion.section
                    id="contact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="pt-2"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-sm font-medium">contact</h2>
                    </div>
                    <a
                        href="mailto:hello@example.com"
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                        <Mail size={14} />
                        hello@example.com
                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </motion.section>

                <BinaryDivider className="mt-6 mb-4" />

                {/* Footer */}
                <footer className="mt-8">
                    <p className="text-[10px] text-muted-foreground/50 font-mono text-center">
                        © 2025 · built with next.js
                    </p>
                </footer>
            </div>
        </div>
    );
};
