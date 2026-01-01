import { HistoryItem } from "@/hooks/useTerminal";

interface HistoryProps {
    history: HistoryItem[];
}

export const History = ({ history }: HistoryProps) => {
    return (
        <div className="space-y-4 mb-4">
            {history.map((item) => (
                <div key={item.id} className="space-y-1">
                    <div className="flex items-center gap-2 text-ide-gray">
                        <span className="text-ide-accent">❯</span>
                        <span className="text-ide-white opacity-90">{item.command}</span>
                    </div>
                    <div className="pl-5 text-ide-gray/90 whitespace-pre-wrap leading-relaxed">
                        {item.output}
                    </div>
                </div>
            ))}
        </div>
    );
};
