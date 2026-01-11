# Aryan's Portfolio
Live at: [balodi.me](https://balodi.me)

This is my personal portfolio website, built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. It features a retro-modern terminal interface that acts as the primary gateway to exploring my work and background.

## 🚀 Terminal logic implementation

I implemented the terminal logic to feel like a real shell interaction. Here’s how it works in short and easy steps:

1.  **The Brain (`useTerminal.tsx`)**: This is a custom React hook that manages everything. It keeps track of where you are (current folder) and what you've typed (history).
2.  **The Command Center (`commands.tsx`)**: All logic for commands like `ls`, `cd`, and `exit` is stored here. When you type something, the terminal looks up the command in this file and returns a response.
3.  **The UI Components**:
    *   **Input**: Takes your typing and sends it to the command center. To make it feel real, I added **Tab to Autocomplete** and use the **Up Arrow** to scroll through your previous commands.
    *   **History**: Renders the previous commands and their outputs so it looks like a continuous session.
    *   **Terminal**: The main container that wraps everything together and gives it that sleek, glassmorphism look.
4.  **Interactive Elements**: I've added button interactions (like the red 'X' button) that trigger terminal actions (like `exit`) to make the experience seamless.

---

## 📦 Deployment

The project is deployed on **Vercel**. Every push to the `main` branch automatically updates the live site.
