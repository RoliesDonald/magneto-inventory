import Image from "next/image";
import React from "react";
import { PiBellRingingLight, PiLightbulb } from "react-icons/pi";
import { RiMenuLine, RiUser3Line } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { TbUserEdit, TbLogout } from "react-icons/tb";
import ThemeSwitchers from "../ui/themeSwitcher";

export default function NavBar({ setShowSideBar, showSideBar }) {
  return (
    <div
      className="flex justify-between items-center dark:bg-indigo-950/85 bg-slate-300/95 text-slate-700 dark:text-slate-200 h-16 px-8 py-8 m-4 fixed rounded-2xl top-0 w-full z-0 pr-[3rem]"
      style={{ width: "-webkit-fill-available" }}
    >
      {/* leftside */}
      <div className="flex">
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          className="relative inline-flex items-center p-2 text-sm font-medium text-center  rounded-xl hover:text-blue-600 focus:ring-1 focus:outline-none   hover:scale-110 duration-200"
        >
          <RiMenuLine fontSize="1.2rem" />
        </button>
      </div>
      {/* rightside */}
      <div className="flex space-x-4">
        <ThemeSwitchers />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative inline-flex items-center p-2 text-sm font-medium text-center rounded-xl hover:text-blue-600 focus:ring-1 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800 hover:scale-110 duration-200"
            >
              <PiBellRingingLight fontSize={"1.2rem"} />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-5 h-5 m-1 font-bold text-slate-200 bg-red-500 border-2 border-slate-100 rounded-full -top-0 -end-2 ">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 space-y-2 md:w-64 sm:w-56 lg:w-80 h-56">
            <DropdownMenuLabel className="text-slate-500 text-lg ">
              Notifications
            </DropdownMenuLabel>
            <div className="h-48 px-3 pb-3 overflow-y-auto">
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-4 w-auto">
                <Image
                  alt="user_img"
                  height={200}
                  width={200}
                  className="w-8 h-8 rounded-full"
                  src="/profile.jpg"
                />
                <div className="flex flex-col text-ellipsis overflow-hidden space-y-2 ">
                  <p className=" truncate text-slate-600">
                    Shell Engine Oil out of stock
                  </p>
                  <div className="flex items-center space-x-3">
                    <p className="truncate px-3 py-1 bg-red-500 text-slate-100 text-xs font-bold rounded-full">
                      Stock Out
                    </p>
                    <p className="truncate text-slate-600 font-bold">
                      2 Jan 2025
                    </p>
                    <p className="truncate text-slate-500 font-semibold">
                      16:40
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-4 w-auto">
                <Image
                  alt="user_img"
                  height={200}
                  width={200}
                  className="w-8 h-8 rounded-full"
                  src="/profile.jpg"
                />
                <div className="flex flex-col text-ellipsis overflow-hidden space-y-2 ">
                  <p className=" truncate text-slate-600">
                    Shell Engine Oil out of stock
                  </p>
                  <div className="flex items-center space-x-3">
                    <p className="truncate px-3 py-1 bg-red-500 text-slate-100 text-xs font-bold rounded-full">
                      Stock Out
                    </p>
                    <p className="truncate text-slate-600 font-bold">
                      2 Jan 2025
                    </p>
                    <p className="truncate text-slate-500 font-semibold">
                      16:40
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-4 w-auto">
                <Image
                  alt="user_img"
                  height={200}
                  width={200}
                  className="w-8 h-8 rounded-full"
                  src="/profile.jpg"
                />
                <div className="flex flex-col text-ellipsis overflow-hidden space-y-2 ">
                  <p className=" truncate text-slate-600">
                    Shell Engine Oil out of stock
                  </p>
                  <div className="flex items-center space-x-3">
                    <p className="truncate px-3 py-1 bg-red-500 text-slate-100 text-xs font-bold rounded-full">
                      Stock Out
                    </p>
                    <p className="truncate text-slate-600 font-bold">
                      2 Jan 2025
                    </p>
                    <p className="truncate text-slate-500 font-semibold">
                      16:40
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-4 w-auto">
                <Image
                  alt="user_img"
                  height={200}
                  width={200}
                  className="w-8 h-8 rounded-full"
                  src="/profile.jpg"
                />
                <div className="flex flex-col text-ellipsis overflow-hidden space-y-2 ">
                  <p className=" truncate text-slate-600">
                    Shell Engine Oil out of stock
                  </p>
                  <div className="flex items-center space-x-3">
                    <p className="truncate px-3 py-1 bg-red-500 text-slate-100 text-xs font-bold rounded-full">
                      Stock Out
                    </p>
                    <p className="truncate text-slate-600 font-bold">
                      2 Jan 2025
                    </p>
                    <p className="truncate text-slate-500 font-semibold">
                      16:40
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-4 w-auto">
                <Image
                  alt="user_img"
                  height={200}
                  width={200}
                  className="w-8 h-8 rounded-full"
                  src="/profile.jpg"
                />
                <div className="flex flex-col text-ellipsis overflow-hidden space-y-2 ">
                  <p className=" truncate text-slate-600">
                    Shell Engine Oil out of stock
                  </p>
                  <div className="flex items-center space-x-3">
                    <p className="truncate px-3 py-1 bg-red-500 text-slate-100 text-xs font-bold rounded-full">
                      Stock Out
                    </p>
                    <p className="truncate text-slate-600 font-bold">
                      2 Jan 2025
                    </p>
                    <p className="truncate text-slate-500 font-semibold">
                      16:40
                    </p>
                  </div>
                </div>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white rounded-xl  focus:ring-1 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-800"
            >
              <Image
                alt="user_img"
                height={200}
                width={200}
                className="w-8 h-8 rounded-full"
                src="/profile.jpg"
              ></Image>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2 space-y-2 w-40" align="end">
            <DropdownMenuLabel className="content-end">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="items-start space-x-3">
              <TbUserEdit />
              <span>Edit Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="items-start space-x-3">
              <TbLogout />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
