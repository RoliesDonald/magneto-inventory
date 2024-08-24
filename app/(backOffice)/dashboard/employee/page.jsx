import PageTitleHeading from "@/components/backoffice/PageTitleHeading";
import { CirclePlus, FileDown, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import PageHeaderWithLink from "@/components/backoffice/PageHeaderWithLink";
export default function Employee() {
  return (
    <div className="space-y-3">
      {/* Header */}
      <PageHeaderWithLink
        headingTitle="Employee"
        linkTitle="New Employee"
        href="/dashboard/employee/new"
      />
      {/* Table */}
      <div className="flex-col border space-x-2 justify-end px-1 py-1 dark:border-slate-300/30 border-slate-600/40 text-slate-500 dark:text-indigo-950 shadow-md bg-tealbm-100/30 rounded-xl divide-y-2 divide-teal-100/30">
        <div className="flex items-center space-x-2 justify-end pb-2">
          {/* Export */}
          <button className="flex space-x-3 bg-tealbm-300 duration-0 transition hover:duration-200 hover:bg-amberbm-500/70 py-2 px-2 rounded-lg">
            <FileDown />
            <span>Export</span>
          </button>
          {/* Edit */}
          <button className="flex space-x-3 bg-tealbm-300 duration-0 transition hover:duration-200 hover:bg-greenbm-500/70 py-2 px-2 rounded-lg">
            <Trash2 />
            <span>Edit</span>
          </button>
          {/* Delete */}
          <button className="flex space-x-3 bg-tealbm-300 duration-0 transition hover:duration-200 hover:bg-redbm-500/70 py-2 px-2 rounded-lg">
            <Trash2 />
            <span>Delete</span>
          </button>
        </div>

        <div>
          <h2>table</h2>
        </div>
      </div>
    </div>
  );
}
