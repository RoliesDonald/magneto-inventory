"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/ark-seeklogo.svg";
import {
  Contact,
  HousePlus,
  LayoutGrid,
  LucideBookOpen,
  MessagesSquare,
  Settings,
  Store,
  Users2,
} from "lucide-react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function SideBar({ showSideBar, setShowSideBar }) {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  // Menu link ---------------------------------------------
  const sideBarLinks = [
    { title: "Dashboard", icon: LayoutGrid, href: "/dashboard" },
    {
      title: "Item Catalogue",
      icon: LucideBookOpen,
      href: "/dashboard/(catalogue)", // Only use "#" if there's a submenu
      submenu: [
        { title: "Categories", href: "/dashboard/categories" },
        { title: "Product", href: "/dashboard/products" },
        { title: "Voucher", href: "/dashboard/voucher" },
      ],
    },
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers", // Only use "#" if there's a submenu
      submenu: [
        { title: "Corporate", href: "/dashboard/corporate" },
        { title: "Personal", href: "/dashboard/personal" },
      ],
    },
    { title: "Employee", icon: Contact, href: "/dashboard/employee" },
    {
      title: "Merchant",
      icon: HousePlus,
      href: "/dashboard/merchants",
      submenu: [
        { title: "Member", href: "/dashboard/member" },
        { title: "Non Member", href: "/dashboard/non-member" },
      ],
    },
    { title: "Store", icon: Store, href: "/dashboard/store" },
    { title: "Chat", icon: MessagesSquare, href: "/dashboard/chat" },
    { title: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleClick = () => {
    setShowSideBar(false);
  };

  return (
    <div
      className={
        showSideBar
          ? " dark:bg-indigo-950 bg-neutral-300 space-y-6 w-52 h-full text-slate-600 dark:text-slate-300 font-semibold pt-4 fixed left-0 top-0 z-50 rounded-tr-3xl rounded-br-3xl shadow-[0_1px_6px_1px_rgba(0,0,0,0.3)] overflow-y-auto"
          : "hidden space-y-6 w-52 h-full text-slate-600 dark:text-slate-300 font-semibold pt-4 fixed left-0 top-0 z-50 rounded-tr-3xl rounded-br-3xl shadow-[0_1px_6px_1px_rgba(0,0,0,0.3)] overflow-y-auto"
      }
    >
      <Link href="#" className="mb-6 flex items-center p-2 space-x-3">
        <Image alt="logo" src={logo} className="w-10" />
        <span>ARKCorp</span>
      </Link>
      <div className="w-full space-y-8 flex flex-col mt-14">
        {sideBarLinks.map((item, index) => {
          const Icon = item.icon;
          const isSubmenuOpen = openMenu === index;

          return (
            <div key={index}>
              <Link
                href={item.href}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault(); // Prevent link navigation if there is a submenu
                    toggleMenu(index);
                  } else {
                    handleClick;
                  }
                }}
                className={
                  item.href === pathName || isSubmenuOpen
                    ? "flex items-center space-x-4  p-3 border-l-4 border-blue-500 bg-indigo-400/20 mr-3 rounded-r-full cursor-pointer mb-5"
                    : "flex items-center space-x-4 px-6 py-2 cursor-pointer"
                }
              >
                <Icon
                  className={
                    item.href === pathName || isSubmenuOpen
                      ? "text-blue-500"
                      : "text-slate-500"
                  }
                />
                <span>{item.title}</span>
                {item.submenu &&
                  (isSubmenuOpen ? (
                    <ChevronDown className="ml-auto text-slate-500" />
                  ) : (
                    <ChevronRight className="ml-auto text-slate-500" />
                  ))}
              </Link>
              {item.submenu && isSubmenuOpen && (
                <div className="pl-8 space-y-4 ease-in-out">
                  {item.submenu.map((subitem, subindex) => (
                    <Link
                      key={subindex}
                      href={subitem.href}
                      className={
                        subitem.href === pathName
                          ? "flex items-center space-y-8 p-3 bg-indigo-400/20 rounded-l-full"
                          : "flex items-center space-x-4 space-y-8 px-6 py-1"
                      }
                    >
                      <span>{subitem.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
