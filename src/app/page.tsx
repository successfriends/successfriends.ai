"use client";

import {
  LayoutDashboard,
  Target,
  Repeat,
  Bot,
  User,
  LogOut,
  Square,
} from "lucide-react";

function SidebarLink({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 font-medium
        ${active ? "bg-white shadow-sm rounded-xl" : "hover:bg-white hover:shadow-sm"}`}
    >
      <div className="bg-white rounded-lg p-2 shadow-md ring-1 ring-gray-100">
        {icon}
      </div>
      <span className="text-xs text-gray-800 font-semibold">{label}</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-64 bg-[#f8f9fa] shadow-md flex flex-col p-4">
        <div className="text-xl font-bold text-orange-500 mb-4 flex items-center gap-2">
          <Square className="w-6 h-6 text-orange-500" />
          SuccessFriends.ai
        </div>
        <hr className="border-t border-gray-200 mb-4" />

        <nav className="flex flex-col gap-2">
          <SidebarLink
            icon={<LayoutDashboard className="w-4 h-4" />}
            label="Dashboard"
            active
          />
          <SidebarLink icon={<Target className="w-4 h-4" />} label="Goals" />
          <SidebarLink icon={<Repeat className="w-4 h-4" />} label="Habits" />
          <SidebarLink icon={<Bot className="w-4 h-4" />} label="Coach" />

          <div className="mt-6 mb-1 px-3 text-xs font-bold text-gray-400 uppercase tracking-wide">
            Account
          </div>

          <SidebarLink icon={<User className="w-4 h-4" />} label="Profile" />
          <SidebarLink icon={<LogOut className="w-4 h-4" />} label="Sign Out" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Top Navbar */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome, Thambi!</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
            Sign Out
          </button>
        </header>

        {/* Main area */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Let’s start building your dream life 🛠️
          </h2>
          <p className="text-gray-600">
            Select a life domain, set a goal, and we’ll turn it into actions and habits!
          </p>
        </section>
      </main>
    </>
  );
}
