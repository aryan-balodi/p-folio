"use client";

import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, Linkedin, Twitter, Home, FolderCode, User, Sun, Moon, FileUser } from "lucide-react";
import { SimpleDock } from "@/components/ui/simple-dock";
import { TypewriterText } from "@/components/TypewriterText";
import { LastUpdated } from "@/components/LastUpdated";
import { useState, useEffect } from "react";

const experiences = [
    {
        company: "Tenacio",
        role: "AI Engineer Intern",
        period: "Jun'25 - Aug'25",
        description: "Designed and built a conversational agent to interact with users and help them select the fintech services and vendors best suited to their priorities.",
        tech: ["python", "rag", "propmt-engineering", "chromadb"]
    },
    {
        company: "NetAI",
        role: "AI Engineer Intern",
        period: "Jun'24 - Aug'24",
        description: "Developed the backend of a chatbot for a NMS product portal aimed to answer user queries about networking FAQs and their real time data.",
        tech: ["python", "rag", "llama-index", "hugging-face"]
    }
];

const projects = [
    {
        title: "Cold DM Agent",
        description: "Generates personalised messages from comments data and automates sending (for Instagram), acting as a lightweight CRM-style tool for top-of-funnel leads.",
        tech: ["python", "instagrapi", "cli-script", "automation"],
        link: "https://github.com/aryan-balodi/Cold-DM-Agent",
        date: "july 2025",
        featured: true
    },
    {
        title: "Sync-Space",
        description: "A web app that streamlines campus scheduling and resource management with real-time updates and role-based access control.",
        tech: ["next.js", "supabase", "tailwindcss", "typescript"],
        link: "https://github.com/aryan-balodi/sync-space",
        date: "dec 2024"
    },
    {
        title: "CLI-Portfolio",
        description: "A terminal-style portfolio that lets visitors explore my work and experience through an interactive CLI interface, blending developer tooling aesthetics with a personal site.",
        tech: ["next.js", "typescript", "tailwindcss"],
        link: "https://github.com/aryan-balodi/p-folio",
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
        { title: "Resume", icon: FileUser, action: "downloadResume" },
        { type: "separator" },
        { title: "Github", icon: Github, link: "https://github.com/aryan-balodi" },
        { title: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/aryanbalodi/" },
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

        if (tab.action === "downloadResume") {
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Aryan_Balodi_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return;
        }

        if (tab.link) {
            window.open(tab.link, "_blank", "noopener,noreferrer");
            return;
        }

        const sectionMap: { [key: string]: string } = {
            "Home": "top",
        };

        const sectionId = sectionMap[tab.title];

        if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
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
            <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50">
                <SimpleDock
                    tabs={tabs}
                    onChange={handleTabChange}
                    activeColor="text-green-500 dark:text-green-400"
                    className="bg-background/80 border-border backdrop-blur-xl shadow-2xl shadow-green-500/10 rounded-2xl"
                />
            </div>

            {/* Main Container */}
            <div className="relative z-10 max-w-2xl mx-auto px-6 pt-24 pb-32">

                {/* Header Section */}
                <motion.header
                    id="top"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    {/* Profile Row - Avatar on right */}
                    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6 md:gap-0 mb-10 md:mb-15">
                        <div className="flex flex-col items-center md:items-start justify-center pt-2 text-center md:text-left">
                            <h1 className="text-4xl font-bold tracking-tight mb-1.5">Aryan Balodi</h1>
                            <TypewriterText
                                words={["Backend Developer", "AI Engineer", "Product-Focused Dev", "Open Source Enthusiast"]}
                                className="text-lg text-muted-foreground"
                            />
                        </div>
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-border flex items-center justify-center flex-shrink-0 overflow-hidden relative">
                            <span className="text-4xl font-bold text-green-500 dark:text-green-400 absolute fallback-text">A</span>
                            <img
                                src="/me.jpg"
                                alt="Aryan Balodi"
                                className="w-full h-full object-cover relative z-10 scale-100"
                                style={{ objectPosition: ' 0% -60%' }}
                                onError={(e) => {
                                    // Fallback if image not found
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>

                    {/* Status Badge - between heading and bio */}
                    <div className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-green-600 dark:text-green-400 bg-green-500/10 border border-green-500/20 rounded w-full mb-5 text-center">
                        <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                        <span className="flex-1">Available - Open to collaborate and build real-world products.</span>
                    </div>

                    {/* Bio - pushed further down */}
                    <div className="pt-6">
                        <h2 className="text-xl font-medium mb-2">About</h2>
                        <p className="text-base text-muted-foreground/80 leading-relaxed mb-5">
                            Backend and AI engineer focused on building systems that solve real-world problems, with a strong interest in finance and a bias toward ownership, clarity, and impact. Open to collaborations and freelance projects.
                        </p>
                        <p className="text-base text-muted-foreground/60">
                            Currently exploring OSS.
                        </p>
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
                        <h2 className="text-xl font-medium">Experience</h2>
                        <span className="text-sm text-gray-500 font-mono">({experiences.length})</span>
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
                                        <h3 className="text-lg font-medium text-green-600 dark:text-green-400">
                                            {exp.role}
                                        </h3>
                                        <p className="text-sm font-semibold">{exp.company}</p>
                                    </div>
                                    <span className="text-[10px] font-mono text-muted-foreground/50">{exp.period}</span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 text-xs font-mono text-muted-foreground/70 bg-muted/30 border border-border/50 rounded"
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
                        <h2 className="text-xl font-medium">Projects</h2>
                        <span className="text-sm text-gray-500 font-mono">({projects.length})</span>
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
                                            <h3 className="text-base font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            {project.featured && (
                                                <span className="px-1.5 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded">
                                                    featured
                                                </span>
                                            )}
                                        </div>
                                        <ExternalLink size={12} className="text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tags and Date */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-0.5 text-xs font-mono text-muted-foreground bg-muted border border-border rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-xs font-mono text-muted-foreground/50">{project.date}</span>
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
                        <h2 className="text-xl font-medium">contact</h2>
                    </div>
                    <a
                        href="mailto:balodiaryan5@gmail.com"
                        className="group flex items-center gap-2 text-base text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                        <Mail size={16} />
                        balodiaryan5@gmail.com
                        <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </motion.section>

                <BinaryDivider className="mt-6 mb-4" />

                {/* Footer */}
                <footer className="mt-8 flex items-center justify-between">
                    <LastUpdated />
                    <p className="text-xs text-muted-foreground/50 font-mono text-right">
                        © 2026 Aryan Balodi
                    </p>
                </footer>
            </div>
        </div>
    );
};
