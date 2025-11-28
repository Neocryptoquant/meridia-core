export function DashboardStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 border border-white/10 bg-white/5">
                <p className="text-gray-300 text-base font-medium leading-normal">Total Trading Volume</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">2,456,123 SOL</p>
                <p className="text-green-400 text-base font-medium leading-normal">+2.5%</p>
            </div>
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 border border-white/10 bg-white/5">
                <p className="text-gray-300 text-base font-medium leading-normal">Market Price (MWh)</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">34.56 USDC</p>
                <p className="text-red-400 text-base font-medium leading-normal">-1.2%</p>
            </div>
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 border border-white/10 bg-white/5">
                <p className="text-gray-300 text-base font-medium leading-normal">Active Agreements</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">128</p>
                <p className="text-green-400 text-base font-medium leading-normal">+5</p>
            </div>
            <div className="flex flex-1 flex-col gap-2 rounded-xl p-6 border border-white/10 bg-white/5">
                <p className="text-gray-300 text-base font-medium leading-normal">Your Balance</p>
                <p className="text-white tracking-light text-2xl font-bold leading-tight">1,089.50 SOL</p>
                <p className="text-green-400 text-base font-medium leading-normal">+10.1%</p>
            </div>
        </div>
    );
}
