"use client";

import { useState } from "react";
import { Terminal } from "@/components/Terminal/Terminal";
import { BootSequence } from "@/components/Terminal/BootSequence";
import { WelcomeAnimation } from "@/components/Terminal/WelcomeAnimation";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Background } from "@/components/Background";
import { AnimatePresence, motion } from "framer-motion";

type Stage = "boot" | "welcome" | "terminal" | "portfolio";

export default function Home() {
  const [stage, setStage] = useState<Stage>("boot");

  const handleExit = () => {
    setStage("portfolio");
  };

  return (
    <main className="h-full w-full flex flex-col items-center justify-center relative">
      <Background />
      <AnimatePresence mode="wait">
        {stage === "boot" && (
          <motion.div
            key="boot"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl"
          >
            <BootSequence onComplete={() => setStage("welcome")} />
          </motion.div>
        )}

        {stage === "welcome" && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center absolute inset-0 z-20 pointer-events-none"
          >
            <WelcomeAnimation onComplete={() => setStage("terminal")} />
          </motion.div>
        )}

        {stage === "terminal" && (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="h-full w-full flex items-center justify-center overflow-hidden z-10"
          >
            <Terminal onExit={handleExit} />
          </motion.div>
        )}

        {stage === "portfolio" && (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="fixed inset-0 z-20 overflow-y-auto"
          >
            <Portfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
