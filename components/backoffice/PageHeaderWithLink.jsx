"use client";
import React from "react";
import PageTitleHeading from "@/components/backoffice/PageTitleHeading";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

export default function PageHeaderWithLink({
  headingTitle,
  onClick,
  linkTitle,
  href,
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between rounded-xl border dark:border-slate-300/30 border-slate-600/40 text-slate-500 dark:text-slate-300 ">
      <PageTitleHeading title={headingTitle} />
      <div className="flex flex-col sm:flex-row  items-center justify-center space-x-2 mr-1 ">
        <SearchBar title="search" />
        <button
          onClick={() => router.push(href)}
          className="w-full sm:w-auto dark:text-slate-200 space-x-2 text-slate-700 bg-amber-500 hover:bg-amber-200/90  font-medium rounded-r-lg mx-1 my-1 text-md px-3 py-2 text-center flex items-center dark:hover:bg-[#050708]/30 duration-0 transition hover:duration-300 p-[0.57rem] text-sm dark:placeholder-gray-400 rounded-md"
        >
          <CirclePlus className="mr-2" />
          <span className="sm:text-start">{linkTitle}</span>
        </button>
      </div>
    </div>
  );
}
