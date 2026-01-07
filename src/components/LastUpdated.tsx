"use client";

import { useEffect, useState } from "react";

export function LastUpdated() {
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        fetch("https://api.github.com/repos/aryan-balodi/p-folio/commits?per_page=1")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.length > 0 && data[0].commit && data[0].commit.author) {
                    const commitDate = new Date(data[0].commit.author.date);
                    setDate(commitDate.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    }));
                }
            })
            .catch((err) => console.error("Failed to fetch last updated date:", err));
    }, []);

    if (!date) return null;

    return (
        <span className="text-muted-foreground/50 font-mono text-xs">
            Last updated: {date}
        </span>
    );
}
