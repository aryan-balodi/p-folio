"use client";

import { motion } from "framer-motion";
import { Github, Mail, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "CLI Portfolio",
        year: "2025",
        description: "A high-performance, terminal-emulated portfolio website built with Next.js 14, Framer Motion, and Tailwind CSS.",
        tech: ["React", "Next.js", "TypeScript", "Tailwind"],
        link: "https://github.com/balodi/portfolio-latest",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Neural Net Viz",
        year: "2024",
        description: "Interactive 3D visualization of neural network training processes.",
        tech: ["D3.js", "Three.js", "Python", "TensorFlow"],
        link: "https://github.com/balodi",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "E-Commerce Engine",
        year: "2023",
        description: "Headless e-commerce backend built with Rust and Rocket.",
        tech: ["Rust", "PostgreSQL", "Redis", "Docker"],
        link: "https://github.com/balodi",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop"
    }
];

export const Portfolio = () => {
    return (
        <div className="min-h-screen w-full bg-black text-white overflow-y-auto relative">
            {/* Grid Pattern Background */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Noise Texture */}
            <div className="fixed inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            {/* Gradient Orbs */}
            <div className="fixed top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="flex flex-col items-center px-6 pt-32 pb-20"
                >
                    <div className="max-w-3xl w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mb-4"
                        >
                            <span className="text-green-400 font-mono text-sm">~/portfolio</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                        >
                            Aryan <span className="text-green-400">Balodi</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl font-light"
                        >
                            Building scalable, high-performance web interfaces with modern technologies.
                            Focused on clean code, exceptional UX, and pixel-perfect execution.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex gap-3 flex-wrap mb-12"
                        >
                            {["TypeScript", "React", "Next.js", "Rust", "AWS"].map((tech, i) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-gray-300 hover:border-green-400/50 hover:text-green-400 transition-all duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex gap-4"
                        >
                            <a
                                href="mailto:hello@example.com"
                                className="group flex items-center gap-2 px-5 py-2.5 bg-green-400/10 border border-green-400/20 rounded-lg text-sm font-medium text-green-400 hover:bg-green-400/20 transition-all duration-300"
                            >
                                <Mail size={16} />
                                Get in touch
                                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:border-white/20 hover:text-white transition-all duration-300"
                            >
                                <Github size={16} />
                                GitHub
                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Projects Section */}
                <section className="py-24 px-6">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-3">
                                Selected <span className="text-green-400">Work</span>
                            </h2>
                            <p className="text-sm text-gray-400 font-light">Projects that showcase my approach to problem-solving</p>
                        </motion.div>

                        <div className="space-y-6">
                            {projects.map((project, index) => (
                                <motion.a
                                    key={project.title}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="group block"
                                >
                                    <div className="relative bg-white/[0.02] border border-white/5 rounded-xl p-6 md:p-8 hover:border-green-400/30 hover:bg-white/[0.03] transition-all duration-500">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {/* Project Image */}
                                            <div className="md:w-48 h-32 rounded-lg overflow-hidden bg-white/5 shrink-0">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                                                />
                                            </div>

                                            {/* Project Info */}
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-start justify-between mb-3">
                                                        <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors">
                                                            {project.title}
                                                        </h3>
                                                        <span className="text-xs text-gray-500 font-mono">{project.year}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-400 mb-4 font-light leading-relaxed">
                                                        {project.description}
                                                    </p>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tech.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-gray-400"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Arrow Icon */}
                                            <div className="hidden md:flex items-center">
                                                <ArrowUpRight
                                                    size={20}
                                                    className="text-gray-600 group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-24 px-6 border-t border-white/5">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Let's <span className="text-green-400">Connect</span>
                            </h2>
                            <p className="text-sm text-gray-400 mb-12 font-light">
                                Open to new opportunities and collaborations
                            </p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                <a
                                    href="mailto:hello@example.com"
                                    className="group flex items-center gap-2 px-6 py-3 bg-green-400/10 border border-green-400/20 rounded-lg text-sm font-medium text-green-400 hover:bg-green-400/20 transition-all duration-300"
                                >
                                    <Mail size={18} />
                                    hello@example.com
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:border-white/20 hover:text-white transition-all duration-300"
                                >
                                    <Github size={18} />
                                    @balodi
                                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 px-6 border-t border-white/5">
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-500 font-mono">© 2025 Aryan Balodi</p>
                        <p className="text-xs text-gray-600 font-light">Designed & built with Next.js</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};
