"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  MessagesSquare,
  ChevronLeft,
  Menu,
} from "lucide-react";

const SidebarMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    {
      label: "Dashboard",
      short: "D",
      href: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      label: "Projeler",
      short: "P",
      href: "/dashboard/projects",
      icon: <FolderKanban size={20} />,
    },
    {
      label: "Görevler",
      short: "G",
      href: "/dashboard/tasks",
      icon: <CheckSquare size={20} />,
    },
    {
      label: "Mesajlar",
      short: "M",
      href: "/dashboard/message",
      icon: <MessagesSquare size={20} />,
    },
  ];

  return (
    <aside
      className={`bg-indigo-700 text-white transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-16"
      } flex flex-col min-h-screen`}
    >
      {/* Menü Toggle Butonu */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-4 focus:outline-none hover:bg-indigo-600"
        aria-label="Toggle Menu"
      >
        {sidebarOpen ? (
          <ChevronLeft className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Menü Öğeleri */}
      <nav className="flex-1 mt-4">
        <ul className="flex flex-col gap-2 px-3 text-white">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors duration-200
                    ${isActive ? "bg-indigo-600" : "hover:bg-indigo-500"}`}
                >
                  {item.icon}
                  {sidebarOpen && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarMenu;
