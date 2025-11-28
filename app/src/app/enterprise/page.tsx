import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { DashboardStats } from "@/components/DashboardStats";
import { QuickActions } from "@/components/QuickActions";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full bg-background-dark text-white font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-8">
          <div className="flex flex-col gap-6 max-w-7xl mx-auto">
            {/* PageHeading */}
            <div className="flex flex-wrap justify-between gap-3">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Dashboard</p>
            </div>

            <DashboardStats />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 flex flex-col gap-4 rounded-xl p-6 border border-white/10 bg-white/5">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-300 text-base font-medium leading-normal">Energy Market Price vs. Volume</p>
                  <div className="flex items-baseline gap-4">
                    <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">34.56 USDC</p>
                    <div className="flex gap-1">
                      <p className="text-gray-400 text-base font-normal leading-normal">Last 30 Days</p>
                      <p className="text-green-400 text-base font-medium leading-normal">+15.3%</p>
                    </div>
                  </div>
                </div>
                {/* Placeholder for Chart - using SVG from original HTML for now */}
                <div className="flex min-h-[250px] flex-1 flex-col justify-end gap-4 py-4">
                  <svg fill="none" height="100%" preserveAspectRatio="none" viewBox="0 0 472 150" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z" fill="url(#paint0_linear_chart)"></path>
                    <path d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25" stroke="#13ec6d" strokeLinecap="round" strokeWidth="3"></path>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_chart" x1="236" x2="236" y1="1" y2="149">
                        <stop stopColor="#13ec6d" stopOpacity="0.3"></stop>
                        <stop offset="1" stopColor="#13ec6d" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">W1</p>
                    <p className="text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">W2</p>
                    <p className="text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">W3</p>
                    <p className="text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">W4</p>
                  </div>
                </div>
              </div>

              <QuickActions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
