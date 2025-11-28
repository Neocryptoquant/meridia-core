import { PlusCircle, Rocket, Compass } from "lucide-react";

export function QuickActions() {
    return (
        <div className="flex flex-col gap-4 rounded-xl p-6 border border-white/10 bg-white/5">
            <h3 className="text-white text-lg font-bold">Quick Actions</h3>
            <div className="flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors cursor-pointer">
                    <PlusCircle className="size-5" />
                    <span className="font-medium text-sm">Create Supply Agreement</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer">
                    <Rocket className="size-5" />
                    <span className="font-medium text-sm">Deploy Market Maker</span>
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer">
                    <Compass className="size-5" />
                    <span className="font-medium text-sm">Explore Solutions</span>
                </button>
            </div>
        </div>
    );
}
