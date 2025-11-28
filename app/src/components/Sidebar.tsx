import Link from "next/link";
import { LayoutDashboard, Store, Link as LinkIcon, BarChart3, Briefcase, Settings } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-64 flex-shrink-0 bg-[#111814] p-4 flex flex-col justify-between border-r border-white/10">
            <div className="flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUy5iJx_FlPc8c6YPPvQShiDczVVl0ptJlefq5koFCm5EzpeQJYaUpZiuSyMnm_AbGZLQ7GEx44i9nb3U8dFMOlKkruZR5VwVqeGVFaxOIkJ-BEgSkr0PgIawCCmveDSawxNOw4oeIp_7r8pmj7kacyKzjekwJf6PpoFsHQ95XZrQQ8g7L9wv7ZMShwLHpDtkZqaEVp2xaYF-ZI31MT1ch7-NtKwnaTwWot5FJGe7B5gEeg99j_9q7tdPM-eYRnvsnpu9eFNXNoxQ")' }}></div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-base font-medium leading-normal">Meridia</h1>
                        <p className="text-[#9db9a8] text-sm font-normal leading-normal">Energy Markets on Solana</p>
                    </div>
                </Link>
                <nav className="flex flex-col gap-2">
                    <Link href="/enterprise" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary">
                        <LayoutDashboard className="size-5" />
                        <p className="text-sm font-bold leading-normal">Dashboard</p>
                    </Link>
                    <Link href="/market-making" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 text-gray-300 transition-colors">
                        <Store className="size-5" />
                        <p className="text-sm font-medium leading-normal">Market Making</p>
                    </Link>
                    <Link href="/supply-chain" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 text-gray-300 transition-colors">
                        <LinkIcon className="size-5" />
                        <p className="text-sm font-medium leading-normal">Supply Chain</p>
                    </Link>
                    <Link href="/enterprise" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 text-gray-300 transition-colors">
                        <BarChart3 className="size-5" />
                        <p className="text-sm font-medium leading-normal">Analytics</p>
                    </Link>
                    <Link href="/enterprise" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 text-gray-300 transition-colors">
                        <Briefcase className="size-5" />
                        <p className="text-sm font-medium leading-normal">Enterprise</p>
                    </Link>
                </nav>
            </div>
            <div className="flex flex-col gap-1 border-t border-gray-200/10 pt-4">
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 text-gray-300 transition-colors">
                    <Settings className="size-5" />
                    <p className="text-sm font-medium leading-normal">Settings</p>
                </Link>
            </div>
        </aside>
    );
}
