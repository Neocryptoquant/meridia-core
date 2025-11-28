"use client";

import dynamic from "next/dynamic";
import { Wallet } from "lucide-react";

// Dynamically import WalletMultiButton to avoid hydration errors
const WalletMultiButton = dynamic(
    () => import("@solana/wallet-adapter-react-ui").then((mod) => mod.WalletMultiButton),
    { ssr: false }
);

export function Header() {
    return (
        <header className="flex justify-end gap-2 px-8 py-4 sticky top-0 bg-background-dark/80 backdrop-blur-sm z-10 border-b border-gray-200/10">
            <div className="flex items-center gap-2">
                <WalletMultiButton style={{ backgroundColor: '#13ec6d', color: '#102218', fontWeight: 'bold' }} />
            </div>
        </header>
    );
}
