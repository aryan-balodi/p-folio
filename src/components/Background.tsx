export const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#050505]">
            {/* Centered Floating Orbs (Behind Terminal) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px]">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/60 rounded-full blur-[50px] animate-float" />
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-500/50 rounded-full blur-[60px] animate-float-delayed" />
                <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-pink-500/40 rounded-full blur-[40px] animate-float-slow" />
                <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-emerald-500/40 rounded-full blur-[50px] animate-float" />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
};
