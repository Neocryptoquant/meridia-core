import Link from "next/link";
import { Zap, Gavel, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";

export default function Home() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-dark overflow-x-hidden font-sans">
            <div className="layout-container flex h-full grow flex-col">
                <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {/* TopNavBar */}
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 dark:border-b-[#28392f] px-4 sm:px-6 lg:px-10 py-3">
                            <Link href="/" className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity">
                                <div className="size-6 text-primary">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                                        <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                                <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Meridia</h2>
                            </Link>
                            <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                                <div className="flex items-center gap-9">
                                    <Link href="/market-making" className="text-white/80 hover:text-white text-sm font-medium leading-normal">Market Making</Link>
                                    <Link href="/supply-chain" className="text-white/80 hover:text-white text-sm font-medium leading-normal">Supply Chain</Link>
                                    <Link href="/enterprise" className="text-white text-sm font-medium leading-normal">Enterprise Solutions</Link>
                                    <Link href="#" className="text-white/80 hover:text-white text-sm font-medium leading-normal">About</Link>
                                </div>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                                    <span className="truncate">Contact Sales</span>
                                </button>
                            </div>
                        </header>

                        {/* HeroSection */}
                        <div className="py-10">
                            <div className="@container">
                                <div className="@[480px]:p-4">
                                    <div
                                        className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                                        style={{ backgroundImage: 'linear-gradient(rgba(16, 34, 24, 0.1) 0%, rgba(16, 34, 24, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-JjMf0iEHsb1CrC5SM2HYptLel3K0oPrBbs7JvfE_l2BDl8DbELbWILYABXIiTI7YzLFbvh0r7ZNmov3GiXL7vCQk4xbLgY89coJZ7mt9FTO2O2e-rKetBWN9UwD7w3gw2jBOTYoALQtUuKpM3AhwP-5NEv5jKAZq-BiTpug7l6Pjm12GjUTPP62rdRKvDwYu0sSmc-eYmSOYa_8lggvEi6rmKslS2SHAaX_bFcQ1uwJxvNQhDf1oJ9Gc3w5sCEhZiuSQuKoE65w")' }}
                                    >
                                        <div className="flex flex-col gap-2 text-left">
                                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                                Automated Energy Grid Balancing
                                            </h1>
                                            <h2 className="text-white/90 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-2xl">
                                                Harnessing the power of Solana for real-time, decentralized energy market optimization and enhanced grid stability.
                                            </h2>
                                        </div>
                                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:opacity-90 transition-opacity">
                                            <span className="truncate">Request a Demo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FeatureSection */}
                        <div className="flex flex-col gap-10 px-4 py-10 pt-16 @container">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                                    Advanced Capabilities for a Smarter Grid
                                </h1>
                                <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
                                    Our solution provides a comprehensive suite of tools designed to optimize energy distribution, reduce costs, and enhance transparency through blockchain technology.
                                </p>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 p-0">
                                <div className="flex flex-1 gap-4 rounded-xl border border-white/10 dark:border-[#3b5445] bg-white/5 dark:bg-[#1c2720] p-4 flex-col">
                                    <div className="text-primary">
                                        <Zap className="size-7" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-white text-base font-bold leading-tight">Real-Time Market Making</h2>
                                        <p className="text-white/60 dark:text-[#9db9a8] text-sm font-normal leading-normal">Execute energy trades in milliseconds with our high-frequency trading engine built on Solana.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-4 rounded-xl border border-white/10 dark:border-[#3b5445] bg-white/5 dark:bg-[#1c2720] p-4 flex-col">
                                    <div className="text-primary">
                                        <Gavel className="size-7" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-white text-base font-bold leading-tight">Smart Contract Automation</h2>
                                        <p className="text-white/60 dark:text-[#9db9a8] text-sm font-normal leading-normal">Automate supply agreements and settlements with secure, self-executing smart contracts.</p>
                                    </div>
                                </div>
                                <div className="flex flex-1 gap-4 rounded-xl border border-white/10 dark:border-[#3b5445] bg-white/5 dark:bg-[#1c2720] p-4 flex-col">
                                    <div className="text-primary">
                                        <ShieldCheck className="size-7" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-white text-base font-bold leading-tight">Supply Chain Verification</h2>
                                        <p className="text-white/60 dark:text-[#9db9a8] text-sm font-normal leading-normal">Ensure end-to-end transparency and traceability of energy from source to consumption.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <footer className="text-center py-10 mt-10 border-t border-white/10 dark:border-[#28392f]">
                            <p className="text-sm text-white/60">© 2025 Meridia. All rights reserved.</p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
