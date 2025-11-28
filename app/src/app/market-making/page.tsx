import Link from "next/link";
import { Header } from "@/components/Header";
import { Settings, Bell, AlignLeft, AlignVerticalJustifyCenter, AlignVerticalJustifyStart, ArrowUp, CandlestickChart, FunctionSquare } from "lucide-react";

export default function MarketMaking() {
    return (
        <div className="flex flex-col h-screen bg-background-dark text-white font-sans">
            {/* TopNavBar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#28392f] px-6 py-3 shrink-0">
                <Link href="/" className="flex items-center gap-4 text-white hover:opacity-80 transition-opacity">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                            <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Meridia</h2>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2"><a className="text-white text-sm font-medium leading-normal" href="#">Solar REC/USDC</a></div>
                </div>
                <div className="flex flex-1 justify-end items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-start">
                            <p className="text-[#9db9a8] text-xs font-medium">24h Volume</p>
                            <p className="text-white text-sm font-bold">1,234,567</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-[#9db9a8] text-xs font-medium">Price (USDC)</p>
                            <p className="text-white text-sm font-bold">35.72</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-[#9db9a8] text-xs font-medium">24h Change</p>
                            <p className="text-positive text-sm font-bold">+2.15%</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        {/* Reusing Header component logic for wallet connection would be ideal, but for now sticking to the design */}
                        <Header />
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#28392f] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <Settings className="size-5 text-white" />
                        </button>
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#28392f] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <Bell className="size-5 text-white" />
                        </button>
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWqkY557WNMLNtQdd88-6ApfhpfY2JXJhkAu1-qfto3IgV3EFdCDi4jTJbSY9U09ZirSZHTAMpfXlyP3SbCRSgMJ69KvDTVuR7mHJaD2g1ktBJkrR-laROdue-2_6QBVhduPNCtI3q4fnV21zLa9nxvxO1ujevaTzAa0ujayWRcjeEjfmpwcgPGhMFXyL6DihZdqYNhZ6vQJ3MkohM4CVCX_wbpaElKAdMkX6iGVS6zszu4Fc_SONmgLFIx2XuK5WSpo0IG5_8YNg")' }}></div>
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 grid-rows-6 gap-2 p-2 flex-grow min-h-0">
                {/* Left Column: Order Book & Trades */}
                <div className="col-span-3 row-span-6 flex flex-col gap-2">
                    {/* Order Book */}
                    <div className="bg-panel-dark border border-[#28392f] rounded-lg flex flex-col h-3/5">
                        <div className="flex items-center justify-between p-4 border-b border-[#28392f]">
                            <h3 className="text-base font-bold text-white">Order Book</h3>
                            <div className="flex items-center gap-2">
                                <button className="p-1 rounded bg-[#28392f]"><AlignLeft className="size-4" /></button>
                                <button className="p-1 rounded bg-[#28392f]"><AlignVerticalJustifyCenter className="size-4" /></button>
                                <button className="p-1 rounded bg-[#28392f]"><AlignVerticalJustifyStart className="size-4" /></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 text-xs text-[#9db9a8] p-3 border-b border-[#28392f]">
                            <span>Price (USDC)</span>
                            <span className="text-right">Quantity (REC)</span>
                            <span className="text-right">Total (USDC)</span>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            {/* Asks (Red) */}
                            <div className="text-sm">
                                {[...Array(5)].map((_, i) => (
                                    <div key={`ask - ${i} `} className="grid grid-cols-3 p-1.5 text-xs relative">
                                        <span className="text-negative">35.78</span>
                                        <span className="text-right">150.5</span>
                                        <span className="text-right">5,384.89</span>
                                        <div className="absolute inset-y-0 right-0 bg-negative/10" style={{ width: '60%' }}></div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-3 text-center border-y border-[#28392f]">
                                <span className="text-lg font-bold text-positive">35.72</span>
                                <ArrowUp className="inline text-positive size-5 align-middle ml-1" />
                            </div>
                            {/* Bids (Green) */}
                            <div className="text-sm">
                                {[...Array(10)].map((_, i) => (
                                    <div key={`bid - ${i} `} className="grid grid-cols-3 p-1.5 text-xs relative">
                                        <span className="text-positive">35.71</span>
                                        <span className="text-right">200.0</span>
                                        <span className="text-right">7,142.00</span>
                                        <div className="absolute inset-y-0 right-0 bg-positive/10" style={{ width: '85%' }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Recent Trades */}
                    <div className="bg-panel-dark border border-[#28392f] rounded-lg flex flex-col h-2/5">
                        <div className="p-4 border-b border-[#28392f]">
                            <h3 className="text-base font-bold text-white">Recent Trades</h3>
                        </div>
                        <div className="grid grid-cols-3 text-xs text-[#9db9a8] p-3 border-b border-[#28392f]">
                            <span>Price (USDC)</span>
                            <span className="text-right">Amount (REC)</span>
                            <span className="text-right">Time</span>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            <div className="text-sm">
                                <div className="grid grid-cols-3 p-1.5 text-xs">
                                    <span className="text-positive">35.72</span>
                                    <span className="text-right">50.5</span>
                                    <span className="text-right">14:32:15</span>
                                </div>
                                <div className="grid grid-cols-3 p-1.5 text-xs">
                                    <span className="text-negative">35.74</span>
                                    <span className="text-right">100.0</span>
                                    <span className="text-right">14:32:11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Column: Chart & Position Management */}
                <div className="col-span-6 row-span-6 flex flex-col gap-2">
                    {/* Charting Panel */}
                    <div className="bg-panel-dark border border-[#28392f] rounded-lg flex flex-col h-3/5">
                        <div className="p-4 border-b border-[#28392f]">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">35.72 USDC</p>
                                    <div className="flex gap-2 items-center">
                                        <p className="text-[#9db9a8] text-sm font-normal leading-normal">Solar REC/USDC</p>
                                        <p className="text-positive text-sm font-medium leading-normal">+0.75%</p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#28392f] px-3"><p className="text-white text-xs font-medium">1m</p></div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#28392f] px-3"><p className="text-white text-xs font-medium">5m</p></div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary/20 px-3"><p className="text-primary text-xs font-bold">1H</p></div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#28392f] px-3"><p className="text-white text-xs font-medium">1D</p></div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#28392f] px-3"><CandlestickChart className="size-4 text-white" /></div>
                                    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#28392f] px-3"><FunctionSquare className="size-4 text-white" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow p-4 min-h-0">
                            <div className="w-full h-full bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQzW-lBU3YSLyuCSFtZ2GQxQYhw5Mdae5wSPnu6ImU0l6lN_yubORtyxEMzBG4U-RSJb5qfbbhhuNsLzBv2RH0IfvS-JovLOXtn1F9kNNjn7JupDJwCN3VmV567l0JpVMGnnPnLewRiv98el9-RBooeBSa3Q9XxtSNQ0OxAlzk058UCbaFC4vFA66OiKqbp-6AqpRjVFj-JmHYeVY8Nm5fooBiWMTX7tM9Zg_1O9Ns0coiXDf23RQO-5S9mgF1TybYhTZ25SL541Y')" }}></div>
                        </div>
                    </div>
                    {/* Position Management Panel */}
                    <div className="bg-panel-dark border border-[#28392f] rounded-lg flex flex-col h-2/5">
                        <div className="flex items-center border-b border-[#28392f]">
                            <button className="px-4 py-3 text-sm font-bold border-b-2 border-primary text-white">Open Orders (3)</button>
                            <button className="px-4 py-3 text-sm font-medium text-[#9db9a8] border-b-2 border-transparent">Order History</button>
                            <button className="px-4 py-3 text-sm font-medium text-[#9db9a8] border-b-2 border-transparent">Current Positions</button>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="text-xs text-[#9db9a8] sticky top-0 bg-panel-dark">
                                    <tr>
                                        <th className="p-3 font-medium">Market</th>
                                        <th className="p-3 font-medium">Side</th>
                                        <th className="p-3 font-medium">Price</th>
                                        <th className="p-3 font-medium">Amount</th>
                                        <th className="p-3 font-medium">Filled</th>
                                        <th className="p-3 font-medium">Status</th>
                                        <th className="p-3 font-medium text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-[#28392f]">
                                        <td className="p-3">Solar REC/USDC</td>
                                        <td className="p-3 text-positive">Buy</td>
                                        <td className="p-3">35.50</td>
                                        <td className="p-3">100.0</td>
                                        <td className="p-3">25%</td>
                                        <td className="p-3">Open</td>
                                        <td className="p-3 text-right"><button className="text-negative text-xs font-bold">Cancel</button></td>
                                    </tr>
                                    <tr className="border-t border-[#28392f]">
                                        <td className="p-3">Solar REC/USDC</td>
                                        <td className="p-3 text-negative">Sell</td>
                                        <td className="p-3">35.95</td>
                                        <td className="p-3">50.0</td>
                                        <td className="p-3">0%</td>
                                        <td className="p-3">Open</td>
                                        <td className="p-3 text-right"><button className="text-negative text-xs font-bold">Cancel</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right Column: Order Entry */}
                <div className="col-span-3 row-span-6 flex flex-col">
                    <div className="bg-panel-dark border border-[#28392f] rounded-lg p-4 flex flex-col gap-4">
                        <div className="flex items-center border-b border-[#28392f]">
                            <button className="flex-1 pb-3 text-sm font-bold border-b-2 border-primary text-white">Limit</button>
                            <button className="flex-1 pb-3 text-sm font-medium text-[#9db9a8] border-b-2 border-transparent">Market</button>
                        </div>
                        <div className="flex bg-[#28392f] rounded-lg p-1">
                            <button className="flex-1 py-1.5 text-sm font-bold bg-positive/20 text-positive rounded">Buy</button>
                            <button className="flex-1 py-1.5 text-sm font-bold text-[#9db9a8]">Sell</button>
                        </div>
                        <div>
                            <label className="text-xs text-[#9db9a8] mb-1 block" htmlFor="price">Price</label>
                            <div className="relative">
                                <input className="w-full bg-[#28392f] border border-transparent focus:border-primary focus:ring-0 rounded-md text-white placeholder:text-[#9db9a8] pr-12" id="price" type="text" defaultValue="35.72" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#9db9a8]">USDC</span>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-[#9db9a8] mb-1 block" htmlFor="amount">Amount</label>
                            <div className="relative">
                                <input className="w-full bg-[#28392f] border border-transparent focus:border-primary focus:ring-0 rounded-md text-white placeholder:text-[#9db9a8] pr-12" id="amount" placeholder="0.00" type="text" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#9db9a8]">REC</span>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2">
                            <button className="flex-1 text-xs bg-[#28392f] rounded h-7">25%</button>
                            <button className="flex-1 text-xs bg-[#28392f] rounded h-7">50%</button>
                            <button className="flex-1 text-xs bg-[#28392f] rounded h-7">75%</button>
                            <button className="flex-1 text-xs bg-[#28392f] rounded h-7">100%</button>
                        </div>
                        <div className="border-t border-[#28392f] pt-4 flex flex-col gap-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-[#9db9a8]">Total</span>
                                <span className="text-white">0.00 USDC</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#9db9a8]">Fee</span>
                                <span className="text-white">0.00 USDC</span>
                            </div>
                        </div>
                        <button className="w-full h-11 bg-positive text-background-dark font-bold rounded-lg">Place Buy Order</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
