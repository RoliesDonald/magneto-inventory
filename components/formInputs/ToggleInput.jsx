import React from "react";
import { useWatch } from "react-hook-form";

export default function ToggleInput({
  label,
  name,
  activeTitle,
  notActive,
  register,
  control,
  className = "flex sm:col-span-2 justify-between w-1/2 ",
}) {
  // Watch the current value of the checkbox
  const isChecked = useWatch({ control, name });

  return (
    <div className={`${className}`}>
      <div>
        <h2 className="flex mr-3 text-sm font-medium leading-6 text-slate-500 dark:text-slate-300 ">
          {label}
        </h2>
      </div>
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input {...register(name)} type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
          <span className="ml-3 text-sm font-medium text-slate-500 dark:text-slate-300">
            {isChecked ? activeTitle : notActive}
          </span>
        </label>
      </div>
    </div>
  );
}
