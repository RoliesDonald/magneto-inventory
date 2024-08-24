import { CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function FormHeader({ title, btnTitle }) {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center justify-between py-1 px-1 pl-4 border dark:border-slate-300/30 border-slate-600/40 text-slate-500 dark:text-slate-300 rounded-xl shadow-md">
        <h2 className="text-lg font-medium">{title}</h2>
        <button
          onClick={() => router.back()}
          className="flex bg-redbm-400 text-slate-50 rounded-lg space-x-2 px-3 py-2"
        >
          <CircleX />
          <span>
            <h2>{btnTitle}</h2>
          </span>
        </button>
      </div>
    </div>
  );
}
