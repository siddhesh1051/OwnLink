"use client";

import { GiftIcon, Home, LucideX, Search, User2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const Menu = [
    {
      title: "Dashboard",
      icon: Home,
      link: "/dashboard",
    },
    {
      title: "Explore",
      icon: Search,
      link: "/explore",
    },
    {
      title: "Rewards",
      icon: GiftIcon,
      link: "/rewards",
    },
    {
      title: "My Account",
      icon: User2Icon,
      link: "/account",
    },
  ];

  const router = useRouter();
  const path = usePathname();

  const toggleSidenav = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div
      className={`${
        isSidebarOpen ? "left-0" : "left-[-150%]"
      } duration-250 z-50 fixed md:relative md:left-0 `}
    >
      <div className="flex h-full min-h-[calc(100vh-24px)] md:w-60 w-screen flex-col items-center justify-between bg-charcoal py-8 px-4 relative">
        <div
          onClick={toggleSidenav}
          className="absolute md:hidden right-4 top-4 p-2 bg-void rounded-full cursor-pointer"
        >
          <LucideX size={24} />
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-10 w-full">
            <div
              className="flex gap-4 justify-center items-center cursor-pointer"
              onClick={() => router.push("/dashboard")}
            >
              <img
                src="https://github.com/shadcn.png"
                width={32}
                height={32}
                alt="logo"
              />
              <h1 className="flex text-snow text-2xl font-bold">Ownlink</h1>
            </div>
            <div className="flex flex-col gap-4 w-full items-center justify-start">
              {Menu.map((item, index) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className={`flex gap-2 items-start justify-start w-full hover:bg-graphite ${
                    path === item.link ? "bg-graphite" : "bg-transparent"
                  } rounded-full px-8 py-3 cursor-pointer hover:text-snow transition-all duration-200 ease-in-out`}
                >
                  <item.icon size={24} />
                  <span className="text-snow font-bold">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-9 rounded-full bg-primary flex justify-center items-center font-bold text-md text-textPrimary">
          Logout
        </div>
      </div>
    </div>
  );
}
