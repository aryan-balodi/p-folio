import { motion } from "framer-motion";
import { useId } from "react";
import { useTerminalInteractive, ProjectData } from "@/context/TerminalInteractiveContext";

// Props match ProjectData but without ID (we generate it)
// Props match ProjectData but without ID (we generate it)
type ProjectCardProps = Omit<ProjectData, "id">;

export const ProjectCard = (props: ProjectCardProps) => {
    const id = useId();
    const { setActiveCard, activeCard } = useTerminalInteractive();
    const isActive = activeCard?.id === id;

    const handleMouseEnter = () => {
        setActiveCard({ ...props, id });
    };

    return (
        <div
            className="relative w-full h-[80px]"
            onMouseEnter={handleMouseEnter}
        >
            {/* Placeholder: Keeps the space in the list. layoutId handles the magic. 
            Removed manual opacity toggling to prevent animation stutter. */}
            <motion.div
                layoutId={`card-${id}`}
                className={`w-full h-full rounded-xl border border-white/5 overflow-hidden cursor-pointer group relative transition-colors duration-0 ${isActive ? 'bg-[#050505] border-blue-500/50' : 'bg-white/[0.03]'}`}
                // Optimistic update: separate style prop to ensure immediate color match even before class application if needed
                style={{
                    backgroundColor: isActive ? "#050505" : "rgba(255, 255, 255, 0.03)",
                    zIndex: isActive ? 50 : 1
                }}
            >
                {/* Header (Always Visible) - Restored Shared Layout ID */}
                <div className="absolute top-0 left-0 right-0 p-5 flex justify-between items-center z-10 bg-transparent">
                    <motion.h3
                        layoutId={`title-${id}`}
                        className="font-mono text-base text-ide-white group-hover:text-blue-400 transition-colors"
                    >
                        {props.title}
                    </motion.h3>
                    <motion.span
                        layoutId={`year-${id}`}
                        className="text-xs text-ide-gray font-mono"
                    >
                        {props.year}
                    </motion.span>
                </div>

                {/* Minimal Content for the list view to maintain shape if needed */}
                <div className="pt-20 p-5 opacity-0">
                    {/* Hidden content just for layout stability */}
                </div>
            </motion.div>
        </div>
    );
};
