import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import React from "react";

export const CursorOrb = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const opacity = useMotionValue(0); // Default hidden

    // Spring physics for the "tracer" effect
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);
    // Smooth fade in/out constant
    const opacitySpring = useSpring(opacity, { damping: 20, stiffness: 200 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const relativeY = e.clientY - rect.top;

            mouseX.set(relativeX);
            mouseY.set(relativeY);
            opacity.set(1); // Ensure visible while moving
        };

        const handleMouseLeave = () => {
            opacity.set(0);
        };

        const handleMouseEnter = () => {
            opacity.set(1);
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
        container.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            container.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [containerRef, mouseX, mouseY, opacity]);

    return (
        <motion.div
            className="absolute top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 mix-blend-screen"
            style={{
                x,
                y,
                opacity: opacitySpring,
                left: -6, // Center the orb on cursor (half of width)
                top: -6
            }}
        >
            {/* Core Glow */}
            <div className="absolute inset-0 bg-blue-400 rounded-full blur-[1px]" />
            {/* Outer Glow */}
            <div className="absolute inset-[-2px] bg-blue-500/50 rounded-full blur-[5px]" />
            {/* Tracer Tail (Subtle) */}
            <div className="absolute inset-[-4px] bg-blue-600/20 rounded-full blur-[8px]" />
        </motion.div>
    );
};
