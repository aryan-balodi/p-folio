"use client";

import { useState } from "react";
import { Terminal } from "@/components/Terminal/Terminal";
import { BootSequence } from "@/components/Terminal/BootSequence";
import { Background } from "@/components/Background";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [booting, setBooting] = useState(true);

  return (
    <main className="h-full w-full flex flex-col items-center justify-center relative">
      <Background />
      <AnimatePresence mode="wait">
        {booting ? (
          <motion.div
            key="boot"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl"
          >
            <BootSequence onComplete={() => setBooting(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full flex items-center justify-center overflow-hidden"
          >
            <Terminal />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
