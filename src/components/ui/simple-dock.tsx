"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
    title: string;
    icon: LucideIcon;
    type?: never;
    link?: string;
    action?: string;
}

interface Separator {
    type: "separator";
    title?: never;
    icon?: never;
}

type TabItem = Tab | Separator;

interface SimpleDockProps {
    tabs: TabItem[];
    className?: string;
    activeColor?: string;
    onChange?: (index: number | null) => void;
}

export function SimpleDock({
    tabs,
    className,
    activeColor = "text-primary",
    onChange,
}: SimpleDockProps) {
    const handleClick = (index: number) => {
        onChange?.(index);
    };

    const Separator = () => (
        <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
    );

    return (
        <div
            className={cn(
                "flex flex-wrap items-center gap-2 rounded-2xl border bg-background p-1.5 shadow-sm",
                className
            )}
        >
            {tabs.map((tab, index) => {
                if (tab.type === "separator") {
                    return <Separator key={`separator-${index}`} />;
                }

                const Icon = tab.icon;
                return (
                    <motion.button
                        key={tab.title}
                        onClick={() => handleClick(index)}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className={cn(
                            "relative flex items-center justify-center rounded-xl p-2.5 text-muted-foreground transition-colors duration-200",
                            "hover:bg-muted hover:text-foreground"
                        )}
                        title={tab.title}
                    >
                        <Icon size={20} />
                    </motion.button>
                );
            })}
        </div>
    );
}
