import { Sidebar } from "@/components/Sidebar";
import { Search, FilterX, MoreVertical, Plus, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default function SupplyChain() {
    return (
        <div className="flex min-h-screen bg-background-dark text-white font-sans">
            <Sidebar />
            <main className="flex-1 p-8">
                <div className="max-w-7xl mx-auto">
                    {/* PageHeading */}
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Supply Chain Agreements</h1>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#111814] text-sm font-bold leading-normal tracking-[0.015em] gap-2 hover:bg-primary/90 transition-colors">
                            <Plus className="size-4" />
                            <span className="truncate">Create New Agreement</span>
                        </button>
                    </div>
                    {/* Search and Filter Bar */}
                    <div className="space-y-4 mb-6">
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* SearchBar */}
                            <div className="flex-1">
                                <label className="flex flex-col min-w-40 h-12 w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div className="text-[#9db9a8] flex border-none bg-[#28392f] items-center justify-center pl-4 rounded-l-lg border-r-0">
                                            <Search className="size-5" />
                                        </div>
                                        <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#28392f] h-full placeholder:text-[#9db9a8] px-4 text-base font-normal leading-normal" placeholder="Search by Agreement Name or ID" />
                                    </div>
                                </label>
                            </div>
                            {/* Chips / Filters */}
                            <div className="flex items-center gap-3">
                                <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#28392f] px-4">
                                    <p className="text-white text-sm font-medium leading-normal">Status</p>
                                    <ChevronDown className="size-4 text-white" />
                                </button>
                                <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#28392f] px-4">
                                    <p className="text-white text-sm font-medium leading-normal">Role</p>
                                    <ChevronDown className="size-4 text-white" />
                                </button>
                                <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#28392f] px-4">
                                    <p className="text-white text-sm font-medium leading-normal">Expiry Date</p>
                                    <ChevronDown className="size-4 text-white" />
                                </button>
                                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 text-white/80 gap-2 text-sm font-medium leading-normal tracking-[0.015em] min-w-0 px-4 hover:text-white transition-colors">
                                    <FilterX className="size-5" />
                                    <span className="truncate">Clear Filters</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Data Table */}
                    <div className="bg-[#111814] border border-white/10 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-[#28392f]/50 border-b border-white/10">
                                    <tr className="text-[#9db9a8] uppercase text-xs tracking-wider">
                                        <th className="p-4 font-medium">Agreement Name / ID</th>
                                        <th className="p-4 font-medium">Supplier</th>
                                        <th className="p-4 font-medium">Buyer</th>
                                        <th className="p-4 font-medium">Status</th>
                                        <th className="p-4 font-medium">Start Date</th>
                                        <th className="p-4 font-medium">Expiry Date</th>
                                        <th className="p-4 font-medium text-right">Total Value</th>
                                        <th className="p-4 font-medium"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-white">
                                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-medium">Alpha Solar PPA<span className="block text-xs text-[#9db9a8] font-normal">#AGR-84321</span></td>
                                        <td className="p-4">SunPower Corp</td>
                                        <td className="p-4">Gridwise Energy</td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                                                <span className="size-1.5 rounded-full bg-green-500"></span> Active
                                            </span>
                                        </td>
                                        <td className="p-4">2023-01-15</td>
                                        <td className="p-4">2028-01-14</td>
                                        <td className="p-4 text-right">$5,200,000</td>
                                        <td className="p-4 text-right">
                                            <button className="p-2 text-[#9db9a8] hover:text-white transition-colors"><MoreVertical className="size-5" /></button>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-medium">WindFarm Delta<span className="block text-xs text-[#9db9a8] font-normal">#AGR-75698</span></td>
                                        <td className="p-4">Vestas Wind Systems</td>
                                        <td className="p-4">Quantum Utilities</td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-400">
                                                <span className="size-1.5 rounded-full bg-yellow-500"></span> Pending
                                            </span>
                                        </td>
                                        <td className="p-4">2024-08-01</td>
                                        <td className="p-4">2034-07-31</td>
                                        <td className="p-4 text-right">$12,500,000</td>
                                        <td className="p-4 text-right">
                                            <button className="p-2 text-[#9db9a8] hover:text-white transition-colors"><MoreVertical className="size-5" /></button>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-medium">HydroElec Gamma<span className="block text-xs text-[#9db9a8] font-normal">#AGR-61234</span></td>
                                        <td className="p-4">HydroQuébec</td>
                                        <td className="p-4">NextGen Power</td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                                                <span className="size-1.5 rounded-full bg-green-500"></span> Active
                                            </span>
                                        </td>
                                        <td className="p-4">2022-06-20</td>
                                        <td className="p-4">2027-06-19</td>
                                        <td className="p-4 text-right">$8,750,000</td>
                                        <td className="p-4 text-right">
                                            <button className="p-2 text-[#9db9a8] hover:text-white transition-colors"><MoreVertical className="size-5" /></button>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-medium">BioMass Beta<span className="block text-xs text-[#9db9a8] font-normal">#AGR-54879</span></td>
                                        <td className="p-4">Drax Group</td>
                                        <td className="p-4">EcoPower Inc.</td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 px-2 py-1 text-xs font-medium text-red-400">
                                                <span className="size-1.5 rounded-full bg-red-500"></span> Expired
                                            </span>
                                        </td>
                                        <td className="p-4">2019-03-10</td>
                                        <td className="p-4">2024-03-09</td>
                                        <td className="p-4 text-right">$3,100,000</td>
                                        <td className="p-4 text-right">
                                            <button className="p-2 text-[#9db9a8] hover:text-white transition-colors"><MoreVertical className="size-5" /></button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-4 font-medium">Geothermal Zeta<span className="block text-xs text-[#9db9a8] font-normal">#AGR-49912</span></td>
                                        <td className="p-4">Ormat Technologies</td>
                                        <td className="p-4">Quantum Utilities</td>
                                        <td className="p-4">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                                                <span className="size-1.5 rounded-full bg-green-500"></span> Active
                                            </span>
                                        </td>
                                        <td className="p-4">2023-11-01</td>
                                        <td className="p-4">2033-10-31</td>
                                        <td className="p-4 text-right">$25,000,000</td>
                                        <td className="p-4 text-right">
                                            <button className="p-2 text-[#9db9a8] hover:text-white transition-colors"><MoreVertical className="size-5" /></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination */}
                        <div className="flex items-center justify-between p-4 border-t border-white/10 text-sm text-[#9db9a8]">
                            <div>Showing <span className="font-bold text-white">1</span> to <span className="font-bold text-white">5</span> of <span className="font-bold text-white">27</span> results</div>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center justify-center h-8 w-8 rounded-lg hover:bg-[#28392f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                                    <ChevronLeft className="size-4" />
                                </button>
                                <button className="flex items-center justify-center h-8 w-8 rounded-lg bg-[#28392f] text-white font-bold">1</button>
                                <button className="flex items-center justify-center h-8 w-8 rounded-lg hover:bg-[#28392f] transition-colors">2</button>
                                <button className="flex items-center justify-center h-8 w-8 rounded-lg hover:bg-[#28392f] transition-colors">3</button>
                                <span className="px-2">...</span>
                                <button className="flex items-center justify-center h-8 w-8 rounded-lg hover:bg-[#28392f] transition-colors">6</button>
                                <button className="flex items-center justify-center h-8 w-8 rounded-lg hover:bg-[#28392f] transition-colors">
                                    <ChevronRight className="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
